<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <h2 class="text-2xl mb-4">Pay Merchant</h2>
        <select v-model="merchant" class="input mb-4">
          <option value="" disabled>Select Merchant</option>
          <option v-for="merchant in merchants" :key="merchant">{{ merchant }}</option>
        </select>
        <input v-model="amount" type="number" placeholder="Payment Amount" class="input mb-4"/>
        <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
        <button @click="payMerchant" class="btn">Pay</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        merchant: '',
        merchants: ['Merchant1', 'Merchant2', 'Merchant3'],
        amount: '',
        password: '',
      };
    },
    methods: {
      payMerchant() {
        // Pay logic
      },
    },
  };
  </script>
  