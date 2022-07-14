function buildNewDistributionTables(myParams, showDirectMedicalCost) {
    const distributionTable = initiateTable(myParams, showDirectMedicalCost);
    return distributionTable;
}


function initiateTable(myParams, showDirectMedicalCost) {

    const interventions = ['AOM', 'NI', 'ILT'];
    const genders = ['male', 'female'];
    const costTypes = [
        'direct',
        'pharmacy',
        'absenteeism',
        'workers',
        'std',
        'ltd'
    ];
    const ageGroups = [
        '18_29',
        '30_39',
        '40_49',
        '50_59',
        '60_64'
    ];


    const table = {
        updateTable: function (bmi) {
            interventions.forEach(intervention => {
                costTypes.forEach((costType, costIndex) => {
                    genders.forEach((gender, genderIndex) => {
                        ageGroups.forEach((ageGroup, ageIndex) => {
                            const [result, halfCap] = showDirectMedicalCost(bmi, costType, gender, ageGroup, intervention, null, myParams);
                            table[intervention][costType][gender][ageGroup].value.push(result);
                            // BMI numbers do not change based on the values, so we only need data from the first loop
                            if (costIndex === 0 && genderIndex === 0 && ageIndex === 0) {
                                table[intervention].baselineData.halfCap.push(halfCap);
                            }

                            for (let i = 0; i <= 10; i++) {
                                table[intervention][costType][gender][ageGroup].totals[i] += result[i];
                                table[intervention][costType][gender].totals[i] += result[i];
                                table[intervention][costType].totals[i] += result[i];
                            }
                        });
                    });
                });
            });
        },
        
        clearTotals: function () {
            return [0,0,0,0,0,0,0,0,0,0,0];
        }
    }

    interventions.forEach(intervention => {
        table[intervention] = {
            baselineData: {
                halfCap: [],
            }
        };
        costTypes.forEach(costType => {
            table[intervention][costType] = {totals: table.clearTotals()};
            genders.forEach(gender => {
                table[intervention][costType][gender] = {totals: table.clearTotals()};
                ageGroups.forEach(ageGroup => {
                    table[intervention][costType][gender][ageGroup] = {};
                    table[intervention][costType][gender][ageGroup].value = [];
                    table[intervention][costType][gender][ageGroup].totals = table.clearTotals();
                });
            });
        });
    });

    return table;
}


