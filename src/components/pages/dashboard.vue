<template>
    <div class=" relative gradient-background h-screen w-full">
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <!-- Desktop -->
        <div class="hidden md:flex justify-center relative z-20">
            <TheSidebar class=""></TheSidebar>
            <TheHero></TheHero>
        </div>
        <!-- Mobile -->
        <mobileDashboard></mobileDashboard>
    </div>

</template>


<script setup>

import TheSidebar from '../TheSidebar.vue'
import TheHero from '../TheHero.vue'
import mobileDashboard from '../subComponents/mobileDashboard.vue';




</script>

<style>
.gradient-background {
    /* background: linear-gradient(260deg,#690b3f,#418ea0,#ff4b0f,#35226a,#b2d6fd);*/
    background: #0f0c29;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #25254d, #624894, #2d2669);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: 800% 800%;
    animation: gradient-animation 10s ease-in infinite;
}




@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>
