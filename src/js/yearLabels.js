// A function to loop through a json object and return data
// associated with years chosen by user
function yearLabels(data, yearsChosen) {
    let yearArray = [];
    const regexp = /Year\d+/;
    for (let key in data) {
        if (regexp.test(key) && key.split('Year')[1] <= Number(yearsChosen)) {
            yearArray.push(data[key]);
        }
    }
    return yearArray;
}

function displayChartROI(ROI, timeHorizon, percentage, textElementID, valueElementID) {
    document.getElementById(textElementID).textContent = `ROI in year ${timeHorizon}`;
    if (percentage) {
        document.getElementById(valueElementID).textContent = ROI.toFixed(2) + '%';
    }
    else {
        document.getElementById(valueElementID).textContent = ROI.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
}