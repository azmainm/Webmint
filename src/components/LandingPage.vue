<!-- src/components/LandingPage.vue -->
<template> 
  <div class="overflow-x-hidden">
    <!-- Section 1 -->
    <section class="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-white to-pink-100 text-gray-800">
      <h1 class="text-6xl font-bold px-3 float"><span class="text-blue-900">Webmint</span> Connects Finance</h1>
      <p class="mt-4 font-sans text-xl px-4 text-gray-800">Seamless transfers and payments</p>
      <p class="font-sans text-xl px-4 font-medium text-blue-800">on. the. web</p>
      <div>
        <button @click="handleOpenLogin" class="mt-4 mr-4 bg-blue-900 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-md shadow-gray-300">
        Initiate Transaction
      </button>
      <span><font-awesome-icon icon="fa-solid fa-money-bill-transfer" class="text-3xl text-blue-900 mb-2 hover:text-pink-700" /></span>
      </div>
      
    </section>

    <!-- Section 2 -->
    <section class="flex flex-col sm:flex-row items-center justify-between py-16 bg-gradient-to-r from-white to-pink-100 text-gray-800">
      <div class="w-full sm:w-1/2 text-left ml-14">
        <h2 class="text-4xl font-bold text-blue-800" data-aos="fade-right">Fast Transfers & Effortless Payments</h2>
        <p class="mt-4 pr-8">Sit back and relax—send money and pay bills in seconds, all from the comfort of your couch. Enjoy a seamless experience that makes managing your finances a breeze!</p>
      </div>
      <div class="w-full sm:w-3/4 text-right">
        <img src="@/assets/landing1.png" alt="Landing Image" class="w-full sm:w-3/4 object-cover" data-aos="fade-left"/>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="flex flex-col sm:flex-row items-center justify-between py-16 bg-gradient-to-r from-white to-pink-100 text-gray-800">
      <div class="w-full sm:w-3/4">
        <img src="@/assets/landing2.png" alt="Landing Image" class="w-full sm:w-3/4 object-cover" data-aos="fade-right"/>
      </div>
      <div class="w-full sm:w-1/2 ml-14">
        <h2 class="text-4xl font-bold text-blue-800" data-aos="fade-right">Gain Insight into Your Finances</h2>
        <p class="mt-4 pr-8">Stay on top of your spending with real-time transaction tracking, detailed financial management charts, and analytics. Optimize your budget and make informed decisions for a secure financial future.</p>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useRouter } from 'vue-router';  // Import useRouter for navigation
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

library.add(faMoneyBillTransfer);

export default {
  components:{
    FontAwesomeIcon,
  },
  methods:{
    handleOpenLogin() {
      this.$emit('open-login');  // Emit the open-login event
    },
  },
  // setup() {
  //   const router = useRouter();  // Set up router

  //   const goToTransferPage = () => {
  //     router.push({ name: 'TransferPage' });  // Navigate to TransferPage
  //   };

  //   return {
  //     goToTransferPage
  //   };
  // },
  mounted() {
    AOS.init();
  }
};
</script>

<style>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); /* Adjust the value to control the floating height */
  }
}

.float {
  animation: float 3s ease-in-out infinite; /* Adjust duration as needed */
}
</style>