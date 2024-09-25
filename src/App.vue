<!--App.vue-->
<template>
  <div id="app">
    <NavbarLoggedIn v-if="isLoggedIn" @log-out="handleLogout" />
    <NavbarLoggedOut v-else @open-login="showLoginModal" @open-signup="showSignupModal" />

    <!-- Modals -->
    <LoginModal
      v-if="showLogin"
      @login-success="handleLogin"
      @openSignup="showSignupModal"
      @closeModal="showLogin = false"
    />
    <SignupModal
      v-if="showSignup"
      @signup-success="handleSignup"
      @openLogin="showLoginModal"
      @closeModal="showSignup = false"
    />

    <!-- Main content -->
    <router-view />
  </div>
</template>

<script>
import NavbarLoggedOut from './components/NavbarLoggedOut.vue';
import NavbarLoggedIn from './components/NavbarLoggedIn.vue';
import LoginModal from './components/LoginModal.vue';
import SignupModal from './components/SignupModal.vue';

export default {
  name: 'App',
  components: {
    NavbarLoggedOut,
    NavbarLoggedIn,
    LoginModal,
    SignupModal,
  },
  data() {
    return {
      isLoggedIn: false, // User login state
      showLogin: false,  // Controls login modal visibility
      showSignup: false, // Controls signup modal visibility
    };
  },
  methods: {
    showLoginModal() {
      this.showLogin = true;
      this.showSignup = false;
    },
    showSignupModal() {
      this.showSignup = true;
      this.showLogin = false;
    },
    handleLogin() {
      this.isLoggedIn = true;
      this.showLogin = false;
    },
    handleSignup() {
      this.isLoggedIn = true;
      this.showSignup = false;
    },
    handleLogout() {
      this.isLoggedIn = false;
      localStorage.removeItem('user'); // Clear user data when logged out
    },
  },
  mounted() {
    // Check if the user is logged in when the app loads
    this.isLoggedIn = !!localStorage.getItem("user");
  },
};
</script>
