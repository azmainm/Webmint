<!--components/SignupModal.vue-->

<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
      <h2 class="text-2xl mb-4 font-medium text-center">Sign Up</h2>
      <input v-model="username" type="text" placeholder="Username" class="input mb-4"/>
      <input v-model="email" type="email" placeholder="Email" class="input mb-4"/>
      <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
      <button @click="signup" class="btn text-center bg-blue-800 hover:bg-blue-600">Sign Up</button>
      <p @click="openLoginModal" class="text-sm mt-4 cursor-pointer text-center text-gray-700">
        Already have an account? 
        <span class="underline text-blue-800 hover:text-blue-600">Login</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupModal',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      if (this.username && this.email && this.password) {
        // Emit a signup-success event if necessary
        this.$emit('closeModal');  // Close modal after signup
      }
    },
    openLoginModal() {
      this.$emit('open-login');
    },
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

  
  <style scoped>
  /* Reusing styles from LoginModal for consistency */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
  }
  
  .input {
    width: 100%;
    padding: 10px;
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 6px;
  }
  
  .btn {
    width: 100%;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
  }
  </style>
  