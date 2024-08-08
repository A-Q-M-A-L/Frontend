<template>
  <!-- Loading Spinner -->
  <div v-if="isLoading" class="h-[100vh] w-[100vw] flex items-center justify-center bg-gray-900 bg-opacity-50 absolute z-20">
    <div class="flex items-center justify-center w-[60vw] h-[35vh] bg-[#121212] relative rounded-xl">
      <p class="absolute top-2 left-3 text-white tracking-widest font-semibold text-lg">Authanticating...</p>
      <base-spinner ></base-spinner>
    </div>
  </div>

  <!-- Main -->
  <div class="h-[100vh] w-[100vw] bg-[#242424] flex justify-center items-center">
    <div class="max-w-xl md:max-w-6xl mx-auto h-[80vh] bg-[#121212] flex justify-center items-center rounded-md">
      <div
        class="relative w-full h-full flex justify-around items-center transition-transform duration-700 ease-in-out">
        <!-- Image Section -->
        <div class="relative h-full w-[36vw] login-image rounded-tl-md rounded-bl-md">
          <!-- Black gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-[#121212] to-[#1e1e1e] opacity-75 rounded-tl-md rounded-bl-md">
          </div>
          <!-- Content goes here -->
          <div class="relative z-10 p-6 mt-16">
            <h1 class="text-2xl text-white font-bold mb-16 text-center tracking-wide">Welcome to Task Management System
            </h1>
            <p class="text-white font-medium text-pretty text-center mb-16">Manage your tasks efficiently and
              effectively with our
              state-of-the-art task management system. Track progress, collaborate with your team, and achieve your
              goals.</p>
            <div class="mt-6 space-y-4">
              <div class="text-white">
                <h2 class="text-xl font-semibold">Features:</h2>
                <ul class="list-disc list-inside pl-4">
                  <li>Task creation and assignment</li>
                  <li>Progress tracking</li>
                  <li>Real-time collaboration</li>
                  <li>Detailed reporting</li>
                </ul>
              </div>
              <div class="text-white">
                <h2 class="text-xl font-semibold">Benefits:</h2>
                <ul class="list-disc list-inside pl-4">
                  <li>Increase productivity</li>
                  <li>Streamline workflow</li>
                  <li>Enhance team collaboration</li>
                  <li>Achieve project milestones</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Container -->
        <div class="p-5 w-[36vw] h-full flex flex-col justify-center items-center">
          <!-- Login Form -->

          <div class="w-full h-full flex flex-col justify-center">
            <form @submit.prevent="login">
              <h1 class="text-2xl text-white font-bold mb-4 text-center tracking-wide">Login</h1>
              <div class="relative mb-4 mt-10">
                <img src="../../assets/user-icon.png" class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4"
                  alt="">
                <input type="email" placeholder="Email" v-model="email" id="email"
                  class="w-full pl-10 p-2 bg-[#1e1e1e] text-white outline-none border-none rounded-md" />
              </div>
              <div class="relative mb-7">
                <img src="../../assets/password-icon.png"
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" alt="">
                <input type="password" placeholder="Password" id="password" v-model="password"
                  class="w-full pl-10 p-2 bg-[#1e1e1e] text-white outline-none border-none rounded-md" @keydown.enter="login"/>
              </div>
              <button type="button"
                class="w-full p-2 bg-[#1e1e1e] text-white outline-none border-none rounded-md hover:bg-[#181717]"
                @click="login" @keypress.enter="login">
                Login
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseSpinner from '../ui/BaseSpinner/baseSpinner.vue';



export default {
  components: { baseSpinner },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
    }
  },
  methods: {
    async login() {
      this.isLoading = true;
      try {
        const success = await this.$store.dispatch('user/login', { email: this.email, password: this.password });
        if (success) {
          // Redirect to the Dashboard route by name
          this.$router.replace({ name: 'dashboard' });
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.error("Error: " + error.message);
        alert("Error: " + error.message);
      }
      this.isLoading = false;

    }
  }
};
</script>

<style scoped>
.login-image {
  background-image: url('../../assets/login.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
