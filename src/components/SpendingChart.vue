<!-- src/components/SpendingChart.vue -->
<template>
  <div class="w-full sm:w-1/2 px-4 py-6">
    <h2 class="text-lg mb-4 font-bold text-gray-800 font-sans">Spending Chart</h2>
    <Bar :key="chartData.labels.length" :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  // props: ['newTransfer', 'newPayment'],
  components: { Bar },

  data() {
    return {
      chartData: {
        labels: ['2024-09-20', '2024-09-21', '2024-09-22', '2024-09-23'],
        //labels:[],
        datasets: [
          {
            label: 'Transfers',
            backgroundColor: '#ec4899',
            data: [500, 300, 400, 200],
            //data: [],
          },
          {
            label: 'Merchant Payments',
            backgroundColor: '#196cd1',
            data: [200, 400, 300, 100],
            // data: [],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
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

  // Filter transactions by type (transfer or payment)
  const transferTransactions = transactions.filter(t => t.type === 'Transfer Money');
  const paymentTransactions = transactions.filter(t => t.type === 'Merchant Payment');

  // Group transfer transactions by date and sum the amounts
  const groupedTransferTransactions = transferTransactions.reduce((acc, t) => {
    const existingTransaction = acc.find(tx => tx.date === t.date);
    if (existingTransaction) {
      existingTransaction.amount += t.amount;
    } else {
      acc.push({ date: t.date, amount: t.amount });
    }
    return acc;
  }, []);

  // Group payment transactions by date and sum the amounts
  const groupedPaymentTransactions = paymentTransactions.reduce((acc, t) => {
    const existingTransaction = acc.find(tx => tx.date === t.date);
    if (existingTransaction) {
      existingTransaction.amount += t.amount;
    } else {
      acc.push({ date: t.date, amount: t.amount });
    }
    return acc;
  }, []);

  // Update chart data with transaction data
  this.chartData.labels = groupedTransferTransactions.map(t => t.date);
  this.chartData.datasets[0].data = groupedTransferTransactions.map(t => t.amount);
  this.chartData.datasets[1].data = groupedPaymentTransactions.map(t => t.amount);

  console.log('Chart data:', this.chartData);
},

},
mounted() {
    this.fetchTransactions();
  },
}
</script>

<style scoped>
.w-full {
  max-width: 600px;
  height: 350px;
}
</style>
