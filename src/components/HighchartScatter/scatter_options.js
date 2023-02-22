export function getOptions() {
    return {
        chart: {
            zoomType: 'xy',
            height: '100%',
            events: {
                render: function(event) {
                    //console.log("Done scatter loading at :", new Date())
                }
            }
        },

        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
        },

        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}><div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div>'
            }
        },

        xAxis: {
            min: 0,
            max: 100,
            gridLineWidth: 1
        },

        yAxis: {
            // Renders faster when we don't have to compute min and max
            min: 0,
            max: 100,
            minPadding: 0,
            maxPadding: 0,
            title: {
                text: null
            }
        },

        title: {
            text: 'Scatter chart with 1 million points'
        },

        legend: {
            enabled: false
        },

        series: [{
            type: 'scatter',
            color: 'rgb(31,195,206)',
            data: [] ,
            marker: {
                radius: 0.5
            },
            tooltip: {
                followPointer: false,
                pointFormat: '[{point.x:.1f}, {point.y:.1f}]'
            }
        }]

    }
}