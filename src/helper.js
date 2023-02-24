export  const createRandomTimeData = (count=300000) => {
    let data=[] , time = (new Date()).getTime(), i;
    for (i = -(count); i <= 0; i += 1) {
        data.push([
            time + i * 1000,
            Math.round(Math.random() * 100)
        ]);
    }
    let blob = new Blob([JSON.stringify(data,null, 2)], {
        type: "application/json",
    });
    const a = document.createElement('a');
    a.download = 'stock_chart_data_points_k.json';
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
}

export  const createRandomData = (count=300000) => {
    let data=[] , i;
    for (i = -(count); i <= 0; i += 1) {
        data.push([
                Math.pow(Math.random(), 2) * 100,
                Math.pow(Math.random(), 2) * 100
        ]);
    }
    let blob = new Blob([JSON.stringify(data,null, 2)], {
        type: "application/json",
    });
    const a = document.createElement('a');
    a.download = 'scatter_chart_data_points_k.json';
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
}

export  const createRandomHeatMapData = (count=10000) => {
    let data=[] , i;
    for (i = -(count); i <= 0; i += 1) {
        data.push([
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ]);
    }
    let blob = new Blob([JSON.stringify(data,null, 2)], {
        type: "application/json",
    });
    const a1 = document.createElement('a');
    a1.download = 'heat_map_chart_data_points_k.json';
    a1.href = URL.createObjectURL(blob);
    a1.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a1.href), 30 * 1000);
    });
    a1.click();
    let x_data=[], y_data=[]
    for (i = 0; i <= 100; i += 1) {
        x_data.push("some"+i+"x")
        y_data.push("thing"+i+"y")
    }
    let blob2 = new Blob([JSON.stringify(x_data,null, 2)], {
        type: "application/json",
    });
    const a2 = document.createElement('a');
    a2.download = 'x_data.json';
    a2.href = URL.createObjectURL(blob2);
    a2.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a2.href), 30 * 1000);
    });
    a2.click();
    let blob3 = new Blob([JSON.stringify(y_data,null, 2)], {
        type: "application/json",
    });
    const a3 = document.createElement('a');
    a3.download = 'y_data.json';
    a3.href = URL.createObjectURL(blob3);
    a3.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a3.href), 30 * 1000);
    });
    a3.click();
}

export  const createRandomComboData = (dataPointCount=12, seriesCount=5) => {
    let data=[] , i, series = [], x ;
    for (x = 1; x <= seriesCount; x ++) {
        data=[]
        for (i = 1; i <= dataPointCount; i += 1) {
            data.push(
                Math.floor(Math.random() * 100)
            );
        }
        series.push({
            type: "spline",
            data: data,
            marker: {
                lineWidth: 2
            }
        })
    }
    data=[]
    for (i = 1; i <= dataPointCount; i += 1) {
        data.push(
            Math.floor(Math.random() * 100)
        );
    }
    series.push({
        type: "column",
        data: data
    })

    let blob = new Blob([JSON.stringify(series,null, 2)], {
        type: "application/json",
    });
    const a = document.createElement('a');
    a.download = 'combo_chart_data_points_k.json';
    a.href = URL.createObjectURL(blob);
    a.addEventListener('click', (e) => {
        setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
    });
    a.click();
}

export function onChartRender(id, startTime) {
    return (event)=> {
        const endTime=new Date()
        console.log("Done loading chart: ", id , " at ", endTime )
        console.log("Time elapsed for chart: ",id, " is: ",  endTime-startTime)
    }
}