<!-- src/views/HomePage.vue -->
<template>
    <div>
      <NavbarLoggedIn v-if="isLoggedIn" />
      <NavbarLoggedOut v-else />
      <LandingPage />
      <FooterComp />
    </div>
  </template>
  
  <script>
  import NavbarLoggedIn from "@/components/NavbarLoggedIn.vue";
  import NavbarLoggedOut from "@/components/NavbarLoggedOut.vue";
  import LandingPage from "@/components/LandingPage.vue";
  import FooterComp from "@/components/FooterComp.vue";
  
  export default {
    components: {
      NavbarLoggedIn,
      NavbarLoggedOut,
      LandingPage,
      FooterComp,
    },
    computed: {
      isLoggedIn() {
        return localStorage.getItem("user"); 
      }
    }
  };
  </script>
  