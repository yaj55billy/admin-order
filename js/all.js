
var ctx = document.getElementById("myChart");

var myLineChart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN', '12 JUN','13 JUN'],

        datasets: [
            {
                // label: 'My First dataset',
                backgroundColor: '#D0021B',
                borderColor:'#D0021B',
                data: [300, 300, 2300, 3000, 2200, 300, 900,2000],
                fill: false,
            }, {
                // label: 'My Second dataset',
                backgroundColor: '#4A90E2',
                borderColor:'#4A90E2',
                data: [6100, 5300, 2000, 4000, 3800, 5300, 6200,5000],
                fill: false,
            },{
                backgroundColor: '#7ED321',
                borderColor:'#7ED321',
                data: [7300, 7000, 5400, 6300, 5500, 6200,7600,7500],
                fill: false,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        
        title: {
            display: false,
            text: 'Grid Line Settings'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                    // color: ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
                },
                ticks: {
                    min: 0,
                    max: 8000,
                    stepSize: 2000
                }
            }]
        },

        layout: {
            padding: {
                left: 15,
                right: 15,
                top: 15,
                bottom: 15
            },

        },

        //不要用貝茲曲線(圓弧)
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
    }
    
});




