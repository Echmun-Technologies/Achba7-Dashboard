<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6"><canvas id="myChartLine1"></canvas><br /></div>
      <div class="col-md-6"><canvas id="myChartLine2"></canvas></div>
    </div>
    <div class="row">
      <div class="col-md-6"><canvas id="myChartLine3"></canvas><br /></div>
      <div class="col-md-6">
        <canvas id="myChartLine4"></canvas>
      </div>
    </div>
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
    const ctx1 = document.getElementById("myChartLine1");
    const labelsLine1 = [
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
    const dataLine1 = {
      labels: labelsLine1,
      datasets: [
        {
          label: "Observation number in the last 30 days",
          data: [
            864, 394, 776, 911, 430, 41, 265, 988, 523, 497, 414, 940, 802, 849, 310,
            991, 488, 366, 597, 913, 929, 223, 516, 142, 288, 143, 773, 97, 633, 818,
            256,
          ],
          fill: false,
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    };
    const myChartLine1 = new Chart(ctx1, {
      type: "line",
      data: dataLine1,
    });
    myChartLine1;
    const ctx2 = document.getElementById("myChartLine2");
    const labelsLine2 = [
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
    const dataLine2 = {
      labels: labelsLine2,
      datasets: [
        {
          label: "Alert number in the last 30 days",
          data: [
            68, 90, 77, 18, 39, 12, 93, 9, 87, 42, 60, 71, 12, 45, 55, 40, 78, 81, 26,
            70, 61, 56, 66, 33, 7, 70, 1, 11, 92, 51, 90,
          ],
          fill: false,
          borderColor: "rgb(153, 102, 255)",
          tension: 0.1,
        },
      ],
    };
    const myChartLine2 = new Chart(ctx2, {
      type: "line",
      data: dataLine2,
    });
    myChartLine2;
    const ctx3 = document.getElementById("myChartLine3");
    const labelsLine3 = [
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
    const dataLine3 = {
      labels: labelsLine3,
      datasets: [
        {
          label: "Quick Observation number in the last 30 days",
          data: [
            85, 80, 0, 78, 63, 42, 31, 93, 41, 90, 8, 24, 72, 28, 30, 18, 69, 57, 11,
            10, 40, 65, 62, 13, 38, 70, 37, 90, 15, 70, 42,
          ],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
          tension: 0.1,
        },
      ],
    };
    const myChartLine3 = new Chart(ctx3, {
      type: "line",
      data: dataLine3,
    });
    myChartLine3;
    const ctx4 = document.getElementById("myChartLine4");
    const labelsLine4 = [
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
    const dataLine4 = {
      labels: labelsLine4,
      datasets: [
        {
          label: "Detailed Observation number in the last 30 days",
          data: [
            69, 26, 77, 70, 75, 36, 56, 11, 76, 49, 40, 73, 30, 37, 23, 24, 23, 4, 78,
            84, 33, 60, 8, 11, 86, 96, 16, 19, 4, 10, 89,
          ],
          fill: false,
          borderColor: "rgb(255, 205, 86)",
          tension: 0.1,
        },
      ],
    };
    const myChartLine4 = new Chart(ctx4, {
      type: "line",
      data: dataLine4,
    });
    myChartLine4;
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
