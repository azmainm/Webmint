<!-- src/components/NavbarLoggedOut.vue -->
<template>
    <nav class="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <img src="@/assets/logo.png" alt="Logo" class="h-10" />
      <div class="flex space-x-6">
        <router-link to="/login" class="hover:text-pink-500">Login</router-link>
        <router-link to="/signup" class="hover:text-pink-500">Sign Up</router-link>
      </div>
    </nav>
  </template>
  


  