export function getOptions() {
    return {
        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
        },

        title: {
            text: '',
            align: 'left'
        },
        yAxis: {
            title: {
                text: 'Y-axis'
            }
        },
        tooltip: {
            valueSuffix: ' million liters'
        },
        series: [{
            type: 'column',
            name: '2020',
            data: [59, 83, 65, 228, 184]
        }, {
            type: 'column',
            name: '2021',
            data: [24, 79, 72, 240, 167]
        }, {
            type: 'column',
            name: '2022',
            data: [58, 88, 75, 250, 176]
        }, {
            type: 'spline',
            name: 'Average',
            data: [47, 83.33, 70.66, 239.33, 175.66],
            marker: {
                lineWidth: 2,
                fillColor: 'white'
            }
        }
        ]
    }
}