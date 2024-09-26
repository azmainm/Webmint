<template>
  <div v-if="visible" class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
    <div class="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl mb-4 text-center">Pay Merchant</h2>
      <select v-model="merchant" class="input mb-4">
        <option value="" disabled>Select Merchant</option>
        <option v-for="merchant in merchants" :key="merchant">{{ merchant }}</option>
      </select>
      <input v-model="amount" type="number" placeholder="Payment Amount" class="input mb-4"/>
      <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
      <button @click="payMerchant" class="btn bg-blue-800 hover:bg-blue-600 text-white w-full py-2 rounded">Pay</button>
      <button @click="$emit('close')" class="btn text-blue-800 w-full py-2 mt-4 text-sm">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible'],
  data() {
    return {
      merchant: '',
      merchants: ['Unimart', 'KFC', 'DESCO'],
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
    border: none;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
  }
  </style>
  