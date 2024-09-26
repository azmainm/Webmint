<template>
  <div class="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4 text-center">Spending Chart</h2>
    <!-- <BarChart :chartData="chartData" :options="chartOptions" /> -->
  </div>
</template>

<script>
// import BarChart from './BarChart.vue';

export default {
  components: {
    // BarChart
  },
  data() {
    return {
      chartData: {
        labels: ['Food', 'Transport', 'Shopping', 'Entertainment', 'Health', 'Utilities'],
        datasets: [
          {
            label: 'Spending in BDT',
            data: [1200, 800, 1500, 500, 300, 1000], // Dummy data
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 159, 64, 0.6)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: 'rgb(75, 75, 75)',
              font: {
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Spending Breakdown',
            color: '#333',
            font: {
              size: 18
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#555',
              font: {
                size: 12
              }
            }
          },
          y: {
            grid: {
              borderDash: [5, 5],
              color: '#ddd'
            },
            ticks: {
              color: '#555',
              font: {
                size: 12
              }
            }
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.w-full {
  width: 100%;
}
</style>
