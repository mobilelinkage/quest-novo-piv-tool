
function getMarkovCVDData(intervention, distro_table, poi, year_input) {

   
   const employee_working_hours = formattedUserInputData.working_hours_input;    
   const employee_avg_wage = formattedUserInputData.hourly_compensation_input;    
   
   //! hard-coded values
   const CVD_discount_rate = 0.03 
   const ratio_absenteeism_to_presenteeism = 3.9400000 // central data control E127
   const productivity_decline =	0.50  // central data control E128
   const percent_disability_paid = 0.6  //markovCVD D110

   const prod_table = {
      "myocardial_infarction": (23.6113657195236/8) * employee_working_hours,
      "angina": (19.7983501374885/8) * employee_working_hours,
      "stroke": (21.2648945921173/8) * employee_working_hours,
      "PVD": ((0.9*(5*52)/12/60)/8) * employee_working_hours,
      "heart_failure": (21.2648945921173/8) * employee_working_hours,
   }

   const STD_table = {
      "myocardial_infarction": 16.865261228231,
      "angina": 12.4656278643446,
      "stroke": 20.38496791934,
      "PVD": 0,
      "heart_failure": 26.1044912923923
   }
   
   const [ people_as_a_percentage_in_age_group, overall_mortality, all_ages_table_sum, overall_risk, overall_sub_risk ] = getAverageCVDSheetData(intervention, distro_table, poi)



// build AOM pCVD tables - B5:E16
   function pCVDTable() {
      const headings = [
         {name: 'pCVD1', function: fillpCVD1},
         {name: 'pCVD2', function: fillpCVD2},
         {name: 'pDeath', function: fillpDeath}
      ]

      const newPCVDTable = {
         years: []
      }

      function buildPCVDTable() {
         for (i=0; i<=10; i++) {
            newPCVDTable.years[i] = {};
            headings.forEach(heading => {
            newPCVDTable.years[i][heading.name] = heading.function(i);
            })
         }
      }

      buildPCVDTable()
      
      function fillpCVD1(year) {
         if (year === 0) {
            return overall_risk.baseline
         } else {
            return overall_risk[`year${i}`]
         }
      }

      function fillpCVD2(year) {
         if (year === 0) {
            return 0
         } else {
            return overall_sub_risk[`year${i}`]
         }
      }

      function fillpDeath(year) {
         if (year === 0) {
            return 0
         } else {
            return overall_mortality[`year${i}`]
         }
      }

      // console.log(newPCVDTable, 'PCVD')
      return newPCVDTable
   }



   function interventionTable(baseTable, timeHorizon, all_ages_table_sum) {

      const headings = [
         {name: 'people_with_overweight', function: fillPeopleWithOverweight},
         {name: 'CVD_primary', function: fillCVDPrimary},
         {name: 'CVD_subsequent', function: fillCVDSubsequent},
         {name: 'death', function: fillDeath},
         {name: 'total', function: fillTotal},
         {name: 'new_CVD_primary', function: fillNewCVDPrimary},
         {name: 'new_CVD_subsequent', function: fillNewCVDSubsequent},
      ];

        const newTable = {
            years: [],
        };
        // Function to call all cell-filling functions
        function initiateTable(all_ages_table_sum) {
            for (let i = 0; i <= 10; i++) {
                newTable.years[i] = {};
                headings.forEach(heading => {
                    newTable.years[i][heading.name] = heading.function(i, all_ages_table_sum);
                }); 
            }
            newTable.total_CVD_primary = fillTotalCVDPrimary(timeHorizon);
            newTable.total_CVD_subsequent = fillTotalCVDSubsuquent(timeHorizon);
        }

        // Functions to fill individual "cells"
        function fillPeopleWithOverweight(year, all_ages_table_sum) {
            if (year === 0) {
                return all_ages_table_sum.baseline
            }
            else {
                const previous = newTable.years[year - 1].people_with_overweight;
                return previous * (1 - baseTable.years[year].pCVD1) - (previous * baseTable.years[year].pDeath);
            }
        }

        function fillCVDPrimary(year) {
            if (year === 0) {
                return 0;
            }
            else {
                const previous = newTable.years[year - 1].CVD_primary;
                return previous * (1 - baseTable.years[year].pCVD2) - (previous * baseTable.years[year].pDeath) + newTable.years[year - 1].people_with_overweight * baseTable.years[year].pCVD1;
            }
        }

        function fillCVDSubsequent(year) {
            if (year === 0) {
                return 0;
            }
            else {
                const previous = newTable.years[year - 1].CVD_subsequent;
                return newTable.years[year - 1].CVD_primary * baseTable.years[year].pCVD2 - (previous * baseTable.years[year].pDeath) + previous;
            }
        }

        function fillDeath(year) {
            if (year === 0) {
                return 0;
            }
            else {
                const previous = newTable.years[year - 1].death;
                const totals = newTable.years[year - 1].people_with_overweight + newTable.years[year - 1].CVD_primary + newTable.years[year - 1].CVD_subsequent;
                return previous + totals * baseTable.years[year].pDeath;
            }
        }

        function fillTotal(year) {
            return newTable.years[year].people_with_overweight + newTable.years[year].CVD_primary + newTable.years[year].CVD_subsequent + newTable.years[year].death;
        }

        function fillNewCVDPrimary(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return newTable.years[year].CVD_primary - newTable.years[year - 1].CVD_primary * (1 - baseTable.years[year].pDeath);
            }
        }

        function fillNewCVDSubsequent(year) {
            if (year === 0) {
                return 0;
            }
            else {
                return newTable.years[year].CVD_subsequent - newTable.years[year - 1].CVD_subsequent * (1 - baseTable.years[year].pDeath);
            }
        }

        function fillTotalCVDPrimary(timeHorizon) {
            const selected = newTable.years.reduce((initial, current, index) => {
                if (index <= timeHorizon) {
                    return initial + current.new_CVD_primary
                }
                return initial;
            }, 0);
            const total = newTable.years.reduce((initial, current) => {
                return initial + current.new_CVD_primary;
            }, 0);
            return { selected, total };
        }

        function fillTotalCVDSubsuquent(timeHorizon) {
            const selected = newTable.years.reduce((initial, current, index) => {
                if (index <= timeHorizon) {
                    return initial + current.new_CVD_subsequent
                }
                return initial;
            }, 0);
            const total = newTable.years.reduce((initial, current) => {
                return initial + current.new_CVD_subsequent;
            }, 0);
            return { selected, total };
        }

        initiateTable(all_ages_table_sum);
      //   console.log(newTable, 'NEW TABLE  1')
        return newTable;
    }


   //  const testTable = {
   //      years: [
   //          {pCVD1: 0.009494439838, pCVD2: 0, pDeath: 0},
   //          {pCVD1: 0.0097655429702874, pCVD2: 0.0040713285347519, pDeath: 0.0049589353711311},
   //          {pCVD1: 0.010069661779, pCVD2: 0.003638374846, pDeath: 0.005102924036},
   //          {pCVD1: 0.010416105944, pCVD2: 0.004342278074, pDeath: 0.005285642264},
   //          {pCVD1: 0.010827274249, pCVD2: 0.004513805909, pDeath: 0.005522891158},
   //          {pCVD1: 0.011114873753, pCVD2: 0.004633769328, pDeath: 0.005672437098},
   //          {pCVD1: 0.011416424364, pCVD2: 0.004759539758, pDeath: 0.005834976002},
   //          {pCVD1: 0.011754689198, pCVD2: 0.004900712800, pDeath: 0.006020731935},
   //          {pCVD1: 0.012132610182, pCVD2: 0.005058486155, pDeath: 0.006211911717},
   //          {pCVD1: 0.012361435997, pCVD2: 0.005153822330, pDeath: 0.006326501351},
   //          {pCVD1: 0.012676125579, pCVD2: 0.005285116547, pDeath: 0.006528724720},
   //      ]
   //  }


    

    function halfCycleTable(interventionTable, timeHorizon) {
  
        const headings = [
            {name: 'people_with_overweight', function: fillAverage},
            {name: 'CVD_primary', function: fillAverage},
            {name: 'CVD_subsequent', function: fillAverage},
            {name: 'death', function: fillAverage},
            {name: 'total', function: fillTotal},
            {name: 'new_CVD_primary', function: fillAverage},
            {name: 'new_CVD_subsequent', function: fillAverage},
        ];

        const newTable = {
            years: [],
        };
        // Function to call all cell-filling functions
        function initiateTable() {
            for (let i = 0; i <= 10; i++) {
                newTable.years[i] = {};
                headings.forEach(heading => {
                    newTable.years[i][heading.name] = heading.function(i, heading.name);
                }); 
            }
            newTable.total_CVD_primary = fillTotalCVDPrimary(timeHorizon);
            newTable.total_CVD_subsequent = fillTotalCVDSubsuquent(timeHorizon);
        }
       

        // Functions to fill "cells"
        function fillAverage(year, heading) {
            if (year === 0 && heading === 'people_with_overweight') {
               return all_ages_table_sum.baseline
            }
            else if (year === 0) {
                return interventionTable.years[year][heading];
            }
            else {
                return (interventionTable.years[year][heading] + interventionTable.years[year - 1][heading]) / 2;
            }
        }
  
        function fillTotal(year) {
            return newTable.years[year].people_with_overweight + newTable.years[year].CVD_primary + newTable.years[year].CVD_subsequent + newTable.years[year].death;
        }

        function fillTotalCVDPrimary(timeHorizon) {
            const selected = newTable.years.reduce((initial, current, index) => {
                if (index <= timeHorizon) {
                    return initial + current.new_CVD_primary
                }
                return initial;
            }, 0);
            const total = newTable.years.reduce((initial, current) => {
                return initial + current.new_CVD_primary;
            }, 0);
            return { selected, total };
        }

        function fillTotalCVDSubsuquent(timeHorizon) {
            const selected = newTable.years.reduce((initial, current, index) => {
                if (index <= timeHorizon) {
                    return initial + current.new_CVD_subsequent
                }
                return initial;
            }, 0);
            const total = newTable.years.reduce((initial, current) => {
                return initial + current.new_CVD_subsequent;
            }, 0);
            return { selected, total };
        }

        initiateTable();

        return newTable;
    }

      function event_distribution_table() {

      const userselected_sex_distribution = {      
         "female": formattedUserInputData.sex_distro_female_input / 100,
         "male": formattedUserInputData.sex_distro_male_input / 100,
      }

      const headings = [
         {name: 'primary', function: fill_primary},
         {name: 'subsequent', function: fill_subsequent},
         {name: 'total', function: fill_total},
         {name: 'direct_costs', function: fill_direct_costs},
         {name: 'discount', function: fill_discount},
         {name: 'cummulative', function: fill_cummulative},
         {name: 'abs_days', function: fill_abs_days},
         {name: 'abs_cost', function: fill_abs_cost},
         {name: 'abs_discount', function: fill_abs_discounted},
         {name: 'abs_cummulative', function: fill_abs_cummulative},
         {name: 'pres_cost', function: fill_pres_cost},
         {name: 'pres_discount', function: fill_pres_discount},
         {name: 'pres_cummulative', function: fill_pres_cumulative},
         {name: 'STD_cost', function: fill_STD_cost},
         {name: 'STD_discount', function: fill_STD_discount},
         {name: 'STD_cummulative', function: fill_STD_cumulative}
      ]
   
      const rows = [
         'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure'
      ]
   
      const event_dist_results = {};
   
      function build_cost_results_table() {
         rows.forEach((row) => {
            event_dist_results[row] = {};
            headings.forEach((heading) => {
               event_dist_results[row][heading.name] = []
               for (i=0; i<=10; i++) {
                  event_dist_results[row][heading.name][i] = heading.function(row, i);
               }
            }) 
            event_dist_results[row].absenteeism = fill_absenteeism_over_time(row); 
            event_dist_results[row].presenteeism = fill_presenteeism_over_time(row); 
            event_dist_results[row].STD = fill_STD(row);
         })
      }
      build_cost_results_table();
   
      function fill_primary(row, year) {
         if (row === "myocardial_infarction") {
            return (Half_CycleTable.years[year].new_CVD_primary * 0.526829268292683 * 0.367924528301887 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_primary * 0.615942028985507 * 0.554502369668246 * userselected_sex_distribution.male)
         } else if (row === "angina") {
            return (Half_CycleTable.years[year].new_CVD_primary * 0.526829268292683 * 0.632075471698113 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_primary * 0.615942028985507 * 0.445497630331754 * userselected_sex_distribution.male)
         } else if (row === "stroke") {
            return (Half_CycleTable.years[year].new_CVD_primary * 0.204878048780488 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_primary * 0.134782608695652 * userselected_sex_distribution.male)
         } else if (row === "PVD") {
            return (Half_CycleTable.years[year].new_CVD_primary * 0.107317073170732 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_primary * 0.0971014492753623 * userselected_sex_distribution.male)
         } else {
            return (Half_CycleTable.years[year].new_CVD_primary * 0.160975609756098 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_primary * 0.152173913043478 * userselected_sex_distribution.male)
         }
      }
   
      function fill_subsequent(row, year) {
         if (row === "myocardial_infarction") {
            return (Half_CycleTable.years[year].new_CVD_subsequent * 0.526829268292683 * 0.367924528301887 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_subsequent * 0.615942028985507 * 0.554502369668246 * userselected_sex_distribution.male)
         } else if (row === "angina") {
            return (Half_CycleTable.years[year].new_CVD_subsequent * 0.526829268292683 * 0.430769230769231 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_subsequent * 0.615942028985507 * 0.4 * userselected_sex_distribution.male)
         } else if (row === "stroke") {
            return (Half_CycleTable.years[year].new_CVD_subsequent * 0.204878048780488 * userselected_sex_distribution.female) + (Half_CycleTable.years[year].new_CVD_subsequent * 0.134782608695652 * userselected_sex_distribution.male)
         } else if (row === "PVD") {
            return (Half_CycleTable.years[year].new_CVD_subsequent * 0.107317073170732 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_subsequent * 0.0971014492753623 * userselected_sex_distribution.male)
         } else {
            return (Half_CycleTable.years[year].new_CVD_subsequent * 0.160975609756098 * userselected_sex_distribution.female) +  (Half_CycleTable.years[year].new_CVD_subsequent * 0.152173913043478 * userselected_sex_distribution.male)
         }
      }
   
      function fill_total(row, year) {
         return event_dist_results[row].primary[year] + event_dist_results[row].subsequent[year] 
      }
   
      function fill_direct_costs(row, year) {
         if (row === "myocardial_infarction") {
            return (33187.78 + 21993.43) * event_dist_results[row].total[year]
         } else if (row === "angina") {
            return (9165.04 + 21993.43) * event_dist_results[row].total[year]
         } else if (row === "stroke") {
            return (16400.240 + 21993.43) * event_dist_results[row].total[year]
         } else if (row === "PVD") {
            return (21578.290 + 21993.43) * event_dist_results[row].total[year]
         } else {
            return (15985.100 + 21993.43) * event_dist_results[row].total[year]
         }
      }
   
      function fill_discount(row, year) {
         return event_dist_results[row].direct_costs[year] / Math.pow(1 + CVD_discount_rate, year)
      }
   
      function fill_cummulative(row, year) {
         if (year === 0) {
            return 0
         } else {
            return event_dist_results[row].discount[year] + event_dist_results[row].cummulative[year - 1]
         }
      }
   
      
   
      function fill_absenteeism_over_time(row) {
         const total_arr = [];
         for (i=0; i<=year_input; i++) {
            total_arr.push(event_dist_results[row].total[i])
         }
         return (prod_table[row] * 12) * (total_arr.reduce((a, b) => a + b, 0)) * employee_avg_wage
      }
   
      function fill_presenteeism_over_time(row) {
         return event_dist_results[row].absenteeism * (ratio_absenteeism_to_presenteeism * productivity_decline)
      }
   
      function fill_STD(row) {
         const total_arr = [];
         for (i=0; i<=year_input; i++) {
            total_arr.push(event_dist_results[row].total[i])
         }
         return (STD_table[row] * 12) * (total_arr.reduce((a, b) => a + b, 0)) * employee_avg_wage * percent_disability_paid
      }
   
      function fill_abs_days(row, year) {
         if (row === "PVD") {
            return 0
         } else {
            return (prod_table[row] * 12) * (event_dist_results[row].primary[year] + event_dist_results[row].subsequent[year])
         }
      }
   
      function fill_abs_cost(row, year) {
         if (row === "PVD") {
            const present_cost = fill_pres_cost("PVD", year)
            return present_cost / ratio_absenteeism_to_presenteeism 
         } else {
            return event_dist_results[row].abs_days[year] * employee_avg_wage
         }
      }
   
      function fill_abs_discounted(row, year) {
         return event_dist_results[row].abs_cost[year] / Math.pow((1 + 0.03), year)
      }
   
      function fill_abs_cummulative(row, year) {
         if (year === 0) {
            return 0
         } else {
            return event_dist_results[row].abs_discount[year] + event_dist_results[row].abs_cummulative[year - 1]
         }
      }
   
      function fill_pres_cost(row, year) {
         if (row === "PVD") {
            return (prod_table.PVD * 12) * (event_dist_results[row].primary[year] + event_dist_results[row].subsequent[year]) * employee_avg_wage * productivity_decline
         } else {
            return event_dist_results[row].abs_cost[year] * ratio_absenteeism_to_presenteeism * productivity_decline
         }
      }
   
      function fill_pres_discount(row, year) {
         return event_dist_results[row].pres_cost[year] / Math.pow((1 + CVD_discount_rate), year)
      }
   
      function fill_pres_cumulative(row, year) {
         if (year === 0) {
            return 0
         } else {
            return event_dist_results[row].pres_discount[year] + event_dist_results[row].pres_cummulative[year - 1]
         }
      }
   
      function fill_STD_cost(row, year) {
         if (row === "PVD") {
            return 0
         } else {
            return (STD_table.myocardial_infarction * 12) * (event_dist_results[row].primary[year] + event_dist_results[row].subsequent[year]) * employee_avg_wage * percent_disability_paid  
         }
      }
   
      function fill_STD_discount(row, year) {
         return event_dist_results[row].STD_cost[year] / Math.pow((1 + CVD_discount_rate), year)
      }
   
      function fill_STD_cumulative(row, year) {
         if (year === 0) {
            return 0
         } else {
            return event_dist_results[row].STD_discount[year] + event_dist_results[row].STD_cummulative[year - 1]
         }
      }
   
      return event_dist_results
   
   }
   
   
   
   
   
  

    

    const PCVDTable = pCVDTable();
    console.log(userInputData, "INT table user input")
    const INTTable = interventionTable(PCVDTable, formattedUserInputData.year_choice, all_ages_table_sum);  
    const Half_CycleTable = halfCycleTable(INTTable, formattedUserInputData.year_choice);  
    const event_table = event_distribution_table();




    return [ PCVDTable, INTTable, Half_CycleTable, event_table ]    
   }

   function bottom_sema_table(AOM_table, selected_table, year_input) {

      const employee_working_hours = formattedUserInputData.working_hours_input;   

      const ratio_absenteeism_to_presenteeism = 3.9400000 //todo seems hard-coded?
      

      const prod_table = {
         "myocardial_infarction": (23.6113657195236/8) * employee_working_hours,
         "angina": (19.7983501374885/8) * employee_working_hours,
         "stroke": (21.2648945921173/8) * employee_working_hours,
         "PVD": ((0.9*(5*52)/12/60)/8) * employee_working_hours,
         "heart_failure": (21.2648945921173/8) * employee_working_hours,
      }
   
      function table_one() {
   
         const headings = [
            {name: 'sema', function: fill_sema},
            {name: 'comparison', function: fill_comparison},
            {name: 'avoided', function: fill_avoided},
            {name: 'avoided_percent', function: fill_avoided_percent}
         ]
   
         const rows = [
            'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'deaths'
         ]
   
         const table_one_results = {};
   
         rows.forEach((row) => {
            table_one_results[row] = {};
            headings.forEach((heading) => {
               table_one_results[row][heading.name] = []
               table_one_results[row][heading.name] = heading.function(row);
            })  
         })
   
      
         function fill_sema(row) {
            const sum_arr = [];
            let total = 0;
            for (i=0; i<=year_input; i++) {
               if (row !== "deaths") {
                  sum_arr.push(AOM_table[3][row].primary[i], AOM_table[3][row].subsequent[i]);
                  total = sum_arr.reduce((a,b) => a+b, 0)
               } else {
                  total = AOM_table[2].years[i].death;
               }
            }
            return total;
         }
   
         function fill_comparison(row) { 
            const sum_arr = [];
            let total = 0;
            for (i=0; i<=year_input; i++) {
               if (row !== "deaths") {
                  sum_arr.push(selected_table[3][row].primary[i], selected_table[3][row].subsequent[i]);
                  total = sum_arr.reduce((a,b) => a+b, 0)
               } else {
                  total = selected_table[2].years[i].death;
               }  
            }
            return total;
         }
   
         function fill_avoided(row) {
            return table_one_results[row].comparison - table_one_results[row].sema
         }
   
         function fill_avoided_percent(row) {
            return table_one_results[row].avoided / table_one_results[row].comparison
         }
   
         // console.log(table_one_results, 'T1')
         return table_one_results
      }
      const table_one_final = table_one();
   


   
      function table_two(year) {
         const headings = [
            {name: 'sema', function: fill_sema},
            {name: 'comparison', function: fill_comparison},
            {name: 'avoided', function: fill_avoided},
            {name: 'avoided_percent', function: fill_avoided_percent}
         ]
   
         const rows = [
            'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure'
         ]
   
         const table_two_results = {};
   
         rows.forEach((row) => {
            table_two_results[row] = {};
            headings.forEach((heading) => {
               table_two_results[row][heading.name] = []
               table_two_results[row][heading.name] = heading.function(row);
            }) 
         })
   
         function fill_sema(row) {
            return AOM_table[3][row].cummulative[year]
         }
   
         function fill_comparison(row) {
            return selected_table[3][row].cummulative[year]  
         }
   
         function fill_avoided(row) {
            return table_two_results[row].comparison - table_two_results[row].sema
         }
   
         function fill_avoided_percent(row) {
            return table_two_results[row].avoided / table_two_results[row].comparison
         }
   
         // console.log(table_two_results, 'T2')
         return table_two_results
      }
      const table_two_final = table_two(year_input)

      function events_avoided_table(year_input) {
         const newEventsAvoidedTable ={};

         for (let i = 1; i <= year_input; i++) {
            newEventsAvoidedTable[`Year${i}`] = table_two(i);
         }

         return newEventsAvoidedTable;
      }
   
      const events_avoided_final = events_avoided_table(year_input);

      function table_three() {
         const headings = [
            {name: 'sema', function: fill_sema},
            {name: 'comparison', function: fill_comparison},
            {name: 'avoided', function: fill_avoided},
            {name: 'avoided_percent', function: fill_avoided_percent}
         ]
   
         const rows = [
            'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure'
         ]
   
         const table_three_results = {};
   
         rows.forEach((row) => {
            table_three_results[row] = {};
            headings.forEach((heading) => {
               table_three_results[row][heading.name] = []
               table_three_results[row][heading.name] = heading.function(row);
            }) 
         })
   
         function fill_sema(row) {
            const sum_arr = [];
            let total = 0;
            for (i=0; i<=year_input; i++) {
               sum_arr.push(AOM_table[3][row].total[i])
            }
            total = sum_arr.reduce((a,b) => a + b, 0)
            if (row !== "PVD") {
               return (prod_table[row] * 12) * total / employee_working_hours
            } else {
               const PVD_days = (prod_table.PVD * 12) * total / employee_working_hours
               return PVD_days / ratio_absenteeism_to_presenteeism
            }
         }
   
         function fill_comparison(row) {   
            const sum_arr = [];
            let total = 0;
            for (i=0; i<=year_input; i++) {
               sum_arr.push(selected_table[3][row].total[i])
            }
            total = sum_arr.reduce((a,b) => a + b, 0)
            if (row !== "PVD") {
               return (prod_table[row] * 12) * total / employee_working_hours
            } else {
               const PVD_days = (prod_table.PVD * 12) * total / employee_working_hours
               return PVD_days / ratio_absenteeism_to_presenteeism
            }
         }
   
         function fill_avoided(row) {
            return table_three_results[row].comparison - table_three_results[row].sema
         }
   
         function fill_avoided_percent(row) {
            return table_three_results[row].avoided / table_three_results[row].comparison
         }
   
         // console.log(table_three_results, 'T3')
         return table_three_results
      }
      const table_three_final = table_three();



      function table_four() {
         const headings = [
            {name: 'sema', function: fill_sema},
            {name: 'comparison', function: fill_comparison},
            {name: 'avoided', function: fill_avoided},
            {name: 'avoided_percent', function: fill_avoided_percent}
         ]
   
         const rows = [
            'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'total_abs_cost'
         ]
   
         const table_four_results = {};
   
         rows.forEach((row) => {
            table_four_results[row] = {};
            headings.forEach((heading) => {
               table_four_results[row][heading.name] = []
               table_four_results[row][heading.name] = heading.function(row);
            }) 
         })
   
         function fill_sema(row) {
            if (row === "total_abs_cost") {
               sum_arr = [];
               for (i=0; i<=4; i++) {
                  sum_arr.push(table_four_results[rows[i]].sema)
               }
               return sum_arr.reduce((a,b) => a+b,0)
            } else {
               return AOM_table[3][row].abs_cummulative[year_input]
            }
         }
   
         function fill_comparison(row) {   
            if (row === "total_abs_cost") {
               sum_arr = []
               for (i=0; i<=4; i++) {
                  sum_arr.push(table_four_results[rows[i]].comparison)
               }
               return sum_arr.reduce((a,b) => a+b,0)
            } else {
               return selected_table[3][row].abs_cummulative[year_input]
            }
         }
   
         function fill_avoided(row) {
            return table_four_results[row].comparison - table_four_results[row].sema
         }
   
         function fill_avoided_percent(row) {
            return table_four_results[row].avoided / table_four_results[row].comparison
         }
   
         // console.log(table_four_results, 'T4')
         return table_four_results
      }
      const table_four_final = table_four();


      function table_five() {
         const headings = [
            {name: 'sema', function: fill_sema},
            {name: 'comparison', function: fill_comparison},
            {name: 'avoided', function: fill_avoided},
            {name: 'avoided_percent', function: fill_avoided_percent}
         ]
   
         const rows = [
            'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'total_pres_cost'
         ]
   
         const table_five_results = {};
   
         rows.forEach((row) => {
            table_five_results[row] = {};
            headings.forEach((heading) => {
               table_five_results[row][heading.name] = []
               table_five_results[row][heading.name] = heading.function(row);
            }) 
         })
   
         function fill_sema(row) {
            if (row === "total_pres_cost") {
               sum_arr = []
               for (i=0; i<=4; i++) {
                  sum_arr.push(table_five_results[rows[i]].sema)
               }
               return sum_arr.reduce((a,b) => a+b,0)
            } else {
               return AOM_table[3][row].pres_cummulative[year_input]
            }
         }
   
         function fill_comparison(row) {  
            if (row === "total_pres_cost") {
               sum_arr = []
               for (i=0; i<=4; i++) {
                  sum_arr.push(table_five_results[rows[i]].comparison)
               }
               return sum_arr.reduce((a,b) => a+b,0)
            } else {
               return selected_table[3][row].pres_cummulative[year_input]
            }
         }
   
         function fill_avoided(row) {
            return table_five_results[row].comparison - table_five_results[row].sema
         }
   
         function fill_avoided_percent(row) {
            return table_five_results[row].avoided / table_five_results[row].comparison
         }
   
         // console.log(table_five_results, 'T5')
         return table_five_results
      }
      const table_five_final = table_five();


      function table_six() {   //!  check PVD formula on Y109 on another excel sheet - seems wrong on mine
         const headings = [
            {name: 'sema', function: fill_sema},
            {name: 'comparison', function: fill_comparison},
            {name: 'avoided', function: fill_avoided},
            {name: 'avoided_percent', function: fill_avoided_percent}
         ]
   
         const rows = [
            'myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'total_STD_cost'
         ]
   
         const table_six_results = {};
   
         rows.forEach((row) => {
            table_six_results[row] = {};
            headings.forEach((heading) => {
               table_six_results[row][heading.name] = []
               table_six_results[row][heading.name] = heading.function(row);
            }) 
         })
   
         function fill_sema(row) {
            if (row === "total_STD_cost") {
               sum_arr = []
               for (i=0; i<=4; i++) {
                  sum_arr.push(table_six_results[rows[i]].sema)
               }
               return sum_arr.reduce((a,b) => a+b,0)
            } else {
               return AOM_table[3][row].STD_cummulative[year_input]
            }
         }
   
         function fill_comparison(row) {  
            if (row === "total_STD_cost") {
               sum_arr = []
               for (i=0; i<=4; i++) {
                  sum_arr.push(table_six_results[rows[i]].comparison)
               }
               return sum_arr.reduce((a,b) => a+b,0)
            } else {
               return selected_table[3][row].STD_cummulative[year_input]
            }
         }
   
         function fill_avoided(row) {
            return table_six_results[row].comparison - table_six_results[row].sema
         }
   
         function fill_avoided_percent(row) {
            return table_six_results[row].avoided / table_six_results[row].comparison
         }
   
         // console.log(table_six_results, 'T6')
         return table_six_results
      }
      const table_six_final = table_six();

      return [table_one_final, table_two_final, table_three_final, table_four_final, table_five_final, table_six_final, events_avoided_final];
   }

 




