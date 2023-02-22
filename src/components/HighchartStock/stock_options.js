export function getOptions() {
    return {
        boost: {
            useGPUTranslations: true,
        },
        title: {
            text: 'My stock chart'
        },
        chart: {
            events: {
                load: function(event) {
                    //console.log("Done stock loading at :", new Date())
                }
            }
        },
        series: [{
            data: []
        }]
    }
}