const ROI_savings_Investment = [];
var toSumTemp = 0;
const ClassA_obesity1_total_savings_NI = [];
const Class_obesity_total_savings_NI = [];
const Class_obesity_total_investment_NI = [];

// ClassA_obesity1_total_savings_NI = currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.savings.NI;

// console.log(currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.savings.NI)

function showSummaryResults(currentROITables,currentDistributionTables,currentEventsTables) {

    console.log('currentROITables', currentROITables);
    // console.log('currentDistributionTables', currentDistributionTables);
    // console.log('currentEventsTables', currentEventsTables);

    // for (let val of currentROITables) {
        console.log(currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.savings.NI.Year1)
        console.log(currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.investment.NI.Year1)

        for (var myYear in currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.investment.NI) {
            // ROI_savings_Investment[i] = currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.savings.NI / currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.investment.NI;
            // console.log('ROI_savings_Investment',ROI_savings_Investment[i])
            // console.log('ClassA_obesity1_total_savings_NI',currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.savings.NI.Year[i]);
            ROI_savings_Investment[myYear] = currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.savings.NI[myYear] / currentROITables['Overweight and obesity (I, II, and III)']['People with overweight/ obesity'].totals.investment.NI[myYear];
            // console.log(ROI_savings_Investment[myYear])
        }

        for (var myTempClass in currentROITables) {
            console.log(currentROITables[myTempClass])
            for (var myTempPOI in currentROITables[myTempClass]) {
                for (var myTempYear in currentROITables[myTempClass][myTempPOI].totals.savings.NI) {
                    // console.log(myTempClass, myTempPOI,myTempYear,currentROITables[myTempClass][myTempPOI].totals.savings.NI[myTempYear]);
                    // console.log(myTempClass, myTempPOI,myTempYear, currentROITables[myTempClass][myTempPOI].totals.investment.NI[myTempYear]);
                    
                    
                    console.log(myTempClass, myTempPOI,myTempYear,currentROITables[myTempClass][myTempPOI].totals.savings.NI[myTempYear] / currentROITables[myTempClass][myTempPOI].totals.investment.NI[myTempYear]);
                }
            }
        }
    // }















    document.write('<div="showIndustry"></div>');














    $("#myInput >div").remove();

    $(".container").removeClass().addClass("container summaryResults");

    //        console.log(myParams.myWorkingHoursInADayValue);

    if (!myParams.myWorkingHoursInADayValue || !myParams.myEmployeeHourlyCompensationValue) {
        //            console.log('if is true');
        myParams.myWorkingHoursInADayValue = inputDashboard.myWorkingHoursInADayVal.value;
        myParams.myEmployeeHourlyCompensationValue = inputDashboard.myEmployeeHourlyCompensationVal.value;
        myParams.myEmployeeHourlyCompensationValue = myParams.myEmployeeHourlyCompensationValue.replace("$", "");

        //console.log('11111111',myParams.myEmployeeHourlyCompensationValue);

    } else {
        //            console.log(myParams.myWorkingHoursInADayValue, 'if work');
        //            console.log(myParams.myEmployeeHourlyCompensationValue, 'if comp');
    };

    if (!myParams.myWeightWatchersValue) {
        myParams.myWeightWatchersValue = inputDashboard.myWeightWatchersVal.value;
    } else {
        //            console.log(myParams.myWeightWatchersValue);
    }

    if (!myParams.myIDEValue) {
        myParams.myIDEValue = inputDashboard.myIntensiveDietAndExerciseVal.value;
    } else {
        //            console.log(myParams.myWeightWatchersValue);
    }

    if (!myParams.myJennyCraigValue) {
        myParams.myJennyCraigValue = inputDashboard.myJennyCraigVal.value;
    } else {
        //            console.log(myParams.myWeightWatchersValue);
    }
    if (!myParams.myIDEMembershipValue) {
        myParams.myIDEMembershipValue = inputDashboard.IDEMembershipVal.value;
    } else {
        //            console.log(myParams.myWeightWatchersValue);
    }

    myNI_effic_y1 = myParams.NI_effic_y1;
    myNI_effic_y2 = myParams.NI_effic_y2;
    myNI_effic_y3 = myParams.NI_effic_y3;
    myNI_effic_y4 = myParams.NI_effic_y4;
    myNI_effic_y5 = myParams.NI_effic_y5;
    myNI_effic_y6 = myParams.NI_effic_y6;
    myNI_effic_y7 = myParams.NI_effic_y7;
    myNI_effic_y8 = myParams.NI_effic_y8;
    myNI_effic_y9 = myParams.NI_effic_y9;
    myNI_effic_y10 = myParams.NI_effic_y10;
    //console.log(myNI_effic_y1);


    //console.log('summ'+myParams.myIDEValue);

    //        myParams.myWeightWatchersValue = myParams.myWeightWatchersValue.replace("%","");
    //        myParams.myWeightWatchersValue = myParams.myWeightWatchersValue/100;


    //        myParams.myIDEValue = myParams.myIDEValue.replace("%","");
    //        myParams.myIDEValue = myParams.myIDEValue/100;

    //        console.log(myParams.myWeightWatchersValue);

    //console.log(myWeightWatchers);

    //        myParams.myWorkingHoursInADayValue = $('#myParams.myWorkingHoursInADayValue').val();
    //        myParams.myEmployeeHourlyCompensationValue = $('#myParams.myEmployeeHourlyCompensationValue').val();

    //myParams.myWorkingHoursInADayValue = myParams.myWorkingHoursInADayValue;
    //myParams.myEmployeeHourlyCompensationValue = myParams.myEmployeeHourlyCompensationValue;

    //        console.log('Hello: '+myParams.myWorkingHoursInADayValue1);

    //        console.log('Kitty: '+myParams.myEmployeeHourlyCompensationValue1);

    var resultNavBar = '';
    resultNavBar += '<div class="resultsPage_header"><div><img src="./images/icon-results.svg"/><h2>Summary Results</h2></div>' +
        '<div class="resultsPage_pageNav"><a href="#" class="resultsPage_active" onClick="toShowSummaryResult(myParams);;">Summary Results</a>' +
        '<a href="#" onClick="eventBasedAnalysis();">Event-Based Analysis</a>' +
        '<a href="#" onClick="detailedResults(myParams);">Detailed Results</a><a href="#" onClick="actions();">Actions</a>' +
        '</div></div>';
    resultNavBar += '<table>';
    resultNavBar += '<tr>';
    // resultNavBar +=  '<td colspan="5">AOM (inc. Wegovy) vs.: <select name="AOM_VS" id="AOM_VS" onChange="toShowSummaryResult(myParams);;">';
    // GEOFF'S CHANGES BEGIN
    resultNavBar += '<td colspan="5" class="results">' +
        '<div class="custom-select__container results AOM-vs">' +
        'AOM (inc. Wegovy) vs.: ' +
        '<div class="custom-select">' +
        '<select name="AOM_VS" onChange="toShowSummaryResult(myParams);;"></select></td></tr></table>';
    // GEOFF'S CHANGES END
console.log(resultNavBar)

    // if (document.getElementById('AOM_VS').value) {
    //     if (document.getElementById('AOM_VS').value == "No intervention") {
    //         resultNavBar += '<option value="No intervention" selected>No intervention</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="No intervention">No intervention</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('AOM_VS').value == "ILT") {
    //         resultNavBar += '<option value="ILT" selected>ILT</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="ILT">ILT</option><optgroup class="divider"></optgroup>';
    //     }
    // } else {
    //     resultNavBar += '<option value="No intervention">No intervention</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="ILT">ILT</option><optgroup class="divider"></optgroup>';
    // }

    // // resultNavBar +=  '</select>&nbsp;&nbsp;View By: <select name="View_By" onChange="toShowSummaryResult(myParams);;">';
    // // GEOFF'S CHANGES BEGIN
    // resultNavBar += '</select></div><div class="custom-select__buffer"></div></div>' +
    //     '<div class="custom-select__container results view-by">' +
    //     // '&nbsp;&nbsp;View By: ' + 
    //     'View By: ' +
    //     '<div class="custom-select">' +
    //     '<select name="View_By" onChange="toShowSummaryResult(myParams);;">';
    // // GEOFF'S CHANGES END

    // if (document.getElementById('View_By').value) {
    //     if (document.getElementById('View_By').value == "ROI") {
    //         resultNavBar += '<option value="ROI" selected>ROI</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="ROI">ROI</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('View_By').value == "ROI as % of investment") {
    //         resultNavBar += '<option value="ROI as % of investment" selected>ROI as % of investment</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="ROI as % of investment">ROI as % of investment</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('View_By').value == "Cost offset (population)") {
    //         resultNavBar += '<option value="Cost offset (population)" selected>Cost offset (population)</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="Cost offset (population)">Cost offset (population)</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('View_By').value == "Cost offset (per member)") {
    //         resultNavBar += '<option value="Cost offset (per member)" selected>Cost offset (per member)</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="Cost offset (per member)">Cost offset (per member)</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('View_By').value == "Cost offset (PMPM)") {
    //         resultNavBar += '<option value="Cost offset (PMPM)" selected>Cost offset (PMPM)</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="Cost offset (PMPM)">Cost offset (PMPM)</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('View_By').value == "Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)") {
    //         resultNavBar += '<option value="Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)" selected>Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)</option>';
    //     } else {
    //         resultNavBar += '<option value="Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)">Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)</option><optgroup class="divider"></optgroup>';
    //     }

    //     if (document.getElementById('View_By').value == "Cost offset (PPPM)") {
    //         resultNavBar += '<option value="Cost offset (PPPM)" selected>Cost offset (PPPM)</option><optgroup class="divider"></optgroup>';
    //     } else {
    //         resultNavBar += '<option value="Cost offset (PPPM)">Cost offset (PPPM)</option><optgroup class="divider"></optgroup>';
    //     }
    // } else {

    //     resultNavBar += '<option value="ROI">ROI</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="ROI as % of investment">ROI as % of investment</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="Cost offset (population)">Cost offset (population)</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="Cost offset (per member)">Cost offset (per member)</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="Cost offset (PMPM)">Cost offset (PMPM)</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)">Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)</option><optgroup class="divider"></optgroup>';
    //     resultNavBar += '<option value="Cost offset (PPPM)">Cost offset (PPPM)</option><optgroup class="divider"></optgroup>';
    // }



    // // resultNavBar +=  '</select></td>';
    // // GEOFF'S CHANGES BEGIN
    // resultNavBar += '</select></div><div class="custom-select__buffer"></div></div></td>';
    // // GEOFF'S CHANGES END


    // resultNavBar += '</tr>';
    // resultNavBar += '</table>';

    // if (myParams.fullResults) {
    //     console.log('working');
    // } else {
        // document.getElementById("MyNavbar").innerHTML = resultNavBar;
    // }
    // // console.log(document.getElementById("MyNavbar"), 'navbar');

// return resultNavBar;
    let txtArr = [];

    // if (document.getElementById('AOM_VS')) {
    //     if (document.getElementById('AOM_VS').value == "No intervention") {
    //         switch (document.getElementById('View_By').value) {
    //             case "ROI":
    //                 var myTempDataFile = ROI1.data;
    //                 break;
    //             case "ROI as % of investment":
    //                 var myTempDataFile = ROI2.data;
    //                 break;
    //             case "Cost offset (population)":
    //                 var myTempDataFile = ROI3.data;
    //                 break;
    //             case "Cost offset (per member)":
    //                 var myTempDataFile = ROI4.data;
    //                 break;
    //             case "Cost offset (PMPM)":
    //                 var myTempDataFile = ROI5.data;
    //                 break;
    //             case "Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)":
    //                 var myTempDataFile = ROI8.data;
    //                 break;
    //             case "Cost offset (PPPM)":
    //                 var myTempDataFile = ROI7.data;
    //                 break;
    //             default:
    //         }
    //     } else if (document.getElementById('AOM_VS').value == "ILT") {
    //         switch (document.getElementById('View_By').value) {
    //             case "ROI":
    //                 var myTempDataFile = ROI9.data;
    //                 break;
    //             case "ROI as % of investment":
    //                 var myTempDataFile = ROI10.data;
    //                 break;
    //             case "Cost offset (population)":
    //                 var myTempDataFile = ROI11.data;
    //                 break;
    //             case "Cost offset (per member)":
    //                 var myTempDataFile = ROI12.data;
    //                 break;
    //             case "Cost offset (PMPM)":
    //                 var myTempDataFile = ROI13.data;
    //                 break;
    //             case "Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)":
    //                 var myTempDataFile = ROI16.data;
    //                 break;
    //             case "Cost offset (PPPM)":
    //                 var myTempDataFile = ROI15.data;
    //                 break;
    //             default:
    //         }
    //     }
    // } else {
    //     var myTempDataFile = ROI1.data;

    // }
    // for (let val of myTempDataFile) {
    //     if (val.Title) {
    //         var myTitle = val.Title;
    //         var myDescription = val.Description;
    //     }
    // }

    // txtArr.push('<div class="resultsPage_title"><b>' + myTitle + '</b><p>' + myDescription + '</p></div>')



    // toShowIndustry = localStorage.getItem('whaIsTheIndustry');

    // // console.log('oh no no', localStorage.getItem('whaIsTheIndustry'));

    // if (!toShowIndustry) {
    //     myDisplayIndustry = "Total_employed";
    // } else {
    //     myDisplayIndustry = toShowIndustry;
    // }
    // //            console.log(myDisplayIndustry);



    // if (document.getElementById('Obesity_Class')) {
    //     var myObesityClass = document.getElementById('Obesity_Class').value;
    // } else {
    //     var myObesityClass = "Overweight and obesity (I, II, and III)";
    // }


    // if (document.getElementById('POI1')) {
    //     var myPOIValue = document.getElementById('POI1').value;
    //     if ((myPOIValue === "People with overweight/ obesity") || (myPOIValue === "People with obesity")) {
    //         if (myObesityClass === "Overweight and obesity (I, II, and III)") {
    //             var myPOIValue = "People with overweight/ obesity";
    //         } else {
    //             var myPOIValue = "People with obesity";
    //         }
    //     } else {
    //         var myPOIValue = document.getElementById('POI1').value;
    //     }
    // } else {
    //     if (myObesityClass === "Overweight and obesity (I, II, and III)") {
    //         var myPOIValue = "People with overweight/ obesity";
    //     } else {
    //         var myPOIValue = "People with obesity";
    //     }
    // }

    // var myPOIIndex;

    // switch (myPOIValue) {
    //     case "People with overweight/ obesity":
    //     case "People with obesity":
    //         myPOIIndex = 1;
    //         break;
    //     case "Cardiovascular diseases":
    //         myPOIIndex = 2;
    //         break;
    //     case "Cerebrovascular diseases":
    //         myPOIIndex = 3;
    //         break;
    //     case "Dyslipidemia":
    //         myPOIIndex = 4;
    //         break;
    //     case "Hypertension":
    //         myPOIIndex = 5;
    //         break;
    //     case "Osteoarthritis":
    //         myPOIIndex = 6;
    //         break;
    //     case "Diabetes":
    //         myPOIIndex = 7;
    //         break;
    //     case "Cardiovascular diseases (with cerebrovascular diseases)":
    //         myPOIIndex = 8;
    //         break;
    //     case "Any cardiometabolic disease*":
    //         myPOIIndex = 9;
    //         break;
    //     case "Cardiovascular diseases (with dyslipidemia)":
    //         myPOIIndex = 10;
    //         break;
    //     case "Cardiovascular diseases (with hypertension)":
    //         myPOIIndex = 11;
    //         break;
    //     case "Cardiovascular diseases (with diabetes)":
    //         myPOIIndex = 12;
    //         break;
    //     case "Osteoarthritis (with cardiovascular diseases)":
    //         myPOIIndex = 13;
    //         break;
    //     case "Osteoarthritis (with diabetes)":
    //         myPOIIndex = 14;
    //         break;
    //     default:
    // }



    // for (let valOC of Obesity_Class.data) {

    //     for (let val of BMISummary.data) {
    //         var myBMIClass = val.Class_Name;



    //         if (valOC.Name == myBMIClass) {

    //             // console.log('myBMIClass',myBMIClass)

    //             if ((val.Class_Name == "Overweight and obesity (I, II, and III)") && (myPOIIndex != 1)) {
    //                 var myBMIGroup18_29 = val.group18_29_1;
    //                 var myBMIGroup30_39 = val.group30_39_1;
    //                 var myBMIGroup40_49 = val.group40_49_1;
    //                 var myBMIGroup50_59 = val.group50_59_1;
    //                 var myBMIGroup60_64 = val.group60_64_1;
    //             } else {
    //                 var myBMIGroup18_29 = val.group18_29;
    //                 var myBMIGroup30_39 = val.group30_39;
    //                 var myBMIGroup40_49 = val.group40_49;
    //                 var myBMIGroup50_59 = val.group50_59;
    //                 var myBMIGroup60_64 = val.group60_64;
    //             }


    //             var industryEmployee = ((myBMIGroup18_29 * myAges18To29 / 100) + (myBMIGroup30_39 * myAges30To39 / 100) + (myBMIGroup40_49 * myAges40To49 / 100) + (myBMIGroup50_59 * myAges50To59 / 100) + (myBMIGroup60_64 * myAges60To64 / 100)) * populationValue;
    //             //                    console.log('myDisplayIndustry',myDisplayIndustry);
    //             //                    console.log('fixedAges18To29',myAges18To29);
    //             //                    console.log('fixedAges30To39',myAges30To39);
    //             //                    console.log('fixedAges40To49',myAges40To49);
    //             //                    console.log('fixedAges50To59',myAges50To59);
    //             //                    console.log('fixedAges60To64',myAges60To64);



    //             //                    console.log('populationValue',populationValue);


    //             txtArr.push('<div class="resultsPage_sectionTitle">' + valOC.Name + '</div>');

    //             txtArr.push('<table class="table table-striped"><tr><th>Population of Interest</th><th>Emp.</th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>Year 5</th><th>Year 6</th><th>Year 7</th><th>Year 8</th><th>Year 9</th><th>Year 10</th></tr>');
    //         }

    //     }



    //     //console.log(document.getElementById('AOM_VS').value);
    //     //console.log(document.getElementById('View_By').value);











    //     for (let val of myTempDataFile) {
    //         //            console.log(val.Obesity_Class);
    //         //            console.log(valOC.Name);

    //         if ((val.Obesity_Class == valOC.Name) && (val.Industry == myDisplayIndustry)) {
    //             //          if (ROI1.data.find(element => val.Obesity_Class === "'+valOC.Name+''")) {


    //             var myEmployees = val.Pop_number;
    //             myEmployees = (myEmployees) * 1;
    //             var myYear1 = val.Year1;
    //             myYear1 = (myYear1 * 1).toFixed(2);
    //             var myYear2 = val.Year2;
    //             myYear2 = (myYear2 * 1).toFixed(2);
    //             var myYear3 = val.Year3;
    //             myYear3 = (myYear3 * 1).toFixed(2);
    //             var myYear4 = val.Year4;
    //             myYear4 = (myYear4 * 1).toFixed(2);
    //             var myYear5 = val.Year5;
    //             myYear5 = (myYear5 * 1).toFixed(2);
    //             var myYear6 = val.Year6;
    //             myYear6 = (myYear6 * 1).toFixed(2);
    //             var myYear7 = val.Year7;
    //             myYear7 = (myYear7 * 1).toFixed(2);
    //             var myYear8 = val.Year8;
    //             myYear8 = (myYear8 * 1).toFixed(2);
    //             var myYear9 = val.Year9;
    //             myYear9 = (myYear9 * 1).toFixed(2);
    //             var myYear10 = val.Year10;
    //             myYear10 = (myYear10 * 1).toFixed(2);
    //             // push the text into the array

    //             // var myParams.myWorkingHoursInADayValue = document.getElementById('myParams.myWorkingHoursInADayValue').value;
    //             // var myParams.myEmployeeHourlyCompensationValue = document.getElementById('myParams.myEmployeeHourlyCompensationValue').value;


    //             //console.log(myParams.myWorkingHoursInADayValue);
    //             //console.log(myParams.myEmployeeHourlyCompensationValue);


    //             // console.log(myParams.myEmployeeHourlyCompensationValue);
    //             // console.log(myParams.myWorkingHoursInADayValue);

    //             //    if (document.getElementById('AOM_VS').value=="No intervention") {
    //             switch (document.getElementById('View_By').value) {
    //                 case "ROI as % of investment":
    //                     txtArr.push('<tr><td>' + val.Population_of_Interest + '</td><td align="center">' + myEmployees + '</td><td align="center">' + (myYear1 * 100).toFixed(0) + '%</td><td align="center">' + (myYear2 * 100).toFixed(0) + '%</td><td align="center">' + (myYear3 * 100).toFixed(0) + '%</td><td align="center">' + (myYear4 * 100).toFixed(0) + '%</td><td align="center">' + (myYear5 * 100).toFixed(0) + '%</td><td align="center">' + (myYear6 * 100).toFixed(0) + '%</td><td align="center">' + (myYear7 * 100).toFixed(0) + '%</td><td align="center">' + (myYear8 * 100).toFixed(0) + '%</td><td align="center">' + (myYear9 * 100).toFixed(0) + '%</td><td align="center">' + (myYear10 * 100).toFixed(0) + '%</td></tr>');
    //                     break;
    //                 case "ROI":
    //                 case "Cost offset (population)":
    //                     txtArr.push('<tr><td>' + val.Population_of_Interest + '</td>');
    //                     txtArr.push('<td align="center">' + myEmployees + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear1) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear2) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear3) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear4) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear5) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear6) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear7) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear8) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear9) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear10) + '</td>');
    //                     txtArr.push('</tr>');
    //                     break;
    //                 case "Cost offset (per member)":
    //                 case "Cost offset (PMPM)":
    //                 case "Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)":
    //                 case "Cost offset (PPPM)":
    //                     txtArr.push('<tr><td>' + val.Population_of_Interest + '</td>');
    //                     txtArr.push('<td align="center">' + myEmployees + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear1) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear2) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear3) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear4) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear5) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear6) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear7) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear8) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear9) + '</td>');
    //                     txtArr.push('<td align="center">' + FormatCurrency(myYear10) + '</td>');
    //                     txtArr.push('</tr>');
    //                     break;
    //                 default:
    //             }
    //             //    }



    //             //      console.log('txtArr ==> ', txtArr);
    //         }

    //     }



    //     txtArr.push('</table>');

    //     comorbiditiesResultsArr = txtArr;

    // }



    // join the array with <br /> tags as separators
    let txt = txtArr;
    //  let txt = txtArr.join('<br>');
    //  console.log('txt ==> ', txt);
    //alert(txt);
    //   let txt = txtArr.join("");
    txtArr = "123123123";
    // document.getElementById("myInput").innerHTML = txt.join("");
    // if (document.getElementById('View_By').value) {
    //     const currentTableClass = document.getElementById('View_By').value.replace(/[()% ]/g, '').slice(0, 20);
    //     $(".table.table-striped").removeClass().addClass("table table-striped").addClass(currentTableClass)
    // }

    console.log(txtArr)
return txtArr;
    // document.getElementById("showIndustry").innerHTML = txt;
    buildCustomSelect();

    //         console.log('here: '+myParams.myWorkingHoursInADayValue);

    // console.log('there: '+myParams.myEmployeeHourlyCompensationValue);

    // console.log('Snoopy: '+myParams.myWorkingHoursInADayValue1);

    //console.log('Dog: '+myParams.myEmployeeHourlyCompensationValue1);

    //console.log(myParams.myWorkingHoursInADayValue, 'summ work');
    //console.log(myParams.myEmployeeHourlyCompensationValue, 'summ comp');


    return;


























}