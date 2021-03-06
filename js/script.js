const ctx1 = document.getElementById('Chart').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Geloof in buitenaarts leven',
            data: [
                2, 
                3, 
                4, 
                2,
                12,
                20,
                21,
                15,
                11,
                1
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(165, 255, 214, 0.2)',
                'rgba(135, 151, 175, 0.2)',
                'rgba(237, 222, 164, 0.2)',
                'rgba(255, 155, 66, 0.2)',
                'rgba(242, 233, 220, 0.2)',
                'rgba(190, 162, 194, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(165, 255, 214, 1)',
                'rgba(135, 151, 175, 1)',
                'rgba(237, 222, 164, 1)',
                'rgba(255, 155, 66, 1)',
                'rgba(242, 233, 220, 1)',
                'rgba(190, 162, 194, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: '#FFF',
            }
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'aantal die geloven in buitenaarts leven',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Cijfer hoe kijk je naar de toekomst',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Second chart

const options = {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'Methadon',
          data: [
            {
              x: 1,
              y: 50,
              r: 10
            },
            {
              x: 2,
              y: 5,
              r: 10
            },
            {
              x: 3,
              y: 3,
              r: 10,
            },
            {
              x: 4,
              y: 4,
              r: 10,
            }
          ],
          backgroundColor:"rgba(255, 99, 132, 0.2)",
          borderColor: 'rgba(255, 99, 132, 1)',
          hoverBackgroundColor: "rgba(255, 99, 132, 0.2)"
        },
        {
            label: 'Amfetamine',
            data: [
              {
                x: 1,
                y: 20,
                r: 10
              },
              {
                x: 6,
                y: 7,
                r: 10
              },
              {
                x: 3,
                y: 8,
                r: 10,
              },
              {
                x: 4,
                y: 6,
                r: 10,
              }
            ],
            backgroundColor:"rgba(237, 222, 164, 0.2)",
            borderColor: 'rgba(237, 222, 164, 1)',
            hoverBackgroundColor: "rgba(237, 222, 164, 0.2)"
          },
        {
          label: 'MDMA',
            data: [
              {
                x: 2,
                y: 8,
                r: 10
              },
              {
                x: 1,
                y: 10,
                r: 10,
              },
              {
                x: 7,
                y: 3,
                r: 10
              },
              {
                x: 8,
                y: 2,
                r: 10
              },
              {
                x: 9,
                y: 1,
                r: 10
              }
            ],
            backgroundColor:"rgba(54, 162, 235, 0.2)",
            borderColor: 'rgba(54, 162, 235, 1)',
            hoverBackgroundColor: "rgba(54, 162, 235, 0.2)"
        },
        {
          label: 'Wiet',
            data: [
              {
                x: 3,
                y: 50,
                r: 10
              },
              {
                x: 1,
                y: 30,
                r: 10
              },
              {
                x: 2,
                y: 27,
                r: 10
              },
              {
                x: 4,
                y: 21,
                r: 10,
              },
              {
                x: 5,
                y: 15,
                r: 10,
              },
              {
                x: 6,
                y: 8,
                r: 10,
              },
              {
                x: 7,
                y: 5,
                r: 10,
              },
              {
                x: 8,
                y: 8,
                r: 10,
              },
              {
                x: 9,
                y: 3,
                r: 10,
              },
              {
                x: 10,
                y: 2,
                r: 10,
              }
            ],
            backgroundColor:"rgba(255, 206, 86, 0.2)",
            borderColor: 'rgba(255, 206, 86, 1)',
            hoverBackgroundColor: "rgba(255, 206, 86, 0.2)"
        },
        {
          label: 'Hash',
            data: [
              {
                x: 1,
                y: 150,
                r: 10
              },
              {
                x: 2,
                y: 100,
                r: 10,
              },
              {
                x: 3,
                y: 80,
                r: 10,
              },
              {
                x: 4,
                y: 30,
                r: 10,
              }
            ],
            backgroundColor:"rgba(75, 192, 192, 0.2)",
            borderColor: 'rgba(75, 192, 192, 1)',
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.2)'
        },
        {
            label: 'Paddo',
              data: [
                {
                  x: 3,
                  y: 50,
                  r: 10
                },
                {
                  x: 2,
                  y: 110,
                  r: 10,
                },
                {
                  x: 3,
                  y: 60,
                  r: 10,
                },
                {
                  x: 4,
                  y: 30,
                  r: 10,
                }
              ],
              backgroundColor:"rgba(190, 162, 194, 0.2)",
              borderColor: 'rgba(190, 162, 194, 1)',
              hoverBackgroundColor: 'rgba(190, 162, 194, 0.2)'
          },
        {
            label: 'LSD',
              data: [
                {
                  x: 2,
                  y: 150,
                  r: 10
                },
                {
                  x: 1,
                  y: 160,
                  r: 10,
                },
                {
                  x: 3,
                  y: 140,
                  r: 10,
                }
              ],
              backgroundColor:"rgba(242, 233, 220, 0.2)",
              borderColor: 'rgba(242, 233, 220, 1)',
              hoverBackgroundColor: 'rgba(242, 233, 220, 0.2)'
          },
          
        {
          label: 'Overige drugs',
            data: [
              {
                x: 5,
                y: 20,
                r: 10
              },
              {
                x: 1,
                y: 100,
                r: 10,
              },
              {
                x: 2,
                y: 70,
                r: 10,
              },
              {
                x: 3,
                y: 50,
                r: 10,
              },
              {
                x: 4,
                y: 45,
                r: 10,
              },
              {
                x: 7,
                y: 30,
                r: 10,
              },
              {
                x: 8,
                y: 27,
                r: 10,
              },
              {
                x: 9,
                y: 20,
                r: 10,
              },
              {
                x: 10,
                y: 20,
                r: 10,
              },
              {
                x: 6,
                y: 20,
                r: 10,
              }
            ],
            backgroundColor:"rgba(165, 255, 214, 0.2)",
            borderColor: 'rgba(165, 255, 214, 1)',
            hoverBackgroundColor: "rgba(165, 255, 214, 0.2)"
        },
        {
            label: 'GHB',
              data: [
                {
                  x: 1,
                  y: 20,
                  r: 10
                },
                {
                  x: 2,
                  y: 5,
                  r: 10,
                },
                {
                  x: 3,
                  y: 10,
                  r: 10,
                },
                {
                  x: 4,
                  y: 8,
                  r: 10,
                }
              ],
              backgroundColor:'rgba(255, 155, 66, 0.2)',
              borderColor: 'rgba(255, 155, 66, 1)',
              hoverBackgroundColor: "rgba(255, 155, 66, 0.2)"
          },
        {
            label: 'Geen',
            data: [
              {
                x: 10,
                y: 0,
                r: 10
              },
              
            ],
            backgroundColor:"rgba(135, 151, 175, 0.2)",
            borderColor: 'rgba(135, 151, 175, 1)',
            hoverBackgroundColor: "rgba(135, 151, 175, 0.2)"
          },          
        ] 
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Gebruik per jaar',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Cijfer toekomst 1/10',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  }
  
  const ctx2 = document.getElementById('Chart2').getContext('2d');
  new Chart(ctx2, options);



// Third chart

const ctx3 = document.getElementById('Chart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['1', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Hoeveel wil je verdienen',
            data: [
                1550, 
                3250, 
                4625, 
                2000, 
                3366, 
                3314,
                3671,
                3614,
                3833

            ],
            backgroundColor: [
                'rgba(76,24,210,0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(165, 255, 214, 1)',
                'rgba(135, 151, 175, 1)',
                'rgba(237, 222, 164, 1)',
                'rgba(255, 155, 66, 1)',
                'rgba(242, 233, 220, 1)',
                'rgba(190, 162, 194, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: '#FFF',
            }
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Hoeveel wil je per maand verdienen (gemid)',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Cijfer hoe kijk je naar de toekomst',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

new Chart(document.querySelector('#Chart4').getContext('2d'), {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: ['Introvert'],
        backgroundColor:"rgba(255, 99, 132, 0.2)",
        borderColor: 'rgba(255, 99, 132, 1)',
        hoverBackgroundColor: "rgba(255, 99, 132, 0.2)",
        data: [
          {
            x: 1,
            y: 4,
            r: 10,
          },
          {
            x: 4,
            y: 4,
            r: 10,
          },
          {
            x: 6,
            y: 4,
            r: 10,
          },
          {
            x: 7,
            y: 4,
            r: 10,
          },

          {
            x: 7,
            y: 5,
            r: 10,
          },

          {
            x: 3,
            y: 6,
            r: 10,
          },
          {
            x: 6,
            y: 6,
            r: 10,
          },

          {
            x: 7,
            y: 6,
            r: 10,
          },
          {
            x: 8,
            y: 6,
            r: 10,
          },
          {
            x: 9,
            y: 6,
            r: 10,
          },
          {
            x: 10,
            y: 6,
            r: 6,
          },
          {
            x: 9,
            y: 7,
            r: 10,
          },
          {
            x: 9,
            y: 7,
            r: 10,
          },
          {
            x: 9,
            y: 7,
            r: 10,
          },
          {
            x: 4,
            y: 8,
            r: 10,
          },
          {
            x: 7,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 9,
            r: 10,
          },
        ],
      },
      {
        label: ['Extrovert'],
        backgroundColor:"rgba(237, 222, 164, 0.2)",
        borderColor: 'rgba(237, 222, 164, 1)',
        hoverBackgroundColor: "rgba(237, 222, 164, 0.2)",
        data: [
          {
            x: 10,
            y: 5,
            r: 10,
          },
          {
            x: 7,
            y: 6,
            r: 10,
          },
          {
            x: 10,
            y: 6,
            r: 10,
          },
          {
            x: 7,
            y: 7,
            r: 10,
          },
          {
            x: 9,
            y: 7,
            r: 10,
          },
          {
            x: 7,
            y: 8,
            r: 10,
          },
          {
            x: 7,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 9,
            r: 10,
          },
          {
            x: 10,
            y: 10,
            r: 10,
          },
          {
            x: 10,
            y: 10,
            r: 10,
          },
        ],
      },
      {
        label: ['Anders'],
        backgroundColor:"rgba(54, 162, 235, 0.2)",
        borderColor: 'rgba(54, 162, 235, 1)',
        hoverBackgroundColor: "rgba(54, 162, 235, 0.2)",
        data: [
          {
            x: 3,
            y: 7,
            r: 10,
          },
          {
            x: 4,
            y: 8,
            r: 10,
          },
          {
            x: 1,
            y: 4,
            r: 10,
          },
          {
            x: 3,
            y: 5,
            r: 10,
          },
          {
            x: 4,
            y: 6,
            r: 10,
          },
          {
            x: 5,
            y: 7,
            r: 10,
          },
          {
            x: 6,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 5,
            r: 10,
          },
          {
            x: 4,
            y: 7,
            r: 10,
          },
          {
            x: 6,
            y: 6,
            r: 10,
          },
          {
            x: 7,
            y: 7,
            r: 10,
          },
          {
            x: 8,
            y: 5,
            r: 10,
          },
          {
            x: 9,
            y: 7,
            r: 10,
          },
          {
            x: 10,
            y: 7,
            r: 10,
          },
          {
            x: 5,
            y: 8,
            r: 10,
          },
          {
            x: 7,
            y: 8,
            r: 10,
          },
          {
            x: 8,
            y: 8,
            r: 10,
          },
          {
            x: 9,
            y: 8,
            r: 10,
          },
          {
            x: 10,
            y: 8,
            r: 10,
          },
          {
            x: 6,
            y: 9,
            r: 10,
          },
          {
            x: 9,
            y: 9,
            r: 10,
          },
          {
            x: 10,
            y: 9,
            r: 10,
          },
        ],
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: '#FFF',
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Wat voor cijfer geven de studenten hun gezondheid',
            fontColor: '#FFF',
          },
          ticks: {
            beginAtZero: true,
            fontColor: '#FFF',
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Wat voor cijfer geef je de toekomst? (1-10)',
            fontColor: '#FFF',
          },
          ticks: {
            beginAtZero: true,
            fontColor: '#FFF',
          },
        },
      ],
    },
  },
});
