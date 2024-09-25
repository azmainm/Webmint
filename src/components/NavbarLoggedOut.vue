<!-- NavbarLoggedOut.vue -->
<template>
  <nav class="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-white to-pink-100 text-gray-800 mr-0">
    <img src="@/assets/logo.png" alt="Logo" class="h-10" />
    <div class="flex space-x-4">
      <a @click="handleOpenLogin" class="hover:text-blue-800 hover:line-through cursor-pointer text-gray-800 font-medium">Login</a>
      <a @click="handleOpenSignup" class="hover:text-blue-800 hover:line-through cursor-pointer text-gray-800 font-medium">Sign Up</a>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleOpenLogin() {
      console.log('open-login event emitted');
      this.$emit('open-login');
    },
    handleOpenSignup() {
      console.log('open-signup event emitted');
      this.$emit('open-signup');
    },
  },
};
</script>
