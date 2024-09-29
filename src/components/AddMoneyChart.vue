<!-- src/components/AddMoneyChart.vue -->
<template>
    <div class="w-full sm:w-1/2 px-4 py-6">
      <h3 class="text-lg font-medium text-gray-700 mb-4">Add Money Chart</h3>
      <Bar :data="chartData" :options="chartOptions"/>
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
          labels: ['2024-09-20', '2024-09-21', '2024-09-22', '2024-09-23'],
          datasets: [
            {
              label: 'Amount Added',
              backgroundColor: '#07943b', // Green color for Add Money
              data: [1000, 500, 700, 900],
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
  };
  </script>
  
  <style scoped>
  /* Basic styling for the chart container */
  .w-full {
    max-width: 600px;
    height: 350px;
  }
  </style>
  