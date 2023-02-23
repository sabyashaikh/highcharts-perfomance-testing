export function getOptions()  {
    return {
        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
        },
        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1,
            events: {
            }
        },

        title: {
            text: ''
        },
        accessibility: {
            point: {
                descriptionFormatter: function (point) {
                    let ix = point.index + 1,
                        xName = getPointCategoryName(point, 'x'),
                        yName = getPointCategoryName(point, 'y'),
                        val = point.value;
                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                }
            }
        },
        xAxis: {
            min:0,
            max:100,
            categories: require("./heat_map_x_axis_categories.json")
        },

        yAxis: {
            min:0,
            max:100,
            categories: require("./heat_map_y_axis_categories.json"),
            title: null,
            reversed: true
        },
        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: '#1fc3ce'
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + getPointCategoryName(this.point, 'x') + '</b> has production of <br><b>' +
                    this.point.value + '</b> for <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
            }
        },

        series: [{
            name: 'Heatmap',
            borderWidth: 1,
            data: require('./heat_map_data_points_1k.json'),
            dataGrouping: {
                enabled: false
            },
            accessibility: {
                enabled: false
            },
            seriesThreshold: 1,
            turboThreshold: 0
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    yAxis: {
                        labels: {
                            formatter: function () {
                                return this.value.charAt(0);
                            }
                        }
                    }
                }
            }]
        }

    }
}

function getPointCategoryName(point, dimension) {
    let series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}