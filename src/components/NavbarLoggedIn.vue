<!-- src/components/NavbarLoggedIn.vue -->
<template>
  <nav class="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-white to-pink-100 text-gray-800">
    <img src="@/assets/logo.png" alt="Logo" class="h-10" />
    <div class="flex space-x-4">
      <router-link to="/homeloggedin" class="hover:text-blue-700 hover:line-through cursor-pointer text-gray-800 font-medium">Home</router-link>
      <router-link to="/transferpage" class="hover:text-blue-700 hover:line-through cursor-pointer text-gray-800 font-medium">Transfer</router-link>
      <button @click="logOut" class="hover:text-blue-700 hover:line-through cursor-pointer text-gray-800 font-medium">Log Out</button>
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
