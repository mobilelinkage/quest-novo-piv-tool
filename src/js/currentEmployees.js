function getCurrentEmployees(myParams, myPOI, myObesityClass, populationValue) {

    if ((!((myObesityClass == "Overweight and obesity (I, II, and III)") && (myPOI == "People with obesity"))) && (!((myObesityClass == "Obesity classes I, II and III") && (myPOI == "People with overweight/ obesity"))) && (!((myObesityClass == "Obesity classes II and III") && (myPOI == "People with overweight/ obesity"))) && (!((myObesityClass == "Obesity class III") && (myPOI == "People with overweight/ obesity")))) {


        for (let val of BMISummary.data) {
            if (val.Class_Name == myObesityClass) {
                if ((myPOI == "People with overweight/ obesity") || (myPOI == "People with obesity")) {
                    var percentageOfObesity18_29 = val.group18_29;
                    var percentageOfObesity30_39 = val.group30_39;
                    var percentageOfObesity40_49 = val.group40_49;
                    var percentageOfObesity50_59 = val.group50_59;
                    var percentageOfObesity60_64 = val.group60_64;
                } else {
                    var percentageOfObesity18_29 = val.group18_29_1;
                    var percentageOfObesity30_39 = val.group30_39_1;
                    var percentageOfObesity40_49 = val.group40_49_1;
                    var percentageOfObesity50_59 = val.group50_59_1;
                    var percentageOfObesity60_64 = val.group60_64_1;
                }
            }
        }

        for (let val of Prevalence.data) {
            if (val.Comorbidity == myPOI) {
                var prevalanceAge18_29 = val.Age18_29;
                var prevalanceAge30_39 = val.Age30_39;
                var prevalanceAge40_49 = val.Age40_49;
                var prevalanceAge50_59 = val.Age50_59;
                var prevalanceAge60_64 = val.Age60_64;


                var selectedEmployees18_29 = myParams.myAges18To29 / 100 * populationValue * percentageOfObesity18_29 * prevalanceAge18_29 * myPercentageIndividualsTakingAOMs / 100;
                var selectedEmployees30_39 = myParams.myAges30To39 / 100 * populationValue * percentageOfObesity30_39 * prevalanceAge30_39 * myPercentageIndividualsTakingAOMs / 100;
                var selectedEmployees40_49 = myParams.myAges40To49 / 100 * populationValue * percentageOfObesity40_49 * prevalanceAge40_49 * myPercentageIndividualsTakingAOMs / 100;
                var selectedEmployees50_59 = myParams.myAges50To59 / 100 * populationValue * percentageOfObesity50_59 * prevalanceAge50_59 * myPercentageIndividualsTakingAOMs / 100;
                var selectedEmployees60_64 = myParams.myAges60To64 / 100 * populationValue * percentageOfObesity60_64 * prevalanceAge60_64 * myPercentageIndividualsTakingAOMs / 100;
                var selectedEmployees = selectedEmployees18_29 * 1 + selectedEmployees30_39 * 1 + selectedEmployees40_49 * 1 + selectedEmployees50_59 * 1 + selectedEmployees60_64 * 1;

            }
        }
      }
        const modal_among_employees_percent = populate_among_employees_percent_modal();

        function populate_among_employees_percent_modal() {
           const among_employees_percent_modal_val = ((percentageOfObesity18_29 * (myParams.myAges18To29 / 100 * populationValue)) + (percentageOfObesity30_39 * (myParams.myAges30To39 / 100 * populationValue)) + (percentageOfObesity40_49 * (myParams.myAges40To49 / 100 * populationValue)) + (percentageOfObesity50_59 * (myParams.myAges50To59 / 100 * populationValue)) + (percentageOfObesity60_64 * (myParams.myAges60To64 / 100 * populationValue))) / userInputData.num_of_individuals_input;
           
           return among_employees_percent_modal_val;
         }
         
         
         const modal_among_percent_with_overweight = populate_among_employees_with_overweight(modal_among_employees_percent);
         
        function populate_among_employees_with_overweight(modal_among_employees_percent) {
            const among_employees_with_overweight_modal_val = ((percentageOfObesity18_29 * (myParams.myAges18To29 / 100 * populationValue) * prevalanceAge18_29) + (percentageOfObesity30_39 * (myParams.myAges30To39 / 100 * populationValue) * prevalanceAge30_39) + (percentageOfObesity40_49 * (myParams.myAges40To49 / 100 * populationValue) * prevalanceAge40_49) + (percentageOfObesity50_59 * (myParams.myAges50To59 / 100 * populationValue) * prevalanceAge50_59) + (percentageOfObesity60_64 * (myParams.myAges60To64 / 100 * populationValue)) * prevalanceAge60_64) / (userInputData.num_of_individuals_input * modal_among_employees_percent);

            return among_employees_with_overweight_modal_val;
         }
    
    return [ Math.round(selectedEmployees), modal_among_employees_percent, modal_among_percent_with_overweight ];
}
