<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <h2 class="text-2xl mb-4">Transfer Money</h2>
        <input v-model="recipient" type="text" placeholder="Recipient Username" class="input mb-4"/>
        <input v-model="amount" type="number" placeholder="Transfer Amount" class="input mb-4"/>
        <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
        <button @click="transfer" class="btn">Transfer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        recipient: '',
        amount: '',
        password: '',
      };
    },
    methods: {
      transfer() {
        // Transfer logic
      },
    },
  };
  </script>
  