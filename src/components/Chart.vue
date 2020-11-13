<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["data", "loaded"],
  watch: {
    loaded: function(loaded) {
      loaded && this.initChart();
    },
  },
  methods: {
    initChart() {
      const chartData = this.data;
      const dataCollection = {
        labels: Object.keys(chartData),
        datasets: [
          {
            label: "Faults",
            backgroundColor: "#f87979",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            barThickness: 100,
            data: Object.values(chartData).map((turbines) => turbines.length),
          },
        ],
      };
      this.renderChart(dataCollection, {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        height: window.innerWidth < 1440 ? 300 : 400,
      });
    }
  }
};
</script>

<style></style>
