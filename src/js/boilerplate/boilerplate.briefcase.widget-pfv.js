/**
 * @file
 *
 * Rep Briefcase Widget:
 * This is the frontend portion of the briefcase plugin, we can access public data from
 * This widget will handle all the processing of the briefcase object found int the briefcase.engine.js.
 * and display it on the iva screen.
 *
 * Dependencies:
 * - veeva-library.js
 * - briefcase.engine.js
 * - boilerplate.hotlink.js
 * - boilerplate.modal.js
 *
 * Suppport:
 * - Chrome 1
 * - IE8+
 * - FF 3.5
 * - Safari 3.2
 *
 * PUBLIC VARIABLES THAT CAN BE USED (Defaults are currenly set):
 * this.prefix = 'briefcase_';
 * this.is_veeva_env = false;
 * this.MAX_LIMIT = 500;
 * this.debug_mode = false;
 * this.data_attr_briefcase = 'data-rep-briefcase';
 * this.data_attr_trigger = 'data-rep-trigger';
 * this.match_environment_url = 'localhost:3000';
 *
 * PUBLIC FUNCTIONS THAT CAN BE CALLED:
 * new Briefcase()
 * briefcase.getDataObject() | will return a promise containing either a success or error object
 * briefcase.getBriefcaseIDs | will return all briefcase ids that are statically set on a page
 *

  Example JSON SUCCESS Object
  {
   {
     "briefcase_id": "briefcase_id_1",
     "result": [],
     "message": "0 results",
     "success": false,
     "record_count": 0
   }, {
     "briefcase_id": "briefcase_id_2",
     "result": [{
       "presentation_media": "15485_758.zip",
       "presentation_id": "media_briefcase_template",
       "presentation_title": "Briefcase Video"
     }],
     "message": "",
     "success": true,
     "record_count": 1
   }],
   "message": "",
   "success": true,
   "record_count": 1
 }
 
  Example of Briefcase HTML Output:
  <ul class="briefcase-list">
    <li class="item" data-slide="presentation_slide_id.zip" data-presentation="presentation_id"></li>
  </ul>
  
  Examples of Html Markup
  -----------------------------------------------------------------------------
  
  Getting started is easy, and can be done in 3 simple steps:
  1) Create a Presentation Binder in vault
  2) Add slides to the presentation, where each slide name matches the presentation ID of an existing presentation
  3) In the markup, include the name of your briefcase presentation ID inside of the data-rep-briefcase attribute :
  
  e.g:
  <div data-rep-briefcase="vault-briefcase-id">
    <h3>Test Data Page #1</h3>
  </div>
  
    
  OPTIONAL SYNTAX
  -----------------------------------------------------------------------------
  
  MODALS
  If you are using a modal / overlay trigger to show / hide briefcase data:
  
  use "data-rep-trigger" to hide our trigger until the briefcase has loaded in the DOM
  using the same presentation found in the data-rep-briefcase association between the the trigger and the briefcase item
  
  e.g:
  <a data-rep-trigger="vault-briefcase-id">Briefcase Trigger</a>


  CUSTOM MATCH QUERY
  Add custom key & value paramaters to create a custom db lookup on existing fields
  
  When a custom a custom flag to match in the Vault, you can add the following attributes to our data-rep-briefcase wrapper
  data-rep-key="Status_vod__c"
  data-rep-value="Approved_vod"
  
  *Please note, matching fields MUST exist and be accessible to the account making the query
  
  e.g:
  <div data-rep-briefcase="vault-briefcase-id" data-rep-key="Status_vod__c" data-rep-value="Approved_vod">
    <h3>Test Data Page #1</h3>
  </div>

*/
 
(function () {

  function BriefcaseWidget () {
    var briefcase = new Briefcase(),
        briefcase_ids = briefcase.getBriefcaseIDs(),
        briefcase_selector = briefcase.data_attr_briefcase,
        briefcase_trigger = briefcase.data_attr_trigger,
        briefcase_data = briefcase.getDataObject();

    this.init = function () {

      // console.log(briefcase_data); // uncomment to debug
      // Handle briefcase data
      briefcase_data.then(function(obj) {
        
        if(!obj.success || briefcase_ids.length === 0) {
          console.log("briefcase_ids:"+briefcase_ids);
          // hideAllBriefcaseTriggers(briefcase_ids);
          return; // exit if success if false
        }
        
        briefcase_ids.forEach(function(presentation_id, index) {
                              
          var briefcase_html,
              selector_trigger,
              briefcase_object = obj.result[index],
              briefcase_container = document.querySelector('[' + briefcase_selector + '= "' + presentation_id + '"]'),
              briefcase_presentation = (obj.result[index].briefcase_id.hasOwnProperty(presentation_id))? obj.result[index][presentation_id] : false; // array of presentation objects
          
          
            if(briefcase_object.record_count > 0 && briefcase_object.success === true ) {
              
              briefcase_html = formatBriefcaseForHTMLOutput(briefcase_object);
              briefcase_container.innerHTML += briefcase_html; // output to page
              
              // shows hidden briefcase modal trigger
              selector_trigger = document.querySelector("[" + briefcase_trigger + "='" + presentation_id + "']"); // MUST WRAP IN DOUBLE QUOTES, FOR DOM ELEMENT MATCH
                            
              if(selector_trigger === null) return; // exit loop if selector does not exist
                            
              selector_trigger.style.display = 'block';
              
            }

        });
        
        // Need to bind on the tick after DOM manipulation
        // boilerplate.hotlink fix for dynamic links created after DOM initialization
        window.setTimeout(function() {
          if($.hotlink.bindEvents === undefined) return;
          
          $.hotlink.bindEvents('[' + briefcase_selector + ']');
        });
        
      });
    };
    
    
    /*
      PRIVATE FUNCTIONS
    */
    
    // formats briefcase object for html output to page
    // default styling, to be customized on a client by client basis
    var formatBriefcaseForHTMLOutput = function (obj) {
            
      var html = ''; // blank string
                  
      obj.result.forEach(function(item, index) {
                
        var presentation_title = (item.presentation_title !== undefined)? item.presentation_title : item.presentation_id,
            presentation_link = item.presentation_media,
            presentation_id = item.presentation_id;

        html += '<li class="item" data-slide="' + presentation_link + '" data-presentation="' + presentation_id + '" data-button-name = "Briefcase - ' + presentation_title + '">' + presentation_title + '</li>';
      });
                  
      return '<ul class="briefcase-list">' + html + '</ul>';
    };
    

  }
  
  // "Fix" for Veeva JS bug
  // for some reason all code that runs after the veeva queries fail to load
  // wait for dom to load before running any js calls
(function($) {
 var briefcase_widget = new BriefcaseWidget();
   briefcase_widget.init();
}(jQuery));

}());
