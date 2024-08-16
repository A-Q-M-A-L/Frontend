<template>
    <div class="absolute bg-[#000000]/65 inset-0 h-full w-full z-50 flex justify-center items-center">


        <div class="backdrop-blur-xl shadow-2xl p-6 max-w-6xl w-[70rem] h-[95vh]  rounded-xl ">
            <h2 class="text-xl font-bold mb-4 text-white">New Task</h2>
            <form @submit.prevent="submitTask">
                <div class="mb-4">
                    <label for="title" class="block font-semibold mb-2 text-white">Title</label>
                    <input type="text" id="title" v-model="title"
                        class="w-full px-3 py-2 bg-transparent backdrop-blur-lg focus:bg-cyan-900/40  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-white font-serif shadow-2xl focus:shadow-blue-500/30">
                </div>
                <div class="mb-4">
                    <label for="description" class="block font-semibold mb-2 text-white">Description</label>
                    <textarea id="description" v-model="description"
                        class="w-full px-3 py-2 bg-transparent backdrop-blur-lg focus:bg-cyan-900/40  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-white font-serif shadow-2xl focus:shadow-blue-500/30"></textarea>

                </div>
                <div class="mb-4">
                    <label for="due_date" class="block font-semibold mb-2 text-white">Due Date</label>
                    <input type="date" id="due_date" v-model="dueDate"
                        class="w-full px-3 py-2 bg-transparent backdrop-blur-lg focus:bg-white  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-white font-serif shadow-2xl focus:shadow-blue-500/30">

                </div>
                <!-- assign to -->
                <div class="mb-4 w-md">
                    <label for="assign_to" class="block font-semibold mb-2 text-white">Assign
                        To</label>

                    <gallery :employees="employees" :projectManagers="projectManagers" :outlineId="outlineId"
                        @userId="userId"></gallery>

                </div>

                <div class="flex space-x-4 justify-end">

                    <!-- Close button -->
                    <button type="button"
                        class="hover:bg-red-800 duration-300 outline outline-offset-1 outline-1 outline-red-700 bg-transparent font-bold py-2 px-6 rounded text-white my-2 "
                        @click="CloseTaskTab">Cancle</button>
                    <!-- Create Button -->
                    <!-- <button type="submit" class="bg-blue-500 hover:-translate-y-2 duration-300 shadow-blue-700 hover:shadow-2xl shadow hover:bg-blue-700 font-bold py-2 px-4 rounded text-white my-2">Create</button> -->
                    <button type="submit"
                        class="bg-blue-500 hover:-translate-y-2 duration-300 shadow-blue-700 hover:shadow-2xl shadow hover:bg-blue-700 font-bold py-2 px-5 rounded text-white my-2 outline  outline-1 outline-blue-700">Create
                        Task</button>
                </div>
            </form>

        </div>
    </div>
</template>


<script>
import Gallery from '../subComponents/Gallery.vue';
export default {
    props: ['employees', 'projectManagers', "outlineId"],
    data() {
        return {
            title: '',
            description: '',
            assignedTo: '',
            dueDate: '',
        }
    },
    components: { Gallery },
    methods: {
        CloseTaskTab() {
            this.$emit('closeTaskTab');
        },
        submitTask() {
            if (this.assignedTo === '') {
                this.settingId()
            }

            this.$store.dispatch('task/createNewTask', {
                title: this.title,
                description: this.description,
                assignedTo: this.assignedTo,
                dueDate: this.dueDate,
            });
            this.CloseTaskTab();
        },
        userId(id) {
            this.assignedTo = id
        },
        settingId() {
            this.assignedTo = this.outlineId
        }
    }


}


</script>