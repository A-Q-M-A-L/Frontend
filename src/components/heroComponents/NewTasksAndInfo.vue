<template>
    <div class="flex items-center justify-between p-6">
        <div class="flex items-center space-x-10">
            <!-- New Task Button -->
            <span>
                <button @click="NewTask"
                    class="px-3 py-2 bg-yellow-600 hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">
                    Create New Task
                </button>
            </span>

            <span>
                <button @click="ViewTasks"
                    class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-500 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">
                    View Tasks
                </button>
            </span>
        </div>
        <!-- Total ProjectManager And Employee And Task Info-->
        <div class="relative -z-10">
            <div class="flex items-center backdrop-blur-xl rounded-md p-4 w-80 space-x-5">
                <!-- Total Project Manager -->

                <div class="flex items-center flex-col space-y-2">
                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                        Project Manager
                    </span>
                    <div
                        class="w-[50px] h-[50px] font-mono shadow-inner shadow-yellow-400 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                        {{ this.projectManagers.length }}
                    </div>
                </div>

                <!-- Total Employees -->
                <div class="flex items-center flex-col space-y-2">
                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                        Employee
                    </span>
                    <div
                        class="w-[50px] h-[50px] font-mono shadow-inner shadow-yellow-400 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                        {{ this.employees.length }}
                    </div>
                </div>

                <!-- Total Tasks -->

                <div class="flex items-center flex-col space-y-2">
                    <span class="text-center font-bold text-sm tracking-wide max-w-32 leading-4">Total
                        Tasks
                    </span>
                    <div
                        class="w-[50px] h-[50px] font-mono shadow-inner shadow-yellow-400 rounded-full pt-[12px] text-center font-bold text-xl tracking-widest">
                        {{totalTask}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props: ['employees', 'projectManagers', "totalTask"],
    methods: {
        NewTask() {
            this.$emit('newTask')
        },
        ViewTasks() {
            this.$emit('viewTasks')
        }
    }
}

</script>