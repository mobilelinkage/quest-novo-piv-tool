function buildROITable(newTotalCostTable, employeesSelected = 4613, employeeCount = 10000, ROIResultSelect = true) {

    const headings = [
        { name: 'savings', function: fillSavings },
        { name: 'investment', function: fillInvestment },
        { name: 'costOffsets_population', function: fillCostOffsets_population },
        { name: 'costOffsets_perPatient', function: fillCostOffsets_perPatient },
        { name: 'costOffsets_perMember', function: fillcostOffsets_perMember },
        { name: 'ROI_Savings_Investment', function: fillROI_Savings_Investment },
        { name: 'ROI_CostOffsets_Investment', function: fillROI_CostOffsets_Investment },
        { name: 'ROI_Reference', function: fillROI_Reference },
        { name: 'costOffsets_PMPM', function: fillCostOffsets_PMPM },
        { name: 'costOffsets_PPPM_DC_Only', function: fillCostOffsets_PPPM_DC_Only },
        { name: 'costOffsets_PPPM', function: fillCostOffsets_PPPM }
    ];

    const interventions = ['NI', 'ILT'];

    const roiTable = {};


    function initiateTable() {
        // Add each heading to table
        headings.forEach(heading => {
            roiTable[heading.name] = {};
            // Build a subheading for each intervention type
            interventions.forEach(intervention => {
                roiTable[heading.name][intervention] = {};
                // Build a subheading for years 1 - 10
                for (let i = 1; i <= 10; i++) {
                    let value = 0;
                    // Calculate value table "cell" based on headers and year parameters
                    value = heading.function(intervention, i);
                    // Assign calculated value
                    roiTable[heading.name][intervention][`Year${i}`] = value;
                }
            });
        });
    }

    // Functions to populate table "cells"

    function fillSavings(intervention, year) {
        return -(newTotalCostTable.CumulativeTotalCosts[year] - newTotalCostTable[`CumulativeTotalCosts_${intervention}`][year]);
    }

    function fillInvestment(intervention, year) {
        const interventionValue = intervention === 'ILT' ? newTotalCostTable[`CumulativeInvestment_${intervention}`][year] : 0;

        return newTotalCostTable.CumulativeAOMInvestment[year] - interventionValue;
    }

    function fillCostOffsets_population(intervention, year) {
        return roiTable.savings[intervention][`Year${year}`] - roiTable.investment[intervention][`Year${year}`];
    }

    function fillCostOffsets_perPatient(intervention, year) {
        return roiTable.costOffsets_population[intervention][`Year${year}`] / employeesSelected;
    }

    function fillcostOffsets_perMember(intervention, year) {
        return roiTable.costOffsets_population[intervention][`Year${year}`] / employeeCount;
    }

    function fillROI_Savings_Investment(intervention, year) {
        if (intervention === 'NI') {
            return roiTable.savings.NI[`Year${year}`] / roiTable.investment.NI[`Year${year}`];
        }
        else {
            const investments = [];
            for (const year in roiTable.investment[intervention]) {
                investments.push(roiTable.investment[intervention][year]);
            }
            return Math.min(...investments) < 0 ? null : roiTable.savings[intervention][`Year${year}`] / roiTable.investment[intervention][`Year${year}`];
        }
    }

    function fillROI_CostOffsets_Investment(intervention, year) {
        if (intervention === 'NI') {
            return roiTable.costOffsets_population.NI[`Year${year}`] / roiTable.investment.NI[`Year${year}`];
        }
        else {
            const investments = [];
            for (const year in roiTable.investment[intervention]) {
                investments.push(roiTable.investment[intervention][year]);
            }
            return Math.min(...investments) < 0 ? null : roiTable.costOffsets_population[intervention][`Year${year}`] / roiTable.investment[intervention][`Year${year}`];
        }
    }

    function fillROI_Reference() {
        return !ROIResultSelect ? 0 : 1;
    }

    function fillCostOffsets_PMPM(intervention, year) {
        return roiTable.costOffsets_perMember[intervention][`Year${year}`] / 12;
    }

    function fillCostOffsets_PPPM_DC_Only(intervention, year) {
        const costsAOM = (newTotalCostTable.directMedicalCosts[year] + newTotalCostTable.pharmacyCosts[year]);

        const costsIntervention = (newTotalCostTable[`directMedicalCosts_${intervention}`][year] + newTotalCostTable[`pharmacyCosts_${intervention}`][year]);

        return (-(costsAOM - costsIntervention) - roiTable.investment[intervention][`Year${year}`]) / employeeCount / 12;
    }

    function fillCostOffsets_PPPM(intervention, year) {
        return roiTable.costOffsets_perPatient[intervention][`Year${year}`] / 12;
    }



    initiateTable();
    return roiTable;
}



