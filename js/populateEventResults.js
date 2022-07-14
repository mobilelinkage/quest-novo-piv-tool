function populateEventResults(eventData, timeHorizon, selectedPopulation, pop_of_interest) {
    // Loop through eventData object and populate tables
    getEventsData(eventData.avoidedChart, timeHorizon, pop_of_interest);
    getSavingsData(eventData.savingsChart, timeHorizon, pop_of_interest);
}

function FormatCurrencyInt(myAmount) {
 let amount = parseFloat(myAmount);
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0,
  maximumFractionDigits: 0, });
}

function populateEventTable(poi, savings_table, avoided_table, total_table, intervention, view_by, event_year_input) {
 
 function addCommas(myAmount) {
    return myAmount.toLocaleString('en-US', {maximumFractionDigits: 2, minimumFractionDigits: 2});
 }

//  console.log(savings_table, 'savings table')
//  console.log(avoided_table, 'avoided table')
//  console.log(total_table, 'total table')

 function pop_top_table() {

    const CVD_rows_top_title = ["Myocardial infarction", "Angina", "Stroke", "Peripheral vascular disease", "Heart failure", "Absenteeism", "Presenteeism", "Short-term Disability"];
    const CVD_rows_top_keys = ["myocardial_infarction", "angina", "stroke", "PVD", "heart_failure", "absenteeism", "presenteeism", "STD"];
    const HFpEF_rows_top_title = ["Hospitalizations (HFpEF)", "Absenteeism"];
    const HFpEF_rows_top_keys = ["myocardial_infarction", "angina"];
    const OA_rows_top_title = ["Knee replacement", "Knee revision", "Follow-up", "Absenteeism", "Presenteeism", "Short-term Disability"];
    const OA_rows_top_keys = ["myocardial_infarction", "angina", "stroke", "PVD", "heart_failure", "absenteeism"];
   

    const top_table = document.getElementById('event_top_table');
    const top_table_total = document.getElementById('event_top_table_total');
   //  console.log(top_table_total, top_table, 'total el')

    while(top_table.firstChild) {
       top_table.removeChild(top_table.firstChild);
    }

    while (top_table_total.firstChild) {
       top_table_total.removeChild(top_table_total.firstChild);
    }

    let total_text = document.createElement("span");
    let total_value = document.createElement("span");
    
    total_text.textContent = total_table[1]
    total_value.textContent = total_table[0]

    top_table_total.append(total_text, total_value);

    let tr = document.createElement("tr");
    let direct_title_th = document.createElement("th");
    let AOM_th = document.createElement("th");
    let intervention_th = document.createElement("th");
    let savings_th = document.createElement("th");
   
    direct_title_th.textContent = "Direct event and indirect costs*";
    AOM_th.textContent = "AOM (inc. Wegovy)";
    savings_th.textContent = "Savings";

    if (intervention == "NI") {
       intervention_th.textContent = "No intervention";
    } else {
       intervention_th.textContent = "ILT";
    }
    let top_table_row = top_table.appendChild(tr);
    top_table_row.append(direct_title_th, AOM_th, intervention_th, savings_th);

    if (poi !== "HFpEF" && poi !== "OA") {
       rows_top_title = CVD_rows_top_title;
       rows_top_keys = CVD_rows_top_keys;
    } else if (poi === "HFpEF") {
       rows_top_title = HFpEF_rows_top_title;
       rows_top_keys = HFpEF_rows_top_keys;
    } else {
       rows_top_title = OA_rows_top_title;
       rows_top_keys = OA_rows_top_keys;
    }
    
    rows_top_title.forEach((title, index) => {
       let table_tr = document.createElement("tr");
       let table_title = document.createElement("td");
       let table_AOM = document.createElement("td");
       let table_intervention = document.createElement("td");
       let table_savings = document.createElement("td");

       table_title.textContent = title;
       if (view_by === "savings_per_patient") {
          table_AOM.textContent = FormatCurrency(savings_table.savings_per_patient.sema[rows_top_keys[index]]);
          table_intervention.textContent = FormatCurrency(savings_table.savings_per_patient.NI[rows_top_keys[index]]);
          table_savings.textContent = FormatCurrency(savings_table.savings_per_patient.savings[rows_top_keys[index]]);
       } else if (view_by === "total_savings") {
          table_AOM.textContent = FormatCurrencyInt(savings_table.total_savings.sema[rows_top_keys[index]]);
          table_intervention.textContent = FormatCurrencyInt(savings_table.total_savings.NI[rows_top_keys[index]]);
          table_savings.textContent = FormatCurrencyInt(savings_table.total_savings.savings[rows_top_keys[index]]);
       } else if (view_by === "PPPM_treated") {
          table_AOM.textContent = FormatCurrency(savings_table.savings_PPPM_treated_patients.sema[rows_top_keys[index]]);
          table_intervention.textContent = FormatCurrency(savings_table.savings_PPPM_treated_patients.NI[rows_top_keys[index]]);
          table_savings.textContent = FormatCurrency(savings_table.savings_PPPM_treated_patients.savings[rows_top_keys[index]]);
       } else if (view_by === "PMPM_based") {
          table_AOM.textContent = FormatCurrency(savings_table.PMPM_based_on_10000_individuals.sema[rows_top_keys[index]]);
          table_intervention.textContent = FormatCurrency(savings_table.PMPM_based_on_10000_individuals.NI[rows_top_keys[index]]);
          table_savings.textContent = FormatCurrency(savings_table.PMPM_based_on_10000_individuals.savings[rows_top_keys[index]]);
       }
       let top_table_row = top_table.appendChild(table_tr);
       top_table_row.append(table_title, table_AOM, table_intervention, table_savings);
    }) 
 }
 pop_top_table();

 function pop_bottom_table() {
    const CVD_rows_bottom_title = ["Myocardial infarction", "Angina", "Stroke", "Peripheral vascular disease", "Heart failure", "All-cause deaths", "Absenteeism days", "Presenteeism days"];
    const CVD_rows_bottom_keys = ["myocardial_infarction", "angina", "stroke", "PVD", "heart_failure", "all_cause_deaths", "absenteeism", "presenteeism"]

    const HFpEF_rows_bottom_title = ["Hospitalizations due to HFpEF", "All-cause death", "Absenteeism days"];
    const HFpEF_rows_bottom_keys = ["myocardial_infarction", "angina", "stroke"]

    const OA_rows_bottom_title = ["Knee replacement", "Knee revision", "All-cause death", "Absenteeism days", "Presenteeism days"];
    const OA_rows_bottom_keys = ["myocardial_infarction", "angina", "stroke", "PVD", "heart_failure"]

    const bottom_table = document.getElementById('event_bottom_table')

    while(bottom_table.firstChild) {
       bottom_table.removeChild(bottom_table.firstChild);
    }

    let tr = document.createElement("tr");
    let clinical_title_th = document.createElement("th");
    let AOM_th = document.createElement("th");
    let intervention_th = document.createElement("th");
    let avoided_th = document.createElement("th");

    clinical_title_th.textContent = `Clinical events per ${formattedUserInputData.num_of_individuals_input.toLocaleString('en-us')} individuals`;
    AOM_th.textContent = "AOM (inc. Wegovy)";
    avoided_th.textContent = "Events avoided*";
    if (intervention == "NI") {
       intervention_th.textContent = "No intervention";
    } else {
       intervention_th.textContent = "ILT";
    }
    let bottom_table_row = bottom_table.appendChild(tr);
    bottom_table_row.append(clinical_title_th, AOM_th, intervention_th, avoided_th);

    
    if (poi !== "HFpEF" && poi !== "OA") {
       rows_bottom_title = CVD_rows_bottom_title;
       rows_bottom_keys = CVD_rows_bottom_keys;
    } else if (poi === "HFpEF") {
       rows_bottom_title = HFpEF_rows_bottom_title
       rows_bottom_keys = HFpEF_rows_bottom_keys;
    } else {
      rows_bottom_title = OA_rows_bottom_title;
      rows_bottom_keys = OA_rows_bottom_keys;
    }
    rows_bottom_title.forEach((title, index) => {
       let table_tr = document.createElement("tr");
       let table_title = document.createElement("td");
       let table_AOM = document.createElement("td");
       let table_intervention = document.createElement("td");
       let table_avoided = document.createElement("td");
      
       table_title.textContent = title;
       table_AOM.textContent = addCommas(avoided_table.AOM[rows_bottom_keys[index]]);
       table_intervention.textContent = addCommas(avoided_table.NI[rows_bottom_keys[index]]);
       table_avoided.textContent = `${addCommas(avoided_table.avoided[rows_bottom_keys[index]][0])} (${Math.round(avoided_table.avoided[rows_bottom_keys[index]][1] * 100)}%)`;
       let bottom_table_row = bottom_table.appendChild(table_tr);
       bottom_table_row.append(table_title, table_AOM, table_intervention, table_avoided);
    }) 
 }
 pop_bottom_table();
    
 function pop_icon_table() {
    const CVD_rows_bottom_title = ["Myocardial infarction", "Angina", "Stroke", "Peripheral vascular disease", "Heart failure", "All-cause death"];
    const CVD_rows_bottom_keys = ["myocardial_infarction", "angina", "stroke", "PVD", "heart_failure", "all_cause_deaths"]

    const HFpEF_rows_bottom_title = ["Hospitalizations due to HFpEF", "All-cause death"];
    const HFpEF_rows_bottom_keys = ["myocardial_infarction", "angina"];

    const OA_rows_bottom_title = ["Knee replacement", "Knee revision", "All-cause death"];
    const OA_rows_bottom_keys = ["myocardial_infarction", "angina", "stroke"];

    const icon_table_container = document.getElementById('icon_table');
    

    while(icon_table_container.firstChild) {
       icon_table_container.removeChild(icon_table_container.firstChild);
    }

    if (poi !== "HFpEF" && poi !== "OA") {
       rows_bottom_title = CVD_rows_bottom_title;
       rows_bottom_keys = CVD_rows_bottom_keys;
    } else if (poi === "HFpEF") {
       rows_bottom_title = HFpEF_rows_bottom_title;
       rows_bottom_keys = HFpEF_rows_bottom_keys;
    } else {
       rows_bottom_title = OA_rows_bottom_title;
       rows_bottom_keys = OA_rows_bottom_keys;
    }

  

    rows_bottom_title.forEach((title, index) => {
       let icon_div = document.createElement("div");
       let icon_img = document.createElement("img");
       let icon_para = document.createElement("p");
       let num_div = document.createElement("div");
       let num_span = document.createElement("span");
       let percent_span = document.createElement("span");
       
 
       icon_div.classList.add("eventBased_viewByRow");
       icon_para.textContent = `${title}`;
       num_div.classList.add("eventBased_viewByNum");
       num_span.classList.add("viewByCount");
       num_span.textContent = `${Math.round(avoided_table.avoided[rows_bottom_keys[index]][0])}`;
       percent_span.classList.add("viewByPer", "resultHidden");
       percent_span.textContent =  `${Math.round(avoided_table.avoided[rows_bottom_keys[index]][1] * 100)}%`;
      
       switch (title) {
          case "Myocardial infarction":
             icon_img.src = "res/img/icon-humanheart.png";
             break;
          case "Angina":
             icon_img.src = "res/img/icon-angina.png";
             break;
          case "Stroke":
             icon_img.src = "res/img/icon-brain.png";
             break;
          case "Peripheral vascular disease":
             icon_img.src = "res/img/icon-leg.png";
             break;
          case "Heart failure":
             icon_img.src = "res/img/icon-hospital.png";
             break;
          case "Hospitalizations due to HFpEF":
             icon_img.src = "res/img/icon-hospital.png";
             break;
          case "All-cause death":
              icon_img.src = "res/img/icon-activity.png";  
              break;
           case "Knee replacement":
              icon_img.src = "res/img/icon-knee.png";  
              break;
           case "Knee revision":
              icon_img.src = "res/img/icon-knee.png";  
              break;
           default:
       }
       icon_table_container.append(icon_div);
       icon_div.append(icon_img, icon_para, num_div);
       num_div.append(num_span, percent_span);
      })

       let icon_note = document.getElementById("icon_note");
       let main_icon_section_container = document.getElementById("eventBased_viewBySection");
       let bottom_legal_note_div = document.createElement("div");
       let bottom_legal_note_para = document.createElement("p");
       bottom_legal_note_para.classList.add("events-legal-note");
       bottom_legal_note_div.append(bottom_legal_note_para);
       main_icon_section_container.append(bottom_legal_note_div);
       
       if (event_year_input > 1) {
          icon_note.innerHTML = `Events avoided per ${formattedUserInputData.num_of_individuals_input.toLocaleString('en-us')} individuals over ${event_year_input} years<sup>&dagger;</sup>`;
          
          bottom_legal_note_para.innerHTML = `<sup>&dagger;</sup>Cost information is related to the above events avoided </br>per the ${formattedUserInputData.num_of_individuals_input.toLocaleString('en-us')} individuals over ${event_year_input} years`
         
         } else {
            icon_note.innerHTML = `Events avoided per ${formattedUserInputData.num_of_individuals_input.toLocaleString('en-us')} individuals over 1 year<sup>&dagger;</sup>`;
            // icon_note.append(dagger);

            bottom_legal_note_para.innerHTML = `<sup>&dagger;</sup>Cost information is related to the above events avoided </br>per the ${formattedUserInputData.num_of_individuals_input.toLocaleString('en-us')} individuals over 1 year`
            bottom_legal_note_div.append(bottom_legal_note_para)
            main_icon_section_container.append(bottom_legal_note_div)
         }
         
 }
 pop_icon_table();

 
}



