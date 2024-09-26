<!--components/LoginModal.vue-->

<template>
  <div class="modal py-14" @click.self="closeModal">
    <div class="modal-content">
      <h2 class="text-2xl mb-4 font-medium text-center">Login</h2>
      <input v-model="username" type="text" placeholder="Username" class="input mb-4"/>
      <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
      <button @click="login" class="btn text-center bg-blue-800 hover:bg-blue-600">Login</button>
      <p @click="openSignupModal" class="text-sm mt-4 cursor-pointer text-center text-gray-700">
        Don't have an account? 
        <span class="underline text-blue-800 hover:text-blue-600">Sign Up</span>
      </p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'; 
export default {
  name: 'LoginModal',
  setup() {
    const router = useRouter();  // Set up router

    const login = () => {
      router.push({ name: 'TransferPage' });  // Navigate to TransferPage
    };

    return {
      login
    };
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    // login() {
    //   if (this.username && this.password) {
    //     this.$emit('login-success');
    //   }
    // },
    openSignupModal() {
      this.$emit('open-signup');
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
    padding-top: 30px;
    padding-bottom: 30px;
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
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
  }
  </style>
  