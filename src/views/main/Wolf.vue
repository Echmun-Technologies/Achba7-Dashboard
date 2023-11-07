<template>
  <canvas id="myChartWolf"></canvas>
</template>

<script lang="ts">
import Chart from "chart.js/auto";

export default {
  name: "StatisticsWolf",
  props: {
    msg: String,
  },
  mounted() {
    const ctxW = document.getElementById("myChartWolf");
    const labels = [
      "2022-12-27",
      "2022-12-28",
      "2022-12-29",
      "2022-12-30",
      "2022-12-31",
      "2023-01-01",
      "2023-01-02",
      "2023-01-03",
      "2023-01-04",
      "2023-01-05",
      "2023-01-06",
      "2023-01-07",
      "2023-01-08",
      "2023-01-09",
      "2023-01-10",
      "2023-01-11",
      "2023-01-12",
      "2023-01-13",
      "2023-01-14",
      "2023-01-15",
      "2023-01-16",
      "2023-01-17",
      "2023-01-18",
      "2023-01-19",
      "2023-01-20",
      "2023-01-21",
      "2023-01-22",
      "2023-01-23",
      "2023-01-24",
      "2023-01-25",
      "2023-01-26",
    ];
    const dataWolf = {
      labels: labels,
      datasets: [
        {
          label: "Observation number in the last 30 days",
          data: [
            49, 97, 53, 5, 33, 65, 62, 51, 38, 61, 45, 74, 27, 64, 17, 36, 17, 96, 12,
            79, 32, 68, 90, 77, 18, 39, 12, 93, 9, 87, 42,
          ],
          fill: false,
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    };
    const myChartWolf = new Chart(ctxW, {
      type: "line",
      data: dataWolf,
    });
    myChartWolf;
  },
};
</script>
