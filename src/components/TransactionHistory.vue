<!-- components/TransactionHistory.vue -->
<template>
  <div class="transaction-history border rounded-md shadow-md p-10 mb-10">
    <h2 class="text-2xl mb-4 font-bold text-gray-800 font-sans">Transaction History</h2>
    <div class="transaction-row header">
      <p class="font-medium date-column">Date</p>
      <p class="font-medium amount-column">Amount</p>
      <p class="font-medium purpose-column">Purpose</p>
    </div>
    <div
      v-for="(transaction, index) in transactions"
      :key="transaction.id"
      class="transaction-row"
      :class="{'striped': index % 2 === 0}" 
    >
      <p class="purpose-column">{{ transaction.purpose }}</p>
      <p class="date-column">{{ transaction.date }}</p>
      <p class="amount-column">৳ {{ transaction.amount }}</p>
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
        { id: 3, date: '2024-09-03', amount: 500, purpose: 'Utility Bill' },
        { id: 4, date: '2024-09-04', amount: 1500, purpose: 'Groceries' },
        { id: 5, date: '2024-09-05', amount: 700, purpose: 'Entertainment' },
        { id: 6, date: '2024-09-06', amount: 1300, purpose: 'Travel' },
      ],
    };
  },
};
</script>

<style scoped>
.transaction-history {
  overflow-y: auto;
  max-height: 300px;

  /* Custom Scrollbar Styling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #0d006e #f0f0f0; /* For Firefox - Light blue scroll with light background */
}

/* For Chrome, Edge, and Safari */
.transaction-history::-webkit-scrollbar {
  width: 6px; /* Make the scrollbar thinner */
}

.transaction-history::-webkit-scrollbar-track {
  background: #f5cdf9; /* Light greyish background for the track */
}

.transaction-history::-webkit-scrollbar-thumb {
  background-color: #f5cdf9; /* Light blue scroll thumb */
  border-radius: 10px; /* Rounded corners for a smoother look */
}

/* Change thumb color on hover */
.transaction-history::-webkit-scrollbar-thumb:hover {
  background-color: #f5cdf9; /* Darker blue on hover */
}

.transaction-row {
  display: grid; /* Use grid for consistent column alignment */
  grid-template-columns: 2fr 1fr 1fr; /* Define the column sizes */
  padding: 10px;
  border-bottom: 1px solid var(--primary-pink);
}

/* Add background colors for striped effect */
.striped {
  background-color: #fae7f7;
}

/* Style for the header row */
.header {
  font-weight: bold;
}

/* Ensure each column is aligned properly */
.date-column,
.amount-column,
.purpose-column {
  text-align: left;
}
</style>
