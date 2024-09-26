<template>
  <div id="app">
    <!-- Navbar changes based on whether the user is logged in or not -->
    <!-- <NavbarLoggedOut
      v-if="!isLoggedIn"
      @open-login="showLoginModal"
      @open-signup="showSignupModal"
    />
    <NavbarLoggedIn v-else /> -->

    <!-- Modals for Login and Signup -->
    <LoginModal
      v-if="showLogin"
      @closeModal="showLogin = false"
      @login-success="handleLoginSuccess"
      @open-signup="showSignupModal"
    />
    <SignupModal
      v-if="showSignup"
      @closeModal="showSignup = false"
      @open-login="showLoginModal"
    />

    <!-- Main content rendered by router -->
    <router-view />
  </div>
</template>

<script>
// import NavbarLoggedOut from './components/NavbarLoggedOut.vue';
// import NavbarLoggedIn from './components/NavbarLoggedIn.vue';
import LoginModal from './components/LoginModal.vue';
import SignupModal from './components/SignupModal.vue';

export default {
  name: 'App',
  components: {
    // NavbarLoggedOut,
    // NavbarLoggedIn,
    LoginModal,
    SignupModal,
  },
  data() {
    return {
      isLoggedIn: false,   // State for logged-in status
      showLogin: false,    // State for Login modal visibility
      showSignup: false,   // State for Signup modal visibility
    };
  },
  methods: {
    // Show login modal
    showLoginModal() {
      this.showLogin = true;
      this.showSignup = false;
    },
    // Show signup modal
    showSignupModal() {
      this.showSignup = true;
      this.showLogin = false;
    },
    // Handle login success
    handleLoginSuccess() {
      this.isLoggedIn = true;
      this.showLogin = false;
      this.$router.push('/transferpage');  // Navigate to homepage
    },
  },
};
</script>
