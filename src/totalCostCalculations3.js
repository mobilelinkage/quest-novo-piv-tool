function buildTable3(table1, employeesSelected = 4613, employeeCount = 10000, ROIResultSelect = true) {

    const headings = [
        {name: 'savings', function: fillSavings},
        {name: 'investment', function: fillInvestment},
        {name: 'costOffsets_population', function: fillCostOffsets_population},
        {name: 'costOffsets_perPatient', function: fillCostOffsets_perPatient},
        {name: 'costOffsets_perMember', function: fillcostOffsets_perMember},
        {name: 'ROI_Savings_Investment', function: fillROI_Savings_Investment},
        {name: 'ROI_CostOffsets_Investment', function: fillROI_CostOffsets_Investment},
        {name: 'ROI_Reference', function: fillROI_Reference},
        {name: 'costOffsets_PMPM', function: fillCostOffsets_PMPM},
        {name: 'costOffsets_PPPM_DC_Only', function: fillCostOffsets_PPPM_DC_Only},
        {name: 'costOffsets_PPPM', function: fillCostOffsets_PPPM}
    ];

    const interventions = ['NI', 'ILT', 'Sema'];

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
        if (intervention === 'NI') {
            return -(table1.AOM_1.cumulative_total_costs[`Year${year}`] - table1.NI.cumulative_total_costs[`Year${year}`]);
        }
        else if (intervention === 'ILT') {
            return -(table1.AOM_1.cumulative_total_costs[`Year${year}`] - table1.ILT.cumulative_total_costs[`Year${year}`]);
        }
        else if (intervention === 'Sema') {
            return -(table1.AOM_1.cumulative_total_costs[`Year${year}`] - table1.AOM_Original.cumulative_total_costs[`Year${year}`]);
        }
    }

    function fillInvestment(intervention, year) {
        if (intervention === 'NI') {
            return table1.AOM_1.cumulative_investment[`Year${year}`] - table1.NI.cumulative_investment[`Year${year}`];
        }
        else if (intervention === 'ILT') {
            return table1.AOM_1.cumulative_investment[`Year${year}`] - table1.ILT.cumulative_investment[`Year${year}`];
        }
        else if (intervention === 'Sema') {
            return table1.AOM_1.cumulative_investment[`Year${year}`] - table1.AOM_Original.cumulative_investment[`Year${year}`];
        }
    }

    function fillCostOffsets_population(intervention, year) {
        if (intervention === 'NI') {
            return table3.savings.NI[`Year${year}`] - table3.investment.NI[`Year${year}`];
        }
        else if (intervention === 'ILT') {
            return table3.savings.ILT[`Year${year}`] - table3.investment.ILT[`Year${year}`];
        }
        else if (intervention === 'Sema') {
            return table3.savings.Sema[`Year${year}`] - table3.investment.Sema[`Year${year}`];
        }
    }

    function fillCostOffsets_perPatient(intervention, year) {
        if (intervention === 'NI') {
            return table3.costOffsets_population.NI[`Year${year}`] / employeesSelected;
        }
        else if (intervention === 'ILT') {
            return table3.costOffsets_population.ILT[`Year${year}`] / employeesSelected;
        }
        else if (intervention === 'Sema') {
            return table3.costOffsets_population.Sema[`Year${year}`] / employeesSelected;
        }
    }

    function fillcostOffsets_perMember(intervention, year) {
        if (intervention === 'NI') {
            return table3.costOffsets_population.NI[`Year${year}`] / employeeCount;
        }
        else if (intervention === 'ILT') {
            return table3.costOffsets_population.ILT[`Year${year}`] / employeeCount;
        }
        else if (intervention === 'Sema') {
            return table3.costOffsets_population.Sema[`Year${year}`] / employeeCount;
        }
    }

    function fillROI_Savings_Investment(intervention, year) {
        if (intervention === 'NI') {
            return table3.savings.NI[`Year${year}`] / table3.investment.NI[`Year${year}`];
        }
        else if (intervention === 'ILT') {
            const investmentsILT = [];
            for (const year in table3.investment.ILT) {
                investmentsILT.push(table3.investment.ILT[year]);
            }
            return Math.min(...investmentsILT) < 0 ? null : table3.savings.ILT[`Year${year}`] / table3.investment.ILT[`Year${year}`];
        }
        else if (intervention === 'Sema') {
            const investmentsSema = [];
            for (const year in table3.investment.Sema) {
                investmentsSema.push(table3.investment.Sema[year]);
            }
            return Math.min(...investmentsSema) < 0 ? null : table3.savings.Sema[`Year${year}`] / table3.investment.Sema[`Year${year}`];
        }
    }

    function fillROI_CostOffsets_Investment(intervention, year) {
        if (intervention === 'NI') {
            return table3.costOffsets_population.NI[`Year${year}`] / table3.investment.NI[`Year${year}`];
        }
        else if (intervention === 'ILT') {
            const investmentsILT = [];
            for (const year in table3.investment.ILT) {
                investmentsILT.push(table3.investment.ILT[year]);
            }
            return Math.min(...investmentsILT) < 0 ? null : table3.costOffsets_population.ILT[`Year${year}`] / table3.investment.ILT[`Year${year}`];
        }
        else if (intervention === 'Sema') {
            const investmentsSema = [];
            for (const year in table3.investment.Sema) {
                investmentsSema.push(table3.investment.Sema[year]);
            }
            return Math.min(...investmentsSema) < 0 ? null : table3.costOffsets_population.Sema[`Year${year}`] / table3.investment.Sema[`Year${year}`];
        }
    }

    function fillROI_Reference() {
        return !ROIResultSelect ? 0 : 1; 
    }

    function fillCostOffsets_PMPM(intervention, year) {
        if (intervention === 'NI') {
            return table3.costOffsets_perMember.NI[`Year${year}`] / 12;
        }
        else if (intervention === 'ILT') {
            return table3.costOffsets_perMember.ILT[`Year${year}`] / 12;
        }
        else if (intervention === 'Sema') {
            return table3.costOffsets_perMember.Sema[`Year${year}`] / 12;
        }
    }

    function fillCostOffsets_PPPM_DC_Only(intervention, year) {
        const costsAOM = (table1.AOM_1.direct_medical_costs[`Year${year}`] + table1.AOM_1.direct_pharmacy_costs[`Year${year}`]);
        
        if (intervention === 'NI') {
            const costsNI = (table1.NI.direct_medical_costs[`Year${year}`] + table1.NI.direct_pharmacy_costs[`Year${year}`]);
            return (-(costsAOM - costsNI) - table3.investment.NI[`Year${year}`]) / employeeCount / 12;
        }
        else if (intervention === 'ILT') {
            const costsILT = (table1.ILT.direct_medical_costs[`Year${year}`] + table1.ILT.direct_pharmacy_costs[`Year${year}`]);
            return (-(costsAOM - costsILT) - table3.investment.ILT[`Year${year}`]) / employeeCount / 12;
        }
        else if (intervention === 'Sema') {
            const costsSema = (table1.AOM_Original.direct_medical_costs[`Year${year}`] + table1.AOM_Original.direct_pharmacy_costs[`Year${year}`]);
            return (-(costsAOM - costsSema) - table3.investment.Sema[`Year${year}`]) / employeeCount / 12;
        }
    }

    function fillCostOffsets_PPPM(intervention, year) {
        if (intervention === 'NI') {
            return table3.costOffsets_perPatient.NI[`Year${year}`] / 12;
        }
        else if (intervention === 'ILT') {
            return table3.costOffsets_perPatient.ILT[`Year${year}`] / 12;
        }
        else if (intervention === 'Sema') {
            return table3.costOffsets_perPatient.Sema[`Year${year}`] / 12;
        }
    }
    

    
    initiateTable();
    return table3;
}



