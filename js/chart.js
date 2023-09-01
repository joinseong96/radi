
function runChart(){
    Highcharts.chart('container', {
    chart: {
    type: 'solidgauge',
    backgroundColor: "#1e1e1e",
    width: "523",
    height: "523",
    },
    title: {
        text: null,
        },
    credits: {
    enabled: false,
    },
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
            {
            outerRadius: "112%",
            innerRadius: "88%",
            backgroundColor: "#393939",
            borderWidth: 0,
            },
        ],
        },
    yAxis: {
    min: 0,
    max: 1000,
    lineWidth: 0,
    tickPositions: []
    },
    plotOptions: {
    solidgauge: {
        dataLabels: {
        enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
    }
    },
    series: [{
    name: '',
    data: [{
        color: Highcharts.getOptions().colors[0],
        radius: '112%',
        innerRadius: '88%',
        y: 875,
    }]
    },
    ]
    });
}