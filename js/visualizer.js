$(document).ready(function () {
  var ctx = document.getElementById("myChart1").getContext("2d");
  var barColors = ["red", "green", "blue", "orange", "brown"];

  context = {
    x_values: [
      "MutliNomial Naive Bayes",
      "Random Forest Classifier",
      "Logisitic Regression",
    ],
    y_values: [66.77, 76.79, 77.79],
  };
  new Chart(ctx, {
    type: "bar",
    data: {
      datasets: context.x_values.map((element, i) => {
        return {
          label: element,
          data: [context.y_values[i]],
          backgroundColor: barColors[i],
        };
      }),
    },
    options: {
      title: {
        display: true,
        text: "F1-score",
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
});
