<!-- src/views/TransferPage.vue -->
<template>
    <div></div>
</template>
<!-- <template>
    <div>
      <NavbarLoggedIn />
      <div class="px-12 py-8">
        <BalanceDetails />
        <div class="flex space-x-6 mt-8">
          <button @click="openTransferModal" class="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded">Transfer</button>
          <button @click="openAddMoneyModal" class="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded">Add Money</button>
          <button @click="openMerchantPayModal" class="bg-pink-500 hover:bg-pink-700 text-white py-2 px-4 rounded">Pay Merchant</button>
        </div>
        <SpendingChart class="mt-8" />
        <TransactionHistory class="mt-8" />
      </div> -->
  
      <!-- Modals -->
      <!-- <TransferModal v-if="showTransferModal" @close="showTransferModal = false" />
      <AddMoneyModal v-if="showAddMoneyModal" @close="showAddMoneyModal = false" />
      <MerchantPayModal v-if="showMerchantPayModal" @close="showMerchantPayModal = false" />
    </div>
  </template> -->
  
  <!-- <script>
  import NavbarLoggedIn from "@/components/NavbarLoggedIn.vue";
  import BalanceDetails from "@/components/BalanceDetails.vue";
  import SpendingChart from "@/components/SpendingChart.vue";
  import TransactionHistory from "@/components/TransactionHistory.vue";
  import TransferModal from "@/components/TransferModal.vue";
  import AddMoneyModal from "@/components/AddMoneyModal.vue";
  import MerchantPayModal from "@/components/MerchantPayModal.vue";
  
  export default {
    components: {
      NavbarLoggedIn,
      BalanceDetails,
      SpendingChart,
      TransactionHistory,
      TransferModal,
      AddMoneyModal,
      MerchantPayModal
    },
    data() {
      return {
        showTransferModal: false,
        showAddMoneyModal: false,
        showMerchantPayModal: false,
      };
    },
    methods: {
      openTransferModal() {
        this.showTransferModal = true;
      },
      openAddMoneyModal() {
        this.showAddMoneyModal = true;
      },
      openMerchantPayModal() {
        this.showMerchantPayModal = true;
      }
    }
  };
  </script>
   -->