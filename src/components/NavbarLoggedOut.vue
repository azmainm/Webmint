<!-- src/components/NavbarLoggedOut.vue -->
<template>
  <nav class="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-white to-pink-100 text-gray-800 mr-0">
    <img src="@/assets/logo.png" alt="Logo" class="h-10" />
    <div class="flex space-x-4">
      <!-- Emit events when buttons are clicked -->
      <a @click="handleOpenLogin" class="hover:text-blue-800 hover:line-through cursor-pointer text-gray-800 font-medium">Login</a>
      <a @click="handleOpenSignup" class="hover:text-blue-800 hover:line-through cursor-pointer text-gray-800 font-medium">Sign Up</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarLoggedOut',
  methods: {
    handleOpenLogin() {
      this.$emit('open-login');  // Emit the open-login event
    },
    handleOpenSignup() {
      this.$emit('open-signup'); // Emit the open-signup event
    },
  },
};
</script>
