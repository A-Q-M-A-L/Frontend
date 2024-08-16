<template>

    <div
        class="w-52 backdrop-blur-md drop-shadow-[0_10px_30px_rgba(100,65,142,0.2)] hover:drop-shadow-[0_10px_30px_rgba(100,65,142,0.4)] duration-200 h-[60vh] flex justify-center">
        <div class="flex pt-6 flex-col space-y-12">

            <!-- <span class="flex justify-center mt-10">
                <img :src="userImage" alt=""
                    class="rounded-full w-[130px] h-[125px] shadow-lg duration-300 cursor-pointer">
            </span> -->
            <!-- details -->
            <div class="flex flex-col justify-center space-y-24 items-stretch">
                <!-- Name
                <span class=" font-sans text-white tracking-tight text-xl font-bold text-center uppercase">
                    <span class="text-yellow-500 font-bold text-xl">Wellcome</span>&nbsp;, {{ user.name }}
                </span> -->

                <!-- Settings -->

                <div class="flex flex-col">
                    <span
                        class=" font-sans text-white font-medium hover:bg-yellow-500 hover:translate-x-4
                duration-300 tracking-widest shadow shadow-yellow-600 rounded py-2 px-7 cursor-pointer">Me</span>
                    <span class=" font-sans text-white font-medium hover:bg-yellow-500 hover:translate-x-4
                duration-300 tracking-widest shadow shadow-yellow-600 rounded py-2 px-7 cursor-pointer">Users</span>
                    <span class=" font-sans text-white font-medium hover:bg-yellow-500 hover:translate-x-4
                duration-300 tracking-widest shadow shadow-yellow-600 rounded py-2 px-7 cursor-pointer"
                        >Tasks</span>
                    <span class=" font-sans text-white font-medium hover:bg-red-700 hover:-translate-x-4
                duration-300 tracking-widest shadow-inner shadow-red-700 rounded py-2 px-7 cursor-pointer mt-80 hover:shadow"
                      @click="exit">Exit</span>
                </div>


            </div>

        </div>

    </div>

</template>


<script>
export default {
    methods:{
        exit(){
           this.$emit('exit')
        }
    }
}
</script>