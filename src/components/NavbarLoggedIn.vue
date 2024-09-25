<!-- src/components/NavbarLoggedIn.vue -->
<template>
  <nav class="w-full flex justify-between items-center px-6 py-4 bg-white text-gray-800">
    <img src="@/assets/logo.png" alt="Logo" class="h-10" />
    <div class="flex space-x-4">
      <router-link to="/" class="hover:text-pink-500">Home</router-link>
      <router-link to="/transferpage" class="hover:text-pink-500">Transfer</router-link>
      <button @click="logOut" class="hover:text-pink-500">Log Out</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$emit('log-out'); // Emit log out event to App.vue
      this.$router.push('/'); // Redirect to Home after logging out
    }
  }
};
</script>
