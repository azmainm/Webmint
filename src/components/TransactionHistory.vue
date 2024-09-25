<template>
    <div class="transaction-history">
      <h2 class="text-xl mb-4">Transaction History</h2>
      <div class="transaction-row header">
        <p>Date</p>
        <p>Amount</p>
        <p>Purpose</p>
      </div>
      <div v-for="transaction in transactions" :key="transaction.id" class="transaction-row">
        <p>{{ transaction.date }}</p>
        <p>৳ {{ transaction.amount }}</p>
        <p>{{ transaction.purpose }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        transactions: [
          { id: 1, date: '2024-09-01', amount: 1000, purpose: 'Transfer Money' },
          { id: 2, date: '2024-09-02', amount: 2000, purpose: 'Merchant Pay' },
          // more dummy data
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .transaction-history {
    overflow-y: auto;
    max-height: 300px;
  }
  
  .transaction-row {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid var(--primary-pink);
  }
  </style>
  