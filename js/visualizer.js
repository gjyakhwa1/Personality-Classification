$(document).ready(function () {
  var ctx = document.getElementById("myChart1").getContext("2d");
  var barColors = ["red", "green", "blue", "orange", "brown"];

  context = {
    x_values: [
      "MutliNomial Naive Bayes",
      "Random Forest Classifier",
      "Logisitic Regression",
      "K Nearest Neighbor",
      "Linear Suppor Vector Classifier",
    ],
    y_values: [
      [0.74, 0.76, 0.78, 0.71, 0.76],
      [0.67, 0.76, 0.78, 0.76, 0.76],
      [0.67, 0.76, 0.78, 0.72, 0.76],
    ],
  };
  new Chart(ctx, {
    type: "bar",
    data: {
      datasets: context.x_values.map((element, i) => {
        return {
          label: element,
          data: [context.y_values[0][i]],
          backgroundColor: barColors[i],
        };
      }),
    },
    options: {
      title: {
        display: true,
        text: "Precision(Macro Average)",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  var ctx2 = document.getElementById("myChart2").getContext("2d");
  new Chart(ctx2, {
    type: "bar",
    data: {
      datasets: context.x_values.map((element, i) => {
        return {
          label: element,
          data: [context.y_values[1][i]],
          backgroundColor: barColors[i],
        };
      }),
    },
    options: {
      title: {
        display: true,
        text: "Recall(Macro Average)",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  var ctx3 = document.getElementById("myChart3").getContext("2d");
  new Chart(ctx3, {
    type: "bar",
    data: {
      datasets: context.x_values.map((element, i) => {
        return {
          label: element,
          data: [context.y_values[2][i]],
          backgroundColor: barColors[i],
        };
      }),
    },
    options: {
      title: {
        display: true,
        text: "F1Score(Macro Average)",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  k_list = [
    0.7967590618336887, 0.7631556503198295, 0.7465245202558636,
    0.728955223880597, 0.7157356076759062, 0.7060127931769723,
    0.697228144989339, 0.687590618336887, 0.6784648187633262,
    0.6691684434968017, 0.6629424307036247, 0.6563752665245203,
    0.6492963752665245, 0.6411087420042644, 0.6342004264392324,
    0.6285714285714286, 0.6217484008528784, 0.6150106609808103,
    0.6102345415778252,
  ];
  var ctx4 = document.getElementById("myChart4").getContext("2d");
  new Chart(ctx4, {
    type: "line",
    data: {
      labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      ],
      datasets: [
        {
          label: "K Nearest Neighbor",
          backgroundColor: "rgba(153, 102, 255, 0.5)", //purple
          borderColor: "rgba(153, 102, 255, 1)",
          data: k_list,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Finding the value of K for KNN",
      },
    },
  });
});
