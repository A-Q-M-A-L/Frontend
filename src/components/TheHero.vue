<template>
    <!-- #121212 -->
    <div class="flex-1 h-[100vh] flex items-center justify-center relative">

        <div class="relative bg-[url('./../assets/hero.jpg')] bg-center bg-cover h-[95vh] w-[80vw] rounded-lg">
            <div class="absolute inset-0 bg-black opacity-50 z-10 rounded-lg"></div>
            <div class="relative z-20 h-[95vh] w-[80vw] text-white overflow-x-hidden overflow-y-auto">



                <div>
                    <nav>
                        <ul class="flex justify-end items-center p-6 space-x-4">
                           
                                <li :class="getNavClass('portfolio')" @click="setActive('portfolio')">
                                    Dashboard
                                </li>
                            
                           
                                <li :class="getNavClass('skills')" @click="setActive('skills')">Settings</li>
                           
                            
                                <li @click="logout"
                                    class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">
                                    Log Out
                                </li>
                            
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
                                        {{ this.projectManagers.length }}
                                    </div>
                                </div>


                                <!-- Total Employees -->
                                <div class="flex items-center flex-col space-y-2">
                                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                                        Employee
                                    </span>
                                    <div
                                        class="w-[50px] h-[50px] font-mono bg-yellow-500 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                                        {{ this.employees.length }}
                                    </div>
                                </div>


                                <!-- Total Tasks -->

                                <div class="flex items-center flex-col space-y-2">
                                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                                        Tasks
                                    </span>
                                    <div
                                        class="w-[50px] h-[50px] font-mono bg-blue-500 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                                        ok
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Gallery of ProjectManager and Employess-->
                    <div class="flex flex-col space-y-6 p-6">
                        <strong class="text-2xl tracking-wide">Profiles <span class="text-yellow-300">Ov</span>erview</strong>
                        <!-- Gallery Of project Manager -->
                        <div class="flex relative flex-1 flex-wrap  items-center mt-5 backdrop-blur-3xl rounded-lg  p-6 gap-7">
                            <strong class="text-lg tracking-wide absolute top-3 left-5">Projet <span class="text-yellow-300">Ma</span>nagers</strong>
                            <!-- Card Container -->
                            <div v-for="manager in projectManagers" :key="manager.id"
                                class="relative group overflow-hidden rounded-md cursor-pointer mt-8">
                                <img src="../assets/dummy.jpg"
                                    class="h-[160px] w-[135px] rounded-md group-hover:scale-110 duration-300" alt="">
                                <p
                                    class="uppercase text-black group-hover:text-white z-10 absolute left-2 bottom-2 font-bold text-xs tracking-wider duration-300">
                                    Project Manager</p>

                                <div
                                    class="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-black/40 rounded-md duration-300">

                                    <div class="relative flex flex-col mt-6">
                                        <p class="text-sm text-center font-bold ">Name: {{ manager.name }}</p>
                                        <span class="text-center mt-3">
                                        <button
                                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">Give Task</button>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            
                        </div>


                        <!-- Gallery Of Employess -->
                        <div class="flex relative flex-1 flex-wrap  items-center mt-5 backdrop-blur-3xl rounded-lg  p-6 gap-7">
                            <strong class="text-lg tracking-wide absolute top-3 left-5">Em<span class="text-yellow-300">pl</span>oyees</strong>
                            <!-- Card Container -->
                            <div v-for="employee in employees" :key="employee.id"
                                class="relative group overflow-hidden rounded-md cursor-pointer mt-8">
                                <img src="../assets/dummy.jpg"
                                    class="h-[160px] w-[135px] rounded-md group-hover:scale-110 duration-300" alt="">
                                <p
                                    class="uppercase text-black group-hover:text-white z-10 absolute left-2 bottom-2 font-bold text-xs tracking-wider duration-300">
                                    Employee</p>

                                <div
                                    class="opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full bg-black/40 rounded-md duration-300">

                                    <div class="relative flex flex-col mt-6">
                                        <p class="text-sm text-center font-bold ">Name: {{ employee.name }}</p>
                                        <span class="text-center mt-3">
                                        <button
                                            class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">Give Task</button>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            
                        </div>

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
            employees: [],
            projectManagers: [],
            admins: [],
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

        getAllUsers() {
            const allusers = this.$store.getters['user/getAllUsers']



            // console.log(allusers)
            console.log(this.employees)
            console.log(this.projectManagers)
            console.log(this.admins)

            allusers.forEach(user => {
                if (user.role === 'employee') {
                    this.employees.push(user)
                } else if (user.role === 'projectManager') {
                    this.projectManagers.push(user)
                } else if (user.role === 'admin') {
                    this.admins.push(user)
                }
            })

            console.log(this.employees)
            console.log(this.projectManagers)
            console.log(this.admins)

        }
    },
    created() {
        this.$store.dispatch('user/getAllUsers')
        this.getAllUsers
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
                'px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-medium text-white font-sans rounded-lg cursor-pointer',
                { 'bg-yellow-500': this.active === section },
            ];
        },
        logout() {
            this.$store.dispatch('user/logout')
            this.$router.replace('/')
        }
    }
}
</script>
