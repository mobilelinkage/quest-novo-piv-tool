function populateSimpleResults(currentROITables, timeHorizon, POI = "People with overweight/ obesity") {
    const interventionSelected = inputDashboard.AOM_VS.value === 'No intervention' ? 'NI' : 'ILT'; 
    const obesityClass = inputDashboard.Obesity_Class.value;
    const viewBy = inputDashboard.View_By.value;
    const viewPercentage = viewBy === "ROI as % of investment";
    // const POI = "People with overweight/ obesity";

    // Pair value from View By dropdown with equivalent object in data
    const viewSchema = {
        "ROI as % of investment": "ROI_CostOffsets_Investment",
        "ROI": "ROI_Savings_Investment",
        "Cost offset (population)": "costOffsets_population",
        "Cost offset (per member)": "costOffsets_perMember",
        "Cost offset (PMPM)": "costOffsets_PMPM",
        "Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)": "costOffsets_perPatient",
        "Cost offset (PPPM)": "costOffsets_PPPM"
    }

    // Filter currentROITables based on dropdown values
    const simpleTableData = currentROITables[obesityClass][POI].totals[viewSchema[viewBy]][interventionSelected];
    const selectedPopulation = currentROITables[obesityClass][POI].detailed.displayPopulation.toLocaleString('en-us');

    const selectedROI = buildSimpleResultsTable(simpleTableData, timeHorizon, viewPercentage);
    populateHeader(selectedROI, selectedPopulation, POI, interventionSelected, timeHorizon);
    buildComorbitiesTable(currentROITables[obesityClass], viewSchema[viewBy], interventionSelected, timeHorizon, POI, viewPercentage);
    const newTopFiveArray = buildTopFiveArray(currentROITables, viewSchema[viewBy], timeHorizon);
    buildTopFiveTable(newTopFiveArray, viewPercentage); 
    getBmiData(simpleTableData, timeHorizon, viewPercentage);

    // Populate modal function call
    get_results_modal_data(POI, obesityClass)

    customUserInputs();
}

function buildSimpleResultsTable(simpleTableData, timeHorizon, viewPercentage) {
    const tableContainer = document.querySelector('.simpleResult_rightTableTable.tableHolder');

    emptyContents(tableContainer);

    // Build table skeleton
    const table = document.createElement('table');
    table.classList.add('simpleResult_roiTable');

    const tableBody = document.createElement('tbody');

    const headerRow = document.createElement('tr');

    const yearHeader = document.createElement('th');
    yearHeader.textContent = 'Year';
    const roiHeader = document.createElement('th');
    roiHeader.textContent = 'ROI';

    headerRow.appendChild(yearHeader);
    headerRow.appendChild(roiHeader);
    tableBody.appendChild(headerRow);

    // Dynamically populate results table
    let finalROI;

    for (let i = 1; i <= timeHorizon; i++) {
        const row = document.createElement('tr');

        const yearData = document.createElement('td');
        yearData.textContent = `Year ${i}`;

        const roiData = document.createElement('td');
        currentROI = formatter(simpleTableData[`Year${i}`], viewPercentage);
        roiData.textContent = currentROI;

        // This function will return ROI for year selected to display in header
        if (i === timeHorizon) {
            finalROI = currentROI;
        }

        row.appendChild(yearData);
        row.appendChild(roiData);
        tableBody.appendChild(row);
    }

    table.appendChild(tableBody);
    tableContainer.appendChild(table);

    return finalROI;
}

function populateHeader(selectedROI, selectedPopulation, POI, interventionSelected, timeHorizon) {
    const header = document.querySelector('.simpleResult_tableTitle');
    const populationContainer = document.querySelector('.simpleResult_population .populationContainer');
    const roiContainer = document.querySelector('.simpleResult_tableValue');

    const formattedPOI = POI.replace('overweight/ obesity', 'overweight and obesity');

    populationContainer.textContent = selectedPopulation;
    roiContainer.textContent = selectedROI;

    emptyContents(header);

    const title = document.createElement('h3');
    
    POI = POI.replace("People with overweight/ obesity", "People with overweight and obesity");
    POI = POI.replace("(inc. Wegovy)", "");
    title.textContent = POI;
    // title.textContent = formattedPOI;

    const subTitle = document.createElement('p');
    subTitle.textContent = `ROI of AOM vs ${interventionSelected === 'ILT' ? 'ILT' : 'No intervention'} in patients with `;
    const subTitleSpan = document.createElement('span');
    subTitleSpan.textContent = `${formattedPOI} in ${timeHorizon} ${timeHorizon === 1 ? 'year' : 'years'}`;
    
    subTitle.appendChild(subTitleSpan);

    header.appendChild(title);
    header.appendChild(subTitle);
}

function buildTopFiveArray(currentROITables, viewBy, timeHorizon) {
    // Create array of objects containing all possible POI values
    // based on obesity class, POI, intervention, and viewBy
    const roiArray = [];

    for (let obesityClass in currentROITables) {
        for (let POI in currentROITables[obesityClass]) {
            for (let intervention in currentROITables[obesityClass][POI].totals[viewBy]) {
                const ROI = currentROITables[obesityClass][POI].totals[viewBy][intervention][`Year${timeHorizon}`];

                roiArray.push({
                    obesityClass,
                    POI,
                    intervention,
                    ROI
                });
            }
        }
    }

    const topFiveArray = roiArray.sort((a, b) => b.ROI - a.ROI).slice(0, 5);
    return topFiveArray;
}

function buildTopFiveTable(topFiveArray, viewPercentage) {
    const table = document.querySelector('.topResultsSection table');

    emptyContents(table);

    topFiveArray.forEach(result => {
        const row = document.createElement('tr');

        const poiData = document.createElement('td');
        poiData.textContent = `${result.obesityClass}, ${result.intervention}, ${result.POI.replace('overweight/ obesity', 'overweight and obesity')}`;

        const roiData = document.createElement('td');
        roiData.textContent = `ROI: ${formatter(result.ROI, viewPercentage)}`;

        row.appendChild(poiData);
        row.appendChild(roiData);
        table.appendChild(row);
    });

}

function buildComorbitiesTable(data, viewBy, intervention, timeHorizon, currentPOI, viewPercentage) {
    // Declaring here in array to maintain display order of table
    const POIValues = [
        "Any cardiometabolic disease*",
        "Cardiovascular diseases",
        "Cardiovascular diseases (with cerebrovascular diseases)",
        "Cardiovascular diseases (with diabetes)",
        "Cardiovascular diseases (with dyslipidemia)",
        "Cardiovascular diseases (with hypertension)",
        "Cerebrovascular diseases",
        "Diabetes",
        "Dyslipidemia",
        "Hypertension",
        "Osteoarthritis",
        "Osteoarthritis (with cardiovascular diseases)",
        "Osteoarthritis (with diabetes)",
        "People with overweight/ obesity",
    ];


    const table = document.querySelector('.comorbiditiesSection table');

    emptyContents(table);

    POIValues.forEach(POIValue => {
        const row = document.createElement('tr');

        const poiName = document.createElement('td'); 
    
        const btn = document.createElement('input');
        btn.type = 'radio';
        btn.classList.add('simpleResult_comorbiditiesInput');
        btn.id = POIValue;
        btn.value = POIValue;
        btn.name = 'Comorbidities';
        btn.checked = POIValue === currentPOI; // Maintain user selection when buttons are repopulated
        btn.addEventListener('change', () => {
            if (btn.checked) {
                populateSimpleResults(currentROITables, timeHorizon, btn.value);
            }
            else {
                return;
            }
        });

        const label = document.createElement('label');
        label.htmlFor = POIValue;
        label.textContent = POIValue.replace('overweight/ obesity', 'overweight and obesity');
        label.classList.add('simpleResult_comorbiditiesLabel');

        poiName.appendChild(btn);
        poiName.appendChild(label);

        const poiData = document.createElement('td');
        const poiValue = data[POIValue].totals[viewBy][intervention][`Year${timeHorizon}`];

        poiData.textContent = formatter(poiValue, viewPercentage);

        row.appendChild(poiName);
        row.appendChild(poiData);
        table.appendChild(row);
    });

}

function formatter(number, viewPercentage) {
    return viewPercentage
        ? (number * 100).toFixed(2) + '%'
        : number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

function emptyContents(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}