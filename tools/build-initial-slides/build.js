/**
 * Generate blank template files for each slide required in the IVA.
 * Update presentation.json and slide.json to match.
 *
 * - Assumes input file of 'slide.txt'
 * - Writes output file of 'slide.json' and places in paramaters folder
 * - Writes updated 'presentation.json' to reflect the slide ids
 * - Creates html file for each id set
 *
 * Assumes slide.txt is a text file with multiple comma-delimited lines, e.g.:
 *   id,description
 *   id,description
 * etc.
 *
 * From the folder containing this file (build.js) type:
 *   node build
 */
var reader,
    slide = {}, // our object that holds the
    slide_ids = [],
    arr = [], // our array of slide objects for output
    input_filename = 'slides.txt',
    src_path = '../../src',
    output_filename = src_path + '/parameters/slide.json',
    fs = require('fs'),
    path = require('path'),
    line_reader = require('readline');

// Open new stream to read content
reader = line_reader.createInterface({
  input: fs.createReadStream(input_filename)
});

var updatePresentationJSON = function(ids) {
  var filename = src_path + '/parameters/presentation.json';
  var fs = require("fs");
  var content = fs.readFileSync(filename);
  var json = JSON.parse(content);
 
  json.presentation[0].slide = ids;
  fs.writeFileSync(filename, JSON.stringify(json, null, 2));
  console.log('- Updated presentation.json (' + filename + ')');
};

// Read each line, and add to our output object
reader.on('line', function (line) {
  // Ignore comments.
  if (line[0] === ';') {
    return;
  }

  var slide = {},
      row = line.split(','),
      id = row[0].trim(),
      desc = row[1].trim();
  
  slide.id = Number(id);
  slide.name = id;
  slide.description = desc;
  slide.bodyclass = '';
  slide.referenceclass = 'hidden';
  slide.disable_actions = 'Swipe';
  slide.template = [id]
  slide.js = [];
  slide.less = [];
  slide.custom_reaction = "n/a";
  
  arr.push(slide);
  slide_ids.push(slide.id);  
});

// Write our output to a json file
reader.on('close', function(){
  slide.slide = arr;
  
  fs.writeFile(output_filename, JSON.stringify(slide, null, 2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('- Updated slide.json (' + output_filename + ')');
    updatePresentationJSON(slide_ids);
  });
  
  // create blank files of html
  arr.forEach(function(obj){
    var name = obj.name,
        html = src_path + '/template/' + name + '.htm';
    fs.writeFile(html, '', function(err) {
      if(err) {
          return console.log(err);
      }
      console.log('- Generated html template (' + name + '.htm)');
    });

  });
});
