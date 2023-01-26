<template>
  <v-container fluid>
    <v-card class="ma-3 pa-3"> </v-card>
    <br />
    <div class="row">
      <canvas id="myChart"></canvas>
    </div>
  </v-container>
</template>

<script lang="ts">
import Chart from "chart.js/auto";

export default {
  name: "StatisticsAchba7",
  props: {
    msg: String,
  },
  mounted() {
    const ctx = document.getElementById("myChart");
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
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Active Users in the last 30 days",
          data: [
            874, 635, 135, 732, 317, 397, 766, 424, 848, 666, 82, 1, 608, 196, 715, 342,
            163, 245, 228, 652, 458, 387, 727, 896, 689, 581, 895, 424, 32, 411, 892,
          ],
          fill: false,
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
    myChart;
  },
};
</script>
