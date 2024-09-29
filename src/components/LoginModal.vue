<template>
  <div class="modal py-14" @click.self="closeModal">
    <div class="modal-content">
      <h2 class="text-2xl mb-4 font-medium text-center">Login</h2>
      <input v-model="username" type="username" placeholder="Username" class="input mb-4"/>
      <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
      
      <button @click="login" class="btn text-center bg-blue-800 hover:bg-blue-600">Login</button>
      
      <!-- Status message area -->
      <p v-if="statusMessage" :class="{'text-green-600': loginSuccess, 'text-red-600': !loginSuccess}" class="mt-4 text-center">
        {{ statusMessage }}
      </p>

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
    return {
      router,
    };
  },
  data() {
    return {
      username: '',
      password: '',
      statusMessage: '',  // Holds the status message
      loginSuccess: false,  // Tracks if login was successful
    };
  },
  methods: {
    login() {
      // Retrieve user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      
      // Check if the input credentials match the stored credentials
      if (storedUser && this.username === storedUser.username && this.password === storedUser.password) {
        this.statusMessage = 'Login successful!';
        this.loginSuccess = true;
        
        // Redirect after a short delay
        setTimeout(() => {
          this.$router.push({ name: 'TransferPage' });
        }, 1500);
      } else {
        this.statusMessage = 'Invalid Username or password. Please try again.';  // Error message
        this.loginSuccess = false;
      }
    },
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
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding: 20px;
  border-radius: 12px;
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
