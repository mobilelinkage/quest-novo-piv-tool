
    function buildTopFive() {

        const obClass = [
            "Overweight and obesity (I, II, and III)", 
            "Obesity classes I, II and III", 
            "Obesity classes II and III", "Obesity class III"
        ];
        
        const POI = [
            "People with overweight/ obesity",
            "Cardiovascular diseases",
            "Cerebrovascular diseases",
            "Dyslipidemia",
            "Hypertension",
            "Osteoarthritis",
            "Diabetes",
            "Cardiovascular diseases (with cerebrovascular diseases)",
            "Any cardiometabolic disease*",
            "Cardiovascular diseases (with dyslipidemia)",
            "Cardiovascular diseases (with hypertension)",
            "Cardiovascular diseases (with diabetes)",
            "Osteoarthritis (with cardiovascular diseases)",
            "Osteoarthritis (with diabetes)"
        ];
    
        const topFiveIndustry = inputDashboard.selectIndustry.value;
        // console.log(topFiveIndustry);
    
        let topFiveViewBy = inputDashboard.View_By.value;
        // console.log(topFiveViewBy); 
    
        const topFiveYear = myTimeHorizonValue;
        // console.log(topFiveYear);

        switch(topFiveViewBy) {
            case "ROI":
                topFiveViewBy = "ROI_Savings_Investment";
                break;
            case "ROI as % of investment":
                topFiveViewBy = "ROI_CostOffsets_Investment"; //need to verify this is the correct one
                break;
            case "Cost offset (population)":
                topFiveViewBy = "costOffsets_population";
                break;
            case "Cost offset (per member)":
                topFiveViewBy = "costOffsets_perMember";
                break;
            case "Cost offset (PMPM)":
                topFiveViewBy = "costOffsets_PMPM";
                break;
            case "Cost offset per treated patient per month (AOM (inc. Wegovy) vs. no intervention)":
                topFiveViewBy = "costOffsets_perPatient";  //need to verify this is the correct one
                break;
            case "Cost offset (PPPM)":
                topFiveViewBy = "costOffsets_PPPM";
                break;
            default:
        }

        // console.log(table3[topFiveViewBy]);
        
        const topFive = populateArr();
        
        function populateArr() {
            let totalArr = [];
            
            for (i=0; i<56; i++) {
                if (i < 14) {
                    // run calculation - pass industry, POI, ob class, ROI viewby as argument
                    totalArr.push({vs:"ILT", obesityClass:obClass[0], POI:POI[i], value:table3[topFiveViewBy].ILT[`Year${topFiveYear}`]});
                    totalArr.push({vs:"NI", obesityClass:obClass[0], POI:POI[i], value:table3[topFiveViewBy].NI[`Year${topFiveYear}`]});
                } else if (i > 13 && i < 28) {
                    // run calculation - pass industry, POI, ob class as argument
                    totalArr.push({vs:"ILT", obesityClass:obClass[1], POI:POI[i - 14], value:table3[topFiveViewBy].ILT[`Year${topFiveYear}`]});
                    totalArr.push({vs:"NI", obesityClass:obClass[1], POI:POI[i - 14], value:table3[topFiveViewBy].NI[`Year${topFiveYear}`]});
                } else if (i > 27 && i < 42) {
                    // run calculation - pass industry, POI, ob class as argument
                    totalArr.push({vs:"ILT", obesityClass:obClass[2], POI:POI[i - 28], value:table3[topFiveViewBy].ILT[`Year${topFiveYear}`]});
                    totalArr.push({vs:"NI", obesityClass:obClass[2], POI:POI[i - 28], value:table3[topFiveViewBy].NI[`Year${topFiveYear}`]});
                } else {
                    // run calculation - pass industry, POI, ob class as argument
                    totalArr.push({vs:"ILT", obesityClass:obClass[3], POI:POI[i - 42], value:table3[topFiveViewBy].ILT[`Year${topFiveYear}`]});
                    totalArr.push({vs:"NI", obesityClass:obClass[3], POI:POI[i - 42], value:table3[topFiveViewBy].NI[`Year${topFiveYear}`]})
                }
            };

            const sortedArr = totalArr.sort((a, b) => b.value - a.value).slice(0, 5);

            // console.log(sortedArr, "sorted")
 
            // console.log(totalArr, 'TOTAL ARRAY')
            return sortedArr;
        }
    
        // console.log(table3, 'table3');
        // console.log(topFive, "top5");
        return topFive;
    };


    