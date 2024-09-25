<!--views/HomePage.vue-->
<template>
  <div class="w-full">
    <LandingPage />
    <FooterComp />

    <!-- Modal components -->
    <!-- <LoginModal v-if="showLoginModal" @closeModal="closeLoginModal" @openSignup="openSignupModal" />
    <SignupModal v-if="showSignupModal" @closeModal="closeSignupModal" @openLogin="openLoginModal" /> -->
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage.vue";
import FooterComp from "@/components/FooterComp.vue";
// import LoginModal from "@/components/LoginModal.vue";
// import SignupModal from "@/components/SignupModal.vue";

export default {
  components: {
    LandingPage,
    FooterComp,
    // LoginModal,
    // SignupModal,
  },
  // data() {
  //   return {
  //     showLoginModal: false,
  //     showSignupModal: false,
  //   };
  // },
  // methods: {
  //   openLoginModal() {
  //     this.showLoginModal = true;
  //     this.showSignupModal = false;
  //   },
  //   openSignupModal() {
  //     this.showSignupModal = true;
  //     this.showLoginModal = false;
  //   },
  //   closeLoginModal() {
  //     this.showLoginModal = false;
  //   },
  //   closeSignupModal() {
  //     this.showSignupModal = false;
  //   },
  // },
};
</script>
