<template>
    <div class=" relative bg-[url('./../assets/hero.jpg')] bg-no-repeat bg-cover bg-center h-screen w-full">
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div class="flex justify-center relative z-20">
            <TheSidebar></TheSidebar>
            <TheHero></TheHero>
        </div>
    </div>

</template>


<script setup>

import TheSidebar from '../TheSidebar.vue'

import TheHero from '../TheHero.vue'





</script>