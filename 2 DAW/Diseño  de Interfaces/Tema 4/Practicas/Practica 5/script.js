//TODAS LAS VARIABLES

var dataBarProducto1_19 = [748, 149, 1590, 519];
var dataBarProducto2_19 = [1000, 900, 800, 700];
var dataBarProducto3_19 = [419, 219, 79, 2105];
var dataBarProducto1_20 = [133, 221, 783, 2478];
var dataBarProducto2_20 = [408, 547, 675, 734];
var dataBarProducto3_20 = [348, 264, 948, 3159];

var areaBarA_19 = [47, 16, 27, 94, 78];
var areaBarB_19 = [27, 98, 76, 87, 15];
var areaBarA_20 = [65, 75, 70, 80, 60];
var areaBarB_20 = [54, 65, 60, 70, 70];

var percentil25_DWEC = [4, 4, 4, 4];
var percentil25_DWES = [5.125, 5.125, 5.125, 5.125];
var percentil50_DWEC = [6.5, 6.5, 6.5, 6.5];
var percentil50_DWES = [6, 6, 6, 6];
var percentil75_DWEC = [9, 9, 9, 9];
var percentil75_DWES = [7.625, 7.625, 7.625, 7.625];
var notas_DWEC = [5.5, 7.5, 9.5, 3.5];
var notas_DWES = [8, 5, 5.5, 6.5];

var percentil25_DWEC_19 = [2.25, 2.25, 2.25, 2.25];
var percentil25_DWES_19 = [3.875, 3.875, 3.875, 3.875];
var percentil50_DWEC_19 = [5.75, 5.75, 5.75, 5.75];
var percentil50_DWES_19 = [6.5, 6.5, 6.5, 6.5];
var percentil75_DWEC_19 = [7.75, 7.75, 7.75, 7.75];
var percentil75_DWES_19 = [9.125, 9.125, 9.125, 9.125];
var notas_DWEC_19 = [7, 4.5, 8, 1.5];
var notas_DWES_19 = [5, 8, 9.5, 3.5];

var doughnut_19 = [1790, 7516, 1749, 320, 2791];
var doughnut_20 = [2478, 5267, 734, 784, 433];



// BAR CHART

var bar_chart = document.getElementById('barChart').getContext('2d');

var myBarChart = new Chart(bar_chart, {
    type: 'bar',

    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Producto 1',

            backgroundColor: 'rgba(75, 94, 171)',
            data: dataBarProducto1_20

        }, {
            label: 'Producto 2',

            backgroundColor: 'rgba(99, 49, 72)',
            data: dataBarProducto2_20
        }, {
            label: 'Producto 3',
            backgroundColor: 'rgba(82, 133, 105)',
            data: dataBarProducto3_20
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Venta de productos (miles)'
        }
    }

});

// RADAR CHART

var radar_chart = document.getElementById('radarChart').getContext('2d');

var myRadarChart = new Chart(radar_chart, {
    type: 'radar',

    data: {

        labels: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
        datasets: [{
            label: 'Canditado 1',
            data: areaBarA_20,
            backgroundColor: 'rgba(232, 230, 190, 0.3)',
        }, {
            label: 'Canditado 2',
            data: areaBarB_20,
            backgroundColor: 'rgba(219, 134, 199, 0.3)',
        }]
    },
    options: options = {
        scale: {
            angleLines: {
                display: true,
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 20,
                display: false

            },
            pointLabels: {
                fontSize: 18,
            }
        }
    }
});

//MIXED CHART

var mixed_chart = document.getElementById('mixedChart').getContext('2d');
var myMixedChart = new Chart(mixed_chart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'DAWC',
            data: notas_DWEC,
            backgroundColor: 'rgba(230, 165, 214, 0.5)',
            position: 'bottom',
        }, {
            label: 'DAWC',
            data: notas_DWES,
            backgroundColor: 'rgba(191, 237, 154, 0.5)',
            position: 'bottom',
        }, {
            label: 'Percentil 25 DWEC',
            data: percentil25_DWEC,
            type: 'line',
            backgroundColor: 'rgba(39, 101, 227, -0.1)',
            borderColor: 'rgba(39, 101, 227)',
            position: 'bottom',
        }, {
            label: 'Percentil 25 DWES',
            data: percentil25_DWES,
            type: 'line',
            backgroundColor: 'rgba(21, 237, 82, -0.1)',
            borderColor: 'rgba(21, 237, 82)',
            position: 'bottom',
        }, {
            label: 'Percentil 50 DWEC',
            data: percentil50_DWEC,
            type: 'line',
            backgroundColor: 'rgba(227, 83, 39, -0.1)',
            borderColor: 'rgba(227, 83, 39)',
            position: 'bottom',
        }, {
            label: 'Percentil 50 DWES',
            data: percentil50_DWES,
            type: 'line',
            backgroundColor: 'rgba(240, 183, 26, -0.1)',
            borderColor: 'rgba(240, 183, 26)',
            position: 'bottom',
        }, {
            label: 'Percentil 75 DWEC',
            data: percentil75_DWEC,
            type: 'line',
            backgroundColor: 'rgba(172, 34, 214, -0.1)',
            borderColor: 'rgba(172, 34, 214)',
            position: 'bottom',
        }, {
            label: 'Percentil 75 DWES',
            data: percentil75_DWES,
            type: 'line',
            backgroundColor: 'rgba(219, 59, 105, -0.1)',
            borderColor: 'rgba(219, 59, 105)',
            position: 'bottom',
        }],
        labels: ['Alumno1', 'Alumno2', 'Alumno3', 'Alumno4'],
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: {
                    offsetGridLines: true
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                    display: true,
                    stepSize: 1,
                    "beginAtZero": true
                }
            }],

        },
        title: {

            display: true,
            text: 'Distribucion de notas por asignatura'
        },
        legend: {
            display: true,
            position: 'bottom'
        }

    }
});


//DONUT CHART

var donut_chart = document.getElementById('donutChart').getContext('2d');
var myDoughnutChart = new Chart(donut_chart, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: doughnut_20,
            backgroundColor: ['rgba(212, 140, 147)',
                'rgba(207, 134, 205)',
                'rgba(121, 184, 170)',
                'rgba(162, 108, 173)',
                'rgba(209, 201, 142)'
            ]


        }],
        labels: [
            'Java',
            'PHP',
            'Node',
            'Phython',
            'Asp.NET',
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'bottom'
        }
    }
});




function addData() {
    let data = document.getElementById("year").value;

    if (data == "2019") {

        //CHART bar
        myBarChart.data.datasets[0].data = dataBarProducto1_19;
        myBarChart.data.datasets[1].data = dataBarProducto2_19;
        myBarChart.data.datasets[2].data = dataBarProducto3_19;

        //CHART RADAR_CHART

        myRadarChart.data.datasets[0].data = areaBarA_19;
        myRadarChart.data.datasets[1].data = areaBarB_19;

        //MIXED 
        myMixedChart.data.datasets[0].data = notas_DWEC_19;
        myMixedChart.data.datasets[1].data = notas_DWES_19;
        myMixedChart.data.datasets[2].data = percentil25_DWEC_19;
        myMixedChart.data.datasets[3].data = percentil25_DWES_19;
        myMixedChart.data.datasets[4].data = percentil50_DWEC_19;
        myMixedChart.data.datasets[5].data = percentil50_DWES_19;
        myMixedChart.data.datasets[6].data = percentil75_DWEC_19;
        myMixedChart.data.datasets[7].data = percentil75_DWES_19;

        //DONUT
        myDoughnutChart.data.datasets[0].data = doughnut_19;

    } else {
        //CHART bar
        myBarChart.data.datasets[0].data = dataBarProducto1_20;
        myBarChart.data.datasets[1].data = dataBarProducto2_20;
        myBarChart.data.datasets[2].data = dataBarProducto3_20;

        //CHART RADAR_CHART

        myRadarChart.data.datasets[0].data = areaBarA_20;
        myRadarChart.data.datasets[1].data = areaBarB_20;

        //MIXED 
        myMixedChart.data.datasets[0].data = notas_DWEC;
        myMixedChart.data.datasets[1].data = notas_DWES;
        myMixedChart.data.datasets[2].data = percentil25_DWEC;
        myMixedChart.data.datasets[3].data = percentil25_DWES;
        myMixedChart.data.datasets[4].data = percentil50_DWEC;
        myMixedChart.data.datasets[5].data = percentil50_DWES;
        myMixedChart.data.datasets[6].data = percentil75_DWEC;
        myMixedChart.data.datasets[7].data = percentil75_DWES;

        //DONUT
        myDoughnutChart.data.datasets[0].data = doughnut_20;
    }

    myBarChart.update();
    myRadarChart.update();
    myMixedChart.update();
    myDoughnutChart.update();
    console.log(data);


}