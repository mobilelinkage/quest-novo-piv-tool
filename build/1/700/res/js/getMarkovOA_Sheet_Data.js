function getMarkovOAData(intervention, distro_table, myParams) {

   const [ OA_overall_risk, OA_overall_mortalitiy, knee_total_table_total ] = getAverageOASheetData(intervention, distro_table, myParams)

   const pTKA_pRev_pDeath = pTKA_table();
   const KR_table = knee_replacement_table(pTKA_pRev_pDeath);
   const HC_KR_table = half_cycle_table(KR_table);

   function pTKA_table() {
      const headings = [
         {name: 'pTKA', function: fill_pTKA},
         {name: 'pRevision', function: fill_pRevision},
         {name: 'pDeath', function: fill_pDeath},
      ]

      const new_pTKA_table= {
         years: []
      }

      const pRevision_data = [0.028, 0.028, 0.028, 0.028, 0.028, 0.028, 0.073, 0.146, 0.219, 0.292, 0.365] //hard-coded from Markov OA D7-D16

      function build_pTKA_table() {
         for (i=1; i<=10; i++) {
            new_pTKA_table.years[i] = {};
            headings.forEach(heading => {
               new_pTKA_table.years[i][heading.name] = heading.function(i);
            })
         }
      }
      build_pTKA_table();


      function fill_pTKA(year) {
         return OA_overall_risk[`year${year}`]
      }

      function fill_pRevision(year) {
         return pRevision_data[year]
      }

      function fill_pDeath(year) {
         return OA_overall_mortalitiy[`year${year}`]
      }
      return new_pTKA_table
   }

   function knee_replacement_table() {
      const headings = [
         {name: 'OA_knee', function: fill_OA_knee},
         {name: 'year_since_KR_1', function: fill_year_since_KR},
         {name: 'year_since_KR_2', function: fill_year_since_KR},
         {name: 'year_since_KR_3', function: fill_year_since_KR},
         {name: 'year_since_KR_4', function: fill_year_since_KR},
         {name: 'year_since_KR_5', function: fill_year_since_KR},
         {name: 'year_since_KR_6', function: fill_year_since_KR},
         {name: 'year_since_KR_7', function: fill_year_since_KR},
         {name: 'year_since_KR_8', function: fill_year_since_KR},
         {name: 'year_since_KR_9', function: fill_year_since_KR},
         {name: 'year_since_KR_10', function: fill_year_since_KR},
         {name: 'revision', function: fill_revision},
         {name: 'death', function: fill_death},
         {name: 'total', function: fill_total},
         {name: 'new_rev', function: fill_new_rev},
      ]
   

      const new_KR_table = {
         years:[]
      }

      function build_KR_table() {
         for (i=0; i<=10; i++) {
            new_KR_table.years[i] = {};
            headings.forEach(heading => {
               new_KR_table.years[i][heading.name] = heading.function(i, heading.name);
            })
         }
      }
      build_KR_table()

      

      function fill_OA_knee(year) {
         if (year === 0) {
            console.log(knee_total_table_total, 'knee total')
            return knee_total_table_total.baseline
         } else {
            const previous = new_KR_table.years[year - 1].OA_knee;
            return previous * (1 - pTKA_pRev_pDeath.years[year].pTKA) - (previous * pTKA_pRev_pDeath.years[year].pDeath)
         }
      }


      function fill_year_since_KR(year, name) {
         if (year === 0) {
            return 0
         } else {
            const KR_year_ID = +name.split('year_since_KR_')[1]
            const previous = new_KR_table.years[year - 1].OA_knee;
            
            if (KR_year_ID === 1) {
               return previous * pTKA_pRev_pDeath.years[year].pTKA
            } else if (KR_year_ID > 1 && KR_year_ID < year+1 ) {
               const prev_year_val =  new_KR_table.years[year - 1][`year_since_KR_${KR_year_ID - 1}`] 
               return prev_year_val * (1 - pTKA_pRev_pDeath.years[KR_year_ID].pRevision) - prev_year_val * pTKA_pRev_pDeath.years[year].pDeath
            } else {
               return 0
            }
         }
      }

      function fill_revision(year) {
         if (year === 0) {
            return 0
         } else if (year > 0 && year <= 4) {
            const previous = new_KR_table.years[year - 1].revision 
            return previous * (1 - pTKA_pRev_pDeath.years[year].pDeath) + new_KR_table.years[year - 1].year_since_KR_1 * pTKA_pRev_pDeath.years[1].pRevision + new_KR_table.years[year - 1].year_since_KR_2 * pTKA_pRev_pDeath.years[2].pRevision + new_KR_table.years[year - 1].year_since_KR_3 * pTKA_pRev_pDeath.years[3].pRevision + new_KR_table.years[year - 1].year_since_KR_4 * pTKA_pRev_pDeath.years[4].pRevision + new_KR_table.years[year - 1].year_since_KR_5 * pTKA_pRev_pDeath.years[5].pRevision + new_KR_table.years[year - 1].year_since_KR_6 * pTKA_pRev_pDeath.years[6].pRevision + new_KR_table.years[year - 1].year_since_KR_7 * pTKA_pRev_pDeath.years[7].pRevision + new_KR_table.years[year - 1].year_since_KR_8 * pTKA_pRev_pDeath.years[8].pRevision + new_KR_table.years[year - 1].year_since_KR_9 * pTKA_pRev_pDeath.years[9].pRevision
         } else if (year === 5) {
            const previous = new_KR_table.years[year - 1].revision 
            return previous * (1 - pTKA_pRev_pDeath.years[year].pDeath) + new_KR_table.years[year - 1].year_since_KR_1 * pTKA_pRev_pDeath.years[1].pRevision + new_KR_table.years[year - 1].year_since_KR_2 * pTKA_pRev_pDeath.years[2].pRevision + new_KR_table.years[year - 1].year_since_KR_3 * pTKA_pRev_pDeath.years[3].pRevision + new_KR_table.years[year - 1].year_since_KR_4 * pTKA_pRev_pDeath.years[4].pRevision + new_KR_table.years[year - 1].year_since_KR_5 * pTKA_pRev_pDeath.years[5].pRevision + new_KR_table.years[year - 1].year_since_KR_6 * pTKA_pRev_pDeath.years[6].pRevision + new_KR_table.years[year - 1].year_since_KR_7 * pTKA_pRev_pDeath.years[7].pRevision + new_KR_table.years[year - 1].year_since_KR_8 * pTKA_pRev_pDeath.years[8].pRevision + new_KR_table.years[year - 1].year_since_KR_9 * pTKA_pRev_pDeath.years[9].pRevision + new_KR_table.years[year - 1].year_since_KR_10 * pTKA_pRev_pDeath.years[9].pRevision
         } else if (year > 5) {
            const previous = new_KR_table.years[year - 1].revision 
            return previous * (1 - pTKA_pRev_pDeath.years[year].pDeath) + new_KR_table.years[year - 1].year_since_KR_1 * pTKA_pRev_pDeath.years[2].pRevision + new_KR_table.years[year - 1].year_since_KR_2 * pTKA_pRev_pDeath.years[3].pRevision + new_KR_table.years[year - 1].year_since_KR_3 * pTKA_pRev_pDeath.years[4].pRevision + new_KR_table.years[year - 1].year_since_KR_4 * pTKA_pRev_pDeath.years[5].pRevision + new_KR_table.years[year - 1].year_since_KR_5 * pTKA_pRev_pDeath.years[6].pRevision + new_KR_table.years[year - 1].year_since_KR_6 * pTKA_pRev_pDeath.years[7].pRevision + new_KR_table.years[year - 1].year_since_KR_7 * pTKA_pRev_pDeath.years[8].pRevision + new_KR_table.years[year - 1].year_since_KR_8 * pTKA_pRev_pDeath.years[9].pRevision + new_KR_table.years[year - 1].year_since_KR_9 * pTKA_pRev_pDeath.years[10].pRevision
         }
      }

      function fill_death(year) {
         if (year === 0) {
            return 0
         } else if (year === 1) {
            return new_KR_table.years[0].OA_knee * pTKA_pRev_pDeath.years[1].pDeath;
         } else {
            const previous = new_KR_table.years[year - 1];
            const row_sum = [previous.OA_knee, previous.revision];
            for (j=1; j<=10; j++) {        
               row_sum.push(previous[`year_since_KR_${j}`]);
            }
            return previous.death + row_sum.reduce((a,b) => a+b, 0) * pTKA_pRev_pDeath.years[year].pDeath;
         }
      }

      function fill_total(year) {
         const current = new_KR_table.years[year];
         const row_sum = [current.OA_knee, current.revision, current.death];
         for (j=1; j<=10; j++) {        
            row_sum.push(current[`year_since_KR_${j}`]);
         }
         return row_sum.reduce((a,b) => a+b,0);
      }

      function fill_new_rev(year) {
         const previous = new_KR_table.years[year - 1];
         const pRevision_next = pTKA_pRev_pDeath.years;

         if (year === 0) {
            return 0;
         } else {
            return previous.year_since_KR_1*pRevision_next[2].pRevision + previous.year_since_KR_2*pRevision_next[3].pRevision + previous.year_since_KR_3*pRevision_next[4].pRevision + previous.year_since_KR_4*pRevision_next[5].pRevision + previous.year_since_KR_5*pRevision_next[6].pRevision + previous.year_since_KR_6*pRevision_next[7].pRevision + previous.year_since_KR_7*pRevision_next[8].pRevision + previous.year_since_KR_8*pRevision_next[9].pRevision + previous.year_since_KR_9*pRevision_next[10].pRevision;
         }
      }
      return new_KR_table
   }

   function half_cycle_table() {

      const working_hours_day = formattedUserInputData.working_hours_input;     
      const hourly_comp = formattedUserInputData.hourly_compensation_input;

      const present_to_absent_cost_multiplier = 1.97     //hard-coded from distribution AOM AX131
 
      const discount_rate = 0.03

      const losina_2019 = {
         "KR_cost": 19582.90,
         "revision_cost": 27218.45,
         "followup": 118.74
      }

      const berger_2011 = {
         "absenteeism_days": 22.06,
         "short_term_disability": 3848.53,
         "workers_comp": -504.06
      }

      const headings = [
         {name: 'HC_OA_knee', function: HC_fill_OA_knee},
         {name: 'HC_year_since_KR_1', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_2', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_3', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_4', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_5', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_6', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_7', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_8', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_9', function: HC_fill_year_since_KR},
         {name: 'HC_year_since_KR_10', function: HC_fill_year_since_KR},
         {name: 'HC_revision', function: HC_fill_revision},
         {name: 'HC_death', function: HC_fill_death},
         {name: 'HC_total', function: HC_fill_total},
         {name: 'HC_new_rev', function: HC_fill_new_rev},
         {name: 'HC_replacement_cost', function: HC_fill_replacement_cost},
         {name: 'HC_replacement_discount', function: HC_fill_replacement_discount}, 
         {name: 'HC_replacement_cumulative', function: HC_fill_replacement_cumulative},
         {name: 'HC_revision_cost', function: HC_fill_revision_cost},
         {name: 'HC_revision_cost', function: HC_fill_revision_cost},
         {name: 'HC_revision_discount', function: HC_fill_revision_discount},
         {name: 'HC_revision_cumulative', function: HC_fill_revision_cumulative},
         {name: 'HC_followup_cost', function: HC_fill_followup_cost},
         {name: 'HC_followup_discount', function: HC_fill_followup_discount},
         {name: 'HC_followup_cumulative', function: HC_fill_followup_cumulative},
         {name: 'HC_absenteeism_days', function: HC_fill_absenteeism_days},
         {name: 'HC_absenteeism_cost', function: HC_fill_absenteeism_cost},
         {name: 'HC_absenteeism_discount', function: HC_fill_absenteeism_discount},
         {name: 'HC_absenteeism_cumulative', function: HC_fill_absenteeism_cumulative},
         {name: 'HC_presenteeism_cost', function: HC_fill_presenteeism_cost},
         {name: 'HC_presenteeism_discount', function: HC_fill_presenteeism_discount},
         {name: 'HC_presenteeism_cumulative', function: HC_fill_presenteeism_cumulative},
         {name: 'HC_STD_cost', function: HC_fill_STD_cost},
         {name: 'HC_STD_discount', function: HC_fill_STD_discount},
         {name: 'HC_STD_cumulative', function: HC_fill_STD_cumulative},
         {name: 'HC_workers_comp_cost', function: HC_fill_workers_comp_cost},
         {name: 'HC_workers_comp_discount', function: HC_fill_workers_comp_discount},
         {name: 'HC_workers_comp_cumulative', function: HC_fill_workers_comp_cumulative},
         {name: 'HC_direct_total', function: HC_fill_direct_total},
         {name: 'HC_indirect_total', function: HC_fill_indirect_total},
      ]
   

      const HC_KR_table = {
         years:[]
      }

      function build_HC_KR_table() {
         for (i=0; i<=10; i++) {
            HC_KR_table.years[i] = {};
            headings.forEach(heading => {
               HC_KR_table.years[i][heading.name] = heading.function(i, heading.name);
            })
         }
      }
      build_HC_KR_table()

      function HC_fill_OA_knee(year) {
         if (year === 0) {
            return KR_table.years[0].OA_knee
         } else {
            return (KR_table.years[year - 1].OA_knee + KR_table.years[year].OA_knee) / 2
         }
      }

      function HC_fill_year_since_KR(year, name) {
         if (year === 0) {
            return 0
         } else {
            return (KR_table.years[year - 1][name.split("HC_")[1]] + KR_table.years[year][name.split("HC_")[1]]) / 2
         }
      }

      function HC_fill_revision(year) {
         if (year === 0) {
            return 0
         } else {
            return  (KR_table.years[year - 1].revision + KR_table.years[year].revision) / 2
         }
      }

      function HC_fill_death(year) {
         if (year === 0) {
            return KR_table.years[0].death
         } else {
            return (KR_table.years[year - 1].death + KR_table.years[year].death) / 2
         }
      }

      function HC_fill_total(year) {
         if (year === 0) {
            return 0
         } else {
            const HC_total_row_sum = [HC_KR_table.years[year].HC_OA_knee, HC_KR_table.years[year].HC_revision, HC_KR_table.years[year].HC_death ]
            for (j=1; j<=10; j++) {        
               HC_total_row_sum.push(HC_KR_table.years[year][`HC_year_since_KR_${j}`]);
            }
            return HC_total_row_sum.reduce((a,b) => a+b,0);
         }
      }

      function HC_fill_new_rev(year) {
         if (year === 0) {
            return KR_table.years[0].new_rev
         } else {
            return (KR_table.years[year - 1].new_rev + KR_table.years[year].new_rev) / 2
         }
      }

      function HC_fill_replacement_cost(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_year_since_KR_1 * losina_2019.KR_cost
         }
      }

      function HC_fill_replacement_discount(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_replacement_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_replacement_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_replacement_cumulative + HC_KR_table.years[year].HC_replacement_discount
         }
      }

      function HC_fill_revision_cost(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_new_rev * losina_2019.revision_cost
         }
      }

      function HC_fill_revision_discount(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_revision_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_revision_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_revision_cumulative + HC_KR_table.years[year].HC_revision_discount
         }
      }

      function HC_fill_followup_cost(year) {
         if (year === 0) {
            return 0
         } else {
            const HC_total_row_sum = [HC_KR_table.years[year - 1].HC_revision]
            for (j=1; j<=10; j++) {        
               HC_total_row_sum.push(HC_KR_table.years[year - 1][`HC_year_since_KR_${j}`]);
            }
            return HC_total_row_sum.reduce((a,b) => a+b, 0) * losina_2019.followup
         }
      }

      function HC_fill_followup_discount(year) {
         if (year === 0) {
            return 0 
         } else if (year === 1) {
            return HC_KR_table.years[year].HC_followup_cost / (1 + discount_rate)
         } else {
            return HC_KR_table.years[year].HC_followup_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_followup_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_followup_cumulative + HC_KR_table.years[year].HC_followup_discount
         }
      }

      function HC_fill_absenteeism_days(year) {
         if (year === 0) {
            return 0
         } else {
            return (HC_KR_table.years[year].HC_year_since_KR_1 + HC_KR_table.years[year].HC_new_rev)  * berger_2011.absenteeism_days
         }
      }

      function HC_fill_absenteeism_cost(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_absenteeism_days * working_hours_day * hourly_comp
         }
      }

      function HC_fill_absenteeism_discount(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_absenteeism_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_absenteeism_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_absenteeism_cumulative + HC_KR_table.years[year].HC_absenteeism_discount
         }
      }

      function HC_fill_presenteeism_cost(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_absenteeism_cost * present_to_absent_cost_multiplier
         }
      }

      function HC_fill_presenteeism_discount(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_presenteeism_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_presenteeism_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_presenteeism_cumulative + HC_KR_table.years[year].HC_presenteeism_discount
         }
      }

      function HC_fill_STD_cost(year) {
         if (year === 0) {
            return 0
         } else {
            return (HC_KR_table.years[year].HC_year_since_KR_1 + HC_KR_table.years[year].HC_new_rev)  * berger_2011.short_term_disability
         }
      }

      function HC_fill_STD_discount(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_STD_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_STD_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_STD_cumulative + HC_KR_table.years[year].HC_STD_discount
         }
      }

      function HC_fill_workers_comp_cost(year) {
         if (year === 0) {
            return 0
         } else {
            return (HC_KR_table.years[year].HC_year_since_KR_1 + HC_KR_table.years[year].HC_new_rev)  * berger_2011.workers_comp
         }
      }

      function HC_fill_workers_comp_discount(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_workers_comp_cost / Math.pow(1 + discount_rate, year)
         }
      }

      function HC_fill_workers_comp_cumulative(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year - 1].HC_workers_comp_cumulative + HC_KR_table.years[year].HC_workers_comp_discount
         }
      }

      function HC_fill_direct_total(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_replacement_cumulative + HC_KR_table.years[year].HC_revision_cumulative + HC_KR_table.years[year].HC_followup_cumulative
         }
      }

      function HC_fill_indirect_total(year) {
         if (year === 0) {
            return 0
         } else {
            return HC_KR_table.years[year].HC_absenteeism_cumulative + HC_KR_table.years[year].HC_presenteeism_cumulative + HC_KR_table.years[year].HC_STD_cumulative + HC_KR_table.years[year].HC_workers_comp_cumulative
         }
      }

   return HC_KR_table
   }


   return [ pTKA_pRev_pDeath, KR_table, HC_KR_table ]
}




function OA_results_table(HC_KR_table, HC_KR_table_selected, event_year_input) {
   
   const time = event_year_input      
   const ratio_abs_to_present_days = 3.94    //hard-coded from central data control E127


   const headings = [
      {name: 'AOM', function: fill_AOM},
      {name: 'comparison', function: fill_comparison},
      {name: 'avoided', function: fill_avoided},
      {name: 'avoided_percentage', function: fill_avoided_percentage}
   ]

   const rows = [
      'TKA', 'revision', 'deaths', 'absenteeism_days', 'presenteeism_days', 'cost_TKA', 'cost_revision', 'cost_followup', 
   ]

   const results = {};

   function build_OA_results_table() {
      rows.forEach((row) => {
         results[row] = {};
         headings.forEach((heading) => {
            results[row][heading.name] = heading.function(row);
         })     
      })
   }
   build_OA_results_table();
   
   
   function fill_AOM(row) {
      const HC_KR1_arr = []
      switch(row) {
         case "TKA":
            for (i=0; i<=time; i++) {
               HC_KR1_arr.push(HC_KR_table.years[i].HC_year_since_KR_1)
            }
            return HC_KR1_arr.reduce((a,b) => a+b, 0)
         case "revision":
            for (i=0; i<=time; i++) {
               HC_KR1_arr.push(HC_KR_table.years[i].HC_new_rev)
            }
            return HC_KR1_arr.reduce((a,b) => a+b, 0)
         case "deaths":
            return HC_KR_table.years[time].HC_death
         case "absenteeism_days":
            for (i=0; i<=time; i++) {
               HC_KR1_arr.push(HC_KR_table.years[i].HC_absenteeism_days)
            }
            return HC_KR1_arr.reduce((a,b) => a+b, 0)
         case "presenteeism_days":
            return results.absenteeism_days.AOM * ratio_abs_to_present_days
         default:
      }
   }

   function fill_comparison(row) {
      const HC_KR1_arr = []
      switch(row) {
         case "TKA":
            for (i=0; i<=time; i++) {
               HC_KR1_arr.push(HC_KR_table_selected.years[i].HC_year_since_KR_1)
            }
            return HC_KR1_arr.reduce((a,b) => a+b, 0)
         case "revision":
            for (i=0; i<=time; i++) {
               HC_KR1_arr.push(HC_KR_table_selected.years[i].HC_new_rev)
            }
            return HC_KR1_arr.reduce((a,b) => a+b, 0)
         case "deaths":
            return HC_KR_table_selected.years[time].HC_death
         case "absenteeism_days":
            for (i=0; i<=time; i++) {
               HC_KR1_arr.push(HC_KR_table_selected.years[i].HC_absenteeism_days)
            }
            return HC_KR1_arr.reduce((a,b) => a+b, 0)
         case "presenteeism_days":
            return results.absenteeism_days.comparison * ratio_abs_to_present_days
         default:
      }
   }

   function fill_avoided(row) {
      return results[row].comparison - results[row].AOM 
   }

   function fill_avoided_percentage(row) {
      return results[row].avoided / results[row].comparison
   }

   return results
}

function cost_results_table(HC_KR_table, HC_KR_table_selected, event_year_input) {

   const time = event_year_input    

   const headings = [
      {name: 'AOM', function: fill_AOM},
      {name: 'comparison', function: fill_comparison},
      {name: 'avoided', function: fill_avoided},
      {name: 'avoided_percentage', function: fill_avoided_percentage}
   ]

   const rows = [
      'cost_TKA', 'cost_revision', 'cost_followup', 'cost_absenteeism', 'cost_presenteeism', 'cost_STD', 'cost_workers_comp', 'total_cost' 
   ]

   const cost_results = {};

   function build_cost_results_table() {
      rows.forEach((row) => {
         cost_results[row] = {};
         headings.forEach((heading) => {
            cost_results[row][heading.name] = heading.function(row);
         })     
      })
   }
   build_cost_results_table();


   function fill_AOM(row) {
      if (row === "cost_TKA") {
         return HC_KR_table.years[time].HC_replacement_cumulative
      } else if (row === "total_cost") {
         const sum_arr = []
         const keys = (Object.entries(cost_results))
         for (i=0; i<=keys.length-2; i++) {
            sum_arr.push(keys[i][1].AOM)
         }
         return sum_arr.reduce((a,b) => a+b,0)
      } else {
         const header = row.split("cost_")[1];
         return HC_KR_table.years[time][`HC_${header}_cumulative`]
      }
   } 

   function fill_comparison(row) {
      if (row === "cost_TKA") {
         return HC_KR_table_selected.years[time].HC_replacement_cumulative
      } else if (row === "total_cost") {
         const sum_arr = []
         const keys = (Object.entries(cost_results))
         for (i=0; i<=keys.length-2; i++) {
            sum_arr.push(keys[i][1].comparison)
         }
         return sum_arr.reduce((a,b) => a+b,0)
      } else {
         const header = row.split("cost_")[1];
         return HC_KR_table_selected.years[time][`HC_${header}_cumulative`]
      }
   }

   function fill_avoided(row) {
      return cost_results[row].comparison - cost_results[row].AOM 
   }

   function fill_avoided_percentage(row) {
      return cost_results[row].avoided / cost_results[row].comparison
   }

   return cost_results
}

function PMPM_results_table(KR_table, cost_results, event_year_input) {

   const time = event_year_input    
   const headings = [
      {name: 'AOM', function: fill_AOM},
      {name: 'comparison', function: fill_comparison},
      {name: 'avoided', function: fill_avoided},
      {name: 'avoided_percentage', function: fill_avoided_percentage}
   ]

   const rows = [
      'PMPM_cost_TKA', 'PMPM_cost_revision', 'PMPM_cost_followup', 'PMPM_cost_absenteeism', 'PMPM_cost_presenteeism', 'PMPM_cost_STD', 'PMPM_cost_workers_comp', 'PMPM_total_cost' 
   ]

   const PMPM_cost_results = {};

   function build_PMPM_results_table() {
      rows.forEach((row) => {
         PMPM_cost_results[row] = {};
         headings.forEach((heading) => {
            PMPM_cost_results[row][heading.name] = heading.function(row);
         })     
      })
   }
   build_PMPM_results_table();

   
   
   function fill_AOM(row) {
      if (row !== "total_cost") {
         const header = row.split('PMPM_')[1]
         return cost_results[header].AOM / KR_table.years[0].OA_knee / time / 12
      } else {
         const sum_arr = []
         const keys = (Object.entries(PMPM_cost_results))
         for (i=0; i<=keys.length-1; i++) {
            sum_arr.push(keys[i][1].AOM)
         }
         return sum_arr.reduce((a,b) => a+b,0)
      }
   }

   function fill_comparison(row) {
      if (row !== "total_cost") {
         const header = row.split('PMPM_')[1]
         return cost_results[header].comparison / KR_table.years[0].OA_knee / time / 12
      } else {
         const sum_arr = []
         const keys = (Object.entries(PMPM_cost_results))
         for (i=0; i<=keys.length-1; i++) {
            sum_arr.push(keys[i][1].AOM)
         }
         return sum_arr.reduce((a,b) => a+b,0)
      }
   }

   function fill_avoided(row) {
      return PMPM_cost_results[row].comparison - PMPM_cost_results[row].AOM 
   }

   function fill_avoided_percentage(row) {
      return PMPM_cost_results[row].avoided / PMPM_cost_results[row].comparison
   }

   return PMPM_cost_results
}


