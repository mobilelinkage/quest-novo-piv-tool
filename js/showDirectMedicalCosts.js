function showDirectMedicalCost(myOverweightHalfUnitInput, myCostType, myGenderInput, myAgeGroupInput, mytherapyType, myStudyYear, myNewParams) {
    // console.log(myOverweightHalfUnitInput, 'showdirect running', )
    console.log('running showDirect')
    console.time('showDirect')
    myGenderWomen = myNewParams.myGenderWomen;
    myGenderMen = myNewParams.myGenderMen;
    NI_effic_y1 = myNewParams.NI_effic_y1;
    NI_effic_y2 = myNewParams.NI_effic_y2;
    NI_effic_y3 = myNewParams.NI_effic_y3;
    NI_effic_y4 = myNewParams.NI_effic_y4;
    NI_effic_y5 = myNewParams.NI_effic_y5;
    NI_effic_y6 = myNewParams.NI_effic_y6;
    NI_effic_y7 = myNewParams.NI_effic_y7;
    NI_effic_y8 = myNewParams.NI_effic_y8;
    NI_effic_y9 = myNewParams.NI_effic_y9;
    NI_effic_y10 = myNewParams.NI_effic_y10;

    Baseline18_29 = myNewParams.myBL_18_29;
    Baseline30_39 = myNewParams.myBL_30_39;
    Baseline40_49 = myNewParams.myBL_40_49;
    Baseline50_59 = myNewParams.myBL_50_59;
    Baseline60_64 = myNewParams.myBL_60_64;


    var cost_covariatesDirectMedCost = race0_WhiteDirectIndirectCost + race1_BlackDirectIndirectCost + race2_HispanicDirectIndirectCost + race3_OtherDirectIndirectCost + degree0_CollegeDirectIndirectCost + degree1_CollegeDirectIndirectCost + degree2_CollegeDirectIndirectCost + degree3_MissingDirectIndirectCost + incomef0_MiddleDirectIndirectCost + incomef1_PovertyDirectIndirectCost + incomef2_LowDirectIndirectCost + incomef3_HighDirectIndirectCost + region1_NortheastDirectIndirectCost + region2_MidwestDirectIndirectCost + region3_SouthDirectIndirectCost + region4_WestDirectIndirectCost + smoking0_NonsmokerDirectIndirectCost + smoking1_SmokerDirectIndirectCost + smoking2_NA_MissingDirectIndirectCost + yearstr2012DirectIndirectCost + yearstr2013DirectIndirectCost + yearstr2014DirectIndirectCost + yearstr2015DirectIndirectCost + yearstr2016DirectIndirectCost; // CV_Direct_Med_Cost

    var cost_pharmacyCost = race0_WhitePharmacyCost + race1_BlackPharmacyCost + race2_HispanicPharmacyCost + race3_OtherPharmacyCost + degree0_CollegePharmacyCost + degree1_CollegePharmacyCost + degree2_CollegePharmacyCost + degree3_MissingPharmacyCost + incomef0_MiddlePharmacyCost + incomef1_PovertyPharmacyCost + incomef2_LowPharmacyCost + incomef3_HighPharmacyCost + region1_NortheastPharmacyCost + region2_MidwestPharmacyCost + region3_SouthPharmacyCost + region4_WestPharmacyCost + smoking0_NonsmokerPharmacyCost + smoking1_SmokerPharmacyCost + smoking2_NA_MissingPharmacyCost + yearstr2012PharmacyCost + yearstr2013PharmacyCost + yearstr2014PharmacyCost + yearstr2015PharmacyCost + yearstr2016PharmacyCost;

    var cost_Absenteeism = race0_WhiteAbsenteeism + race1_BlackAbsenteeism + race2_HispanicAbsenteeism + race3_OtherAbsenteeism + degree0_CollegeAbsenteeism + degree1_CollegeAbsenteeism + degree2_CollegeAbsenteeism + degree3_MissingAbsenteeism + incomef0_MiddleAbsenteeism + incomef1_PovertyAbsenteeism + incomef2_LowAbsenteeism + incomef3_HighAbsenteeism + region1_NortheastAbsenteeism + region2_MidwestAbsenteeism + region3_SouthAbsenteeism + region4_WestAbsenteeism + smoking0_NonsmokerAbsenteeism + smoking1_SmokerAbsenteeism + smoking2_NA_MissingAbsenteeism + yearstr2012Absenteeism + yearstr2013Absenteeism + yearstr2014Absenteeism + yearstr2015Absenteeism + yearstr2016Absenteeism;

    var cost_Workers = region1_NortheastWorkers + region2_MidwestWorkers + region3_SouthWorkers + region4_WestWorkers + region5_OtherWorkers + yearstr2013Workers + yearstr2014Workers + yearstr2015Workers + yearstr2016Workers + yearstr2017Workers;

    var cost_STD = region1_NortheastSTD + region2_MidwestSTD + region3_SouthSTD + region4_WestSTD + region5_OtherSTD + yearstr2013STD + yearstr2014STD + yearstr2015STD + yearstr2016STD + yearstr2017STD;

    var cost_LTD = region1_NortheastLTD + region2_MidwestLTD + region3_SouthLTD + region4_WestLTD + region5_OtherLTD + yearstr2013LTD + yearstr2014LTD + yearstr2015LTD + yearstr2016LTD + yearstr2017LTD;

    if (Usermod_efficacy_inputs == "no") {


        var Saxenda_Completers_Efficacy_Year1;
        var Saxenda_Completers_Efficacy_Year2;
        var Saxenda_Completers_Efficacy_Year3;
        var Saxenda_Completers_Efficacy_Year4;
        var Saxenda_Completers_Efficacy_Year5;
        var Saxenda_Completers_Efficacy_Year6;
        var Saxenda_Completers_Efficacy_Year7;
        var Saxenda_Completers_Efficacy_Year8;
        var Saxenda_Completers_Efficacy_Year9;

        var Qsymia_Completers_Efficacy_Year1;
        var Qsymia_Completers_Efficacy_Year2;
        var Qsymia_Completers_Efficacy_Year3;
        var Qsymia_Completers_Efficacy_Year4;
        var Qsymia_Completers_Efficacy_Year5;
        var Qsymia_Completers_Efficacy_Year6;
        var Qsymia_Completers_Efficacy_Year7;
        var Qsymia_Completers_Efficacy_Year8;
        var Qsymia_Completers_Efficacy_Year9;

        var Contrave_Completers_Efficacy_Year1;
        var Contrave_Completers_Efficacy_Year2;
        var Contrave_Completers_Efficacy_Year3;
        var Contrave_Completers_Efficacy_Year4;
        var Contrave_Completers_Efficacy_Year5;
        var Contrave_Completers_Efficacy_Year6;
        var Contrave_Completers_Efficacy_Year7;
        var Contrave_Completers_Efficacy_Year8;
        var Contrave_Completers_Efficacy_Year9;

        var Semaglutide_Completers_Efficacy_Year1;
        var Semaglutide_Completers_Efficacy_Year2;
        var Semaglutide_Completers_Efficacy_Year3;
        var Semaglutide_Completers_Efficacy_Year4;
        var Semaglutide_Completers_Efficacy_Year5;
        var Semaglutide_Completers_Efficacy_Year6;
        var Semaglutide_Completers_Efficacy_Year7;
        var Semaglutide_Completers_Efficacy_Year8;
        var Semaglutide_Completers_Efficacy_Year9;

        // Call annualPercentage once for each year and save to variable

        const calculatedAnnualPercentages = {};
        for (let i = 1; i <= 10; i++) {
            calculatedAnnualPercentages[`Year${i}`] = annualPercentageBMI(i);
        }

        // todo Read values from object instead of calling function again

        Saxenda_Completers_Efficacy_Year1 = (annualPercentageBMI(1)[0]) * 1;
        Qsymia_Completers_Efficacy_Year1 = (annualPercentageBMI(1)[1]) * 1;
        Contrave_Completers_Efficacy_Year1 = (annualPercentageBMI(1)[2]) * 1;
        Semaglutide_Completers_Efficacy_Year1 = (annualPercentageBMI(1)[3]) * 1;
        // var AOM_efficacy_calculations_R5 * (showAOMEfficacyCalculations("Saxenda SCALE (4% SR)")[11])


        // I am here and there and there
        // console.log(Saxenda_annual_percentage_BMI_change_completers);
        // console.log(Qsymia_annual_percentage_BMI_change_completers);
        // console.log(Contrave_annual_percentage_BMI_change_completers);
        // console.log(Semaglutide_annual_percentage_BMI_change_completers);

        //     break;
        // case 2:
        Saxenda_Completers_Efficacy_Year2 = 0 - (1 - ((1 + (annualPercentageBMI(2)[0]) * 1) / (1 + (annualPercentageBMI(1)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year2 = 0 - (1 - ((1 + (annualPercentageBMI(2)[1]) * 1) / (1 + (annualPercentageBMI(1)[1]) * 1)));
        Contrave_Completers_Efficacy_Year2 = 0 - (1 - ((1 + (annualPercentageBMI(2)[2]) * 1) / (1 + (annualPercentageBMI(1)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year2 = 0 - (1 - ((1 + (annualPercentageBMI(2)[3]) * 1) / (1 + (annualPercentageBMI(1)[3]) * 1)));
        // console.log('Saxenda_Completers_Efficacy_Year2',Saxenda_Completers_Efficacy_Year2);
        //     break;
        // case 3:
        Saxenda_Completers_Efficacy_Year3 = 0 - (1 - ((1 + (annualPercentageBMI(3)[0]) * 1) / (1 + (annualPercentageBMI(2)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year3 = 0 - (1 - ((1 + (annualPercentageBMI(3)[1]) * 1) / (1 + (annualPercentageBMI(2)[1]) * 1)));
        Contrave_Completers_Efficacy_Year3 = 0 - (1 - ((1 + (annualPercentageBMI(3)[2]) * 1) / (1 + (annualPercentageBMI(2)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year3 = 0 - (1 - ((1 + (annualPercentageBMI(3)[3]) * 1) / (1 + (annualPercentageBMI(2)[3]) * 1)));
        //     break;
        // case 4:
        Saxenda_Completers_Efficacy_Year4 = 0 - (1 - ((1 + (annualPercentageBMI(4)[0]) * 1) / (1 + (annualPercentageBMI(3)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year4 = 0 - (1 - ((1 + (annualPercentageBMI(4)[1]) * 1) / (1 + (annualPercentageBMI(3)[1]) * 1)));
        Contrave_Completers_Efficacy_Year4 = 0 - (1 - ((1 + (annualPercentageBMI(4)[2]) * 1) / (1 + (annualPercentageBMI(3)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year4 = 0 - (1 - ((1 + (annualPercentageBMI(4)[3]) * 1) / (1 + (annualPercentageBMI(3)[3]) * 1)));
        //     break;
        // case 5:
        Saxenda_Completers_Efficacy_Year5 = 0 - (1 - ((1 + (annualPercentageBMI(5)[0]) * 1) / (1 + (annualPercentageBMI(4)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year5 = 0 - (1 - ((1 + (annualPercentageBMI(5)[1]) * 1) / (1 + (annualPercentageBMI(4)[1]) * 1)));
        Contrave_Completers_Efficacy_Year5 = 0 - (1 - ((1 + (annualPercentageBMI(5)[2]) * 1) / (1 + (annualPercentageBMI(4)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year5 = 0 - (1 - ((1 + (annualPercentageBMI(5)[3]) * 1) / (1 + (annualPercentageBMI(4)[3]) * 1)));
        //     break;
        // case 6:
        Saxenda_Completers_Efficacy_Year6 = 0 - (1 - ((1 + (annualPercentageBMI(6)[0]) * 1) / (1 + (annualPercentageBMI(5)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year6 = 0 - (1 - ((1 + (annualPercentageBMI(6)[1]) * 1) / (1 + (annualPercentageBMI(5)[1]) * 1)));
        Contrave_Completers_Efficacy_Year6 = 0 - (1 - ((1 + (annualPercentageBMI(6)[2]) * 1) / (1 + (annualPercentageBMI(5)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year6 = 0 - (1 - ((1 + (annualPercentageBMI(6)[3]) * 1) / (1 + (annualPercentageBMI(5)[3]) * 1)));
        //     break;
        // case 7:
        Saxenda_Completers_Efficacy_Year7 = 0 - (1 - ((1 + (annualPercentageBMI(7)[0]) * 1) / (1 + (annualPercentageBMI(6)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year7 = 0 - (1 - ((1 + (annualPercentageBMI(7)[1]) * 1) / (1 + (annualPercentageBMI(6)[1]) * 1)));
        Contrave_Completers_Efficacy_Year7 = 0 - (1 - ((1 + (annualPercentageBMI(7)[2]) * 1) / (1 + (annualPercentageBMI(6)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year7 = 0 - (1 - ((1 + (annualPercentageBMI(7)[3]) * 1) / (1 + (annualPercentageBMI(6)[3]) * 1)));
        //     break;
        // case 8:
        Saxenda_Completers_Efficacy_Year8 = 0 - (1 - ((1 + (annualPercentageBMI(8)[0]) * 1) / (1 + (annualPercentageBMI(7)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year8 = 0 - (1 - ((1 + (annualPercentageBMI(8)[1]) * 1) / (1 + (annualPercentageBMI(7)[1]) * 1)));
        Contrave_Completers_Efficacy_Year8 = 0 - (1 - ((1 + (annualPercentageBMI(8)[2]) * 1) / (1 + (annualPercentageBMI(7)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year8 = 0 - (1 - ((1 + (annualPercentageBMI(8)[3]) * 1) / (1 + (annualPercentageBMI(7)[3]) * 1)));
        //     break;
        // case 9:
        Saxenda_Completers_Efficacy_Year9 = 0 - (1 - ((1 + (annualPercentageBMI(9)[0]) * 1) / (1 + (annualPercentageBMI(8)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year9 = 0 - (1 - ((1 + (annualPercentageBMI(9)[1]) * 1) / (1 + (annualPercentageBMI(8)[1]) * 1)));
        Contrave_Completers_Efficacy_Year9 = 0 - (1 - ((1 + (annualPercentageBMI(9)[2]) * 1) / (1 + (annualPercentageBMI(8)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year9 = 0 - (1 - ((1 + (annualPercentageBMI(9)[3]) * 1) / (1 + (annualPercentageBMI(8)[3]) * 1)));
        //     break;
        // case 10:
        Saxenda_Completers_Efficacy_Year10 = 0 - (1 - ((1 + (annualPercentageBMI(10)[0]) * 1) / (1 + (annualPercentageBMI(9)[0]) * 1)));
        Qsymia_Completers_Efficacy_Year10 = 0 - (1 - ((1 + (annualPercentageBMI(10)[1]) * 1) / (1 + (annualPercentageBMI(9)[1]) * 1)));
        Contrave_Completers_Efficacy_Year10 = 0 - (1 - ((1 + (annualPercentageBMI(10)[2]) * 1) / (1 + (annualPercentageBMI(9)[2]) * 1)));
        Semaglutide_Completers_Efficacy_Year10 = 0 - (1 - ((1 + (annualPercentageBMI(10)[3]) * 1) / (1 + (annualPercentageBMI(9)[3]) * 1)));
        //         break;
        //     default:
        // }



        //console.log(Saxenda_annual_percentage_BMI_change_completers);

        AOM_Efficacy_Calculations_year1 = (Saxenda_Completers_Efficacy_Year1 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year1 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year1 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year1 * my_semaglutide_Data);

        // console.log('AOM_Efficacy_Calculations_year1',AOM_Efficacy_Calculations_year1)

        AOM_Efficacy_Calculations_year2 = (Saxenda_Completers_Efficacy_Year2 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year2 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year2 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year2 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year3 = (Saxenda_Completers_Efficacy_Year3 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year3 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year3 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year3 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year4 = (Saxenda_Completers_Efficacy_Year4 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year4 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year4 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year4 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year5 = (Saxenda_Completers_Efficacy_Year5 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year5 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year5 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year5 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year6 = (Saxenda_Completers_Efficacy_Year6 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year6 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year6 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year6 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year7 = (Saxenda_Completers_Efficacy_Year7 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year7 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year7 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year7 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year8 = (Saxenda_Completers_Efficacy_Year8 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year8 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year8 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year8 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year9 = (Saxenda_Completers_Efficacy_Year9 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year9 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year9 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year9 * my_semaglutide_Data);

        AOM_Efficacy_Calculations_year10 = (Saxenda_Completers_Efficacy_Year10 * my_saxenda_Data) + (Qsymia_Completers_Efficacy_Year10 * my_qsymia_Data) + (Contrave_Completers_Efficacy_Year10 * my_contrave_Data) + (Semaglutide_Completers_Efficacy_Year10 * my_semaglutide_Data);


        // console.log(AOM_Efficacy_Calculations_year1);
        // console.log(AOM_Efficacy_Calculations_year2);

    } else {




        // modifiable_AOM_effic_y1 = FullInputs_AOMEff_reduction*1000 = FullInputs_AOMEff_reduction * 1000
        var modifiable_AOM_effic_y1 = FullInputs_AOMEff_reduction * 1000;

        for (var val of AOM_Wegovy_efficacy_raw_calculations.data) {

            if (val.Trial == "le Roux 2017 (SCALE - prediabetes only)") {
                var BMI_change_year_1_ITT_population_le_Roux_2017 = val.BMI_change_year_1_ITT_population;
            }
            if (val.Trial == "Pi-Sunyer 2015 (SCALE)") {
                var BMI_change_year_1_ITT_population_Pi_Sunyer_2015 = val.BMI_change_year_1_ITT_population;
            }
            if (val.Trial == "Gadde 2011 (CONQUER)") {
                var BMI_change_year_1_ITT_population_Gadde_2011 = val.BMI_change_year_1_ITT_population;
            }
            if (val.Trial == "Greenway 2010 (COR I)") {
                var BMI_change_year_1_ITT_population_Greenway_2010 = val.BMI_change_year_1_ITT_population;
            }
            if (val.Trial == "Apovian 2013 (COR II)") {
                var BMI_change_year_1_ITT_population_Apovian_2013 = val.BMI_change_year_1_ITT_population;
            }
        }

        var Saxenda_ITT_efficacy = ((BMI_change_year_1_ITT_population_le_Roux_2017) * 1 + (BMI_change_year_1_ITT_population_Pi_Sunyer_2015) * 1) / 2;
        var Qsymia_ITT_efficacy = BMI_change_year_1_ITT_population_Gadde_2011 * 1;
        var Contrave_ITT_Efficacy = ((BMI_change_year_1_ITT_population_Greenway_2010) * 1 + (BMI_change_year_1_ITT_population_Apovian_2013) * 1) / 2;

        // default_AOM_effic_y1 = =ABS(Saxenda_ITT_efficacy*my_saxenda_Data+Qsymia_ITT_efficacy*usermod_Qsymia_mktshare+Contrave_ITT_Efficacy*usermod_Contrave_mktshare)*1000
        var default_AOM_effic_y1 = Math.abs((Saxenda_ITT_efficacy * my_saxenda_Data + Qsymia_ITT_efficacy * my_qsymia_Data + Contrave_ITT_Efficacy * my_contrave_Data) * 1000);

        // usermod_AOM_effic_y1 = iF(modifiable_AOM_effic_y1>default_AOM_effic_y1,modifiable_AOM_effic_y1/1000,default_AOM_effic_y1/1000)
        if (modifiable_AOM_effic_y1 > default_AOM_effic_y1) {
            var usermod_AOM_effic_y1 = modifiable_AOM_effic_y1 / 1000;
        } else {
            var usermod_AOM_effic_y1 = default_AOM_effic_y1 / 1000;
        }

        // -(usermod_AOM_effic_y1*usermod_Saxenda_mktshare+usermod_AOM_effic_y1*usermod_Qsymia_mktshare+usermod_AOM_effic_y1*usermod_Contrave_mktshare+usermod_AOM_effic_y1*Usermod_Semaglutide_Mktshare)

        AOM_Efficacy_Calculations_year1 = 0 - (usermod_AOM_effic_y1 * my_saxenda_Data) + (usermod_AOM_effic_y1 * my_qsymia_Data) + (usermod_AOM_effic_y1 * my_contrave_Data) + (usermod_AOM_effic_y1 * my_semaglutide_Data); // [New_wt_AOM_effic_y1] = [AOM Efficacy Calculations]!Q5 = [AOM Efficacy Calculations]!W5

        AOM_Efficacy_Calculations_year2 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year3 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year4 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year5 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year6 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year7 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year8 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year9 = AOM_Efficacy_Calculations_year1;
        AOM_Efficacy_Calculations_year10 = AOM_Efficacy_Calculations_year1;

    }



    for (var val of AOM_Wegovy_efficacy_raw_calculations.data) {




        // var AOM_Efficacy_Calculations_year1_W5 = AOM_Efficacy_Calculations_year1_Q5;
        // var Distribution_AOM_C131 = Distribution_AOM_C37 + (Distribution_AOM_C37 * AOM_Efficacy_Calculations_year1_W5);

        // if (Distribution_AOM_C131 < BMI_cap) {
        //     var Distribution_AOM_B131 = Distribution_AOM_C131;
        // } else {
        //     Distribution_AOM_B131 = BMI_cap;
        //}


        //    var C131 = C37+(C37*New_wt_AOM_effic_y1);


        //console.log('myOverweightHalfUnitInput: ' +myOverweightHalfUnitInput);


        var BMI_half_unit_baseline = myOverweightHalfUnitInput; // [Distribution (AOM)!C37]
        if (BMI_half_unit_baseline < BMI_cap) { // 
            var BMI_half_unit_with_cap_baseline = BMI_half_unit_baseline;
        } else {
            var BMI_half_unit_with_cap_baseline = BMI_cap;
        }

        // console.log(myOverweightHalfUnitInput * AOM_Efficacy_Calculations_year1)

        var BMI_half_unit_year1 = myOverweightHalfUnitInput * 1 + (myOverweightHalfUnitInput * New_wt_AOM_effic_y1); // [Distribution (AOM)!C131]
        var BMI_half_unit_year2 = (BMI_half_unit_year1) * 1 + (BMI_half_unit_year1 * New_wt_AOM_effic_y2); // [Distribution (AOM)!C225]
        var BMI_half_unit_year3 = BMI_half_unit_year2 * 1 + (BMI_half_unit_year2 * New_wt_AOM_effic_y3); // [Distribution (AOM)!C319]
        var BMI_half_unit_year4 = BMI_half_unit_year3 * 1 + (BMI_half_unit_year3 * New_wt_AOM_effic_y4); // [Distribution (AOM)!C413]
        var BMI_half_unit_year5 = BMI_half_unit_year4 * 1 + (BMI_half_unit_year4 * New_wt_AOM_effic_y5); // [Distribution (AOM)!C507]
        var BMI_half_unit_year6 = BMI_half_unit_year5 * 1 + (BMI_half_unit_year5 * New_wt_AOM_effic_y6); // [Distribution (AOM)!C601]
        var BMI_half_unit_year7 = BMI_half_unit_year6 * 1 + (BMI_half_unit_year6 * New_wt_AOM_effic_y7); // [Distribution (AOM)!C695]
        var BMI_half_unit_year8 = BMI_half_unit_year7 * 1 + (BMI_half_unit_year7 * New_wt_AOM_effic_y8); // [Distribution (AOM)!C789]
        var BMI_half_unit_year9 = BMI_half_unit_year8 * 1 + (BMI_half_unit_year8 * New_wt_AOM_effic_y9); // [Distribution (AOM)!C883]
        var BMI_half_unit_year10 = BMI_half_unit_year9 * 1 + (BMI_half_unit_year9 * New_wt_AOM_effic_y10); // [Distribution (AOM)!C977]

        // console.log('BMI_half_unit_year3',BMI_half_unit_year3)

        // switch (myStudyYear) {

        //     case 1:
        var myBMIYear1_half_unit = BMI_half_unit_year1;
        //     break;
        // case 2:
        var myBMIYear2_half_unit = BMI_half_unit_year2;
        //     break;
        // case 3:
        var myBMIYear3_half_unit = BMI_half_unit_year3;
        //     break;
        // case 4:
        var myBMIYear4_half_unit = BMI_half_unit_year4;
        //     break;
        // case 5:
        var myBMIYear5_half_unit = BMI_half_unit_year5;
        //     break;
        // case 6:
        var myBMIYear6_half_unit = BMI_half_unit_year6;
        //     break;
        // case 7:
        var myBMIYear7_half_unit = BMI_half_unit_year7;
        //     break;
        // case 8:
        var myBMIYear8_half_unit = BMI_half_unit_year8;
        //     break;
        // case 9:
        var myBMIYear9_half_unit = BMI_half_unit_year9;
        //     break;
        // case 10:
        var myBMIYear10_half_unit = BMI_half_unit_year10;
        //         break;
        //     default:
        // }
        // myOverweightHalfUnitInput, myCostType, myGenderInput, myAgeGroupInput, mytherapyType, myStudyYear, myNewParams
        // if ((myStudyYear == 10) && (mytherapyType == "AOM") && (myCostType == "direct")) {
        // console.log(myBMI_half_unit)
        // console.log(myOverweightHalfUnitInput)
        // console.log(New_wt_AOM_effic_y1)
        // console.log(New_wt_AOM_effic_y2)
        // console.log(New_wt_AOM_effic_y3)
        // console.log(New_wt_AOM_effic_y4)
        // console.log(New_wt_AOM_effic_y5)
        // console.log(New_wt_AOM_effic_y6)
        // console.log(New_wt_AOM_effic_y7)
        // console.log(New_wt_AOM_effic_y8)
        // console.log(New_wt_AOM_effic_y9)
        // console.log(New_wt_AOM_effic_y10)
        // }
        // console.log('myBMI_half_unit',myBMI_half_unit)

        if (myBMIYear1_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year1 = myBMIYear1_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year1);
        } else {
            var AOM_BMI_half_unit_with_cap_year1 = BMI_cap;
        }

        if (myBMIYear2_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year2 = myBMIYear2_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year2);
        } else {
            var AOM_BMI_half_unit_with_cap_year2 = BMI_cap;
        }

        if (myBMIYear3_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year3 = myBMIYear3_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year3);
        } else {
            var AOM_BMI_half_unit_with_cap_year3 = BMI_cap;
        }

        if (myBMIYear4_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year4 = myBMIYear4_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year4);
        } else {
            var AOM_BMI_half_unit_with_cap_year4 = BMI_cap;
        }

        if (myBMIYear5_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year5 = myBMIYear5_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year5);
        } else {
            var AOM_BMI_half_unit_with_cap_year5 = BMI_cap;
        }

        if (myBMIYear6_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year6 = myBMIYear6_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year6);
        } else {
            var AOM_BMI_half_unit_with_cap_year6 = BMI_cap;
        }

        if (myBMIYear7_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year7 = myBMIYear7_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year7);
        } else {
            var AOM_BMI_half_unit_with_cap_year7 = BMI_cap;
        }

        if (myBMIYear8_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year8 = myBMIYear8_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year8);
        } else {
            var AOM_BMI_half_unit_with_cap_year8 = BMI_cap;
        }

        if (myBMIYear9_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year9 = myBMIYear9_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year9);
        } else {
            var AOM_BMI_half_unit_with_cap_year9 = BMI_cap;
        }

        if (myBMIYear10_half_unit < BMI_cap) { // 
            var AOM_BMI_half_unit_with_cap_year10 = myBMIYear10_half_unit;
            //    console.log(AOM_BMI_half_unit_with_cap_year10);
        } else {
            var AOM_BMI_half_unit_with_cap_year10 = BMI_cap;
        }

        console.log('BMI_half_unit_with_cap_year2', BMI_half_unit_with_cap_year2)
        var NI_BMI_half_unit_year1 = myOverweightHalfUnitInput * 1 + (myOverweightHalfUnitInput * 1 * myNewParams.NI_effic_y1 * 1); // [Distribution (NI)!C131]
        var NI_BMI_half_unit_year2 = (NI_BMI_half_unit_year1) * 1 + (NI_BMI_half_unit_year1 * myNewParams.NI_effic_y2 * 1); // [Distribution (NI)!C225]
        var NI_BMI_half_unit_year3 = (NI_BMI_half_unit_year2) * 1 + (NI_BMI_half_unit_year2 * myNewParams.NI_effic_y3 * 1); // [Distribution (NI)!C319]
        var NI_BMI_half_unit_year4 = (NI_BMI_half_unit_year3) * 1 + (NI_BMI_half_unit_year3 * myNewParams.NI_effic_y4 * 1); // [Distribution (NI)!C413]
        var NI_BMI_half_unit_year5 = (NI_BMI_half_unit_year4) * 1 + (NI_BMI_half_unit_year4 * myNewParams.NI_effic_y5 * 1); // [Distribution (NI)!C507]
        var NI_BMI_half_unit_year6 = (NI_BMI_half_unit_year5) * 1 + (NI_BMI_half_unit_year5 * myNewParams.NI_effic_y6 * 1); // [Distribution (NI)!C601]
        var NI_BMI_half_unit_year7 = (NI_BMI_half_unit_year6) * 1 + (NI_BMI_half_unit_year6 * myNewParams.NI_effic_y7 * 1); // [Distribution (NI)!C695]
        var NI_BMI_half_unit_year8 = (NI_BMI_half_unit_year7) * 1 + (NI_BMI_half_unit_year7 * myNewParams.NI_effic_y8 * 1); // [Distribution (NI)!C789]
        var NI_BMI_half_unit_year9 = (NI_BMI_half_unit_year8) * 1 + (NI_BMI_half_unit_year8 * myNewParams.NI_effic_y9 * 1); // [Distribution (NI)!C883]
        var NI_BMI_half_unit_year10 = (NI_BMI_half_unit_year9) * 1 + (NI_BMI_half_unit_year9 * myNewParams.NI_effic_y10 * 1); // [Distribution (NI)!C977]


        if (NI_BMI_half_unit_year1 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year1 = NI_BMI_half_unit_year1;
        } else {
            var NI_BMI_half_unit_with_cap_year1 = BMI_cap;
        }

        if (NI_BMI_half_unit_year2 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year2 = NI_BMI_half_unit_year2;
        } else {
            var NI_BMI_half_unit_with_cap_year2 = BMI_cap;
        }

        if (NI_BMI_half_unit_year3 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year3 = NI_BMI_half_unit_year3;
        } else {
            var NI_BMI_half_unit_with_cap_year3 = BMI_cap;
        }

        if (NI_BMI_half_unit_year4 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year4 = NI_BMI_half_unit_year4;
        } else {
            var NI_BMI_half_unit_with_cap_year4 = BMI_cap;
        }

        if (NI_BMI_half_unit_year5 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year5 = NI_BMI_half_unit_year5;
        } else {
            var NI_BMI_half_unit_with_cap_year5 = BMI_cap;
        }

        if (NI_BMI_half_unit_year6 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year6 = NI_BMI_half_unit_year6;
        } else {
            var NI_BMI_half_unit_with_cap_year6 = BMI_cap;
        }

        if (NI_BMI_half_unit_year7 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year7 = NI_BMI_half_unit_year7;
        } else {
            var NI_BMI_half_unit_with_cap_year7 = BMI_cap;
        }

        if (NI_BMI_half_unit_year8 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year8 = NI_BMI_half_unit_year8;
        } else {
            var NI_BMI_half_unit_with_cap_year8 = BMI_cap;
        }

        if (NI_BMI_half_unit_year9 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year9 = NI_BMI_half_unit_year9;
        } else {
            var NI_BMI_half_unit_with_cap_year9 = BMI_cap;
        }

        if (NI_BMI_half_unit_year10 * 1 < BMI_cap * 1) {
            var NI_BMI_half_unit_with_cap_year10 = NI_BMI_half_unit_year10;
        } else {
            var NI_BMI_half_unit_with_cap_year10 = BMI_cap;
        }



        var ILT_BMI_half_unit_year1 = myOverweightHalfUnitInput * 1 + (myOverweightHalfUnitInput * 1 * LI_effic_y1 * 1); // [Distribution (ILT)!C131]
        var ILT_BMI_half_unit_year2 = (ILT_BMI_half_unit_year1) * 1 + (ILT_BMI_half_unit_year1 * LI_effic_y2 * 1); // [Distribution (ILT)!C225]
        var ILT_BMI_half_unit_year3 = (ILT_BMI_half_unit_year2) * 1 + (ILT_BMI_half_unit_year2 * LI_effic_y3 * 1); // [Distribution (ILT)!C319]
        var ILT_BMI_half_unit_year4 = (ILT_BMI_half_unit_year3) * 1 + (ILT_BMI_half_unit_year3 * LI_effic_y4 * 1); // [Distribution (ILT)!C413]
        var ILT_BMI_half_unit_year5 = (ILT_BMI_half_unit_year4) * 1 + (ILT_BMI_half_unit_year4 * LI_effic_y5 * 1); // [Distribution (ILT)!C507]
        var ILT_BMI_half_unit_year6 = (ILT_BMI_half_unit_year5) * 1 + (ILT_BMI_half_unit_year5 * LI_effic_y6 * 1); // [Distribution (ILT)!C601]
        var ILT_BMI_half_unit_year7 = (ILT_BMI_half_unit_year6) * 1 + (ILT_BMI_half_unit_year6 * LI_effic_y7 * 1); // [Distribution (ILT)!C695]
        var ILT_BMI_half_unit_year8 = (ILT_BMI_half_unit_year7) * 1 + (ILT_BMI_half_unit_year7 * LI_effic_y8 * 1); // [Distribution (ILT)!C789]
        var ILT_BMI_half_unit_year9 = (ILT_BMI_half_unit_year8) * 1 + (ILT_BMI_half_unit_year8 * LI_effic_y9 * 1); // [Distribution (ILT)!C883]
        var ILT_BMI_half_unit_year10 = (ILT_BMI_half_unit_year9) * 1 + (ILT_BMI_half_unit_year9 * LI_effic_y10 * 1); // [Distribution (ILT)!C977]


        if (ILT_BMI_half_unit_year1 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year1 = ILT_BMI_half_unit_year1;
        } else {
            var ILT_BMI_half_unit_with_cap_year1 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year2 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year2 = ILT_BMI_half_unit_year2;
        } else {
            var ILT_BMI_half_unit_with_cap_year2 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year3 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year3 = ILT_BMI_half_unit_year3;
        } else {
            var ILT_BMI_half_unit_with_cap_year3 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year4 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year4 = ILT_BMI_half_unit_year4;
        } else {
            var ILT_BMI_half_unit_with_cap_year4 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year5 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year5 = ILT_BMI_half_unit_year5;
        } else {
            var ILT_BMI_half_unit_with_cap_year5 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year6 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year6 = ILT_BMI_half_unit_year6;
        } else {
            var ILT_BMI_half_unit_with_cap_year6 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year7 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year7 = ILT_BMI_half_unit_year7;
        } else {
            var ILT_BMI_half_unit_with_cap_year7 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year8 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year8 = ILT_BMI_half_unit_year8;
        } else {
            var ILT_BMI_half_unit_with_cap_year8 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year9 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year9 = ILT_BMI_half_unit_year9;
        } else {
            var ILT_BMI_half_unit_with_cap_year9 = BMI_cap;
        }

        if (ILT_BMI_half_unit_year10 * 1 < BMI_cap * 1) {
            var ILT_BMI_half_unit_with_cap_year10 = ILT_BMI_half_unit_year10;
        } else {
            var ILT_BMI_half_unit_with_cap_year10 = BMI_cap;
        }




        if (mytherapyType == "NI") {
            BMI_half_unit_with_cap_year1 = NI_BMI_half_unit_with_cap_year1;
            BMI_half_unit_with_cap_year2 = NI_BMI_half_unit_with_cap_year2;
            BMI_half_unit_with_cap_year3 = NI_BMI_half_unit_with_cap_year3;
            BMI_half_unit_with_cap_year4 = NI_BMI_half_unit_with_cap_year4;
            BMI_half_unit_with_cap_year5 = NI_BMI_half_unit_with_cap_year5;
            BMI_half_unit_with_cap_year6 = NI_BMI_half_unit_with_cap_year6;
            BMI_half_unit_with_cap_year7 = NI_BMI_half_unit_with_cap_year7;
            BMI_half_unit_with_cap_year8 = NI_BMI_half_unit_with_cap_year8;
            BMI_half_unit_with_cap_year9 = NI_BMI_half_unit_with_cap_year9;
            BMI_half_unit_with_cap_year10 = NI_BMI_half_unit_with_cap_year10;
            //            console.log("111111",BMI_half_unit_with_cap_year1);

        } else if (mytherapyType == "ILT") {
            BMI_half_unit_with_cap_year1 = ILT_BMI_half_unit_with_cap_year1;
            BMI_half_unit_with_cap_year2 = ILT_BMI_half_unit_with_cap_year2;
            BMI_half_unit_with_cap_year3 = ILT_BMI_half_unit_with_cap_year3;
            BMI_half_unit_with_cap_year4 = ILT_BMI_half_unit_with_cap_year4;
            BMI_half_unit_with_cap_year5 = ILT_BMI_half_unit_with_cap_year5;
            BMI_half_unit_with_cap_year6 = ILT_BMI_half_unit_with_cap_year6;
            BMI_half_unit_with_cap_year7 = ILT_BMI_half_unit_with_cap_year7;
            BMI_half_unit_with_cap_year8 = ILT_BMI_half_unit_with_cap_year8;
            BMI_half_unit_with_cap_year9 = ILT_BMI_half_unit_with_cap_year9;
            BMI_half_unit_with_cap_year10 = ILT_BMI_half_unit_with_cap_year10;
            //            console.log("22222",BMI_half_unit_with_cap_year1);

        } else if (mytherapyType == "AOM") {
            BMI_half_unit_with_cap_year1 = AOM_BMI_half_unit_with_cap_year1;
            BMI_half_unit_with_cap_year2 = AOM_BMI_half_unit_with_cap_year2;
            BMI_half_unit_with_cap_year3 = AOM_BMI_half_unit_with_cap_year3;
            BMI_half_unit_with_cap_year4 = AOM_BMI_half_unit_with_cap_year4;
            BMI_half_unit_with_cap_year5 = AOM_BMI_half_unit_with_cap_year5;
            BMI_half_unit_with_cap_year6 = AOM_BMI_half_unit_with_cap_year6;
            BMI_half_unit_with_cap_year7 = AOM_BMI_half_unit_with_cap_year7;
            BMI_half_unit_with_cap_year8 = AOM_BMI_half_unit_with_cap_year8;
            BMI_half_unit_with_cap_year9 = AOM_BMI_half_unit_with_cap_year9;
            BMI_half_unit_with_cap_year10 = AOM_BMI_half_unit_with_cap_year10;
            //    console.log("33333",BMI_half_unit_with_cap_year1);

        }

        console.log('BMI_half_unit_with_cap_year2', BMI_half_unit_with_cap_year2)
        var whichAgeGroup = 0;


        if ((year1_18_29 == 0) || (Number.isNaN(year1_18_29))) {
            showBMIYear1_18_29 = 0;
        } else {
            showBMIYear1_18_29 = year1_18_29;
        }
        // console.log('hi hi hi hi',year1_18_29)
        if ((year1_30_39 == 0) || (Number.isNaN(year1_30_39))) {
            showBMIYear1_30_39 = 0;
        } else {
            showBMIYear1_30_39 = year1_30_39;
        }
        if ((year1_40_49 == 0) || (Number.isNaN(year1_40_49))) {
            showBMIYear1_40_49 = 0;
        } else {
            showBMIYear1_40_49 = year1_40_49;
        }
        if ((year1_50_59 == 0) || (Number.isNaN(year1_50_59))) {
            showBMIYear1_50_59 = 0;
        } else {
            showBMIYear1_50_59 = year1_50_59;
        }
        if ((year1_60_64 == 0) || (Number.isNaN(year1_60_64))) {
            showBMIYear1_60_64 = 0;
        } else {
            showBMIYear1_60_64 = year1_60_64;
        }


        //     break;
        // case 2:
        showBMIYear2_18_29 = Year2Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear2_30_39 = Year2Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear2_40_49 = Year2Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear2_50_59 = Year2Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear2_60_64 = Year2Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // console.log(showBMIYear1_18_29)
        // showBMIYear1_18_29 = year2_18_29;
        // showBMIYear1_30_39 = year2_30_39;
        // showBMIYear1_40_49 = year2_40_49;
        // showBMIYear1_50_59 = year2_50_59;
        // showBMIYear1_60_64 = year2_60_64;
        //     break;
        // case 3:
        showBMIYear3_18_29 = Year3Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear3_30_39 = Year3Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear3_40_49 = Year3Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear3_50_59 = Year3Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear3_60_64 = Year3Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year3_18_29;
        // showBMIYear1_30_39 = year3_30_39;
        // showBMIYear1_40_49 = year3_40_49;
        // showBMIYear1_50_59 = year3_50_59;
        // showBMIYear1_60_64 = year3_60_64;
        //     break;
        // case 4:
        showBMIYear4_18_29 = Year4Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear4_30_39 = Year4Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear4_40_49 = Year4Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear4_50_59 = Year4Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear4_60_64 = Year4Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year4_18_29;
        // showBMIYear1_30_39 = year4_30_39;
        // showBMIYear1_40_49 = year4_40_49;
        // showBMIYear1_50_59 = year4_50_59;
        // showBMIYear1_60_64 = year4_60_64;
        //     break;
        // case 5:
        showBMIYear5_18_29 = Year5Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear5_30_39 = Year5Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear5_40_49 = Year5Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear5_50_59 = Year5Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear5_60_64 = Year5Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year5_18_29;
        // showBMIYear1_30_39 = year5_30_39;
        // showBMIYear1_40_49 = year5_40_49;
        // showBMIYear1_50_59 = year5_50_59;
        // showBMIYear1_60_64 = year5_60_64;
        //     break;
        // case 6:
        showBMIYear6_18_29 = Year6Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear6_30_39 = Year6Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear6_40_49 = Year6Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear6_50_59 = Year6Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear6_60_64 = Year6Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year6_18_29;
        // showBMIYear1_30_39 = year6_30_39;
        // showBMIYear1_40_49 = year6_40_49;
        // showBMIYear1_50_59 = year6_50_59;
        // showBMIYear1_60_64 = year6_60_64;
        //     break;
        // case 7:
        showBMIYear7_18_29 = Year7Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear7_30_39 = Year7Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear7_40_49 = Year7Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear7_50_59 = Year7Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear7_60_64 = Year7Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year7_18_29;
        // showBMIYear1_30_39 = year7_30_39;
        // showBMIYear1_40_49 = year7_40_49;
        // showBMIYear1_50_59 = year7_50_59;
        // showBMIYear1_60_64 = year7_60_64;
        //     break;
        // case 8:
        showBMIYear8_18_29 = Year8Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear8_30_39 = Year8Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear8_40_49 = Year8Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear8_50_59 = Year8Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear8_60_64 = Year8Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year8_18_29;
        // showBMIYear1_30_39 = year8_30_39;
        // showBMIYear1_40_49 = year8_40_49;
        // showBMIYear1_50_59 = year8_50_59;
        // showBMIYear1_60_64 = year8_60_64;
        //     break;
        // case 9:
        showBMIYear9_18_29 = Year9Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear9_30_39 = Year9Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear9_40_49 = Year9Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear9_50_59 = Year9Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear9_60_64 = Year9Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year9_18_29;
        // showBMIYear1_30_39 = year9_30_39;
        // showBMIYear1_40_49 = year9_40_49;
        // showBMIYear1_50_59 = year9_50_59;
        // showBMIYear1_60_64 = year9_60_64;
        //     break;
        // case 10:
        showBMIYear10_18_29 = Year10Array18_29[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear10_30_39 = Year10Array30_39[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear10_40_49 = Year10Array40_49[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear10_50_59 = Year10Array50_59[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        showBMIYear10_60_64 = Year10Array60_64[((myOverweightHalfUnitInput - 27) / 0.5) + 1];
        // showBMIYear1_18_29 = year10_18_29;
        // showBMIYear1_30_39 = year10_30_39;
        // showBMIYear1_40_49 = year10_40_49;
        // showBMIYear1_50_59 = year10_50_59;
        // showBMIYear1_60_64 = year10_60_64;
        //         break;
        //     default:
        // }
        // sammy shiu

        // console.log('showBMIYear1_18_29',showBMIYear1_18_29)
        // console.log('showBMIYear1_30_39',showBMIYear1_30_39)
        // console.log('showBMIYear1_40_49',showBMIYear1_40_49)
        // console.log('showBMIYear1_50_59',showBMIYear1_50_59)
        // console.log('showBMIYear1_60_64',showBMIYear1_60_64)
        // darth vader
        // console.log('Baseline18_29',Baseline18_29)
        if (myGenderInput == "female") {

            if (myAgeGroupInput == "18_29") {

                if (myCostType == "direct") {


                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);
                    // darth vader


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 18-29',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 18-29',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }
            }


            if (myAgeGroupInput == "30_39") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 30-39',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 30-39',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }



            }

            if (myAgeGroupInput == "40_49") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 40-49',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 40-49',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }
            }

            if (myAgeGroupInput == "50_59") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 50-59',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 50-59',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }

            }

            if (myAgeGroupInput == "60_64") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female * 1 + b4_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_PharmacyCosts * 1 + b4_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_AbsenteeismCovariates * 1 + b4_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_WorkersCovariates * 1 + b4_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 60-64',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_STDCovariates * 1 + b4_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 60-64',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderWomen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b3_female_LTDCovariates * 1 + b4_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b5_BMI_female_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }
            }


        } else {


            //            =$D131*Male_share*EXP(B0_Direct_Med_Cost+CV_Direct_Med_Cost+B1_Direct_Med_Cost*'Distribution (AOM)'!$B131+B2_Direct_Med_Cost*'Distribution (AOM)'!$B131*'Distribution (AOM)'!$B131)

            if (myAgeGroupInput == "18_29") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);



                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 18-29',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 18-29',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_18_29 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }
            }

            //          =$E131*Male_share*EXP(B0_Direct_Med_Cost+CV_Direct_Med_Cost+B1_Direct_Med_Cost*'Distribution (AOM)'!$B131+B2_Direct_Med_Cost*'Distribution (AOM)'!$B131*'Distribution (AOM)'!$B131+B6_Direct_Med_Costs_30_39+B7_Direct_Med_Cost_30_39*$B131+B8_Direct_Med_Cost_30_39*$B131*$B131)

            if (myAgeGroupInput == "30_39") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39 * 1 + b7x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_PharmacyCosts * 1 + b7x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_AbsenteeismCovariates * 1 + b7x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_WorkersCovariates * 1 + b7x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 30-39',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_STDCovariates * 1 + b7x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 30-39',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_30_39 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_30_39_LTDCovariates * 1 + b7x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_30_39_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }

            }

            //          =$F131*Male_share*EXP(B0_Direct_Med_Cost+CV_Direct_Med_Cost+B1_Direct_Med_Cost*'Distribution (AOM)'!$B131+B2_Direct_Med_Cost*'Distribution (AOM)'!$B131*'Distribution (AOM)'!$B131+B6_Direct_Med_Cost_40_49+B7_Direct_Med_Cost_40_49*$B131+B8_Direct_Med_Cost_40_49*$B131*$B131)

            if (myAgeGroupInput == "40_49") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49 * 1 + b7x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_PharmacyCosts * 1 + b7x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_AbsenteeismCovariates * 1 + b7x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_WorkersCovariates * 1 + b7x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 40-49',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_STDCovariates * 1 + b7x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 40-49',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_40_49 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_40_49_LTDCovariates * 1 + b7x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_40_49_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }

            }

            //          =$G131*Male_share*EXP(B0_Direct_Med_Cost+CV_Direct_Med_Cost+B1_Direct_Med_Cost*'Distribution (AOM)'!$B131+B2_Direct_Med_Cost*'Distribution (AOM)'!$B131*'Distribution (AOM)'!$B131+B6_Direct_Med_Cost_50_59+B7_Direct_Med_Cost_50_59*$B131+B8_Direct_Med_Cost_50_59*$B131*$B131)

            if (myAgeGroupInput == "50_59") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59 * 1 + b7x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_PharmacyCosts * 1 + b7x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_AbsenteeismCovariates * 1 + b7x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_WorkersCovariates * 1 + b7x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 50-59',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_STDCovariates * 1 + b7x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 50-59',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_50_59 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_50_59_LTDCovariates * 1 + b7x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_50_59_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }
            }

            //          =$H131*Male_share*EXP(B0_Direct_Med_Cost+CV_Direct_Med_Cost+B1_Direct_Med_Cost*'Distribution (AOM)'!$B131+B2_Direct_Med_Cost*'Distribution (AOM)'!$B131*'Distribution (AOM)'!$B131+B6_Direct_Med_Cost_60_64+B7_Direct_Med_Cost_60_64*$B131+B8_Direct_Med_Cost_60_64*$B131*$B131)

            if (myAgeGroupInput == "60_64") {

                if (myCostType == "direct") {
                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myDirectMedCost * 1 + cost_covariatesDirectMedCost * 1 + b1_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64 * 1 + b7x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64 * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);


                } else if (myCostType == "pharmacy") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myPharmacyCosts * 1 + cost_pharmacyCost * 1 + b1_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_PharmacyCosts * 1 + b7x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_PharmacyCosts * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "absenteeism") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);
                    // console.log('myAgeGroup_baseline',myAgeGroup_baseline)

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);
                    // console.log('myAgeGroup_year1',myAgeGroup_year1)

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('myAgeGroup_year2',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);
                    // console.log('myAgeGroup_year3',myAgeGroup_year3)

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);
                    // console.log('myAgeGroup_year4',myAgeGroup_year4)

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);
                    // console.log('myAgeGroup_year5',myAgeGroup_year5)

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);
                    // console.log('myAgeGroup_year6',myAgeGroup_year6)

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);
                    // console.log('myAgeGroup_year7',myAgeGroup_year7)

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);
                    // console.log('myAgeGroup_year8',myAgeGroup_year8)

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);
                    // console.log('myAgeGroup_year9',myAgeGroup_year9)

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myAbsenteeismCovariates * 1 + cost_Absenteeism * 1 + b1_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_AbsenteeismCovariates * 1 + b7x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_AbsenteeismCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);
                    // console.log('myAgeGroup_year10',myAgeGroup_year10)

                } else if (myCostType == "workers") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myWorkersCovariates * 1 + cost_Workers * 1 + b1_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_WorkersCovariates * 1 + b7x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_WorkersCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "std") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 std 60-64',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(mySTDCovariates * 1 + cost_STD * 1 + b1_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_STDCovariates * 1 + b7x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_STDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                } else if (myCostType == "ltd") {

                    var myAgeGroup_baseline = Baseline60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_baseline * 1 * BMI_half_unit_with_cap_baseline * 1);

                    var myAgeGroup_year1 = showBMIYear1_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year1 * 1 * BMI_half_unit_with_cap_year1 * 1);

                    var myAgeGroup_year2 = showBMIYear2_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year2 * 1 * BMI_half_unit_with_cap_year2 * 1);
                    // console.log('yr2 ltd 60-64',myAgeGroup_year2)

                    var myAgeGroup_year3 = showBMIYear3_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year3 * 1 * BMI_half_unit_with_cap_year3 * 1);

                    var myAgeGroup_year4 = showBMIYear4_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year4 * 1 * BMI_half_unit_with_cap_year4 * 1);

                    var myAgeGroup_year5 = showBMIYear5_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year5 * 1 * BMI_half_unit_with_cap_year5 * 1);

                    var myAgeGroup_year6 = showBMIYear6_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year6 * 1 * BMI_half_unit_with_cap_year6 * 1);

                    var myAgeGroup_year7 = showBMIYear7_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year7 * 1 * BMI_half_unit_with_cap_year7 * 1);

                    var myAgeGroup_year8 = showBMIYear8_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year8 * 1 * BMI_half_unit_with_cap_year8 * 1);

                    var myAgeGroup_year9 = showBMIYear9_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year9 * 1 * BMI_half_unit_with_cap_year9 * 1);

                    var myAgeGroup_year10 = showBMIYear10_60_64 * 1 * myGenderMen / 100 * 1 * Math.exp(myLTDCovariates * 1 + cost_LTD * 1 + b1_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b2_BMI_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1 + b6x_age_group_60_64_LTDCovariates * 1 + b7x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 + b8x_BMI_age_group_60_64_LTDCovariates * 1 * BMI_half_unit_with_cap_year10 * 1 * BMI_half_unit_with_cap_year10 * 1);

                }
            }
        }




    }


    // console.log('myAgeGroup_baseline',myAgeGroup_baseline)

    //return(myAgeGroup_year1);
    console.timeEnd('showDirect')
    return [myAgeGroup_baseline, myAgeGroup_year1, myAgeGroup_year2, myAgeGroup_year3, myAgeGroup_year4, myAgeGroup_year5, myAgeGroup_year6, myAgeGroup_year7, myAgeGroup_year8, myAgeGroup_year9, myAgeGroup_year10];


}