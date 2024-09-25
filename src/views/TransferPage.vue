<template>
  <div class="transfer-page">
    <!-- <NavbarLoggedIn /> -->
    <BalanceDetails />
    <button @click="openTransferModal" class="btn">Transfer Money</button>
    <button @click="openAddMoneyModal" class="btn">Add Money</button>
    <button @click="openMerchantPayModal" class="btn">Pay Merchant</button>
    <SpendingChart />
    <TransactionHistory />
  </div>
</template>

<script>
// import NavbarLoggedIn from '../components/NavbarLoggedIn.vue';
import BalanceDetails from '../components/BalanceDetails.vue';
import SpendingChart from '../components/SpendingChart.vue';
import TransactionHistory from '../components/TransactionHistory.vue';

export default {
  components: {
    // NavbarLoggedIn,
    BalanceDetails,
    SpendingChart,
    TransactionHistory,
  },
  methods: {
    openTransferModal() {
      // Show TransferModal
    },
    openAddMoneyModal() {
      // Show AddMoneyModal
    },
    openMerchantPayModal() {
      // Show MerchantPayModal
    },
  },
};
</script>
