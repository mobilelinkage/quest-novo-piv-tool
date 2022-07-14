function getMarkovHFpEFData(intervention, distro_table) {
   // console.log(intervention, distro_table, 'DISTRO HERE')
    const [averagesHFpEF, HFpEFsums] = getAverageHFpEFSheetData(intervention, distro_table);
   //  console.log(intervention, averagesHFpEF)
    // All functions to build HFpEF table

    function buildpHFpEFTable() {
        const headings = [
            { name: 'pHosp', function: fillRisk },
            { name: 'pDeath', function: fillDeath }
        ];

        const newHFpEFTable = {
            years: []
        }; 

        function buildHFpEFTable() {
            for (i = 0; i < 10; i++) {
                newHFpEFTable.years[i] = {};
                headings.forEach(heading => {
                    newHFpEFTable.years[i][heading.name] = heading.function(i + 1)
                });
            }
        }

        function fillRisk(year) {
            return averagesHFpEF[`year${year}`].weighted_average.overall_risk;
        }

        function fillDeath(year) {
            return averagesHFpEF[`year${year}`].weighted_average.overall_mortality;
        }

        buildHFpEFTable();
        return newHFpEFTable;
    }

    // All functions to build intervention table

    function buildInterventionTable(pHFpEFTable) {
        const headings = [
            { name: 'HFpEF', function: fillHFpEF },
            { name: 'hosp_x_1', function: fillHospX },
            { name: 'hosp_x_2', function: fillHospX },
            { name: 'hosp_x_3', function: fillHospX },
            { name: 'hosp_x_4', function: fillHospX },
            { name: 'hosp_x_5', function: fillHospX },
            { name: 'hosp_x_6', function: fillHospX },
            { name: 'hosp_x_7', function: fillHospX },
            { name: 'hosp_x_8', function: fillHospX },
            { name: 'hosp_x_9', function: fillHospX },
            { name: 'hosp_x_10', function: fillHospX },
            { name: 'death', function: fillInterventionDeath },
            { name: 'total', function: fillTotal },
            { name: 'new_hosp', function: fillNewHosp },
        ];

        const newInterventionTable = {
            years: [],
        };

        const interventionSums = {
            years: []
        }

        // Function to call all cell-filling functions
        function initiateTable() {
            for (let i = 0; i <= 10; i++) {
                newInterventionTable.years[i] = {};
                headings.forEach(heading => {
                    newInterventionTable.years[i][heading.name] = heading.function(i, heading.name);
                });
            }
            newInterventionTable.total_hosp = fillTotalHosp();
        }

        // Functions to fill individual "cells"

        function fillHFpEF(year) {
            let value;

            if (year === 0) {
                value = HFpEFsums.baseline.total;
            }
            else {
                const previous = newInterventionTable.years[year - 1].HFpEF;
                const hosp = pHFpEFTable.years[year - 1].pHosp;
                const death = pHFpEFTable.years[year - 1].pDeath;

                value = previous * (1 - hosp - death);
            }

            fillSums(year, value);
            return value;
        }

        function fillHospX(year, heading) {
            let value;

            if (year === 0) {
                value = 0;
            }
            else {
                // Get number from end of the heading name
                const hospYear = +heading.split('hosp_x_')[1];

                if (hospYear <= year) {
                    const prevHospYear = (hospYear - 1 > 0)
                        ? `hosp_x_${hospYear - 1}`
                        : 'HFpEF';
                    const prevHospX = newInterventionTable.years[year - 1][heading];
                    const prevHFpEF = newInterventionTable.years[year - 1][prevHospYear];
                    const hosp = pHFpEFTable.years[year - 1].pHosp;
                    const death = pHFpEFTable.years[year - 1].pDeath;

                    value = prevHospX * (1 - death - hosp) + prevHFpEF * hosp;
                }
                else {
                    value = 0;
                }
            }

            fillSums(year, value);
            return value;
        }

        function fillInterventionDeath(year) {
            let value;

            if (year === 0) {
                value = 0;
            }
            else {
                const allHosps = interventionSums.years[year - 1];
                const death = pHFpEFTable.years[year - 1].pDeath;
                const prevInterventionDeath = newInterventionTable.years[year - 1].death;

                value = allHosps * death + prevInterventionDeath;
            }

            return value;
        }

        function fillTotal(year) {
            return interventionSums.years[year] + newInterventionTable.years[year].death;
        }

        function fillNewHosp(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return interventionSums.years[year - 1] * pHFpEFTable.years[year - 1].pHosp;
            }
        }

        function fillTotalHosp() {
            return newInterventionTable.years.reduce((a, b) => {
                return a + b.new_hosp;
            }, 0);
        }

        // Utility function to sum up values as they are calculated, for use later in the table
        function fillSums(year, value) {
            if (interventionSums.years[year]) {
                interventionSums.years[year] += value;
            }
            else {
                interventionSums.years[year] = value;
            }
        }



        initiateTable();
        return newInterventionTable;
    }


    // All functions to build the half-cycle correction table

    function buildHalfCycleTable(interventionTable) {
        headings = [
            { name: 'HFpEF', function: fillHFpEF },
            { name: 'hospitalization_1', function: fillHospitalizationX },
            { name: 'hospitalization_2', function: fillHospitalizationX },
            { name: 'hospitalization_3', function: fillHospitalizationX },
            { name: 'hospitalization_4', function: fillHospitalizationX },
            { name: 'hospitalization_5', function: fillHospitalizationX },
            { name: 'hospitalization_6', function: fillHospitalizationX },
            { name: 'hospitalization_7', function: fillHospitalizationX },
            { name: 'hospitalization_8', function: fillHospitalizationX },
            { name: 'hospitalization_9', function: fillHospitalizationX },
            { name: 'hospitalization_10', function: fillHospitalizationX },
            { name: 'death', function: fillDeath_Half },
            { name: 'total', function: fillTotal_Half },
            { name: 'new_hosp', function: fillNewHosp_Half },
            { name: 'cost', function: fillCost_Half },
            { name: 'discounted', function: fillDiscounted },
            { name: 'cumulative', function: fillCumulative },
            { name: 'absenteeism_days', function: fillAbsenteesimDays },
            { name: 'absenteeism_cost', function: fillAbsenteesimCost },
            { name: 'absentee_discounted', function: fillAbsenteeDiscount },
            { name: 'absentee_cumulative', function: fillAbsenteeCumulative },
        ]


        const newHalfCycleTable = {
            years: []
        }

        const halfCycleSums = {
            years: []
        }

        const cost_of_inflation = 34805.11 // This value hard-coded in Markov HFpEF sheet
        const discount_rate = 0.03 // This value hard-coded in Cental Data Control sheet
        const length_of_hospital_stay = 7 //This value hard-coded in Markov HFpEF sheet
        const absentee_compensation = formattedUserInputData.hourly_compensation_input
        const working_hours_in_a_day = formattedUserInputData.working_hours_input


        // Function to call all cell-filling functions
        function initiateTable() {
            for (let i = 0; i <= 10; i++) {
                newHalfCycleTable.years[i] = {};
                headings.forEach(heading => {
                    newHalfCycleTable.years[i][heading.name] = heading.function(i, heading.name);
                });
            }
        }

        // Functions to fill "cells"

        function fillHFpEF(year) {
            let value;

            if (year === 0) {
                value = interventionTable.years[year].HFpEF
            }
            else {
                value = (interventionTable.years[year].HFpEF + interventionTable.years[year - 1].HFpEF) / 2
            }

            fillSums_Half(year, value)
            return value;
        }

        function fillHospitalizationX(year, heading) {
            let value;

            if (year === 0) {
                value = 0;
            }
            else {
                // Get number from end of the heading name
                const hospYear = +heading.split('hospitalization_')[1];

                if (hospYear <= year) {
                    const currentHosp = interventionTable.years[year][`hosp_x_${hospYear}`];
                    const prevHosp = interventionTable.years[year - 1][`hosp_x_${hospYear}`];
                    value = (currentHosp + prevHosp) / 2;
                }
                else {
                    value = 0;
                }
            }

            fillSums_Half(year, value);
            return value;
        }

        function fillDeath_Half(year) {
            let value;

            if (year === 0) {
                value = 0;
            }
            else {
                const currentDeath = interventionTable.years[year].death;
                const prevDeath = interventionTable.years[year - 1].death;

                value = (currentDeath + prevDeath) / 2;
            }

            fillSums_Half(year, value);
            return value;
        }

        // Utility function to sum up values as they are calculated, for use later in the table
        function fillSums_Half(year, value) {
            if (halfCycleSums.years[year]) {
                halfCycleSums.years[year] += value;
            }
            else {
                halfCycleSums.years[year] = value;
            }
        }

        function fillTotal_Half(year) {
            return halfCycleSums.years[year];
        }

        function fillNewHosp_Half(year) {
            if (year === 0) {
                return 0;
            }
            else {
                const currentNewHosp = interventionTable.years[year].new_hosp;
                const prevNewHosp = interventionTable.years[year - 1].new_hosp;

                return (currentNewHosp + prevNewHosp) / 2;
            }
        }

        function fillCost_Half(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return newHalfCycleTable.years[year].new_hosp * cost_of_inflation;
            }

        }

        function fillDiscounted(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return newHalfCycleTable.years[year].cost / (1 + discount_rate) ** year;
            }
        }

        function fillCumulative(year) {
            if (year === 0) {
                return 0;
            }
            else {
                const currentCumulative = newHalfCycleTable.years[year - 1].cumulative;
                const discounted = newHalfCycleTable.years[year].discounted;

                return currentCumulative + discounted;
            }
        }

        function fillAbsenteesimDays(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return newHalfCycleTable.years[year].new_hosp * length_of_hospital_stay;
            }
        }

        function fillAbsenteesimCost(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return newHalfCycleTable.years[year].absenteeism_days * absentee_compensation * working_hours_in_a_day;
            }
        }

        function fillAbsenteeDiscount(year) {
            if (year === 0) {
                return newHalfCycleTable.years[year].absenteeism_cost;
            }
            else {
                return newHalfCycleTable.years[year].absenteeism_cost / (1 + discount_rate) ** year;
            }
        }

        function fillAbsenteeCumulative(year) {
            if (year === 0) {
                return 0;
            }
            else {
                const currentCumulative = newHalfCycleTable.years[year - 1].absentee_cumulative;
                const discounted = newHalfCycleTable.years[year].absentee_discounted;

                return currentCumulative + discounted;
            }
        }


        initiateTable();
        return newHalfCycleTable;
    }

    
    const pHFpEFTable = buildpHFpEFTable();
    const interventionTable = buildInterventionTable(pHFpEFTable);
    const halfCycleTable = buildHalfCycleTable(interventionTable);


    return [pHFpEFTable, interventionTable, halfCycleTable];
}






// All functions to build the totals table

function buildTotalsTable(AOM_tables, selected_tables, timeHorizon) {
    // Pull out individual tables from getMarkovHFpEFData()
   //  console.log(AOM_tables)
    const [
        pHFpEFTable_AOM,
        interventionTable_AOM,
        halfCycleTable_AOM
    ] = AOM_tables;


    const [
        pHFpEFTable_selected,
        interventionTable_selected,
        halfCycleTable_selected
    ] = selected_tables;


    const factorHeadings = [
        'hospitalizations',
        'deaths',
        'hospitalization_cost',
        'absenteeism_days',
        'absenteeism_cost',
    ]

    const calcHeadings = [
        {name: 'AOM', function: fillAOM},
        {name: 'comparison', function: fillComparison},
        {name: 'avoided', function: fillAvoided},
        {name: 'avoided_percentage', function: fillAvoidedPercentage}
    ]

    const totalsTable = {
        'totalCosts': {},
        updateTotals: function(time) {
            initiateTotalsTable(time);
        }
    };

    function initiateTotalsTable(time = timeHorizon) {
        factorHeadings.forEach(factorHeading => {
            totalsTable[factorHeading] = {};
            calcHeadings.forEach(calcHeading => {
                totalsTable[factorHeading][calcHeading.name] = calcHeading.function(factorHeading, time);
            });
        });
        calcHeadings.forEach(calcHeading => {
            totalsTable.totalCosts[calcHeading.name] = fillTotalCosts(calcHeading.name);
        });
    }

    // Functions to fill totalsTable cells

    function fillAOM(factorHeading, timeHorizon) {
        const halfCycleHeadings = {
            'hospitalizations': 'new_hosp',
            'deaths': 'death',
            'hospitalization_cost': 'cumulative',
            'absenteeism_days': 'absenteeism_days',
            'absenteeism_cost': 'absentee_cumulative',
        }

        if (factorHeading === 'hospitalizations' || factorHeading === 'absenteeism_days') {
            return halfCycleTable_AOM.years.reduce((a, b, index) => {
                if (index <= timeHorizon) {
                    return a + b[halfCycleHeadings[factorHeading]];
                }
                return a + 0;
            }, 0);
        }
        else {
            return halfCycleTable_AOM.years[timeHorizon][halfCycleHeadings[factorHeading]];
        }
    }

    function fillComparison(factorHeading, timeHorizon) {
        const halfCycleHeadings = {
            'hospitalizations': 'new_hosp',
            'deaths': 'death',
            'hospitalization_cost': 'cumulative',
            'absenteeism_days': 'absenteeism_days',
            'absenteeism_cost': 'absentee_cumulative',
        }

        if (factorHeading === 'hospitalizations' || factorHeading === 'absenteeism_days') {
            return halfCycleTable_selected.years.reduce((a, b, index) => {
                if (index <= timeHorizon) {
                    return a + b[halfCycleHeadings[factorHeading]];
                }
                return a + 0;
            }, 0);
        }
        else {
            return halfCycleTable_selected.years[timeHorizon][halfCycleHeadings[factorHeading]];
        }
    }

    function fillAvoided(factorHeading) {
        return totalsTable[factorHeading].comparison - totalsTable[factorHeading].AOM;
    }

    function fillAvoidedPercentage(factorHeading) {
        return totalsTable[factorHeading].avoided / totalsTable[factorHeading].comparison;
    }

    function fillTotalCosts(calcHeading) {
        if (calcHeading === 'avoided_percentage') {
            return totalsTable.totalCosts.avoided / totalsTable.totalCosts.comparison;
        }
        else {
            return totalsTable.hospitalization_cost[calcHeading] + totalsTable.absenteeism_cost[calcHeading];
        }
    }


    initiateTotalsTable();
    return totalsTable;
}


// const AOM_tables = getMarkovHFpEFData();
// const NI_tables = getMarkovHFpEFData('NI');

// console.log(AOM_tables, 'HFpEF AOM')

// const finalTable = buildTotalsTable(AOM_tables, NI_tables);
// console.log(finalTable)

