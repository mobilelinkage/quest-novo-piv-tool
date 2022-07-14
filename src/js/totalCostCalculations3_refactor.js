function buildTable3(table1, employeesSelected = 4613, employeeCount = 10000, ROIResultSelect = true) {

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

    const interventions = ['NI', 'ILT', 'AOM_Original'];

    const table3 = {};


    function initiateTable() {
        // Add each heading to table
        headings.forEach(heading => {
            table3[heading.name] = {};
            // Build a subheading for each intervention type
            interventions.forEach(intervention => {
                table3[heading.name][intervention] = {};
                // Build a subheading for years 1 - 10
                for (let i = 1; i <= 10; i++) {
                    let value = 0;
                    // Calculate value table "cell" based on headers and year parameters
                    value = heading.function(intervention, i);
                    // Assign calculated value
                    table3[heading.name][intervention][`Year${i}`] = value;
                }
            });
        });
    }

    // Functions to populate table "cells"

    function fillSavings(intervention, year) {
        return -(table1.AOM_1.cumulative_total_costs[`Year${year}`] - table1[intervention].cumulative_total_costs[`Year${year}`]);
    }

    function fillInvestment(intervention, year) {
        return table1.AOM_1.cumulative_investment[`Year${year}`] - table1[intervention].cumulative_investment[`Year${year}`];
    }

    function fillCostOffsets_population(intervention, year) {
        return table3.savings[intervention][`Year${year}`] - table3.investment[intervention][`Year${year}`];
    }

    function fillCostOffsets_perPatient(intervention, year) {
        return table3.costOffsets_population[intervention][`Year${year}`] / employeesSelected;
    }

    function fillcostOffsets_perMember(intervention, year) {
        return table3.costOffsets_population[intervention][`Year${year}`] / employeeCount;
    }

    function fillROI_Savings_Investment(intervention, year) {
        if (intervention === 'NI') {
            return table3.savings.NI[`Year${year}`] / table3.investment.NI[`Year${year}`];
        }
        else {
            const investments = [];
            for (const year in table3.investment[intervention]) {
                investments.push(table3.investment[intervention][year]);
            }
            return Math.min(...investments) < 0 ? null : table3.savings[intervention][`Year${year}`] / table3.investment[intervention][`Year${year}`];
        }
    }

    function fillROI_CostOffsets_Investment(intervention, year) {
        if (intervention === 'NI') {
            return table3.costOffsets_population.NI[`Year${year}`] / table3.investment.NI[`Year${year}`];
        }
        else {
            const investments = [];
            for (const year in table3.investment[intervention]) {
                investments.push(table3.investment[intervention][year]);
            }
            return Math.min(...investments) < 0 ? null : table3.costOffsets_population[intervention][`Year${year}`] / table3.investment[intervention][`Year${year}`];
        }
    }

    function fillROI_Reference() {
        return !ROIResultSelect ? 0 : 1;
    }

    function fillCostOffsets_PMPM(intervention, year) {
        return table3.costOffsets_perMember[intervention][`Year${year}`] / 12;
    }

    function fillCostOffsets_PPPM_DC_Only(intervention, year) {
        const costsAOM = (table1.AOM_1.direct_medical_costs[`Year${year}`] + table1.AOM_1.direct_pharmacy_costs[`Year${year}`]);
        const costsIntervention = (table1[intervention].direct_medical_costs[`Year${year}`] + table1[intervention].direct_pharmacy_costs[`Year${year}`]);

        return (-(costsAOM - costsIntervention) - table3.investment[intervention][`Year${year}`]) / employeeCount / 12;
    }

    function fillCostOffsets_PPPM(intervention, year) {
        return table3.costOffsets_perPatient[intervention][`Year${year}`] / 12;
    }



    initiateTable();
    return table3;
}



