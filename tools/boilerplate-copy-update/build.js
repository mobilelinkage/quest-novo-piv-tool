/**
 *  CUSTOM TOOL : TO COPY BOILERPLATE FILES OVER TO OUR PROJECTS
 *
 *  Assumptions:
 *  this tool requires: node module "copy" installed to work
 *  this tool was not created to be globally used
 *  this tool was only built to help migrate boilerplate changes across projects
 */
var reader,
  slide = {}, // our object that holds the
  arr = [], // our array of slide objects for output
  list_folders = 'project_folders.txt',
  fs = require('fs'),
  path = require('path'),
  line_reader = require('readline'),
  copy = require('copy');

// Open new stream to read content
reader = line_reader.createInterface({
  input: fs.createReadStream(list_folders)
});

// Read each line, and add to our output object
reader.on('line', function (target) {

  var template_folder = '../../',
      target_folder = '../../../' + target + '/',
      path_less = 'src/less/',
      path_js = 'src/js/boilerplate/',
      path_tools = 'tools/';
  
  console.log('');
  console.log('/****************************************************/')
  console.log('STARTING PROJECT: ', target)
  console.log('/****************************************************/')

  // Copy over boilerplate less files
  console.log('Copying boilerplate less files:')
  console.log("  " + template_folder + path_less + 'boilerplate.* => ' + target_folder + path_less);

  copy( template_folder + path_less + 'boilerplate.*', target_folder + path_less, function(err, file) {
    // exposes the vinyl `file` created when the file is copied
    if(err) {
      console.log('Error: ', err);
    }
  });

  // Copy over js boilerplate
  console.log('Copying boilerplate js files:');
  console.log("  " + template_folder + path_js + 'boilerplate.* => ' + target_folder + path_js);

  copy(template_folder + path_js + 'boilerplate.*', target_folder + path_js, function(err, file) {
    
    // exposes the vinyl `file` created when the file is copied
    if(err) {
      console.log('Error: ', err);
    }
  });

  // Copy over README
  console.log('Copying README');
  console.log("  " + template_folder + 'README.* => ' + target_folder);

  copy(template_folder + 'README.*', target_folder, function(err, file) {
    // exposes the vinyl `file` created when the file is copied
    if(err) {
      console.log('Error: ', err);
    }
  });

  // Copy over README
  console.log('Copying tools');
  console.log("  " + template_folder + path_tools + '*/* => ' + target_folder + path_tools);

  copy(template_folder + path_tools + '*/*', target_folder + path_tools, function(err, file) {
    // exposes the vinyl `file` created when the file is copied
    if(err) {
      console.log('Error: ', err);
    }
  });

});

