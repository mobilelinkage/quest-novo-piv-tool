function getUserInputs() {
   const num_of_individuals_string = document.getElementById("number-input__display").textContent;
   const num_of_individuals_input = num_of_individuals_string.replace(/,/g, '');

   const year_choice = document.getElementById("range-slider__range").value;

   const sex_distro_male_input = inputDashboard.menDisplay.value;
   const sex_distro_female_input = inputDashboard.womenDisplay.value;

   // const eligibility_for_treatment_input = parseFloat(inputDashboard.myPercentageEmployeesTakingAOMsAmongThoseEligibleValue.value.replace('%', "")).toFixed(2);
   const eligibility_for_treatment_input = inputDashboard.myPercentageEmployeesTakingAOMsAmongThoseEligibleValue.value;

   const hourly_compensation_input = inputDashboard.myEmployeeHourlyCompensationVal.value;
   const working_hours_input = inputDashboard.myWorkingHoursInADayVal.value;

   return { num_of_individuals_input, sex_distro_male_input, sex_distro_female_input, eligibility_for_treatment_input, hourly_compensation_input, working_hours_input, year_choice }
}

function inputFormatter() {
   const unformatted = getUserInputs();

   const formatted = Object.fromEntries(Object.entries(unformatted).map((entry) => {
      return [entry[0], parseFloat(entry[1].replace(/[^\w\s\.]/g, ''))]
   }))
   console.log(formatted)
   return formatted
}