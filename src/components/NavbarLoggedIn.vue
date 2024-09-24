<!-- src/components/NavbarLoggedIn.vue -->
<template>
    <nav class="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <img src="@/assets/logo.png" alt="Logo" class="h-2" />
      <div class="flex space-x-6">
        <router-link to="/" class="hover:text-pink-500">Home</router-link>
        <router-link to="/transfer" class="hover:text-pink-500">Transfer</router-link>
        <button @click="logOut" class="hover:text-pink-500">Log Out</button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      logOut() {
        // Clear user session logic here
        this.$router.push('/');
      }
    }
  };
  </script>
  