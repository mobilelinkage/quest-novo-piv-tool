// Function that builds the chart for Event-Based Analysis cost savings, Sketch 9.4  
function getSavingsData(currentData, timeHorizon = 1, pop_of_interest, percentage = false) {
    let POI = pop_of_interest;
    if (POI !== 'HFpEF' && POI !== 'OA') {
        POI = 'CVD';
    }

    const yearsChosen = timeHorizon;
    const yearsArray = yearLabels(currentData, yearsChosen);
    const barData = setSavingsLabels(yearsArray, POI);
    const savingsConfig = savingsChartConfig(barData, percentage);

    buildSavingsChart(savingsConfig);
};


// Set labels for Event-based savings chart
function setSavingsLabels(yearsArray, POI) {
    const indirectCostsList = {
        'CVD': ['absenteeism', 'presenteeism', 'STD'],
        'HFpEF' : ['absenteeism', 'angina'],
        'OA': ['absenteeism', 'PVD', 'heart_failure', 'STD']
    }
    const directCosts = [];
    const indirectCosts = [];
    const barLabels = [];

    for (let i = 0; i < yearsArray.length; i++) {
        let currentDirectCosts = 0;
        let currentIndirectCosts = 0;

        for (let cost in yearsArray[i]) {
            if (indirectCostsList[POI].includes(cost)) {
                currentIndirectCosts += yearsArray[i][cost];
            }
            else {
                currentDirectCosts += yearsArray[i][cost];
            }
        }

        directCosts.push(currentDirectCosts)
        indirectCosts.push(currentIndirectCosts)
        barLabels.push(i + 1);
    }

    const barData = {
        labels: barLabels,
        datasets: [
            {
                data: directCosts,
            },
            {
                data: indirectCosts,
            },
        ]
    };

    return barData;
};


// Config for Event-based savings chart
function savingsChartConfig(barData, percentage) {
    const savingsConfig = {
        type: 'bar',
        data: {
            datasets: [
                {
                    type: 'bar',
                    label: '',
                    data: barData.datasets[0].data.reverse(), // Display data from bottom-to-top
                    backgroundColor: '#CB0D89',
                    barThickness: 50 / barData.labels.length, // Allow bars to resize for available space
                    maxBarThickness: 50
                }, {
                    type: 'bar',
                    label: '',
                    data: barData.datasets[1].data.reverse(), // Display data from bottom-to-top
                    backgroundColor: '#0092BC',
                    barThickness: 50 / barData.labels.length, // Allow bars to resize for available space
                    maxBarThickness: 50
                }],
            labels: barData.labels.reverse(), // Display data from bottom-to-top
        },
        options: {
            indexAxis: 'y', // Display chart horizontally
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'TOTAL SAVINGS'
                    },
                    grid: {
                        borderDash: [3, 2],
                        display: true
                    },
                    ticks: {
                        precision: 0,
                        callback: function (value, index, values) {
                            if (percentage) {
                                // Format ticks for percentage values
                                return value.toFixed(2) + '%';
                            } else {
                                // Add dollar-signs and comma delimiters
                                return '$' + value.toLocaleString('en-US');
                            }
                        }
                    },
                    stacked: true
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
                    stacked: true,
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    text: "Yearly direct and indirect cost savings",
                    display: true,
                    align: 'start'
                }
            }
        }
    }

    return savingsConfig;
}



function buildSavingsChart(savingsConfig) {
    const holder = document.getElementById('eventsSavingsChartHolder');
    const canvas = document.createElement('canvas');
    canvas.classList.add('chart-canvas');
    // Canvas needs explicit height and width or it will not display correctly
    // Values are arbitrary, will be overwritten by CSS
    canvas.height = 300;
    canvas.width = 300;

    // Empty the holder element if it contains a canvas from a previous call
    if (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }

    holder.appendChild(canvas);
    const myBmiChart = new Chart(
        canvas.getContext('2d'),
        savingsConfig
    )
}