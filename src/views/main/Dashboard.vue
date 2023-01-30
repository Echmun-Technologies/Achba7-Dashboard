<template>
  <v-container fluid>
    <br/>
    <h2>Dashboard</h2>
    <v-card class="ma-3 pa-3">
      <div class="card-container">
        <div class="card">
          <img src="./active_users.png" class="card-image" />
          <div class="card-content">
            <h4 class="card-title">Active Users today</h4>
            <p class="card-text">49</p>
          </div>
        </div>
        <br />
        <div class="card">
          <img src="./active_observations.png" class="card-image" />
          <div class="card-content">
            <h4 class="card-title">Observations added today</h4>
            <p class="card-text">90</p>
          </div>
        </div>
      </div>
    </v-card>
    <br />
    <div class="row">
      <div class="col-md-6">
        <canvas id="myChart"></canvas>
      </div>
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
<style>
.card-container {
  display: flex;
}

.card {
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
}

.card-image {
  width: 50px;
  height: auto;
  margin-right: 10px;
}
.card-content {
  display: flex;
  flex-direction: column;
}
.card h3 {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  padding: 0 20px;
}
</style>
