<template>
    <!-- #121212 -->
    <transition name="hero">
        <div class="flex-1 h-[100vh] flex items-center justify-center relative">
            <div
                class="relative shadow-inner shadow-white drop-shadow-[0_0px_0px_rgba(65,142,214,0.0)] hover:drop-shadow-[0_10px_30px_rgba(65,142,214,0.1)] duration-500 h-[95vh] w-[80vw] rounded-lg">
                <div class="absolute inset-0 z-10 rounded-lg"></div>
                <div ref="scrollableDiv"
                    class="relative z-20 h-[95vh] w-[80vw] text-white overflow-x-hidden overflow-y-auto ">
                    <div class="px-2">
                        <nav class="fixed w-[78vw] mt-3"
                            :class="isScroll ? 'backdrop-blur-sm shadow-neutral-300 shadow-inner rounded-2xl' : false">
                            <ul class="flex justify-end items-center p-6 space-x-4">
                                <li :class="getNavClass('portfolio')" @click="setActive('portfolio')">
                                    Dashboard
                                </li>

                                <li :class="getNavClass('skills')" @click="setActive('settings')">
                                    Settings
                                </li>

                                <li @click="logout"
                                    class="px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-sans text-white font-medium rounded-lg cursor-pointer">
                                    Log Out
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="flex flex-col mt-16 ml-12 max-w-2xl">
                        <h1 class="text-4xl font-bold">
                            Hello, <span class="uppercase">{{ user.name }}</span>
                        </h1>
                        <p class="mt-2 text-lg">{{ tagline }}</p>
                    </div>

                    <!-- User Tasks -->
                    <div class="flex flex-col mt-24 mb-7 mx-auto max-w-4xl backdrop-blur-md rounded-2xl">
                        <!-- Only for ProjectManager And Employee -->
                        <task-table v-if="role === 'projectManager' || role === 'employee'"></task-table>
                        <!-- Admin Dashboard -->
                        <!-- Create new task and view and info -->
                        <new-tasks-and-info v-if="role === 'projectManager' || role === 'admin'" @NewTask="NewTask"
                            :employees="employees" :projectManagers="projectManagers" @viewTasks="OpenTask"
                            :totalTask="totalTask"></new-tasks-and-info>

                        <teleport to='body'>
                            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <new-task v-if="newTask" @closeTaskTab="NewTask" :employees="employees"
                                    :projectManagers="projectManagers" :outlineId="outlineId"></new-task>
                            </transition>
                        </teleport>
                        <teleport to='body'>
                            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <ViewAllTasks v-if="viewTask" @close="OpenTask"></ViewAllTasks>
                            </transition>
                        </teleport>
                        <teleport to='body'>
                            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <view-user-tasks v-if="listTask" :userId="userId" @close="listTaskOf"></view-user-tasks>
                            </transition>
                        </teleport>
                        <teleport to='body'>
                            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                                <settings v-if="SETTINGS" @exit="exitSettings"></settings>
                            </transition>
                        </teleport>
                    </div>

                    <!-- Gallery -->
                    <gallery v-if="role === 'admin'" :projectManagers="projectManagers" :employees="employees"
                        @newTaskTo="NewTask" @viewTasksOf="listTaskOf"></gallery>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import TaskTable from "./task/TaskTable.vue";
import Gallery from "./heroComponents/Gallery.vue";
import NewTasksAndInfo from "./heroComponents/NewTasksAndInfo.vue";
import NewTask from "./heroComponents/NewTask.vue";
import ViewAllTasks from "./heroComponents/ViewAllTasks.vue";
import ViewUserTasks from "./subComponents/ViewUserTasks.vue";
import Settings from "./heroComponents/Settings.vue";


export default {
    components: { TaskTable, Gallery, NewTasksAndInfo, NewTask, ViewAllTasks, ViewUserTasks, Settings },
    data() {
        return {
            active: "portfolio",
            role: "",
            employees: [],
            projectManagers: [],
            admins: [],
            isScroll: false,
            newTask: false,
            outlineId: '',
            viewTask: false,
            userId: '',
            listTask: false,
            SETTINGS: false
        };
    },
    computed: {
        totalTask() {
            return this.$store.getters["task/AllTasks"].length;
        },
        user() {
            return this.$store.getters["user/getUser"];
        },
        tagline() {
            switch (this.user.role) {
                case "admin":
                    this.role = "admin";
                    return "Manage everything effortlessly with admin privileges!";
                case "projectManager":
                    this.role = "projectManager";
                    return "Oversee projects and manage teams efficiently!";
                case "employee":
                    this.role = "employee";
                    return "Track your tasks and stay productive!";
                default:
                    return "Welcome to the task management system!";
            }
        }
    },
    methods: {
        getAllTasks() {
            this.$store.dispatch("task/getAllTasks")
        },
        populateUsers() {
            const allusers = this.$store.getters["user/getAllUsers"];

            allusers.forEach((user) => {
                if (user.role === "employee") {
                    this.employees.push(user);
                } else if (user.role === "projectManager") {
                    this.projectManagers.push(user);
                } else if (user.role === "admin") {
                    this.admins.push(user);
                }
            });
        },
        logout() {
            this.$store.dispatch("user/logout");
            this.$router.push("/");
        },
        setActive(section) {
            this.active = section;
        },
        getNavClass(section) {
            this.SETTINGS = !this.SETTINGS
            return [
                "px-3 py-2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.1))] hover:bg-yellow-600 shadow-yellow-500 shadow-sm hover:shadow-xl duration-300 font-medium text-white font-sans rounded-lg cursor-pointer",
                { "bg-yellow-500": this.active === section },
            ];
        },
        handleScroll() {
            const scrollTop = this.$refs.scrollableDiv.scrollTop;
            this.isScroll = scrollTop > 0;
        },
        NewTask(id) {
            this.outlineId = id
            this.newTask = !this.newTask;
        },
        OpenTask() {
            this.viewTask = !this.viewTask;
        },
        listTaskOf(id) {
            this.userId = id
            this.listTask = !this.listTask;

        },
        exitSettings(){
            this.SETTINGS = !this.SETTINGS
        },
        beforeEnter(el) {
            // Ensure element is hidden before it enters
            el.style.opacity = 0;
        },
        enter(el, done) {
            // Apply transition effect for entering
            el.offsetHeight; // Trigger a reflow
            el.style.transition = 'opacity 0.5s ease';
            el.style.opacity = 1;
            done();
        },
        leave(el, done) {
            // Apply transition effect for leaving
            el.style.opacity = 0;
            done();
        }
    },
    async created() {
        await this.$store.dispatch("user/getAllUsers");
        this.populateUsers();
    },
    mounted() {
        this.$refs.scrollableDiv.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        this.$refs.scrollableDiv.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
/* Slide-in transition */
.hero-enter-active,
.hero-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.hero-enter,
.hero-leave-to {
    transform: translateX(100%);
    /* Start off-screen to the right */
    opacity: 0;
    /* Optional: fade effect */
}

.hero-leave-active {
    transform: translateX(-100%);
    /* End off-screen to the left */
}
</style>
