// Function that builds the chart for Event-Based Analysis events avoided, Sketch 9.4

// Names and colours match classnames and colors found in charts.css
const eventChartColors = {
    'chart-purple': 'rgb(203, 13, 137)',
    'chart-blue': 'rgb(0, 146, 188)',
    'chart-medium-purple': 'rgba(203, 13, 137, 0.5)',
    'chart-medium-blue': 'rgba(0, 146, 188, 0.5)',
    'chart-light-blue': 'rgba(127, 200, 221, 0.5)',
    'chart-green': 'rgb(126, 211, 33)',
    'chart-grey': 'rgb(193, 197, 200)',
}

// Color and display name scheme to be used in chart and legend functions
const chartColorScheme = {
    'CVD': {
        'angina': {
            displayName: 'Angina',
            color: 'chart-blue'
        },
        'myocardial_infarction': {
            displayName: 'Myocardial Infarction',
            color: 'chart-purple'
        },
        'stroke': {
            displayName: 'Stroke',
            color: 'chart-medium-purple'
        },
        'heart_failure': {
            displayName: 'Heart Failure',
            color: 'chart-medium-blue'
        },
        'PVD': {
            displayName: 'PVD',
            color: 'chart-light-blue'
        },
    },
    'HFpEF': {
        'angina': {
            displayName: 'All-cause death',
            color: 'chart-blue'
        },
        'myocardial_infarction': {
            displayName: 'Hospitalizations due to HFpEF',
            color: 'chart-purple'
        },
        'stroke': {
            displayName: 'Absenteeism',
            color: 'chart-medium-purple'
        },
    },
    'OA': {
        'angina': {
            displayName: 'Knee revision',
            color: 'chart-blue'
        },
        'myocardial_infarction': {
            displayName: 'Knee replacement',
            color: 'chart-purple'
        },
        'stroke': {
            displayName: 'All-cause death',
            color: 'chart-medium-purple'
        },
        'PVD': {
            displayName: 'Absenteeism days',
            color: 'chart-light-blue'
        },
        'heart_failure': {
            displayName: 'Presenteeism days',
            color: 'chart-medium-blue'
        },
    },
}


function getEventsData(currentData, timeHorizon = 1, pop_of_interest, viewAsPercentage = false) {
    let POI = pop_of_interest;
    if (POI !== 'HFpEF' && POI !== 'OA') {
        POI = 'CVD';
    }
    console.log('events timeHorizon', timeHorizon)
    const yearsChosen = timeHorizon;
    const yearsArray = yearLabels(currentData, yearsChosen);
    const barData = setTotalEventsLabels(yearsArray, viewAsPercentage, POI);
    const totalEventsConfig = totalEventsChartConfig(barData, POI, viewAsPercentage);

    buildTotalEventsChart(totalEventsConfig);
    buildEventsLegend(POI);
}


// Set labels for Event-based savings chart
function setTotalEventsLabels(yearsArray, viewAsPercentage, POI) {
    const barLabels = [];

    const newData = {};

    for (let i = 0; i < yearsArray.length; i++) {
        for (let cost in yearsArray[i]) {
            if (cost in chartColorScheme[POI]) {
                const data = yearsArray[i][cost];
                if (newData[cost]) {
                    newData[cost].push(Number(data[(viewAsPercentage ? 1 : 0)]));
                }
                else {
                    newData[cost] = [];
                    newData[cost].push(Number(data[(viewAsPercentage ? 1 : 0)]));
                }
            }
        }
        barLabels.push(i + 1);
    }
    const newDatasets = [];

    for (let cost in newData) {
        newDatasets.push({ name: cost, data: newData[cost] })
    }

    const barData = {
        labels: barLabels,
        datasets: newDatasets
    };
    return barData;
};



// Config for Total Events-based savings chart
function totalEventsChartConfig(barData, POI, viewAsPercentage) {
    const configDatasets = [];

    barData.datasets.forEach(dataset => {
        configDatasets.push({
            type: 'bar',
            label: '',
            data: dataset.data.reverse(), // Display data from bottom-to-top
            backgroundColor: eventChartColors[chartColorScheme[POI][dataset.name].color],
            barThickness: 50 / barData.labels.length, // Allow bars to resize for available space
            maxBarThickness: 50
        });
    });

    const totalEventsConfig = {
        type: 'bar',
        data: {
            datasets: configDatasets,
            labels: barData.labels.reverse(), // Display data from bottom-to-top
        },
        options: {
            indexAxis: 'y', // Display chart horizontally
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'TOTAL EVENTS AVOIDED'
                    },
                    grid: {
                        borderDash: [3, 2],
                        display: true
                    },
                    ticks: {
                        precision: 0,
                    },
                },
                y: {
                    position: 'left',
                    title: {
                        display: true,
                        text: 'YEAR'
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: Math.min(100 / barData.labels.length, 16) // y-axis tick font max-size = 16px, can shrink as needed
                        }
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    text: "Yearly clinical events avoided",
                    display: true,
                    align: 'start'
                }
            }
        }
    }

    return totalEventsConfig;
}

// Dynamically populate chart legend based on POI
function buildEventsLegend(POI = 'CVD') {
    const list = document.querySelector('#eventsAvoidedLegend ul');
    // Empty previous legend
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    if (list) {
        for (let cost in chartColorScheme[POI]) {
            const listItem = document.createElement('li');

            listItem.classList.add(chartColorScheme[POI][cost].color);
            listItem.textContent = chartColorScheme[POI][cost].displayName;

            list.appendChild(listItem);
        }
    }
}

function buildTotalEventsChart(totalEventsConfig) {
    const holder = document.getElementById('eventsAvoidedChartHolder');
    const canvas = document.createElement('canvas');
    canvas.classList.add('chart-canvas');
    // Canvas needs explicit height and width or it will not display correctly
    // Vales are arbitrary, will be overwritten by CSS
    canvas.height = 300;
    canvas.width = 300;

    // Empty the holder element if it contains a canvas from a previous call
    if (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

    holder.appendChild(canvas);
    const myBmiChart = new Chart(
        canvas.getContext('2d'),
        totalEventsConfig
    )
}
