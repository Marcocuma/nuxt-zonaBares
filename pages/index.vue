<template>
  <div class="container">
    <hero
      @cambiarBanner="cambiarBanner"
    >
      <banner slot="header" v-if="showBanner"/>
      <slogan slot="header" v-if="!showBanner"/>
    </hero>
    <div class="container">
      <section class="section">
        <div class="columns is-multiline">
          <barCard v-for="(bar,index) in restaurants"
            :key="index"
            :index="index"
            :name="bar.name"
            :description="bar.description"
            :category="bar.category"
            :slug="bar.slug"
            :likes="bar.likes"
            :image="bar.image"
            @onLikeButton="(sumLikes(bar))"
            class="restaurant-card"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import barCard from "~/components/barCard"
import hero from "~/components/hero"
import banner from "~/components/banner"
import slogan from "~/components/slogan"
import api from "~/services/api"
import { db } from '~/plugins/firebase'
export default {
  created() {
    const data = db.collection('restaurants').get()
    data
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const restaurant = {
          id: doc.id,
          ...doc.data()
        }
        this.restaurants.push(restaurant)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  },
  components: {
    barCard,
    hero,
    banner,
    slogan
  },
  /*async asyncData() {
    try {
      const { data } = await api.getRestaurants()
      return { restaurants: data }
    } catch (error) {
      error({ statusCode: 404, message: 'Restaurant not found' })
    }
  },*/
  /*async created() {
    const response = await api.getRestaurants()
    this.restaurants = response.data
  },*/
  data() {
    return {
      likes: 0,
      showBanner: true,
      restaurants: []
    }
  },
  methods: {
    async sumLikes(restaurant){
      const payload = {
        id: restaurant.id,
        data: {
          likes: restaurant.likes + 1
        }
      }
      const response = await api.putSumRestaurantLikes(payload)
      if(response.status == 200) {
        restaurant.likes++
      }
    },
    cambiarBanner(){
      this.showBanner = !this.showBanner
    }
  }
}
</script>

<style>
.restaurant-card{
  margin:10px 10px;
  max-width: 300px;
}
</style>
