<!--components/LoginModal.vue-->

<template>
    <div v-if="isVisible" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h2 class="text-2xl mb-4">Login</h2>
        <input v-model="username" type="text" placeholder="Username" class="input mb-4"/>
        <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
        <button @click="login" class="btn">Login</button>
        <p @click="openSignupModal" class="text-sm mt-4 cursor-pointer text-center text-pink-500">Don't have an account? Sign Up</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['isVisible'], // Pass visibility state from parent
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        if (this.username && this.password) {
          this.$emit('login-success');
        }
      },
      openSignupModal() {
        this.$emit('openSignup');
      },
      closeModal() {
        this.$emit('closeModal');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Background with transparency */
    backdrop-filter: blur(5px); /* Blurs the background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensures modal stays on top */
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2); /* Adds shadow */
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
    background: #ff3366; /* Pink button */
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
  }
  </style>
  