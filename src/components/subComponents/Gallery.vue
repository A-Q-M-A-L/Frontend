<template>
    <!-- 11rem for each -->
    <!-- Gallery of ProjectManager and Employees-->
    <div class="max-w-[70rem] min-w-[10rem] w-[70rem] h-[22rem] flex items-center justify-center flex-col">

        <!-- Project Manager -->
        <div
            class="scroll-container-1 relative flex items-stretch justify-start space-x-4 w-[70rem] h-[11rem] px-6 pb-0 pt-9 overflow-x-scroll overflow-y-clip backdrop-blur-lg rounded-xl">
            <!-- Heading -->
            <strong class="text-md tracking-wide absolute top-1 left-2 text-white">Project <span
                    class="text-yellow-300">Ma</span>nagers
            </strong>
            <!-- Card -->
            <div v-for="manager in projectManagers" :key="manager._id" ref="managerCard" :class="[
                'relative min-w-[105px] w-[105px] h-[125px] flex justify-center pt-2 bg-cover bg-center group rounded-md overflow-hidden focus:scale-110  hover:scale-110 duration-300 outline outline-gray-400 outline-2 cursor-pointer focus:outline-yellow-500',
                manager._id === outlineId ? 'scale-110 focus focus:outline-yellow-500' : ''
            ]" :style="{ backgroundImage: `url(http://localhost:3000/public/img/users/${manager.photo})` }"
                tabindex="0" @click="userId(manager._id)">
                <!-- Details -->
                <div class="opacity-0 group-hover:opacity-100 duration-100 flex flex-col items-center justify-center">
                    <p class="text-white text-sm font-medium z-10 text-center">Name : {{ manager.name }}</p>
                    <p class="text-white text-xs font-medium z-10 text-center tracking-tight">Email : {{ manager.email
                        }}</p>
                </div>
                <div class="group-hover:opacity-100 absolute inset-0 h-full w-full bg-black/40 rounded-md duration-300">
                </div>
            </div>
        </div>

        <!-- Employees -->
        <div
            class="scroll-container-1 relative flex items-stretch justify-start space-x-4 w-[70rem] h-[11rem] px-6 pb-0 pt-9 overflow-x-scroll overflow-y-clip backdrop-blur-lg rounded-xl">
            <!-- Heading -->
            <strong class="text-md tracking-wide absolute top-1 left-2 text-white">Project <span
                    class="text-yellow-300">Ma</span>nagers
            </strong>
            <!-- Card -->
            <div v-for="employee in employees" :key="employee._id" ref="employeeCard" :class="[
                'relative min-w-[105px] w-[105px] h-[125px] flex justify-center pt-2 bg-cover bg-center group rounded-md overflow-hidden focus:scale-110  hover:scale-110 duration-300 outline outline-gray-400 outline-2 cursor-pointer focus:outline-yellow-500',
                employee._id === outlineId ? 'scale-110 focus focus:outline-yellow-500' : ''
            ]" :style="{ backgroundImage: `url(http://localhost:3000/public/img/users/${employee.photo})` }"
                tabindex="0" @click="userId(employee._id)">
                <!-- Details -->
                <div class="opacity-0 group-hover:opacity-100 duration-100 flex flex-col items-center justify-center">
                    <p class="text-white text-sm font-medium z-10 text-center">Name : {{ employee.name }}</p>
                    <p class="text-white text-xs font-medium z-10 text-center tracking-tight">Email : {{ employee.email
                        }}</p>
                </div>
                <div class="group-hover:opacity-100 absolute inset-0 h-full w-full bg-black/40 rounded-md duration-300">
                </div>
            </div>
        </div>
    </div>
</template>




<!-- 
relative min-w-[105px] w-[105px] h-[125px] flex justify-center pt-2 bg-cover bg-center group rounded-md overflow-hidden focus:scale-110  hover:scale-110 duration-300 outline outline-gray-400 outline-2 cursor-pointer focus:outline-yellow-500 -->

<script>
export default {
    props: ["employees", "projectManagers", "outlineId"],
    mounted() {
        // Automatically focus the project manager card if the outlineId matches
        this.projectManagers.forEach((manager, index) => {
            if (manager._id === this.outlineId) {
                this.$refs.managerCard[index].focus();
            }
        });

        // Automatically focus the employee card if the outlineId matches
        this.employees.forEach((employee, index) => {
            if (employee._id === this.outlineId) {
                this.$refs.employeeCard[index].focus();
            }
        });
    },
    methods:{
        userId(id){
           this.$emit('userId', id)
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
