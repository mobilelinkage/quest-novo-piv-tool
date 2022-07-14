function populateDetailedResults(currentROITables, timeHorizon = 10) {
    // Query values of all Detailed Results dropdowns from DOM
    const AOM_VS = document.querySelector('select[name="AOM_VS"]');
    const Obesity_Class = document.querySelector('select[name="Obesity_Class"]');
    const View_By = document.querySelector('select[name="View_By"]');
    const [ POI_A, POI_B ] = document.querySelectorAll('select[name="POI1"]');

    const intervention = (AOM_VS.value === 'No intervention') ? 'NI' : 'ILT';
    const displayDetailedPercentage = (View_By.value === "ROI as % of investment");

    // Extract relevant data from currentROITables based on user selections
    const currentTableData_A = currentROITables[Obesity_Class.value][POI_A.value].detailed;
    const currentTableData_B = currentROITables[Obesity_Class.value][POI_B.value].detailed;
   
    const currentChartData_A = currentROITables[Obesity_Class.value][POI_A.value].totals;
    const currentChartData_B = currentROITables[Obesity_Class.value][POI_B.value].totals;
   

    populateTable('A', currentTableData_A, intervention, AOM_VS, displayDetailedPercentage);
    populateTable('B', currentTableData_B, intervention, AOM_VS, displayDetailedPercentage);

    populateCharts(currentChartData_A, currentChartData_B, timeHorizon);

    displayROI(timeHorizon, displayDetailedPercentage, intervention, currentTableData_A, currentTableData_B);

    displayPopulation(currentTableData_A, currentTableData_B);

    // Let second POI dropdown open upwards so it odes not get cut off by the bottom of the screen
    document.querySelectorAll('.detailedResults_select')[1].classList.add('flow-up');
}


function FormatCurrency(myAmount) {
    var amount = parseFloat(myAmount);
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


function populateTable(tableID, currentData, intervention, AOM_VS) {
    document.getElementById(`interventionHeading_${tableID}`).textContent = AOM_VS.value;

    document.getElementById(`investmentCostsAOM_${tableID}`).textContent = FormatCurrency(currentData.displayCumulativeAOMInvestment);
    document.getElementById(`investmentCostsIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayCumulativeAOMInvestment_${intervention}`]);
    document.getElementById(`myInvestment_${tableID}`).textContent = FormatCurrency(currentData[`myInvestment_${intervention}`]);
    document.getElementById(`totalDirectAndIndirectCosts_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayTotalDirectAndIndirectCosts);
    document.getElementById(`totalDirectAndIndirectCostsIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayTotalDirectAndIndirectCosts_${intervention}`]);
    document.getElementById(`totalDirectAndIndirectCosts_Savings_${tableID}`).textContent = FormatCurrency(currentData[`TotalDirectAndIndirectCostsSavings_${intervention}`]);
    document.getElementById(`totalDirectAndIndirectCosts_CostOffsets_${tableID}`).textContent = FormatCurrency(currentData[`costOffsets_${intervention}`]);
    document.getElementById(`medicalServiceCosts_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayDirectMedicalCosts);
    document.getElementById(`medicalServiceCostsIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayDirectMedicalCosts_${intervention}`]);
    document.getElementById(`medicalServiceCosts_Savings_${tableID}`).textContent = FormatCurrency(currentData[`MedicalServicesCostsSavings_${intervention}`]);
    document.getElementById(`pharmacyCosts_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayPharmacyCosts);
    document.getElementById(`pharmacyCostsIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayPharmacyCosts_${intervention}`]);
    document.getElementById(`pharmacyCosts_Savings_${tableID}`).textContent = FormatCurrency(currentData[`PharmacyCostsSavings_${intervention}`]);
    document.getElementById(`absenteeism_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayAbsenteeismCosts);
    document.getElementById(`absenteeismIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayAbsenteeismCosts_${intervention}`]);
    document.getElementById(`absenteeism_Savings_${tableID}`).textContent = FormatCurrency(currentData[`AbsenteeismSavings_${intervention}`]);
    document.getElementById(`presenteeism_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayPresenteeismCosts);
    document.getElementById(`presenteeismIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayPresenteeismCosts_${intervention}`]);
    document.getElementById(`presenteeism_Savings_${tableID}`).textContent = FormatCurrency(currentData[`PresenteeismSavings_${intervention}`]);
    document.getElementById(`workersCompensation_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayWorkersCosts);
    document.getElementById(`workersCompensationIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayWorkersCosts_${intervention}`]);
    document.getElementById(`workersCompensation_Savings_${tableID}`).textContent = FormatCurrency(currentData[`WorkersCompensationSavings_${intervention}`]);
    document.getElementById(`STAndLTDisability_AOM_${tableID}`).textContent = FormatCurrency(currentData.displayDisabilityCosts);
    document.getElementById(`STAndLTDisabilityIntervention_${tableID}`).textContent = FormatCurrency(currentData[`displayDisabilityCosts_${intervention}`]);
    document.getElementById(`STAndLTDisability_Savings_${tableID}`).textContent = FormatCurrency(currentData[`DisabilitySavings_${intervention}`]);

}

function populateCharts(currentChartData_A, currentChartData_B, timeHorizon) {
    getSummaryData(currentChartData_A, 'NI', 'NI_ChartHolder_A', timeHorizon);
    
    getSummaryData(currentChartData_A, 'ILT', 'ILT_ChartHolder_A', timeHorizon);

    getSummaryData(currentChartData_B, 'NI', 'NI_ChartHolder_B', timeHorizon);
    
    getSummaryData(currentChartData_B, 'ILT', 'ILT_ChartHolder_B', timeHorizon);
}

function displayROI(timeHorizon, displayDetailedPercentage, intervention, currentData_A, currentData_B) {
    // Collect all "ROI in year" text elements
    const ROI_Text = document.querySelectorAll('.ROI-display_text');
    // Set all text with myTimeHorizonValue
    ROI_Text.forEach(textbox => {
        textbox.textContent = `ROI in year ${timeHorizon}`
    });

    const ROI_Value_A = document.querySelectorAll('.ROI-display_value_A');
    const ROI_Value_B = document.querySelectorAll('.ROI-display_value_B');

    // Fill based on View_By value and A/B data
    ROI_Value_A.forEach(valuebox => {
        // If the ROI is part of a chart, it will have a specific intervention it is attached to
        // Otherwise, the Roi will change based on a dropdown menu
        const currentIntervention = valuebox.dataset.intervention || intervention;

        if (displayDetailedPercentage) {
            valuebox.textContent = (currentData_A[`ROISavingsInPercentage_${currentIntervention}`]*100).toFixed(2) + '%';
        }
        else {
            valuebox.textContent = FormatCurrency(currentData_A[`ROISavings_${currentIntervention}`]);
        }
    });
    ROI_Value_B.forEach(valuebox => {
        const currentIntervention = valuebox.dataset.intervention || intervention;

        if (displayDetailedPercentage) {
            valuebox.textContent = (currentData_B[`ROISavingsInPercentage_${currentIntervention}`]*100).toFixed(2) + '%';
        }
        else {
            valuebox.textContent = FormatCurrency(currentData_B[`ROISavings_${currentIntervention}`]);
        }
    });
}

function displayPopulation(currentTableData_A, currentTableData_B) {
    document.querySelector('.detailedResults_population_A').textContent = currentTableData_A.displayPopulation.toLocaleString('en-us');
    document.querySelector('.detailedResults_population_B').textContent = currentTableData_B.displayPopulation.toLocaleString('en-us');
}
