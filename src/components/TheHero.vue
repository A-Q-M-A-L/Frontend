<template>
    <!-- #121212 -->
    <div class="flex-1 h-[100vh] flex items-center justify-center relative">

        <div class="relative bg-[url('./../assets/hero.jpg')] bg-center bg-cover h-[95vh] w-[80vw] rounded-lg">
            <div class="absolute inset-0 bg-black opacity-50 z-10 rounded-lg"></div>
            <div class="relative z-20 h-[95vh] w-[80vw] text-white overflow-x-hidden overflow-y-auto">



                <div>
                    <nav>
                        <ul class="flex justify-end items-center p-6 space-x-4">
                            <router-link to="/portfolio">
                                <li :class="getNavClass('portfolio')" @click="setActive('portfolio')">
                                    Dashboard
                                </li>
                            </router-link>
                            <router-link to="/myskills">
                                <li :class="getNavClass('skills')" @click="setActive('skills')">Settings</li>
                            </router-link>
                            <router-link>
                                <li @click="logout"
                                    class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">
                                    Log Out
                                </li>
                            </router-link>
                        </ul>
                    </nav>
                </div>


                <div class="flex flex-col mt-0 ml-12 max-w-2xl">
                    <h1 class="text-4xl font-bold">Hello, <span class="uppercase">{{ user.name }}</span></h1>
                    <p class="mt-2 text-lg">{{ tagline }}</p>
                </div>


                <!-- User Tasks -->
                <div class="flex flex-col mt-10 mx-auto max-w-4xl h-[60vh]">
                    <!-- Only  for ProjectManager And Employee -->
                    <task-table v-if="role === 'projectManager' || role === 'employee'"></task-table>
                    <!-- Admin Dashboard -->
                    <!-- Create new task and view and info -->
                    <div class="flex items-center justify-between p-6">
                        <div class="flex items-center space-x-10">
                            <!-- New Task Button -->
                            <span>
                                <button
                                    class="px-3 py-2 bg-yellow-600 hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">Create
                                    New Task</button>
                            </span>

                            <span>
                                <button
                                    class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">View
                                    Tasks</button>
                            </span>
                        </div>
                        <!-- Total ProjectManager And Employee And Task Info-->
                        <div>
                            <div class="flex items-center backdrop-blur-xl rounded-md p-4 w-80 space-x-5">

                                <!-- Total Project Manager -->

                                <div class="flex items-center flex-col space-y-2">
                                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                                        Project Manager
                                    </span>
                                    <div
                                        class="w-[50px] h-[50px] font-mono bg-green-500 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                                        5
                                    </div>
                                </div>


                                <!-- Total Employees -->
                                <div class="flex items-center flex-col space-y-2">
                                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                                        Employee
                                    </span>
                                    <div
                                        class="w-[50px] h-[50px] font-mono bg-yellow-500 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                                        34
                                    </div>
                                </div>


                                <!-- Total Tasks -->

                                <div class="flex items-center flex-col space-y-2">
                                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                                        Tasks
                                    </span>
                                    <div
                                        class="w-[50px] h-[50px] font-mono bg-blue-500 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                                        20
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Gallery of ProjectManager and Employess-->
                    <div class="flex flex-col space-y-6 p-6">
                        <!-- Gallery Of project Manager -->
                        <div class="flex">
                            <!-- Card Container -->
                            <div class="relative group overflow-hidden rounded-md">
                                <img src="../assets/dummy.jpg" class="h-[160px] w-[135px] rounded-md group-hover:scale-110 duration-300"
                                    alt="">
                                <div
                                    class="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-black/30 rounded-md duration-300">
                                    <div class="relative flex flex-col  justify-start px-1 py-3 w-2">
                                        <p class="text-sm">Name: {{ user.name }}</p>
                                        <p class="text-sm">Email: {{ user.email }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <!-- Gallery Of Employess -->
                        <div></div>

                    </div>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TaskTable from './task/TaskTable.vue';

export default {
    components: { TaskTable },
    data() {
        return {
            active: 'portfolio',
            role: '',
        };
    },
    computed: {
        user() {
            return this.$store.getters['user/getUser']
        },
        tagline() {
            switch (this.user.role) {
                case 'admin':
                    this.role = 'admin'
                    return 'Manage everything effortlessly with admin privileges!';
                case 'projectManager':
                    this.role = 'projectManager'
                    return 'Oversee projects and manage teams efficiently!';
                case 'employee':
                    this.role = 'employee'
                    return 'Track your tasks and stay productive!';
                default:
                    return 'Welcome to the task management system!';
            }
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.push('/')
        },
        setActive(section) {
            this.active = section;
        },
        getNavClass(section) {
            return [
                'px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer',
                { 'bg-yellow-600': this.active === section },
            ];
        },
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.replace('/')
        }
    }
}
</script>


