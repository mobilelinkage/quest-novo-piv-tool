// Function that builds the chart for Summary Results, Sketch 10.0  
function getSummaryData(currentData, intervention, chartHolderID, yearsChosen = 10, percentage = false) {
    const yearsArraySavings = yearLabels(currentData['savings'][intervention], yearsChosen);
    const yearsArrayInvestment = yearLabels(currentData['investment'][intervention], yearsChosen);
    const yearsArrayROI = yearLabels(currentData['ROI_Savings_Investment'][intervention], yearsChosen);

    const title = `AOMS vs. ${(intervention === 'NI') ? 'no intervention' : 'ILT'}`;

    const [lineData, barData, lastROI] = setChartLabels(yearsArraySavings, yearsArrayInvestment, yearsArrayROI);
    const combinedConfig = chartConfig(lineData, barData, percentage, title);
    buildSummaryChart(combinedConfig, chartHolderID);
    // Returning last ROI to be passed into displayChartROI()
    return lastROI;
};


// Set labels for Summary bar/line chart
function setChartLabels(yearsArraySavings, yearsArrayInvestment, yearsArrayROI) {
    const lineInputInvestments = [];
    const lineInputSavings = [];
    const lineRoi = [];
    const barLabels = [];
    for (let i = 0; i < yearsArraySavings.length; i++) {
        lineInputSavings.push(yearsArraySavings[i]);
        lineInputInvestments.push(yearsArrayInvestment[i]);
        lineRoi.push(yearsArrayROI[i]);
        barLabels.push(i + 1);
    }

    const lineData = {
        labels: barLabels,
        datasets: [
            {
                data: lineRoi,
                yAxisID: 'ROI'
            }
        ]
    };
    const barData = {
        labels: barLabels,
        datasets: [
            {
                data: lineInputSavings,
                yAxisID: 'original'
            },
            {
                data: lineInputInvestments,
                yAxisID: 'original'
            },
        ]
    };

    return [lineData, barData, lineRoi[lineRoi.length - 1]];
};


// Config for Summary bar/line chart
function chartConfig(lineData, barData, percentage, title) {
    const combinedConfig = {
        type: 'bar',
        data: {
            datasets: [
                {
                    type: 'line',
                    label: '',
                    data: lineData.datasets[0].data,
                    borderColor: '#7ED321',
                    pointRadius: '0',
                    yAxisID: 'ROI'
                },
                {
                    type: 'bar',
                    label: 'AOMS vs. no intervention',
                    data: barData.datasets[0].data,
                    backgroundColor: '#C1C5C8',
                    yAxisID: 'original'
                }, {
                    type: 'bar',
                    label: '',
                    data: barData.datasets[1].data,
                    backgroundColor: '#CB0D89',
                    yAxisID: 'original'
                }],
            labels: barData.labels,
        },
        options: {
            scales: {
                original: {
                    position: 'left',
                    ticks: {
                        precision: 0,
                        callback: function (value, index, values) {
                            if (value < 1000000) {
                                return '0.' + (value / 10000)
                            }
                            else {
                                return (value / 1000000).toFixed(2);
                            }
                        }
                    },
                    title: {
                        text: '2019 USD (MILLIONS)',
                        display: true
                    }
                },
                ROI: {
                    position: 'right',
                    min: 0,
                    suggestedMax: 2,
                    // Add dashed line at tick value 1.0
                    grid: {
                        borderDash: [7, 5],
                        display: true,
                        color: function (context) {
                            if (context.tick.value === 1) {
                                return '#8a8a8a';
                            }
                            return 'rgba(0,0,0,0)';
                        },
                        z: 10,
                    },
                    ticks: {
                        precision: 0,
                        callback: function (value, index, values) {
                            return value + '.00';
                        }
                    },
                    title: {
                        text: 'ROI',
                        display: true
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'YEAR'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: title
                }
            }
        }
    }

    return combinedConfig;
};


function buildSummaryChart(combinedConfig, chartHolderID) {
    const holder = document.getElementById(chartHolderID);
    const canvas = document.createElement('canvas');
    canvas.classList.add('chart-canvas');
    // Canvas needs explicit height and width or it will not display correctly
    // Vales are arbitrary, will be overwritten by CSS
    canvas.height = 300;
    canvas.width= 300;

    const ROIDisplay = document.createElement('div');
    ROIDisplay.classList.add('chart-roi-display');

    // Empty the holder element if it contains a canvas from a previous call
    if (holder.firstChild) {
        holder.removeChild(holder.firstChild);
    }
    
    holder.appendChild(canvas);
    const myBmiChart = new Chart(
        canvas.getContext('2d'),
        combinedConfig
    );
};
