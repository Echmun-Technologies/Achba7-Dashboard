<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <canvas id="myChartFennec"></canvas>
      </div>
      <div class="col-md-6">
        <canvas id="myChartWolf"></canvas>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <canvas id="myChartDog"></canvas>
      </div>
      <div class="col-md-6">
        <canvas id="myChartCat"></canvas>
      </div>
    </div>
    <div class="row">
      <canvas id="myChartRabbit"></canvas>
    </div>
  </div>
</template>
<script lang="ts">
import Chart from "chart.js/auto";

export default {
  name: "StatisticsAchba7",
  props: {
    msg: String,
  },
  mounted() {
    const ctxF = document.getElementById("myChartFennec");
    const labelsFennec = [
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
    const dataFennec = {
      labels: labelsFennec,
      datasets: [
        {
          label: "Fennecs observations number in the last 30 days",
          data: [
            69, 87, 50, 90, 67, 35, 66, 30, 27, 86, 75, 53, 74, 35, 57, 63, 84, 82, 89,
            45, 10, 41, 78, 14, 62, 75, 80, 42, 24, 31, 2,
          ],
          fill: false,
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    };
    const myChartFennec = new Chart(ctxF, {
      type: "line",
      data: dataFennec,
    });
    myChartFennec;
    const ctxW = document.getElementById("myChartWolf");
    const labelsWolf = [
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
      labels: labelsWolf,
      datasets: [
        {
          label: "Wolfs observations number in the last 30 days",
          data: [
            39, 34, 14, 90, 28, 47, 21, 42, 54, 7, 12, 18, 89, 28, 5, 73, 81, 68, 77,
            87, 9, 3, 15, 81, 24, 77, 73, 15, 50, 11, 47,
          ],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
    const myChartWolf = new Chart(ctxW, {
      type: "line",
      data: dataWolf,
    });
    myChartWolf;
    const ctxD = document.getElementById("myChartDog");
    const labelsDog = [
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
    const dataDog = {
      labels: labelsDog,
      datasets: [
        {
          label: "Dogs observations number in the last 30 days",
          data: [
            14, 4, 77, 2, 24, 23, 91, 15, 61, 26, 93, 7, 86, 2, 69, 54, 79, 12, 33, 8,
            28, 9, 82, 38, 44, 55, 23, 7, 64, 59, 5,
          ],
          fill: false,
          borderColor: "rgb(255, 159, 64)",
          tension: 0.1,
        },
      ],
    };
    const myChartDog = new Chart(ctxD, {
      type: "line",
      data: dataDog,
    });
    myChartDog;
    const ctxC = document.getElementById("myChartCat");
    const labelsCat = [
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
    const dataCat = {
      labels: labelsCat,
      datasets: [
        {
          label: "Cats observations number in the last 30 days",
          data: [
            76, 12, 89, 50, 25, 33, 45, 93, 60, 72, 21, 89, 86, 26, 98, 7, 86, 20, 20,
            43, 67, 32, 15, 76, 56, 85, 22, 1, 60, 87, 52,
          ],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
          tension: 0.1,
        },
      ],
    };
    const myChartCat = new Chart(ctxC, {
      type: "line",
      data: dataCat,
    });
    myChartCat;
    const ctxR = document.getElementById("myChartRabbit");
    const labelsRabbit = [
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
    const dataRabbit = {
      labels: labelsRabbit,
      datasets: [
        {
          label: "Rabbits observations number in the last 30 days",
          data: [
            72, 65, 39, 83, 45, 49, 84, 32, 19, 71, 88, 1, 58, 94, 10, 42, 94, 5, 69,
            35, 17, 30, 97, 61, 45, 78, 36, 86, 45, 75, 81,
          ],
          fill: false,
          borderColor: "rgb(153, 102, 255)",
          tension: 0.1,
        },
      ],
    };
    const myChartRabbit = new Chart(ctxR, {
      type: "line",
      data: dataRabbit,
    });
    myChartRabbit;
  },
};
</script>
