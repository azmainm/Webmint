<!--components/TransferModal.vue-->
<template>
  <div v-if="visible" class="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
    <div class="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl mb-4 text-center font-medium">Transfer Money</h2>
      <input v-model="recipient" type="text" placeholder="Recipient Username" class="input mb-4"/>
      <input v-model="amount" type="number" placeholder="Transfer Amount" class="input mb-4"/>
      <input v-model="purpose" type="text" placeholder="Purpose" class="input mb-4"/>
      <input v-model="password" type="password" placeholder="Password" class="input mb-4"/>
      <button @click="transfer" class="btn bg-blue-800 hover:bg-blue-600 text-white w-full py-2 rounded text-center">Transfer</button>
       <!-- Message Display -->
       <p v-if="message" :class="{'text-green-500': success, 'text-red-500': !success}" class="mt-4 text-center">
        {{ message }}
      </p>
      <button @click="$emit('close')" class="btn text-blue-800 w-full py-2 mt-4 text-sm">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visible'],
  data() {
    return {
      recipient: '',
      amount: '',
      purpose: '',
      password: '',
      message: '', // Message to display
      success: false, // Flag to indicate success or failure
    };
  },
  methods: {
    transfer() {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      const balance = storedUser.balance;

      // Check if the balance is less than the transfer amount
    if (balance < parseFloat(this.amount)) {
      this.message = 'Insufficient funds. Transfer failed.';
      this.success = false;
      return;
  }

      // Check if the entered password matches the stored password
      if (storedUser && this.password !== storedUser.password) {
        this.message = 'Incorrect password. Transfer failed.';
        this.success = false;
        return;
      }

      // If password matches, create a new transaction object
      const newTransaction = {
        id: Date.now(), // Unique ID based on timestamp
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        amount: parseFloat(this.amount),
        purpose: this.purpose || 'Transfer Money',
        type: 'Transfer Money',
      };

      // Emit the new transaction to the parent component
      this.$emit('transfer-success', newTransaction);

      // Store the transaction in local storage
      const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      transactions.push(newTransaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));


      // Clear form fields after successful transfer
      this.recipient = '';
      this.amount = '';
      this.purpose = '';
      this.password = '';

      this.message = 'Transfer successful!';
      this.success = true; // Indicate success
      //this.$emit('close');
    },
  },
};
</script>

<style>
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
    margin: 0 auto;
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