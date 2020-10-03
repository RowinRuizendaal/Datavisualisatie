const ctx1 = document.getElementById('Chart').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Extrovert', 'Introvert', '50/50', 'Geen van beiden'],
        datasets: [{
            label: 'Geloof je in buitenaarts leven introvert/extrovert',
            data: [
                24, 
                28, 
                37, 
                2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
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
                    labelString: 'aantal',
                    fontColor: '#FFF',
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'categorieën',
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
          label: 'Alcohol',
          data: [
            {
              x: 5,
              y: 50,
              r: 10
            }
          ],
          backgroundColor:"#ff6384",
          hoverBackgroundColor: "#ff6384"
        },
        {
          label: 'MDMA',
            data: [
              {
                x: 5,
                y: 8,
                r: 10
              }
            ],
            backgroundColor:"#002626",
            hoverBackgroundColor: "#002626"
        },
        {
          label: 'Wiet',
            data: [
              {
                x: 12,
                y: 50,
                r: 10
              }
            ],
            backgroundColor:"#48a23b",
            hoverBackgroundColor: "#48a23b"
        },
        {
          label: 'Hash',
            data: [
              {
                x: 3,
                y: 150,
                r: 10
              }
            ],
            backgroundColor:"#0E4749",
            hoverBackgroundColor: "#0E4749"
        },
        {
          label: 'Overige drugs',
            data: [
              {
                x: 25,
                y: 20,
                r: 10
              }
            ],
            backgroundColor:"#95C623",
            hoverBackgroundColor: "#95C623"
        },
        {
            label: 'Geen',
            data: [
              {
                x: 41,
                y: 0,
                r: 10
              }
            ],
            backgroundColor:"#E55812",
            hoverBackgroundColor: "#E55812"
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
                    labelString: 'Aantal personen',
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
            label: 'Hoevel wil je verdienen',
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
                'rgba(76,24,210,0.4)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,101,80,0.4)',
                'rgba(255,190,80,0.4)',
                'rgba(76,24,210,0.4)'
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