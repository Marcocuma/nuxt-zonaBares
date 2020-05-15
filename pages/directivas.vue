<template>
    <div>
        <p>{{mensaje}}</p>
        <p v-show="false">EEEE</p>
        <p v-if="num >10">El de v-if</p>
        <ul>
            <li v-for="item in items" :key="item">{{item}} </li>
        </ul>
        <input v-model="name" type="text">
        {{name}}
        {{nombreReves}}
        <span tag="tag is-warning">{{error}}</span>
        <button v-on:click="saludo">Saluda</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            mensaje: "Hola",
            num:5,
            name:"",
            items: [1,2,3,4,5,6,7],
            error: ""
        }
    },
    methods:{
        saludo:function(){
            this.name="Saludando"
        }
    },
    computed: {
        nombreReves(){
            return this.name.split('').reverse().join('')
        }
    },
    watch: {
        name() {
            if(this.name.length > 5)
                this.error = "Nombre demasiado largo"
            else
                this.error = ""
        }
    }
}
</script>