/**
 * This generates a multichannel CSV for CRM, including shared content.
 *
 * Assumes json files are finalized, and follow standard smartrep formatting:
 *   presentation.json
 *   slide.json
 *
 * Inside of the build-initial-slides/ folder, run command:
 *   node build OR run, run.bat or run.sh
 *
 */
var reader,
    slide = {}, // our object that holds the
    arr = [], // our array of slide objects for output
    input_slide_filename = '../../src/parameters/slide',
    input_presentation_filename = '../../src/parameters/presentation',
    output_filename = 'multichannel.csv',
    fs = require('fs'),
    path = require('path'),
    json_slide = require(input_slide_filename),
    json_presentation = require(input_presentation_filename),
    slides = json_slide.slide,
    presentations = json_presentation.presentation,
    output = '',
    newline = '\n',
    comma = ',';

  var product_detail_grooup = '';


var headingRow = 
  "Fields Only" + comma + 
  "external_id__v" + comma + 
  "name__v" + comma + 
  "pres.title__v" + comma +
  "slide.title__v" + comma + 
  "slide.filename" + comma + 
  "type" + comma + 
  "lifecycle__v" + comma + 
  "pres.crm_presentation_id__v" + comma + 
  "pres.country__v.name__v" + comma + 
  "pres.crm_training__v" + comma + 
  "pres.crm_hidden__v" + comma + 
  "pres.product__v.name__v" + comma + 
  "pres.clm_content__v" + comma + 
  "pres.crm_end_date__v" + comma + 
  "pres.crm_start_date__v" + comma +
  "presentation Link" + comma + 
  "slide.country__v.name__v" + comma + 
  "slide.crm_media_type__v" + comma +
  "slide.related_sub_pres__v" + comma + 
  "slide.related_shared_resource__v" + comma + 
  "slide.crm_shared_resource__v" + comma + 
  "slide.product__v.name__v" + comma + 
  "slide.clm_content__v" + comma + 
  "slide.crm_custom_reaction__v" + comma + 
  "slide.crm_disable_actions__v" + comma +
  "slide.detail_group__v" + comma +
  "pres.detail_group__v" + newline;

output += headingRow;

presentations.forEach(function(presentation) {
  switch (presentation.product) { 
    case 'Saxenda':
    case 'Obesity': 
      product_detail_grooup = 'Obesity';
      break;
    default:
      product_detail_grooup = 'Diabetes';
  }

  var entry =
    "" + comma + 
    presentation.external_id + comma + 
    presentation.description + comma + 
    presentation.external_id + comma +
    "" + comma + 
    "" + comma + 
    "Presentation" + comma + 
    "Binder Lifecycle" + comma + 
    presentation.external_id + comma + 
    presentation.country + comma + 
    "" + comma + 
    "No" + comma + 
    presentation.product + comma + 
    "Yes" + comma + 
    "" + comma + 
    "" + comma +
    "" + comma + 
    "" + comma + 
    "" + comma +
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma +
    "" + comma +
    product_detail_grooup + " (Group)" + newline;
  output += entry;

  presentation.slide.forEach(function(slideID){
    var slide = slides.find(function(s) {
      return s.id == slideID;
    });

    var slideEntry = 
      "FALSE" + comma + 
      presentation.external_id + "_" + slide.name + comma + 
      slide.description + comma + 
      "" + comma +
      slide.description + comma + 
      presentation.external_id + "_" + slide.name + ".zip" + comma + 
      "Slide" + comma + 
      "CRM Content Lifecycle" + comma + 
      "" + comma + 
      "" + comma + 
      "" + comma + 
      "" + comma + 
      "" + comma + 
      "" + comma + 
      "" + comma + 
      "" + comma +
      presentation.external_id + comma + 
      presentation.country + comma + 
      "HTML" + comma +
      "" + comma + 
      presentation.external_id + "_SHARED_CONTENT" + comma + 
      "FALSE" + comma + 
      presentation.product + comma + 
      "Yes" + comma + 
      "n/a" + comma + 
      slide.disable_actions + comma +
      product_detail_grooup + " (Group)" + comma +
      "" + newline;

    output += slideEntry;
  });

  var sharedContentEntry = 
    "FALSE" + comma + 
    presentation.external_id + "_SHARED_CONTENT" + comma + 
    presentation.external_id + "_SHARED_CONTENT" + comma + 
    "" + comma +
    presentation.external_id + "_SHARED_CONTENT" + comma + 
    presentation.external_id + "_SHARED_CONTENT" + ".zip" + comma + 
    "Shared" + comma + 
    "CRM Content Lifecycle" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma + 
    "" + comma +
    "" + comma + 
    presentation.country + comma + 
    "HTML" + comma +
    "" + comma + 
    "" + comma + 
    "TRUE" + comma + 
    presentation.product + comma + 
    "Yes" + comma + 
    "" + comma + 
    "" + comma +
    presentation.product + " (Group)" + comma +
    "" + newline;

  output += sharedContentEntry;
});

fs.writeFile(output_filename, output, function(err) {
  if(err) {
      return console.log(err);
  }
  console.log('The file was saved!', output_filename);
});


