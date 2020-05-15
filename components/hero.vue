<template>
    <div>
        <section class="hero is-primary">
            <div class="hero-body">
                <button @click="$emit('cambiarBanner')" class="button is-info">Cambiar banner</button>
                <slot class="container" name="header">
                </slot>
            </div>
        </section>
    </div>
</template>
