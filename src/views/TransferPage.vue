<template>
  <div>
    <NavbarLoggedIn />
    <div class="transfer-page bg-gradient-to-r from-white to-pink-100 min-h-screen px-6 py-12">
      <!-- Main Content -->
      <div class="flex flex-col items-center justify-center mt-10">
        <!-- Balance Details Card -->
        <div class="balance-card shadow-md bg-gradient-to-r from-gray-800 to-blue-800 w-full max-w-sm text-center p-6 rounded-md mb-20">
          <h3 class="text-2xl font-light mb-1 text-gray-200">{{ userName }}</h3>
          <h2 class="text-3xl font-medium text-gray-200">
            <span class="font-semibold">Balance: </span>৳ {{ balance }}
          </h2>
        </div>

        <!-- Action Icons with Labels -->
        <div class="flex flex-col md:flex-row gap-12 items-center justify-center mt-10">
          <!-- Transfer Money Icon -->
          <div
            @click="openTransferModal"
            class="flex flex-col items-center justify-center cursor-pointer p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <font-awesome-icon icon="fa-solid fa-money-bill-transfer" class="text-4xl text-blue-900 mb-2" />
            <span class="text-lg font-semibold text-gray-700">Transfer Money</span>
          </div>

          <!-- Pay Merchant Icon -->
          <div
            @click="openMerchantPayModal"
            class="flex flex-col items-center justify-center cursor-pointer p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-4xl text-blue-900 mb-2" />
            <span class="text-lg font-semibold text-gray-700">Pay Merchant</span>
          </div>

          <!-- Add Money Icon -->
          <div
            @click="openAddMoneyModal"
            class="flex flex-col items-center justify-center cursor-pointer p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <font-awesome-icon icon="fa-solid fa-plus" class="text-4xl text-blue-900 mb-2" />
            <span class="text-lg font-semibold text-gray-700">Add Money</span>
          </div>
        </div>
      </div>

      <!-- Additional Sections (Spending Chart and Transaction History) -->
      <div class="mt-12 w-full max-w-4xl mx-auto">
        <TransactionHistory/>
        <SpendingChart />
      </div>

       <!-- Modals -->
       <TransferModal :visible="showTransferModal" @close="closeTransferModal" />
      <AddMoneyModal :visible="showAddMoneyModal" @close="closeAddMoneyModal" />
      <MerchantPayModal :visible="showMerchantPayModal" @close="closeMerchantPayModal" />
    </div>
  </div>
</template>

<script>
// Import FontAwesome components and icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyBillTransfer, faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons';
import NavbarLoggedIn from '../components/NavbarLoggedIn.vue';
import SpendingChart from '../components/SpendingChart.vue';
import TransactionHistory from '../components/TransactionHistory.vue';
import TransferModal from '../components/TransferModal.vue';
import AddMoneyModal from '../components/AddMoneyModal.vue';
import MerchantPayModal from '../components/MerchantPayModal.vue';

// Add the required icons to the FontAwesome library
library.add(faMoneyBillTransfer, faCartShopping, faPlus);

export default {
  components: {
    NavbarLoggedIn,
    SpendingChart,
    TransactionHistory,
    TransferModal,
    AddMoneyModal,
    MerchantPayModal,
    FontAwesomeIcon, // Register FontAwesome component
  },
  data() {
    return {
      userName: 'Azmain Morshed',
      balance: 10000,
      showTransferModal: false,
      showAddMoneyModal: false,
      showMerchantPayModal: false,
    };
  },
  methods: {
    openTransferModal() {
      this.showTransferModal = true;
    },
    closeTransferModal() {
      this.showTransferModal = false;
    },
    openAddMoneyModal() {
      this.showAddMoneyModal = true;
    },
    closeAddMoneyModal() {
      this.showAddMoneyModal = false;
    },
    openMerchantPayModal() {
      this.showMerchantPayModal = true;
    },
    closeMerchantPayModal() {
      this.showMerchantPayModal = false;
    },
  },
};
</script>

<style scoped>
/* Styling for the transfer page */
.transfer-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.balance-card {
  margin: 0 auto;
}

.cursor-pointer:hover {
  transform: translateY(-2px);
}
</style>
