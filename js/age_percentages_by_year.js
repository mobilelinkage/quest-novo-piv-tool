function buildAgePercentagesTables(intervention = 'AOM', poi) {

   console.log(currentEventsTables, 'age percent distro')
   console.log(poi, "age percent POI")
   //todo total agegroup column for baseline totals below

    //todo Totals from Distribution AOM - need dynamic data

    const age_groups = {
      age1829: 0,
      age3039: 0,
      age4049: 0,
      age5059: 0,
      age6064: 0,
    }

    const column_totals = {}

    Object.keys(age_groups).map((key) => {
          column_totals[key] = currentEventsTables[poi][intervention].baseline[key].reduce( (a, b) => a + b, 0 )
    })

    console.log(column_totals, 'COL TOTALS')

    const baseline_totals = {
      age1829: column_totals.age1829,
      age3039: column_totals.age1829,
      age4049: column_totals.age1829,
      age5059: column_totals.age1829,
      age6064: column_totals.age1829,
      total: column_totals.age1829 + column_totals.age3039 + column_totals.age4049 + column_totals.age5059 + column_totals.age6064
  }

  console.log(baseline_totals.total)
    
    // Function to get baseline data for selected intervention,
    // todo currently using hardcoded numbers from Excel Distribution pages
    // function getBaselineTotals(intervention) {
    //     let totals;

    //     switch(intervention) {
    //         case 'AOM':
    //             totals = {
    //                 age1829: 860.80494,
    //                 age3039: 1067.63831,
    //                 age4049: 1141.60116,
    //                 age5059: 1091.75610,
    //                 age6064: 451.30799,
    //                 total: 4613.10850
    //             };
    //             break;
    //         case 'NI':
    //             totals = {

    //             }
    //     }
    // }
    
    // const baseline_totals = getBaselineTotals(intervention);

    const headings = ['baseline', 'year1', 'year2', 'year3', 'year4', 'year5', 'year6', 'year7', 'year8', 'year9', 'year10'];

    const counts_across_all_ages = {};
    const proportions_within_age_group = {};
    const percentages_table = {};
    const sums_table = {};

    function initiatePercentagesTable() {
        for (let i = 18; i <= 64; i++) {
            if (i <= 64 && i >= 60) {
                percentages_table[i] = (1 / 5);
            }
            else if (i <= 59 && i >= 30) {
                percentages_table[i] = (1 / 10);
            }
            else {
                percentages_table[i] = (1 / 12);
            }
        }
    }

    function initiateSumsTable() {
        headings.forEach(heading => {
            sums_table[heading] = {
                age1829: 0,
                age3039: 0,
                age4049: 0,
                age5059: 0,
                age6064: 0,
            };
        })
    }

    function initiateCountsTable() {
        for (let i = 18; i <= 64; i++) {
            counts_across_all_ages[i] = {};
            headings.forEach((heading, yearIndex) => {
                counts_across_all_ages[i][heading] = fillCounts(i, heading, yearIndex);
            });
        }
    }

    function initiateProportionsTable() {
        for (let i = 18; i <= 64; i++) {
            proportions_within_age_group[i] = {};
            headings.forEach((heading, yearIndex) => {
                proportions_within_age_group[i][heading] = fillProportions(i, heading, yearIndex);
            });
        }
    }

    function getRange(age) {
        let range = '';
        let rangeMinimum = 0;

        if (age <= 64 && age >= 60) {
            range = 'age6064';
            rangeMinimum = 60;
        }
        else if (age <= 59 && age >= 50) {
            range = 'age5059';
            rangeMinimum = 50;
        }
        else if (age <= 49 && age >= 40) {
            range = 'age4049';
            rangeMinimum = 40;
        }
        else if (age <= 39 && age >= 30) {
            range = 'age3039';
            rangeMinimum = 30;
        }
        else {
            range = 'age1829';
            rangeMinimum = 18;
        }

        return [range, rangeMinimum];
    }

    function fillCounts(age, heading, yearIndex) {
        let value = 0;
        const [ range, rangeMinimum ] = getRange(age);

        if (heading === 'baseline') {
            value = baseline_totals[range] * percentages_table[age]
        }
        else if (age % 10 === 0) {
            value = counts_across_all_ages[age - 1][headings[yearIndex - 1]];
        }
        else {
            if (age - yearIndex >= rangeMinimum) {
                value = counts_across_all_ages[age].baseline;
            } else {
                if (counts_across_all_ages[age - 1]) {
                    value = counts_across_all_ages[age - 1][heading]
                }
            }
        }

        fillSums(heading, range, value);
        return value;
    }


    function fillSums(heading, range, value) {
        if (sums_table[heading][range]) {
            sums_table[heading][range] += value;
        }
        else {
            sums_table[heading][range] = value;
        }
    }

    function fillProportions(age, heading) {
        const [ range ] = getRange(age);
        return counts_across_all_ages[age][heading] / sums_table[heading][range] || 0;
    }

    initiatePercentagesTable();
    initiateSumsTable();
    initiateCountsTable();
    initiateProportionsTable();
    console.log(counts_across_all_ages, 'counts across all ages')
    return [counts_across_all_ages, proportions_within_age_group];
}

