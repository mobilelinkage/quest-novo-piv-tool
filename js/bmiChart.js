// Function that builds the chart for Event-Based Analysis cost savings, Sketch 9.4  
function getBmiData(currentData, yearsChosen = 10, percentage = false) {
    const yearsArray = yearLabels(currentData, yearsChosen);
    const barData = setBmiLabels(yearsArray);
    const bmiConfig = bmiChartConfig(barData, percentage);
    buildBmiChart(bmiConfig);
};


// Set labels for Event-based savings chart
function setBmiLabels(yearsArray) {
    const cost = [];
    const barLabels = [];
    for (let i = 0; i < yearsArray.length; i++) {
        cost.push(yearsArray[i])
        barLabels.push('Year ' + (i + 1));
    }

    const barData = {
        labels: barLabels,
        datasets: [
            {
                data: cost
            },
            {
                data: cost,
                xAxisID: 'dashed'
            }
        ]
    };

    return barData;
};


// Config for Event-based savings chart
function bmiChartConfig(barData, percentage) {
    const bmiConfig = {
        type: 'bar',
        data: {
            datasets: [
                {
                    type: 'bar',
                    label: '',
                    data: barData.datasets[0].data,
                    backgroundColor: function (context) {
                        const index = context.dataIndex;
                        const value = context.dataset.data[index];
                        return value < 1 ? '#AAA' : '#7ED321' // Values >= 1.00 are drawn in green
                    },
                    barThickness: 100 / barData.labels.length, // Allow bars to resize for available space
                    maxBarThickness: 50,
                    xAxisID: 'x'
                },
                {
                    type: 'bar',
                    label: '',
                    data: barData.datasets[0].data,
                    backgroundColor: 'rgba(0,0,0,0)',
                    barThickness: 100 / barData.labels.length, // Allow bars to resize for available space
                    maxBarThickness: 50,
                    xAxisID: 'dashed'
                }
            ],
            labels: barData.labels
        },
        options: {
            indexAxis: 'y', // Display chart horizontally
            scales: {
                // "dashed" used only for dotted line at $1.00
                dashed: {
                    position: 'top',
                    grid: {
                        borderDash: [5, 7],
                        borderWidth: 0,
                        drawTicks: false,
                        lineWidth: 2,
                        display: true,
                        color: function (context) {
                            if (context.tick.value === 1) {
                                return '#CB0D89';
                            }
                            return 'rgba(0,0,0,0)';
                        },
                        z: 20
                    },
                    ticks: {
                        display: false
                    },
                },
                x: {
                    grid: {
                        borderWidth: 0,
                        drawTicks: false,
                        lineWidth: 2,
                        display: true,
                        color: function (context) {
                            if (context.tick.value === 1) {
                                return 'rgba(0,0,0,0)';
                            }
                            return '#CCC';
                        }
                    },
                    ticks: {
                        padding: 20,
                        min: 0,
                        callback: function (value, index, values) {
                            if (percentage) {
                                // Format ticks for percentage values
                                return value.toFixed(2) + '%';
                            } else {
                                // Format ticks for currency values
                                return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                            }
                        }
                    },
                    stacked: true,
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
                        padding: 20,
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
                }
            }
        }
    }

    return bmiConfig;
}



function buildBmiChart(bmiConfig) {
    const holder = document.getElementById('bmiChartHolder');
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
        bmiConfig
    )
}