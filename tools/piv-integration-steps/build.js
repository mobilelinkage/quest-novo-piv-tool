/**
 * Runs a series of steps that need to be done each time
 * we merge the functional branch into the IVA integration branch
 *
 * 
 *   TODO:
 *      - move missing js files over to smartrep src folder (in progress)
 *      - check for missing css includes in 16.html and add to slide.json
 *              - catch is that smartrep uses less, not css, maybe slide rename
 *              - deprioritized for now as bulk of new changes are in integration branch 
 * 
 *      - detailedResults_loop_sammy-geoff-redux.js : uncomment lines 7 - 29
 *      - populateSimpleResults.js : uncomment lines 153 - 168
 *      - 16.html : uncomment lines in detailedResults starting at 4215
 *      - 16.html : uncomment lines in myResults starting at 4764
 *      - 16.html : uncomment lines starting at 724-882
 *      - 16.html : change params params.fullResultsPage to myParams.fullResultsPage on line 5770
 *      - 16.html : uncomment lines 947, 948 for working hours and hourly rate
 * 
 */


/*
 * dependencies
 */
const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


/*
 * helper functions
 */

var getSlideById = (jsonSlide, id) => {
    let jsonSlideList = jsonSlide.slide;
    console.log("getSlideById : got list of slides", jsonSlideList);
    
    for (s in jsonSlideList) {
        //console.log("   -> attempting", jsonSlideList[s])
        if (jsonSlideList[s].id == id) {
            console.log("   -> got match", id);
            return jsonSlideList[s];
        }
    }
};

var getFileNameFromPath = (filePath) => {
    console.log("getFileNameFromPath", filePath);

    let prepend = "";

    if (!filePath || filePath == "") {
        console.log("   -> bad filepath, exit", filePath);
        return "";
    } 

    if (filePath.indexOf("https") > -1) {
        console.log("   -> not a relative path, skipping", filePath);
        return "";
    }
    
    if (filePath.indexOf("json") > -1) {
        console.log("   -> json file", filePath);
        prepend = "json/"; 
    } 

    let fileName = prepend + filePath.substring(filePath.lastIndexOf("/") + 1, filePath.lastIndexOf("."));

    return fileName;
};


/* 
 * start making required integration changes
 */

let rootDir = __dirname.replace("/tools/piv-integration-steps", "");
let srcDir = rootDir +"/src"

let inputFilePath = rootDir +"/16.html";
let inputFileContents = "";


/*
 * copy all js and css files from root level directories to smartrep src directories
 */
/*
fs.readdir(rootDir +"/js", (err, files) => {
    if (err) {
        console.log("Error when reading js files : "+ rootDir +"/js", err);
    } else {
        
        console.log("Grabbing input files:");

        // loop through each file, copy each to smartrep source directory
        files.forEach(file => {
            console.log("   -> ", file);
        });
    }
});
*/


/*
 * Mirror changes from 16.html into 700.htm
 */

fs.readFile(inputFilePath, "utf-8", (err, data) => {
    if (err) {
        return console.log("fs.readFile error : "+ inputFilePath, err);
    }
    
    console.log("fs.readFile success", inputFilePath);
    inputFileContents = data;


    
    /*
    * Mirror changes in js includes from 16.html into slides.json
    */

    // slide.json file path
    let jsonSlidePath = srcDir +"/parameters/slide";
    console.log("Grab contents of slide.json in json object format", jsonSlidePath);
    
    // grab contents of slide.json
    jsonSlide = require(jsonSlidePath);
    //console.log("   -> got details for jsonSlide", jsonSlide);

    // get config for slide 700
    var pivSlide = getSlideById(jsonSlide, "700");
    //console.log("   -> got details for slide 700", pivSlide);
    
    // grab list of js params for slide 700
    var jsIncludeList = pivSlide.js;
    //console.log("   -> list of js params for slide 700", jsIncludeList);
    
    // convert 16.html string into html dom for parsing out script tags 
    const inputHtml = new JSDOM(inputFileContents);
    console.log("Also got an input html file, now to convert to html dom");
    
    // grab list of script tags
    let scriptList = inputHtml.window.document.getElementsByTagName("script");
    console.log("   -> Got list of script tags", scriptList);
    
    // loop through script tags
    console.log("Looping through list of script tags");
    for (s in scriptList) {
        
        console.log("   -> attempting", scriptList[s]);

        if (!scriptList[s].src) {
            console.log("      -> No src attribute, skipping");
            continue;
        }

        // retrieve script tag src
        let src = scriptList[s].src;
        console.log("   -> got src", src);

        // extract filename from src in order to match against slide.json js entries
        let jsFileName = getFileNameFromPath(src);
        console.log("   -> got js file name", jsFileName);

        if (!jsFileName || jsFileName == "") {
            console.log("       -> empty file name, skipping", jsFileName);
            continue;
        }

        // check if src already includes in slide.json
        if (jsIncludeList.indexOf(jsFileName) > 0) {
            console.log("   -> js file already included, skipping");
            continue;
        }

        // file not already included so we need to add to the list of js includes
        jsIncludeList.push(jsFileName);
    }

    // test check, is jsIncludeList a pointer or a copy
    console.log("pivSlide.js", pivSlide.js);
    console.log("jsIncludeList", jsIncludeList);
    
   
    let strSlide = JSON.stringify(jsonSlide, null, 4);
    // all missing includes should now be in jsIncludeList, now need to update slide.json
    fs.writeFile(jsonSlidePath +".json", strSlide, (err) => {
        if(err) {
            return console.log("Error writing slide.json : "+ jsonSlidePath, err);
        }
        console.log("slide.json successfully saved", jsonSlidePath);
    }); // fs.writeFile(outputFilePath ends

    
    
    
    
    
    
    
    
    
    
    
    
    /* 
    * grab contents of output file
    */
    let outputFilePath = srcDir +"/template/700.htm";
    let outputFileContents = "";

    fs.readFile(outputFilePath, "utf-8", (err, data) => {
        if (err) {
            return console.log("fs.readFile error : "+ outputFilePath, err);
        }
        
        console.log("fs.readFile success", outputFilePath);
        outputFileContents = data;
    
            

        /*
        * need to copy a big block from the 16.html to src/template/700.htm file
        */

        // read block of code from 16.html
        let copyStartTag = "<!-- ******************** CUTTING BEGINS HERE ******************** -->";
        let copyEndTag = "<!-- ******************** CUTTING ENDS HERE ******************** -->";

        let copyStartIndex = inputFileContents.lastIndexOf(copyStartTag);
        if (copyStartIndex < 0) {
            return console.log("Failed to find copyStartTag");

        } else {
            copyStartIndex += copyStartTag.length + 1;
            console.log("Found copyStartTag", copyStartIndex);
        }

        let copyEndIndex = inputFileContents.indexOf(copyEndTag);
        if (copyEndIndex < 0) {
            return console.log("Failed to find copyEndTag");
        } else {
            copyEndIndex -= 1;
            console.log("Found copyEndTag", copyEndIndex);
        }

        let copyContent = inputFileContents.substring(copyStartIndex, copyEndIndex);

        // identify where to insert copied code into 700.htm
        let pasteStartTag = "<!-- ******************** PASTING BEGINS HERE ******************** -->";
        let pasteEndTag = "<!-- ******************** PASTING ENDS HERE ******************** -->";

        let pasteStartIndex = outputFileContents.lastIndexOf(pasteStartTag);
        if (pasteStartIndex < 0) {
            return console.log("Failed to find pasteStartTag", pasteStartTag);
        } else {
            pasteStartIndex += pasteStartTag.length + 1;
            console.log("Found pasteStartTag", pasteStartIndex);
        }

        let pasteEndIndex = outputFileContents.indexOf(pasteEndTag);
        if (pasteEndIndex < 0) {
            return console.log("Failed to find pasteEndTag", pasteEndTag);
        } else {
            pasteEndIndex -= 1;
            console.log("Found pasteEndTag", pasteEndIndex);
        }

        // replace old content with new code block lifted from 16.html
        let updatedOutputContents = outputFileContents.substring(0, pasteStartIndex) + copyContent + outputFileContents.substring(pasteEndIndex);

        /*
        * fix image paths
        */
        //console.log("updatedOutputContents", updatedOutputContents);
        updatedOutputContents = updatedOutputContents.replace(/\.\/images/g, "./res/img");
        updatedOutputContents = updatedOutputContents.replace(/\"images/g, "\"./res/img");

        // remove all instances of (inc. Wegovy)
        updatedOutputContents = updatedOutputContents.replace(/\(inc\. Wegovy\)[ ]{0,1}/g, "");
        
        /*
        updatedOutputContents = updatedOutputContents.replace(
                "document.getElementById(\"MyNavbar\").innerHTML = resultNavBar;",
                "populateInnerHtml.writeById(\"MyNavbar\", resultNavBar);"
                );
        */

        /*
        * fix mispelling of cardiometabolic
        */
        updatedOutputContents = updatedOutputContents.replace("cardiometablic", "cardiometabolic");

        /*
        * add commas to obesity class names
        */
        updatedOutputContents = updatedOutputContents.replace("I, II and", "I, II, and");

        /* 
        * add poi modal functions to 700.htm
        */

        // poi_modal_population
        updatedOutputContents = updatedOutputContents.replace(
                /(console\.log\("myInput2 cleared : line 1758"\);[\t\n ]+document\.getElementById\("myInput"\)\.innerHTML = txt\.join\(""\);)/gm,
                "$1\n\n\t\t\t\t\t// attach modal functionality for POI modal\n\t\t\t\t\tpoi_modal_population.init();"
                );

        // poi_modal_results
        updatedOutputContents = updatedOutputContents.replace(
                /(console\.log\("myInput2 cleared : line 25411"\);[\n\t ]+document\.getElementById\("myInput"\)\.innerHTML = resultNavBar1;)/gm,
                "$1\n\n\t\t\t\t\t// attach modal functionality for POI modal\n\t\t\t\t\tpoi_modal_results.init();"
                );

        /*
        * remove results text link
        * <a href="#" onClick="myResults(myParams);">Results</a>
        */
        updatedOutputContents = updatedOutputContents.replace(
                '<a href="#" onClick="myResults(myParams);">Results</a>', 
                ""
                );

        /* 
        * change onclick function for calculate button
        */
       /*
        updatedOutputContents = updatedOutputContents.replace(
                /<input type="button"[\t\n ]+class="trayCalculateButton calculate-button background-green"[\t\n ]+name="Calculate"[\t\n ]+value="Calculate"[\t\n ]+onClick="calculateResults\(myParams, totalCostsTable\);"><\/input>/g, 
                "<input type=\"button\" class=\"trayCalculateButton calculate-button background-green\" name=\"Calculate\" value=\"Calculate\" onclick=\"myResults(myParams);\">"
                );
        */    

        /*
        * replace existing output file
        */
        fs.writeFile(outputFilePath, updatedOutputContents, (err) => {
            if(err) {
                return console.log("fs.writeFile error : "+ outputFilePath, err);
            }
            console.log("File is successfully saved", outputFilePath);
        }); // fs.writeFile(outputFilePath ends
  
    }); // fs.readFile(outputFilePath ends

}); // fs.readFile(inputFilePath ends 
  










