<template>
    <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 table-auto cursor-pointer">
      <thead class="backdrop-blur-3xl">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Title</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Description</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Due Date</th>
          <th class="px-6 py-3 text-left text-xs font-medium ttext-whiteuppercase tracking-wider">Created Date</th>
        </tr>
      </thead>
      <tbody class="backdrop-blur-xl divide-y divide-gray-200">
        <tr v-for="task in tasks" :key="task._id">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{{ task.title }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ task.description }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ task.status }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ formatDate(task.dueDate) }}</td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ formatDate(task.createdDate) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>
  
  
  <script>
export default {
  computed: {
    tasks() {
      return this.$store.getters['task/getTaskForUser']; // Ensure this matches your store module
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return '';
      return new Date(date).toLocaleDateString();
    }
  },
  created() {
    this.$store.dispatch('task/getTaskForUser');
  }
};
</script>

  <style scoped>
  /* Add custom styles here if needed */
  </style>
  