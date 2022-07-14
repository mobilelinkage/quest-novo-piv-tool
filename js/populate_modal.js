function get_events_modal_data(pop_of_interest, markovData) {

   const employees_breakdown = {}

   console.log(pop_of_interest)

   if (pop_of_interest === "HFpEF") {
      pop_of_interest = "Cardiovascular diseases"
      pop_modal_text = "HFpEF"
   } else if (pop_of_interest === "OA") {
      pop_of_interest = "Osteoarthritis"
      pop_modal_text = "Knee osteoarthritis"
   } else if (pop_of_interest === "People with overweight/ obesity") {
      pop_modal_text = "overweight and obesity"
   } else {
      pop_modal_text = pop_of_interest
   }


   function calc_among_percent_with_overweight(pop_of_interest, employees_breakdown, markovData) {
      if (pop_of_interest === "Cardiovascular diseases") {
         return markovData[0][1].years[0].HFpEF / (employees_breakdown.total_individuals * employees_breakdown.percent_overweight_all_obesity);
      } else if (pop_of_interest === "Osteoarthritis") {
         console.log((markovData[0].years[0].OA_knee / 100), employees_breakdown.total_individuals, employees_breakdown.percent_overweight_all_obesity)
         return markovData[0].years[0].OA_knee / (employees_breakdown.total_individuals * employees_breakdown.percent_overweight_all_obesity);
      } else {
         return markovData[0][1].years[0].people_with_overweight / (employees_breakdown.total_individuals * employees_breakdown.percent_overweight_all_obesity);
      }
   }

   employees_breakdown.total_individuals = userInputData.num_of_individuals_input;

   employees_breakdown.percent_overweight_all_obesity = currentROITables["Overweight and obesity (I, II, and III)"][pop_of_interest].detailed.among_emp_percent;

   employees_breakdown.among_percent_with_overweight = calc_among_percent_with_overweight(pop_of_interest, employees_breakdown, markovData)

   employees_breakdown.eligibility = userInputData.eligibility_for_treatment_input;

   employees_breakdown.total_selected = employees_breakdown.total_individuals * employees_breakdown.percent_overweight_all_obesity * employees_breakdown.among_percent_with_overweight;

   console.log(employees_breakdown, 'modal emp')

   pop_modal_values(employees_breakdown)

   return employees_breakdown;

}

function get_results_modal_data(pop_of_interest, ob_class = "Overweight and obesity (I, II, and III)") {

   const employees_breakdown = {}

   if (pop_of_interest === "HFpEF") {
      pop_of_interest = "Cardiovascular diseases"
      pop_modal_text = "HFpEF"
   } else if (pop_of_interest === "OA") {
      pop_of_interest = "Osteoarthritis"
      pop_modal_text = "Knee osteoarthritis"
   } else if (pop_of_interest === "People with overweight/ obesity") {
      pop_modal_text = "overweight and obesity"
   } else if (pop_of_interest === "Any cardiometabolic disease*") {
      pop_modal_text = " with any Cardiometabolic disease*"
   } else {
      pop_modal_text = pop_of_interest
   }

   // console.log(currentROITables[ob_class], 'current ROI table')

   employees_breakdown.total_individuals = userInputData.num_of_individuals_input;

   employees_breakdown.percent_overweight_all_obesity = currentROITables[ob_class][pop_of_interest].detailed.among_emp_percent;

   employees_breakdown.among_percent_with_overweight = currentROITables[ob_class][pop_of_interest].detailed.among_emp_overweight;

   employees_breakdown.total_selected = employees_breakdown.total_individuals * employees_breakdown.percent_overweight_all_obesity * employees_breakdown.among_percent_with_overweight;

   employees_breakdown.eligibility = userInputData.eligibility_for_treatment_input;

   pop_modal_values(employees_breakdown)

   // return employees_breakdown;
}


function pop_modal_values(employees_breakdown) {

   const populationContainer = document.getElementById("poi-button");
   console.log(populationContainer)
   populationContainer.textContent = employees_breakdown.total_selected.toLocaleString('en-us', {maximumFractionDigits: 0,});

   let total_indiv_value = document.getElementById("poi-modal__total-individuals");
   total_indiv_value.textContent = parseInt(employees_breakdown.total_individuals).toLocaleString('en-US', {maximumFractionDigits: 0});

   let overweight_and_all = document.getElementById("poi-modal__overweight-and-all");
   overweight_and_all.textContent = `${(employees_breakdown.percent_overweight_all_obesity * 100).toFixed(1)}%`;

   let among_individuals_title = document.getElementById("among-indiv-title");
   among_individuals_title.innerHTML = `Among individuals, % with overweight in all obesity classes and those <br> with ${pop_modal_text}`;

   let among_individuals_value = document.getElementById("poi-modal__among-indiv");
   if (Math.round(employees_breakdown.among_percent_with_overweight) === 1) {
      among_individuals_value.textContent = `${Math.round((employees_breakdown.among_percent_with_overweight * 100))}%`;
   } else {
      among_individuals_value.textContent = `${(employees_breakdown.among_percent_with_overweight * 100).toFixed(1)}%`;
   }

   let eligibility_value = document.getElementById("poi-modal__eligible");
   eligibility_value.textContent = `${parseFloat(employees_breakdown.eligibility.replace("%", ""))}%`; 

   let total_selected_value = document.getElementById("poi-modal__total-selected");
   // total_selected_value.textContent = Math.round(employees_breakdown.total_selected);
   total_selected_value.textContent = employees_breakdown.total_selected.toLocaleString('en-us', {maximumFractionDigits: 0});

}

