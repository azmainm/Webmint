<!-- src/components/LandingPage.vue -->
<template>
    <div>
    
      <!-- Section 1 -->
      <section class="h-screenflex flex-col justify-center items-center text-center bg-gradient-to-r from-gray-800 to-pink-900 text-white">
        <h1 class="text-5xl font-bold">Large Header Text</h1>
        <p class="mt-4 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="mt-8 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded">
          Initiate Transactions
        </button>
      </section>

  
      <!-- Section 2 -->
      <section class="flex items-center justify-between px-12 py-16 bg-gray-800 text-white">
        <div class="w-1/2" data-aos="fade-right">
          <h2 class="text-4xl font-bold text-green-700">Large Header Text</h2>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="w-1/2" data-aos="fade-left">
          <img src="@/assets/landing1.png" alt="Landing Image" class="w-full" />
        </div>
      </section>
  
      <!-- Section 3 -->
      <section class="flex items-center justify-between px-12 py-16 bg-gray-900 text-white">
        <div class="w-1/2" data-aos="fade-right">
          <img src="@/assets/landing2.png" alt="Landing Image" class="w-full" />
        </div>
        <div class="w-1/2" data-aos="fade-left">
          <h2 class="text-4xl font-bold">Large Header Text</h2>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  export default {
    mounted() {
      AOS.init(); 
    }
  };
  </script>
  