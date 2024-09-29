<!-- src/components/AddMoneyChart.vue -->
<template>
    <div class="w-full sm:w-1/2 px-4 py-6">
      <h2 class="text-lg mb-4 font-bold text-gray-800 font-sans">Add Money Chart</h2>
      <Bar :key="chartData.labels.length" :data="chartData" :options="chartOptions"/>
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [
            {
              label: 'Amount Added',
              backgroundColor: '#07943b', // Green color for Add Money
              data: [],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
            // title: { display: true, text: 'Money Added Analysis' },
          },
          scales: {
            x: { title: { display: true, text: 'Date' } },
            y: { title: { display: true, text: 'Amount (BDT)' } },
          },
        },
      };
    },

        watch: {
          '$store.state.transactions': 'fetchTransactions',
        },
        
        methods: {
    fetchTransactions() {
  const transactions = JSON.parse(localStorage.getItem('transactions')) || [];

  // Filter transactions by purpose 
  const addTransactions = transactions.filter(t => t.purpose === 'Add Money');

  // Group transactions by date and sum the amounts
  const groupedAddTransactions = addTransactions.reduce((acc, t) => {
    const existingTransaction = acc.find(tx => tx.date === t.date);
    if (existingTransaction) {
      existingTransaction.amount += t.amount;
    } else {
      acc.push({ date: t.date, amount: t.amount });
    }
    return acc;
  }, []);

  // Update chart data with transaction data
  this.chartData.labels = groupedAddTransactions.map(t => t.date);
  this.chartData.datasets[0].data = groupedAddTransactions.map(t => t.amount);

    },

    },
mounted() {
    this.fetchTransactions();
  },
}
</script>
  
  <style scoped>
  /* Basic styling for the chart container */
  .w-full {
    max-width: 600px;
    height: 350px;
  }
  </style>
  