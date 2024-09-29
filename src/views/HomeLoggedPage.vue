<!-- views/HomeLoggedPage.vue -->
<template>
    <NavbarLoggedIn/>
  
    <div class="w-full">
      <LandingPage2 />
      <FooterComp />
    </div>
  </template>
  
  <script>
  import NavbarLoggedIn from '../components/NavbarLoggedIn.vue';
  import LandingPage2 from "@/components/LandingPage2.vue";
  import FooterComp from "@/components/FooterComp.vue";
  
  
  export default {
    components: {
      NavbarLoggedIn,
      LandingPage2,
      FooterComp,
    },
 
  };
  </script>
  