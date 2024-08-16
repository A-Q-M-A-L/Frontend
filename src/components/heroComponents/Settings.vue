<template>

    <div class="absolute top-0 h-[100vh] w-[100vw] bg-gray-600/10 flex items-center justify-center z-30">

        <div class="h-[60vh] w-[80vw] flex items-center justify-center">

            <div class="flex justify-center relative z-30 shadow-inner rounded-xl backdrop-blur-2xl p-6">

                <SettingsSidebar />
                <SettingsHero />


            </div>

        </div>

    </div>

</template>


<script>
import SettingsHero from "../subComponents/SettingsHero.vue"
import SettingsSidebar from "../subComponents/SettingsSidebar.vue"

export default {
    components: { SettingsHero, SettingsSidebar }
}

</script>