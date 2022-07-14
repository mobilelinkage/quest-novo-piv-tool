function buildEventsTables(distributionTables) {
    console.log(distributionTables, 'EVENT DISTRO TABLES')
    // This function will take the distributionTables object returned by detailedResultsLoop
    // and return an object with data formatted for use on Event Results page

    // Obesity class and POI do not affect data, so we are using the first of each for simplicity

    
    const data = distributionTables['Overweight and obesity (I, II, and III)'];

    const poi_arr = ['People with overweight/ obesity', 'Diabetes', 'Hypertension', 'Dyslipidemia', 'Cardiovascular diseases', 'Osteoarthritis']

    const interventions = ['AOM', 'NI', 'ILT'];

    const years = ['baseline', 'year1', 'year2', 'year3', 'year4', 'year5', 'year6', 'year7', 'year8', 'year9', 'year10'];

    const ageGroups = ['BMI', 'age1829', 'age3039', 'age4049', 'age5059', 'age6064'];

    const newEventsTables = {};

    poi_arr.forEach((poi) => {
       newEventsTables[poi] = {}

      interventions.forEach(intervention => {
         newEventsTables[poi][intervention] = {};
 
         years.forEach((year, yearIndex) => {
             // Create array of object keys so we can match indexes of ageGroups while looping
             const baselineArrays = Object.keys(data[poi].baselineData[yearIndex]);
             newEventsTables[poi][intervention][year] = {};
 
             ageGroups.forEach((ageGroup, ageGroupIndex) => {
                 newEventsTables[poi][intervention][year][ageGroup] = [];
 
                 for (let i = 0; i <= 86; i++) {
                     if (ageGroupIndex === 0) {
                         newEventsTables[poi][intervention][year][ageGroup][i] = data[poi][intervention].baselineData.halfCap[i][yearIndex];
                     }
                     else {
                        //  newEventsTables[poi][intervention][year][ageGroup][i] = (data[poi].baselineData[yearIndex][baselineArrays[ageGroupIndex - 1]][i + 1] / 10000) * formattedUserInputData.num_of_individuals_input; // add 1 to i to account for empty zeroth index in data
                        newEventsTables[poi][intervention][year][ageGroup][i] = data[poi].baselineData[yearIndex][baselineArrays[ageGroupIndex - 1]][i + 1]
                     }
                 }
 
             });
 
         });
 
     });


    })

    

    return newEventsTables;
}