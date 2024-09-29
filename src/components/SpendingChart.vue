<!-- src/components/SpendingChart.vue -->
<template>
  <div class="w-full sm:w-1/2 px-4 py-6">
    <h2 class="text-lg mb-4 font-bold text-gray-800 font-sans">Spending Chart</h2>
    <Bar :data="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  props: ['newTransfer'],
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['2024-09-20', '2024-09-21', '2024-09-22', '2024-09-23'],
        datasets: [
          {
            label: 'Transfers',
            backgroundColor: '#ec4899', // Pink color for Transfers
            data: [500, 300, 400, 200],
          },
          {
            label: 'Merchant Payments',
            backgroundColor: '#196cd1', // Blue color for Merchant Payments
            data: [200, 400, 300, 100],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          // title: { display: true, text: 'Spending Analysis' },
        },
        scales: {
          x: { title: { display: true, text: 'Date' } },
          y: { title: { display: true, text: 'Amount (BDT)' } },
        },
      },
    };
  },
  // watch: {
  //   newTransfer(newVal) {
  //     if (newVal) {
  //       this.chartData.labels.push(newVal.date);
  //       this.chartData.datasets[0].data.push(newVal.amount);

  //       this.chartData = {this.chartData };
  //     }
  //   },
  // },

};
</script>

<style scoped>
/* Basic styling for the chart container */
.w-full {
  max-width: 600px;
  height: 350px;
}
</style>


