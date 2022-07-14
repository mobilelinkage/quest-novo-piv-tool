function calculateEventsResults(pop_of_interest, distro_table, event_year_input, intervention_selected, view_by, is_final_loop) {

   // console.log(myParams, 'myparams events page')
   // console.log(userInputData, 'user inputs')
   // console.log(modalData, 'modal data')
   const events_POI = pop_of_interest; 
   let include_med_costs = myParams.medicalCostsChkbx === false ? false : true;
   const include_absenteeism = myParams.absenteeismChkbx === false ? false : true;
   const include_presenteeism = myParams.presenteeismChkbx === false ? false : true;
   const include_disability = myParams.shortTermAndLongTermDisabilityChkbx === false ? false : true;
   const event_population = userInputData.num_of_individuals_input;  
   const event_PMPM = view_by  
  
      function getMarkovData(pop_of_interest) {
         if (pop_of_interest === 'HFpEF') {
            const AOM_tables = getMarkovHFpEFData('AOM', distro_table["People with overweight/ obesity"]);
            const NI_tables = getMarkovHFpEFData(intervention_selected, distro_table["People with overweight/ obesity"]);
            const finalTable = buildTotalsTable(AOM_tables, NI_tables, event_year_input);
            return [AOM_tables, NI_tables, finalTable];
         }
         else if (pop_of_interest === 'OA') {
            const [ pTKA_table, KR_table, HC_KR_table ] = getMarkovOAData('AOM', distro_table["People with overweight/ obesity"]);
            const [ pTKA_table_selected, KR_table_selected, HC_KR_table_selected ] = getMarkovOAData(intervention_selected, distro_table["People with overweight/ obesity"]);  
            const OA_results = OA_results_table(HC_KR_table, HC_KR_table_selected, event_year_input);
            const cost_results = cost_results_table(HC_KR_table, HC_KR_table_selected, event_year_input);
            const PMPM_results = PMPM_results_table(KR_table, cost_results, event_year_input);
            return [KR_table, cost_results, OA_results];
         }
         else {
            const CVD_AOM_table = getMarkovCVDData('AOM', distro_table[events_POI], events_POI, event_year_input);
            const CVD_intervention_table = getMarkovCVDData(intervention_selected, distro_table[events_POI], events_POI, event_year_input);
            const bottom_final_table = bottom_sema_table(CVD_AOM_table, CVD_intervention_table, event_year_input);
            return [CVD_AOM_table, bottom_final_table, CVD_intervention_table];
         }
      }
      const markovData = getMarkovData(pop_of_interest);

      const employees_breakdown = get_events_modal_data(pop_of_interest, markovData);
      
      function event_cost_results_total_table() {
         const headings = [
            {name: "sema", function: fill_sema},
            {name: "NI", function: fill_NI},
            {name: "savings", function: fill_savings}
         ]

      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'absenteeism', 'presenteeism', 'STD']

      event_cost_total_results = {}

      function build_event_costs_table() {
         headings.forEach((heading) => {
            event_cost_total_results[heading.name] = {}
            rows.forEach((row) => {
               event_cost_total_results[heading.name][row] = heading.function(row, pop_of_interest, heading)
            })
         })
      }
      build_event_costs_table()
      
      function fill_sema(row, pop_of_interest) {
         if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") {
            if (row !== "absenteeism" && row !== "presenteeism" && row !== "STD") {
               if (include_med_costs === true) {
                  return markovData[1][1][row].sema  //! need to check stroke value - off by 2K
               } else {
                  return 0
               }
            } else if (row === "absenteeism") {
               if (include_absenteeism === true) {
                  return markovData[1][3].total_abs_cost.sema
               } else {
                  return 0
               }
            } else if (row === "presenteeism") {
               if (include_presenteeism === true) {
                  return markovData[1][4].total_pres_cost.sema
               } else {
                  return 0
               }              
            } else if (row === "STD") {
               if (include_disability === true) {
                  return markovData[1][5].total_STD_cost.sema
               } else {
                  return 0
               }
            }
         } else if (pop_of_interest === "HFpEF") {
            if (row === "myocardial_infarction") {
               if (include_med_costs === true) {
                  return markovData[2].hospitalization_cost.AOM
               } else {
                  return 0
               }
            } else if (row === "angina") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_cost.AOM
               } else {
                  return 0
               }
            } else {
               return 0 
            }
         } else if (pop_of_interest === "OA") {
            if (row === "myocardial_infarction") {
               if (include_med_costs === true) {
               return markovData[1].cost_TKA.AOM
            } else {
               return 0
            }
            } else if (row === "angina") {
               if (include_med_costs === true) {
                  return markovData[1].cost_revision.AOM
               } else {
                  return 0
               }
            } else if (row === "stroke") {
               if (include_med_costs === true) {
                  return markovData[1].cost_followup.AOM
               } else {
                  return 0
               }
            } else if (row === "PVD") {
               if (include_absenteeism === true) {
                  return markovData[1].cost_absenteeism.AOM
               } else {
                  return 0
               }
            } else if (row === "heart_failure") {
               if (include_presenteeism === true) {
                  return markovData[1].cost_presenteeism.AOM
               } else {
                  return 0
               }
            } else if (row === "absenteeism") {
               if (include_disability === true) {
                  return markovData[1].cost_STD.AOM
               } else {
                  return 0
               }
            } else if (row === "presenteeism" || row === "STD") {
               return 0
            }
         }
      }

      function fill_NI(row, pop_of_interest) {
         if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") {
            if (row !== "absenteeism" && row !== "presenteeism" && row !== "STD") {
               if (include_med_costs === true) {
                  return markovData[1][1][row].comparison  //! need to check stroke value - off by 2K
               } else {
                  return 0
               }
            } else if (row === "absenteeism") {
               if (include_absenteeism === true) {
                  return markovData[1][3].total_abs_cost.comparison
               } else {
                  return 0
               }
            } else if (row === "presenteeism") {
               if (include_presenteeism === true) {
                  return markovData[1][4].total_pres_cost.comparison
               } else {
                  return 0
               }              
            } else if (row === "STD") {
               if (include_disability === true) {
                  return markovData[1][5].total_STD_cost.comparison
               } else {
                  return 0
               }
            }
         } else if (pop_of_interest === "HFpEF") {
            if (row === "myocardial_infarction") {
               if (include_med_costs === true) {
                  return markovData[2].hospitalization_cost.comparison
               } else {
                  return 0
               }
            } else if (row === "angina") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_cost.comparison
               } else {
                  return 0
               }
            } else {
               return 0
            }
         } else if (pop_of_interest === "OA") {
            if (row === "myocardial_infarction") {
               if (include_med_costs === true) {
                  return markovData[1].cost_TKA.comparison
               } else {
                  return 0
               }
            } else if (row === "angina") {
               if (include_med_costs === true) {
                  return markovData[1].cost_revision.comparison
               } else {
                  return 0
               }
            } else if (row === "stroke") {
               if (include_med_costs === true) {
                  return markovData[1].cost_followup.comparison
               } else {
                  return 0
               }
            } else if (row === "PVD") {
               if (include_absenteeism === true) {
                  return markovData[1].cost_absenteeism.comparison
               } else {
                  return 0
               }
            } else if (row === "heart_failure") {
               if (include_presenteeism === true) {
                  return markovData[1].cost_presenteeism.comparison
               } else {
                  return 0
               }
            } else if (row === "absenteeism") {
               if (include_disability === true) {
                  return markovData[1].cost_STD.comparison
               } else {
                  return 0
               }
            } else if (row === "presenteesim" || row === "STD") {
               return 0
            }
         }
      }
      
      function fill_savings(row, pop_of_interest) {
         if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") {
            if (row !== "absenteeism" && row !== "presenteeism" && row !== "STD") {
               if (include_med_costs === true) {
                  return markovData[1][1][row].avoided  //! need to check stroke value - off by 2K
               } else {
                  return 0
               }
            } else if (row === "absenteeism") {
               if (include_absenteeism === true) {
                  return markovData[1][3].total_abs_cost.avoided
               } else {
                  return 0
               }
            } else if (row === "presenteeism") {
               if (include_presenteeism === true) {
                  return markovData[1][4].total_pres_cost.avoided
               } else {
                  return 0
               }              
            } else if (row === "STD") {
               if (include_disability === true) {
                  return markovData[1][5].total_STD_cost.avoided
               } else {
                  return 0
               }
            }
         } else if (pop_of_interest === "HFpEF") {
            if (row === "myocardial_infarction") {
               if (include_med_costs === true) {
                  return markovData[2].hospitalization_cost.avoided
               } else {
                  return 0
               }
            } else if (row === "angina") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_cost.avoided
               } else {
                  return 0
               }
            } else {
               return 0
            }
         } else if (pop_of_interest === "OA") {
            if (row === "myocardial_infarction") {
               if (include_med_costs === true) {
                  return markovData[1].cost_TKA.avoided
               } else {
                  return 0
               }
            } else if (row === "angina") {
               if (include_med_costs === true) {
                  return markovData[1].cost_revision.avoided
               } else {
                  return 0
               }
            } else if (row === "stroke") {
               if (include_med_costs === true) {
                  return markovData[1].cost_followup.avoided
               } else {
                  return 0
               }
            } else if (row === "PVD") {
               if (include_absenteeism === true) {
                  return markovData[1].cost_absenteeism.avoided
               } else {
                  return 0
               }
            } else if (row === "heart_failure") {
               if (include_presenteeism === true) {
                  return markovData[1].cost_presenteeism.avoided
               } else {
                  return 0
               }
            } else if (row === "absenteeism") {
               if (include_disability === true) {
                  return markovData[1].cost_STD.avoided
               } else {
                  return 0
               }
            } else if (row === "presenteeism" || row === "STD") {
               return 0
            }
         }
      }

      return event_cost_total_results
   }
   const event_cost_total = event_cost_results_total_table()


   function event_cost_results_patient_table() {
      const headings = [
         {name: "sema", function: fill_sema},
         {name: "NI", function: fill_NI},
         {name: "savings", function: fill_savings}
      ]

      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'absenteeism', 'presenteeism', 'STD']

      event_cost_patient_results = {}

      function build_event_costs_table() {
         headings.forEach((heading) => {
            event_cost_patient_results[heading.name] = {}
            rows.forEach((row) => {
               event_cost_patient_results[heading.name][row] = heading.function(row, pop_of_interest, heading)
            })
         })
      }
      build_event_costs_table()

      function fill_sema(row, pop_of_interest) {
            if (row === "myocardial_infarction" || row === "angina") {
               return event_cost_total.sema[row] / employees_breakdown.total_selected
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
            if (pop_of_interest !== "HFpEF") {
             
                  return event_cost_total.sema[row] / employees_breakdown.total_selected
             
            } else {
               return 0  
            }
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.sema[row] / employees_breakdown.total_selected
            } else {
               return 0 
            }
         }
      }

      function fill_NI(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_total.NI[row] / employees_breakdown.total_selected
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
            if (pop_of_interest !== "HFpEF") {
              
                  return event_cost_total.NI[row] / employees_breakdown.total_selected
         
            } else {
               return 0  
            }
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.NI[row] / employees_breakdown.total_selected
            } else {
               return 0 
            }
         }
      }

      function fill_savings(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_total.savings[row] / employees_breakdown.total_selected
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
            if (pop_of_interest !== "HFpEF") {
         
                  return event_cost_total.savings[row] / employees_breakdown.total_selected
            
            } else {
               return 0  
            }
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.savings[row] / employees_breakdown.total_selected
            } else {
               return 0 
            }
         }
      }
   
      return event_cost_patient_results
   }
   const event_cost_patient = event_cost_results_patient_table()
   const topTableLoop = event_cost_patient;


   function event_cost_results_PMPM_table() {
      const headings = [
         {name: "sema", function: fill_sema},
         {name: "NI", function: fill_NI},
         {name: "savings", function: fill_savings}
      ]

      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'absenteeism', 'presenteeism', 'STD']

      event_cost_PMPM_results = {}

      function build_event_costs_table() {
         headings.forEach((heading) => {
            event_cost_PMPM_results[heading.name] = {}
            rows.forEach((row) => {
               event_cost_PMPM_results[heading.name][row] = heading.function(row, pop_of_interest, heading)
            })
         })
      }
      build_event_costs_table()

      function fill_sema(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_total.sema[row] / employees_breakdown.total_selected / event_year_input / 12
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
               return event_cost_total.sema[row] / employees_breakdown.total_selected / event_year_input / 12
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.sema[row] / employees_breakdown.total_selected / event_year_input / 12
            } else {
               return 0 
            }
         }
      }

      function fill_NI(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_total.NI[row] / employees_breakdown.total_selected / event_year_input / 12
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
               return event_cost_total.NI[row] / employees_breakdown.total_selected / event_year_input / 12
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.NI[row] / employees_breakdown.total_selected / event_year_input / 12
            } else {
               return 0 
            }
         }
      }

      function fill_savings(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_PMPM_results.NI[row] - event_cost_PMPM_results.sema[row] 
         } else if (pop_of_interest !== "HFpEF") {
               return event_cost_PMPM_results.NI[row] - event_cost_PMPM_results.sema[row]
            } else {
               return 0
            }
      }

   
      return event_cost_PMPM_results
   }
   const event_cost_PMPM = event_cost_results_PMPM_table()


   function event_cost_results_PMPM_members_table() {
      const headings = [
         {name: "sema", function: fill_sema},
         {name: "NI", function: fill_NI},
         {name: "savings", function: fill_savings}
      ]

      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'absenteeism', 'presenteeism', 'STD']

      event_cost_PMPM_members_results = {}

      function build_event_costs_table() {
         headings.forEach((heading) => {
            event_cost_PMPM_members_results[heading.name] = {}
            rows.forEach((row) => {
               event_cost_PMPM_members_results[heading.name][row] = heading.function(row, pop_of_interest, heading)
            })
         })
      }
      build_event_costs_table()

      function fill_sema(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_total.sema[row] / event_population / event_year_input / 12
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
               return event_cost_total.sema[row] / event_population / event_year_input / 12
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.sema[row] / event_population / event_year_input / 12
            } else {
               return 0 
            }
         }
      }

      function fill_NI(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_total.NI[row] / event_population / event_year_input / 12
         } else if (row == "stroke" || row === "PVD" || row === "heart_failure" || row === "absenteeism") {
            return event_cost_total.NI[row] / event_population / event_year_input / 12
         } else {
            if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") { 
               return event_cost_total.NI[row] / event_population / event_year_input / 12
            } else {
               return 0 
            }
         }
      }

      function fill_savings(row, pop_of_interest) {
         if (row === "myocardial_infarction" || row === "angina") {
            return event_cost_PMPM_members_results.NI[row] - event_cost_PMPM_members_results.sema[row]
         } else if (pop_of_interest !== "HFpEF") {
            return event_cost_PMPM_members_results.NI[row] - event_cost_PMPM_members_results.sema[row]
            } else {
               return 0  
            }
      }

      return event_cost_PMPM_members_results
   }
   const event_cost_PMPM_per_ten_thousand = event_cost_results_PMPM_members_table()

  
   function totals_table() {
      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'absenteeism', 'presenteeism', 'STD']
      let total_sum;
      
      function total_results() {
         const sum_arr = []
         rows.forEach((row) => {
            if (event_PMPM === "savings_per_patient") {
               sum_arr.push(event_cost_patient.savings[row])
            } else if (event_PMPM === "total_savings") {
               sum_arr.push(event_cost_total.savings[row])
            } else if (event_PMPM === "PPPM_treated") {
               sum_arr.push(event_cost_PMPM.savings[row])
            } else {
               sum_arr.push(event_cost_PMPM_per_ten_thousand.savings[row])
            }
            total_sum = sum_arr.reduce((a, b) => a + b, 0)
         })
         return event_PMPM === "total_savings" ? FormatCurrencyInt(total_sum) : FormatCurrency(total_sum)
      }
      const total_for_results = total_results()


      function text_display() {
         if (event_PMPM === "savings_per_patient") {
            return event_year_input > 1 ? `Savings per patient in ${event_year_input} years` : `Savings per patient in ${event_year_input} year`
         } else if (event_PMPM === "total_savings") {
            return `Savings in ${event_year_input} years`
         } else if (event_PMPM === "PPPM_treated") {
            return "Savings PPPM"
         } else {
            return "Savings PMPM"
         }
      }
      const total_text = text_display();

      function costs_value() {
         const sum_arr = []
         rows.forEach((row) => {
            sum_arr.push(event_cost_total.savings[row])
            total_sum = sum_arr.reduce((a,b) => a+b, 0)
         })
         return Math.round(total_sum)
      }
      const total_costs = costs_value()

      return [total_for_results, total_text, total_costs]
   }
   const event_totals_table = totals_table();


   function event_results_table() {
      const ratio_abs_to_present_days = 3.94    //todo *** need to change from hard-coded to user input ***

      const headings = [
         {name: "AOM", function: fill_AOM},
         {name: "NI", function: fill_NI},
         {name: "avoided", function: fill_avoided}
      ]

      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure','absenteeism', 'presenteeism', 'all_cause_deaths']

      event_total_results = {}

      function build_event_total_results_table() {
         headings.forEach((heading) => {
            event_total_results[heading.name] = {}
            rows.forEach((row) => {
               event_total_results[heading.name][row] = heading.function(row, pop_of_interest, heading)
            })
         })
      }
      build_event_total_results_table()

      function fill_AOM(row, pop_of_interest) {
         const sum_arr = []
         let total;
         if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") {
            if (row !== "absenteeism" && row !== "presenteeism" && row !== "all_cause_deaths") {
               return markovData[1][0][row].sema 
            } else if (row === "all_cause_deaths") {
               return markovData[1][0].deaths.sema
            } else if (row === "absenteeism") {
               if (include_absenteeism === true) {
                  rows.slice(0,5).forEach((row) => {
                     sum_arr.push(markovData[1][2][row].sema)
                     total = sum_arr.reduce((a,b) => a+b,0)
                  })
                  return total
               } else {
                  return 0
               }
            } else if (row === "presenteeism") {
               if (include_presenteeism === true) {
                  rows.slice(0,5).forEach((row) => {
                     sum_arr.push(markovData[1][2][row].sema)
                     total = sum_arr.reduce((a,b) => a+b,0) * ratio_abs_to_present_days
                  })
                  return total
               } else {
                  return 0
               }              
            }
         } else if (pop_of_interest === "HFpEF") {
            if (row === "myocardial_infarction") {
                  return markovData[2].hospitalizations.AOM
            } else if (row === "angina") {
                  return markovData[2].deaths.AOM
            } else if (row === "stroke") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_days.AOM
               } else {
                  return 0
               }
            } else {
               return 0
            }
         } else if (pop_of_interest === "OA") {
            if (row === "myocardial_infarction") {
               return markovData[2].TKA.AOM
            } else if (row === "angina") {
               return markovData[2].revision.AOM
            } else if (row === "stroke") {
               return markovData[2].deaths.AOM
            } else if (row === "PVD") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_days.AOM
               } else {
                  return 0
               }
            } else if (row === "heart_failure") {
               if (include_presenteeism === true) {
                  return markovData[2].presenteeism_days.AOM
               } else {
                  return 0
               }
            } else {
               return 0 
            }
         }
      }

      function fill_NI(row, pop_of_interest) {
         const sum_arr = []
         let total;
         if (pop_of_interest !== "HFpEF" && pop_of_interest !== "OA") {
            if (row !== "absenteeism" && row !== "presenteeism" && row !== "all_cause_deaths") {
               return markovData[1][0][row].comparison 
            } else if (row === "all_cause_deaths") {
               return markovData[1][0].deaths.comparison
            } else if (row === "absenteeism") {
               if (include_absenteeism === true) {
                  rows.slice(0,5).forEach((row) => {
                     sum_arr.push(markovData[1][2][row].comparison)
                     total = sum_arr.reduce((a,b) => a+b,0)
                  })
                  return total
               } else {
                  return 0
               }
            } else if (row === "presenteeism") {
               if (include_presenteeism === true) {
                  rows.slice(0,5).forEach((row) => {
                     sum_arr.push(markovData[1][2][row].comparison)
                     total = sum_arr.reduce((a,b) => a+b,0) * ratio_abs_to_present_days
                  })
                  return total
               } else {
                  return 0
               }              
            }
         } else if (pop_of_interest === "HFpEF") {
            if (row === "myocardial_infarction") {
                  return markovData[2].hospitalizations.comparison
            } else if (row === "angina") {
                  return markovData[2].deaths.comparison
            } else if (row === "stroke") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_days.comparison
               } else {
                  return 0
               }
            } else {
               return 0
            }
         } else if (pop_of_interest === "OA") {
            if (row === "myocardial_infarction") {
               return markovData[2].TKA.comparison
            } else if (row === "angina") {
               return markovData[2].revision.comparison
            } else if (row === "stroke") {
               return markovData[2].deaths.comparison
            } else if (row === "PVD") {
               if (include_absenteeism === true) {
                  return markovData[2].absenteeism_days.comparison
               } else {
                  return 0
               }
            } else if (row === "heart_failure") {
               if (include_presenteeism === true) {
                  return markovData[2].presenteeism_days.comparison
               } else {
                  return 0
               }
            } else {
               return 0 
            }
         }
      }

      function fill_avoided(row) {
         return `${event_total_results.NI[row] - event_total_results.AOM[row]} (${(event_total_results.NI[row] - event_total_results.AOM[row]) / event_total_results.NI[row]})`
      }
   return event_total_results
   }
   const event_event_results = event_results_table()


   function event_results_patient_table() {
      const headings = [
         {name: "AOM", function: fill_AOM},
         {name: "NI", function: fill_NI},
         {name: "avoided", function: fill_avoided}
      ]

      const rows = ['myocardial_infarction', 'angina', 'stroke', 'PVD', 'heart_failure', 'absenteeism', 'presenteeism', 'all_cause_deaths']

      event_results_patient_results = {}

      function build_event_results_table() {
         headings.forEach((heading) => {
            event_results_patient_results[heading.name] = {}
            rows.forEach((row) => {
               event_results_patient_results[heading.name][row] = heading.function(row, pop_of_interest, heading)
            })
         })
      }
      build_event_results_table()

      function fill_AOM(row) {
         return (employees_breakdown.total_individuals / employees_breakdown.total_selected) * event_event_results.AOM[row]
      }

      function fill_NI(row) {
         return (employees_breakdown.total_individuals / employees_breakdown.total_selected) * event_event_results.NI[row]
      }

      function fill_avoided(row) {
         if (event_results_patient_results.NI[row] !== 0 && event_results_patient_results.AOM[row] !== 0) {
            return [event_results_patient_results.NI[row] - event_results_patient_results.AOM[row], (event_results_patient_results.NI[row] - event_results_patient_results.AOM[row]) / event_results_patient_results.NI[row]]
         } else {
            return [event_results_patient_results.NI[row] - event_results_patient_results.AOM[row], (event_results_patient_results.NI[row] - event_results_patient_results.AOM[row]) / 1]
         }
      }
 
      return event_results_patient_results
   }
   const event_event_results_patient = event_results_patient_table()
   const bottomTableLoop = event_event_results_patient;

   const view_by_cost_tables = {
      "savings_per_patient": event_cost_patient_results,
      "total_savings": event_cost_total,
      "savings_PPPM_treated_patients": event_cost_PMPM,
      "PMPM_based_on_10000_individuals": event_cost_PMPM_per_ten_thousand
   }

   if (is_final_loop) {

      populateEventTable(events_POI, view_by_cost_tables, event_results_patient_results, event_totals_table, intervention_selected, event_PMPM, event_year_input)
   }

   return {topTableLoop, bottomTableLoop, view_by_cost_tables};
}

function calculateEventsResultsLoop(distro_table, roi_table, myParams) {
   console.log(roi_table, 'ROI table')

   console.log(myParams, 'PARAMS')
   const pop_of_interest = document.querySelector('select[name="POI1"]').value;
   const timeHorizonChosen = formattedUserInputData.year_choice;

   let pop_for_display = pop_of_interest;
   if (pop_for_display === 'HFpEF') {
      pop_for_display = 'Cardiovascular diseases';
   }
   if (pop_for_display === 'OA') {
      pop_for_display = 'Osteoarthritis';
   }

   const intervention_selected = document.querySelector('select[name="AOM_VS"]').value === 'No intervention' ? 'NI' : 'ILT';
   const view_by = document.querySelector('select[name="View_By"]').value;
   const selectedPopulation = roi_table["Overweight and obesity (I, II, and III)"][pop_for_display].detailed.displayPopulation;
   const savingsDataScheme = {
      'savings_per_patient': 'savings_per_patient',
      'total_savings': 'total_savings',
      'PPPM_treated': 'savings_PPPM_treated_patients',
      'PMPM_based': 'PMPM_based_on_10000_individuals'
   }

   const chartData = {
      avoidedChart: {},
      savingsChart: {}
   };

   for (let i = 1; i <= timeHorizonChosen; i++) {
      const is_final_loop = i === timeHorizonChosen ? true : false;
      const currentData = calculateEventsResults(pop_of_interest, distro_table, i, intervention_selected, view_by, is_final_loop);
      const savingsData = currentData.view_by_cost_tables[savingsDataScheme[view_by]]['savings'];

      chartData.avoidedChart[`Year${i}`] = currentData.bottomTableLoop['avoided'];
      chartData.savingsChart[`Year${i}`] = savingsData;

   }
   populateEventResults(chartData, formattedUserInputData.year_choice, selectedPopulation, pop_of_interest);
}
