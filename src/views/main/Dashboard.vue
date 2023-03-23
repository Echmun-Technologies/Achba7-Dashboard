<template>
  <v-container fluid>
    <br />
    <h2>Dashboard</h2>
    <v-card class="ma-3 pa-3">
      <div class="card-container">
        <div class="card">
          <div class="icon">
            <v-icon color="primary">mdi-account-multiple</v-icon>
          </div>
          <div class="card-content">
            <h4 class="card-title">Active Users today</h4>
            <p class="card-text">49</p>
          </div>
        </div>
        <br />
        <div class="card">
          <div class="icon">
            <v-icon color="primary">mdi-eye</v-icon>
          </div>
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
    let data = {
      "2023-02-21": 864,
      "2023-02-22": 394,
      "2023-02-23": 776,
      "2023-02-24": 911,
      "2023-02-25": 430,
      "2023-02-26": 41,
      "2023-02-27": 265,
      "2023-02-28": 988,
      "2023-03-01": 523,
      "2023-03-02": 497,
      "2023-03-03": 414,
      "2023-03-04": 940,
      "2023-03-05": 802,
      "2023-03-06": 849,
      "2023-03-07": 310,
      "2023-03-08": 991,
      "2023-03-09": 488,
      "2023-03-10": 366,
      "2023-03-11": 597,
      "2023-03-12": 913,
      "2023-03-13": 929,
      "2023-03-14": 223,
      "2023-03-15": 516,
      "2023-03-16": 142,
      "2023-03-17": 288,
      "2023-03-18": 143,
      "2023-03-19": 773,
      "2023-03-20": 97,
      "2023-03-21": 633,
      "2023-03-22": 818,
      "2023-03-23": 256,
    };
    data = {
      labels: Object.keys(data),
      datasets: [
        {
          label: "Active Users in the last 30 days",
          data: Object.values(data),
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
.icon {
  width: 100px;
  height: 50px;
  margin: auto;
}

.card {
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  margin: auto;
}
.card-content {
  display: flex;
  flex-direction: column;
}

.card p {
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
  padding: 0 20px;
}
h2 {
  margin-left: 30px;
}
</style>
