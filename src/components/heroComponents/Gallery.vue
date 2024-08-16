<template>
    <!-- 11rem for each -->
    <!-- Gallery of ProjectManager and Employess-->
    <div class="max-w-[70rem] min-w-[10rem] w-[80vw] h-[32rem] flex items-center justify-center flex-col space-y-10">

        <!-- Project Manager -->
        <div
            class="scroll-container-1 relative flex items-stretch justify-start space-x-4 w-[76vw] h-[11rem] px-6 pb-0 pt-9 overflow-x-scroll overflow-y-clip backdrop-blur-lg rounded-xl">
            <!-- Heading -->
            <strong class="text-md tracking-wide absolute top-1 left-2 text-white">Projet <span
                    class="text-yellow-300">Ma</span>nagers
            </strong>
            <!-- Card -->
            <div v-for="manager in projectManagers" :key="manager._id"
                class="relative min-w-[105px] w-[105px] h-[125px] flex justify-center pt-2 bg-cover bg-center group rounded-md overflow-hidden focus:scale-110  hover:scale-110 duration-300  "
                :style="{ backgroundImage: `url(http://localhost:3000/public/img/users/${manager.photo})` }"
                tabindex="0">
                <!-- Gradient -->
                <div class="absolute inset-0 h-full w-full bg-[#352d2d]/35 rounded-md duration-300"></div>
                <!-- Deatils -->
                <div
                    class="flex flex-col items-center justify-start pt-4 space-y-1 text-center opacity-0 group-hover:opacity-100 z-10">
                    <!-- Task Button -->

                    <button @click="newTaskTo(manager._id)"
                        class="px-2 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans tracking-wide text-white font-bold text-xs rounded-lg cursor-pointer">
                        Give Task
                    </button>
                    <button @click=viewTasksOf(manager._id)
                        class="px-2 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-bold text-xs rounded-lg cursor-pointer">
                        View Tasks
                    </button>


                </div>


                <p
                    class="uppercase text-[#ffea29] group-hover:text-white z-10 absolute left-2 bottom-1 font-bold text-xs tracking-wide duration-300">
                    {{ manager.name }}
                </p>

            </div>
        </div>

        <!-- Employees -->
        <div
            class="scroll-container-1 relative flex items-stretch justify-start space-x-4 w-[76vw] h-[11rem] px-6 pb-0 pt-9 overflow-x-scroll overflow-y-clip backdrop-blur-lg rounded-xl">
            <!-- Heading -->
            <strong class="text-md tracking-wide absolute top-1 left-2 text-white">Em<span
                    class="text-yellow-300">pl</span>oyees</strong>
            <!-- Card -->
            <div v-for="employee in employees" :key="employee._id"
                class="relative min-w-[105px] w-[105px] h-[125px] flex justify-center pt-2 bg-cover bg-center group rounded-md overflow-hidden focus:scale-110  hover:scale-110 duration-300  cursor-pointer "
                :style="{ backgroundImage: `url(http://localhost:3000/public/img/users/${employee.photo})` }"
                tabindex="0">
                <!-- Gradient -->
                <div class="absolute inset-0 h-full w-full bg-[#352d2d]/35 rounded-md duration-300"></div>
                <!-- Deatils -->
                <div
                    class="flex flex-col items-center justify-start pt-4 space-y-1 text-center opacity-0 group-hover:opacity-100 z-10">
                    <!-- Task Button -->

                    <button @click="newTaskTo(employee._id)"
                        class="px-2 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans tracking-wide text-white font-bold text-xs rounded-lg cursor-pointer">
                        Give Task
                    </button>
                    <button @click=viewTasksOf(employee._id)
                        class="px-2 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-bold text-xs rounded-lg cursor-pointer">
                        View Tasks
                    </button>


                </div>


                <p
                    class="uppercase text-[#ffea29] group-hover:text-white z-10 absolute left-2 bottom-1 font-bold text-xs tracking-wide duration-300">
                    {{ employee.name }}
                </p>

            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: ["employees", "projectManagers", "newTask"],
    methods: {
        newTaskTo(id) {
            this.$emit('newTaskTo', id)
        },
        viewTasksOf(id) {
            this.$emit('viewTasksOf', id)
        }
    }
}
</script>

<style scoped>
/* Custom Scrollbar Styling for the first container */
.scroll-container-1::-webkit-scrollbar {
    height: 5px;
    /* Scrollbar height */
}

.scroll-container-1::-webkit-scrollbar-thumb {
    background-color: #ffcc00;
    /* Scrollbar thumb color */
    border-radius: 10px;
    /* Rounded corners */
}

.scroll-container-1::-webkit-scrollbar-track {
    background-color: #111;
    /* Scrollbar track color */
}

/* Custom Scrollbar Styling for the second container */
.scroll-container-2::-webkit-scrollbar {
    height: 5px;
}

.scroll-container-2::-webkit-scrollbar-thumb {
    background-color: #ffcc00;
    border-radius: 10px;
}

.scroll-container-2::-webkit-scrollbar-track {
    background-color: #111;
}
</style>
