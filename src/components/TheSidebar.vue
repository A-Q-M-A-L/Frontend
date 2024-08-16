<template>

    <div
        class="w-52 backdrop-blur-md drop-shadow-[0_10px_30px_rgba(100,65,142,0.2)] hover:drop-shadow-[0_10px_30px_rgba(100,65,142,0.4)] duration-200 h-[100vh] flex justify-center">
        <div class="flex pt-6 flex-col space-y-12">

            <span class="flex justify-center mt-10">
                <img :src="userImage" alt=""
                    class="rounded-full w-[130px] h-[125px] shadow-lg duration-300 cursor-pointer">
            </span>
            <!-- details -->
            <div class="flex flex-col justify-center space-y-24 items-stretch">
                <!-- Name -->
                <span class=" font-sans text-white tracking-tight text-xl font-bold text-center uppercase">
                    <span class="text-yellow-500 font-bold text-xl">Wellcome</span>&nbsp;, {{ user.name }}
                </span>

                <!-- Settings -->

                <div class="flex flex-col">
                    <span
                        class=" font-sans text-white font-medium hover:bg-yellow-500 hover:translate-x-4
                duration-300 tracking-widest shadow shadow-yellow-600 rounded py-2 px-7 cursor-pointer">Dashboard</span>
                    <span
                        class=" font-sans text-white font-medium hover:bg-yellow-500 hover:translate-x-4
                duration-300 tracking-widest shadow shadow-yellow-600 rounded py-2 px-7 cursor-pointer">Settings</span>
                    <span class=" font-sans text-white font-medium hover:bg-yellow-500 hover:translate-x-4
                duration-300 tracking-widest shadow shadow-yellow-600 rounded py-2 px-7 cursor-pointer"
                        @click="logout">Log Out</span>
                </div>


            </div>

        </div>

    </div>

</template>

<script>
export default {

    computed: {
        user() {
            return this.$store.getters['user/getUser']
        },
        userImage() {

            // http://localhost:3000/public/img/users/user-66b089779712d75f29397113-1723117462048.jpeg
            return `http://localhost:3000/public/img/users/${this.user.photo}`;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.push('/')
        }
    }

}
</script>