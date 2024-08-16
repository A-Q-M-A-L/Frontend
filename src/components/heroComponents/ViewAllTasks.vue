<template>
    <div class="absolute bg-[#000000]/65 inset-0 h-full w-full z-50 flex justify-center items-center">
      <div class="backdrop-blur-xl shadow-2xl p-6 max-w-6xl w-[70rem] h-[80vh] rounded-xl">
        <!-- Table for Listing All Tasks -->
        <div class="flex justify-between items-center mt-3 mb-12">
          <h1 class="text-2xl font-bold text-white">View All Tasks</h1>
          <button @click="close" class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-6 rounded">
            Close
          </button>
        </div>
  
        <div class="h-full overflow-y-auto">
          <table class="table-auto w-full border-separate border-spacing-2">
            <thead>
              <tr class="backdrop-blur-xl text-white shadow-[0_4px_6px_0_rgba(0,0,0,0.5)]">
                <th class="px-4 py-2 border-b border-y-orange-400">Title</th>
                <th class="px-4 py-2 border-b border-y-orange-400">Description</th>
                <th class="px-4 py-2 border-b border-y-orange-400">Assigned To</th>
                <th class="px-4 py-2 border-b border-y-orange-400">Status</th>
                <th class="px-4 py-2 border-b border-y-orange-400">Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in Tasks" :key="task._id" class="shadow-[0_4px_6px_0_rgba(0,0,0,0.5)] text-white">
                <td class="border border-transparent px-4 py-2 max-w-xs">{{ task.title }}</td>
                <td class="border border-transparent px-4 py-2 truncate max-w-xs">{{ task.description }}</td>
                <td class="border border-transparent px-4 py-2">{{ task.assignedTo.name.toUpperCase() }}</td>
                <td class="border border-transparent px-4 py-2">{{ task.status }}</td>
                <td class="border border-transparent px-4 py-2">{{ new Date(task.dueDate).toLocaleDateString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  


<script>
export default {
    computed: {
        Tasks() {
            return this.$store.getters["task/AllTasks"]
        }
    },
    mounted() {
        this.getAllTasks()
   
    },
    methods: {
        getAllTasks() {
            this.$store.dispatch("task/getAllTasks")
        },
        close() {
            this.$emit("close")
        },
        
    }
}
</script>