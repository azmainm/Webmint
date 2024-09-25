<template>
    <div class="balance-card">
      <h3 class="text-xl mb-2">{{ userName }}</h3>
      <h2 class="text-4xl font-bold">৳ {{ balance }}</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: 'John Doe',
        balance: 10000,
      };
    },
  };
  </script>
  
  <style scoped>
  .balance-card {
    background-color: var(--dark-gray);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
  </style>
  