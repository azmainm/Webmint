<template>
    <div v-if="isVisible" class="modal">
      <div class="modal-content">
        <h2 class="text-2xl mb-4">Add Money</h2>
        <input v-model="amount" type="number" placeholder="Add Amount" class="input mb-4"/>
        <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
        <button @click="addMoney" class="btn">Add Money</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false,
        amount: '',
        password: '',
      };
    },
    methods: {
      addMoney() {
        // Add money logic
      },
    },
  };
  </script>
  