/**
 * @file
 *
 * Rep Briefcase Engine:
 * This is the core of the briefcase engine, and will only JSON success object
 * briefcase.widget.js will handle all the front end processing of the briefcase object
 *
 * Dependencies:
 * - veeva-library.js
 *
 * Suppport:
 * - Chrome 1
 * - IE8+
 * - FF 3.5
 * - Safari 3.2
 *
 * Markup:
 * <div data-rep-briefcase="example_iva"></div>
 *
 * Inside the briefcase IVA, the slides should be named based on existing iva IDs (labelled titles, in vault)
 * An IVA will only be included inside of the briefcase, if that iva is approved, or has a matching key value pair
 * Each slide needs to include an image, in order to be considered valid. We are using a "placeholder" image.
 * If no title is provided, by default the iva should display the given slide ID
 *
 *
 * Data tables (used for query):
 * Clm_Presentation_vod__c | Presentation data
 * Clm_Presentation_Slide_vod__c | Presentation slide
 * Key_Message_vod__c | Key Messages
 *
 */
(function () {

  this.Briefcase = function () {
    //Publicly accesible global variables
    var _this = this;
    _this.prefix = 'briefcase_';
    _this.MAX_LIMIT = 500;
    _this.debug_mode = false; // set output data to be displayed in the console log
    _this.test_error_data = false; // allows dev to force error state in test data
    _this.data_attr_briefcase = 'data-rep-briefcase';
    _this.data_attr_presentation= 'data-presentation-id';
    _this.data_attr_trigger = 'data-rep-trigger'; // set briefcase trigger (used for modals)
    _this.match_environment_url = 'localhost:3000';
    _this.onload_briefcase_event = 'onload-briefcase-object';
    _this.briefcase_storage_id = 'briefcase-obj_' +  $('body').attr('data-presentation-id');
    _this.briefcase_call_id = 'call-id'
    _this.is_veeva_env = setCurrentEnvironment();
    _this.data_attr_key = 'data-rep-key'; // key attribute to match briefcase presentations
    _this.data_attr_value = 'data-rep-value'; // value attribute to match briefcase presentations
    _this.briefcase_status = "Staged_vod" //get current presentation Status_vod__c

    // Privately accessible global variables
    var current_briefcase_key,
        current_briefcase_value,
        global_briefcase_array = null,
        sort_order_arr = [];

    /*
      PUBLIC FUNCTIONS
    */
    
    // gets briefcase data object
    // will return a promise containing either a success or error object
    this.getDataObject = function () {
      if(_this.debug_mode) {
        resetLocalStorage();
      }
      
      return new Promise(function(resolve, reject) {

        var check_for_new_session = checkForNewSession();

        check_for_new_session.then(function(is_new_session) {
          outputDebugMessage('is new session...', is_new_session);
          
          if(!is_new_session) {

            var result_obj = localStorage.getItem(_this.briefcase_storage_id);
            resolve(JSON.parse(result_obj));
            outputDebugMessage('getting cached data...', result_obj);
            //Releasing briefcase completed event to proceed to segmentation checking script.
            $(window).trigger("BriefcaseCompleted");

          } else {
            
            var briefcase = getBriefcase();

            briefcase
            .then(function(result) {
              var result_obj = formatBriefcaseObject(result);
              localStorage.setItem(_this.briefcase_storage_id, JSON.stringify(result_obj)); // store data object in local storage
              resolve(result_obj);
              outputDebugMessage('getting live data...', result_obj);
            })
            .catch(function(result) {
              // catch error result
              var result_obj = formatBriefcaseObject(result);
              resetLocalStorage(); // clear local storage to force new check (we do not want to cache erroneous data)
              
              //overwrite result object, with default error variables
              result_obj.record_count = 0;
              result_obj.success = false;
              
              resolve(result_obj);
              outputDebugMessage('getting live error data...', result_obj);

              $(window).trigger("BriefcaseCompleted");
            });
          }
          
        });
        
      });
    };
    

    // Filter briefcase configs
    // gets the current presentation ID froom config data
    // returns list of presentation ids found in briefcase config data, or presentation and prefix
    this.getBriefcaseIDs = function () {
            
      var presentation_ids,
          config_data_ids = [],
          config_data = _this.getBriefcaseConfigs();
               
      config_data.forEach(function(item) {
        config_data_ids.push(item.id);
      });
                  
      return config_data_ids;
    };
    
    
    // returns an array of briefcase configuration data
    // queryAll Support: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
    this.getBriefcaseConfigs = function () {
      //forEach error out in iPad iOS 10
      //use different way to iterate
      var data_attr = [],
      arr_attrs = document.querySelectorAll('[' + _this.data_attr_briefcase  + ']');
      
      // iterate through all briefcase arry objects, and add to our array of data attributes
      [].forEach.call(arr_attrs, function(arr_attr) {
        var obj = {};
        obj.id = arr_attr.getAttribute('data-rep-briefcase');
        obj.key = arr_attr.getAttribute('data-rep-key');
        obj.value = arr_attr.getAttribute('data-rep-value');
                        
        data_attr.push(obj);
      });

            
      return data_attr;
    };
    

    /*
      PRIVATE FUNCTIONS
    */
    //reset briefcase related localstorage items
    var resetLocalStorage = function() {
      localStorage.removeItem(_this.briefcase_storage_id);
      localStorage.removeItem(_this.briefcase_call_id);
    }
        
    // check if our current environment is local or veeva
    // sets our global variable
    function setCurrentEnvironment()  {
      var get_current_url = window.location.host,
          is_veeva_env = (get_current_url.indexOf(_this.match_environment_url) > -1)? false : true;
      return is_veeva_env;
    }
    
    // outputs data to console if debug mode is turned on
    var outputDebugMessage = function (message, data) {
      if(!_this.debug_mode) return; // exit function if not debug mode
      
      console.log(message, data);
    };
    
    
    // get Call ID for the current presentation from Veeva
    // if the Call ID does not match the saved ID, reset values
    // we do not care about error rejection, in the event there is an error, we should ALWAYS return true (new session)
    // if you need to clear the local cache type into console localStorage.clear();
    // returns promise with true or false value
    var checkForNewSession = function () {
      
      return new Promise (function(resolve, reject) {
        var call_id = localStorage.getItem(_this.briefcase_call_id);
        if(_this.is_veeva_env) {
          com.veeva.clm.getDataForCurrentObject('Call', 'Id', function (result) {
            if (result.success) {
              if (result.Call.Id === call_id) {
                resolve(false);
              }
              else {
                localStorage.setItem(_this.briefcase_call_id, result.Call.Id);
                resolve(true);
              }
            }
            else {
              resolve(true); // check for new session if error
            }
          });
        }
        else {
          var result = checkForNewSessionTest(true);
          if(result.success){
            if(result.Call.Id === call_id) {
              resolve(false);
            }
            else {
              localStorage.setItem(_this.briefcase_call_id, result.Call.Id);
              resolve(true)
            }
          }
          else {
            resolve(true); // check new session if error
          }
        }
      });

    };
    
    // returns error object on promise reject
    // returns success object on promise resolve
    // ALL db error results have a success false attribute
    // we can assume if this results exists, we have an error
    // otherwise we can assume the data is correct
    // returns standardized formatted object for output
    var formatBriefcaseObject = function (obj) {
      var result_obj = {};

      result_obj.result = obj;
      result_obj.message = (obj.message !== undefined)? obj.message : '';

      if(result_obj.result.success === false) {
        result_obj.result = []; // should return empty array
        result_obj.success = false;
      }
      else {
        result_obj.result = obj;
        result_obj.success = true;
      }

      result_obj.record_count = result_obj.result.length;
            
      return result_obj;
    };

    // returns list of presentation data found in briefcase
    // returns array of objects with presentation names, ids, media file
    var getBriefcase = function () {
      return new Promise(function(resolve, reject) {
        var briefcase_ids = _this.getBriefcaseIDs(),
            briefcase_array = getBriefcaseObject(0,briefcase_ids, []);
                
        briefcase_array
        .then(function(result) {
          resolve(result);
        })
        .catch(function(err){
          reject(err);
        });
          
      });

    };
    
    
    // perform a chain of promises synchronously
    // by creating a recursive function
    // returns list of briefcase data
    var getBriefcaseObject = function (index, briefcase_ids, presentation_data) {
                  
      if(index >= briefcase_ids.length ) return; // exit function

      return new Promise (function(resolve, reject) {
        var briefcase,
            briefcase_status,
            briefcase_id = briefcase_ids[index],
            briefcase_config = _this.getBriefcaseConfigs(),
            briefcase_config_data = briefcase_config.filter(function(item) {
              // should only turn a single result
              // we assume each briefcase id listed is unique
              return item.id === briefcase_id;
            });
            
        // set global key and value to be used later
        // this is re set for each briefcase id
        current_briefcase_key = briefcase_config_data[0].key;
        current_briefcase_value = briefcase_config_data[0].value;
        
        outputDebugMessage('Briefcase ID..', briefcase_id);
        
        
        briefcase_status=getPresentationStatus();
        briefcase_status.then(function(result){
          outputDebugMessage('briefcase_status..', result);
          briefcase = getBriefcaseDataByID(briefcase_id);
                           
          briefcase.then(function(result){
            
            var result_obj = formatBriefcaseObject(result[briefcase_id]);

            result_obj.briefcase_id = briefcase_id; // add briefcase id to our object
            
            presentation_data.push(result_obj);
            
          })
          .then(getBriefcaseObject.bind(null,index+1, briefcase_ids, presentation_data))
          .then(function(){
            resolve(presentation_data);
          })
        })
        
        .catch(function(err){
          reject(err);
        });
      });
  
    };
    
    
    // get briefcase data based on the presentation ID passed
    // wait for request to be finished before moving on to the next
    // previous function supplies data to be used in the current function
    // returns briefcase object
    var getBriefcaseDataByID = function (id) {
      return new Promise(function(resolve, reject) {
        var presentation_data = getBriefcasePresentationData(id);
        

        presentation_data
        .then(getBriefcasePresentationSlideData)
        .then(getBriefcaseKeyMessageData)
        .then(getPresentationData)
       // .then(hideAllBriefcaseTriggers)
        .then(getPresentationSlideData)
        .then(getPresentationKeyMessageData)
        .then(getKeyMessagesWithPresentationID)
        .then(getBriefcaseData)
        .then(function(briefcase_data) {
          var briefcase_obj = {};
          briefcase_obj[id] = briefcase_data;
          resolve(briefcase_obj);
        })
        //Releasing briefcase completed event to proceed to segmentation checking script.
        .then(function(){
          $(window).trigger("BriefcaseCompleted");
        })
        .catch(function(err){
          reject(err);
        });
 
      });
    };
    

    // gets briefcase data based on the current presentation
    // returns briefcase data object
    var getBriefcasePresentationData =  function (presentation_id) {
      
      var briefcase_data,
          query_params = {};
                        
      query_params.object_name = 'Clm_Presentation_vod__c';
      query_params.fields = ['Id','Name','Approved_vod__c','Presentation_Id_vod__c'];
      query_params.where_clause = 'WHERE Presentation_Id_vod__c = "' + presentation_id + '"';
      query_params.sort_clause = ['Name, ASC'];
      query_params.limit = 1; // should be unique

      outputDebugMessage('Getting results for function getBriefcasePresentationData', '');
            
      briefcase_data = queryVeevaDatabase(query_params, getBriefcasePresentationTestData(_this.test_error_data));
            
      return briefcase_data;
    };


   //returns current presentation status
   //use the status as where clause to query briefcase presentaiton
   //set variable briefcase_status
   //default is set to Staged_vod
   var getPresentationStatus = function () {
      return new Promise(function(resolve, reject) {
       com.veeva.clm.getDataForCurrentObject("Presentation","Status_vod__c", function (result) {

              try { 
                  if (result.success) {
                    _this.briefcase_status = result.Presentation.Status_vod__c;
                    outputDebugMessage('Getting results for function Presentation.Status_vod__c', result.Presentation.Status_vod__c);
                  }else {
                    outputDebugMessage('NOT Getting results for function Presentation.Status_vod__c','');
                    _this.briefcase_status = "Staged_vod";
                  }
            resolve(result.Presentation.Status_vod__c);
            }
            catch (err) {
              outputDebugMessage('Error Result:', err);
              // needs to be resolved rather than rejected
              // will suppress errors, and allow for muli presentaitons
              // errors will still be outputted as a our standard json object
              resolve(err);
            }
        });
      });
    }

    
    // gets briefcase slides in presentation
    // based on the briefcase presentation object
    // returns briefcase slide data
    var getBriefcasePresentationSlideData =  function (briefcase_presentation_data) {
                      
      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(!briefcase_presentation_data.success) {
        return briefcase_presentation_data;
      }
            
      var briefcase_slide_data,
          query_params = {},
          record_id = briefcase_presentation_data[0].Id;
      
      query_params.object_name = 'Clm_Presentation_Slide_vod__c';
      query_params.fields = ['Id','Key_Message_vod__c', 'Display_Order_vod__c'];
      query_params.where_clause = 'WHERE Clm_Presentation_vod__c = "' + record_id + '"';
      query_params.sort_clause = ['Display_Order_vod__c, ASC'];
      query_params.limit = _this.MAX_LIMIT; // get all items

      outputDebugMessage('Getting results for function getBriefcasePresentationSlideData', '');
      briefcase_slide_data = queryVeevaDatabase(query_params, getBriefcasePresentationSlideTestIDs(_this.test_error_data));
            
      return briefcase_slide_data;
    };
        
    // gets list of iva names from current briefcase
    // based on the briefcase slide data
    // returns array of iva names
    var getBriefcaseKeyMessageData = function (briefcase_slide_data) {
      
      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(!briefcase_slide_data.success) {
        return briefcase_slide_data;
      }
      
      var briefcase_iva_names,
          query_where_clause_arr = [],
          query_params = {};
      
      // storing globally for use later
      // this is not ideal, but we can guarantee that this function will be resolved
      // before its use later on, as we are chaining our promise events
      sort_order_arr = briefcase_slide_data;
            
      // build where clause using key message ids
      briefcase_slide_data.forEach(function(item) {

        var briefcase_iva_id = item.Key_Message_vod__c,
            query_where_clause = 'Id = "' + briefcase_iva_id + '"';

        query_where_clause_arr.push(query_where_clause);
    
      });
      
      query_params.object_name = 'Key_Message_vod__c';
      query_params.fields = ['Id','Name','Media_File_Name_vod__c', 'Description_vod__c'];
      query_params.where_clause = 'WHERE ' + query_where_clause_arr.join(' OR ');
      query_params.sort_clause = null;
      query_params.limit = _this.MAX_LIMIT;

      outputDebugMessage('Getting results for function getBriefcaseKeyMessageData', '');
      briefcase_iva_names = queryVeevaDatabase(query_params, getBriefcaseKeyMessageTestData(_this.test_error_data));

      return briefcase_iva_names;
    };

    
    // gets presentation data,
    // based on current Presentation Ids listed as our briefcase names
    // returns array of presentation data
    var getPresentationData = function (briefcase_iva_names) {
      
      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(!briefcase_iva_names.success) {
        return briefcase_iva_names;
      }
      
      var sorted_briefcase_ivas = [];
      
      // sort presentation data by our global sort order
      // this will allow us to match the order set in veeva
      sort_order_arr.forEach(function(sort_order_item) {
        // we can assume single result on filter
        var briefcase_obj = briefcase_iva_names.filter(function(briefcase_iva_item) {
          return sort_order_item.Key_Message_vod__c === briefcase_iva_item.Id;
        });
        
        if(briefcase_obj.length > 0) sorted_briefcase_ivas.push(briefcase_obj[0]);
      });
            
      global_briefcase_array = sorted_briefcase_ivas; // store global value to be used later, when we match slide objects to our iva names

      var presentation_data,
          query_where_clause_arr = [],
          query_params = {};

      // build where clause using key message ids
      sorted_briefcase_ivas.forEach(function(item) {
        var query_custom_clause,
            query_join,
            briefcase_iva_id = item.Name,
            query_where_clause = 'Presentation_Id_vod__c = "' + briefcase_iva_id + '"';
        
        query_where_clause_arr.push(query_where_clause);
      });
      
      query_join = query_where_clause_arr.join(' OR ');

      query_params.object_name = 'Clm_Presentation_vod__c';
      query_params.fields = ['Id','Name', 'Approved_vod__c', 'Status_vod__c', 'Presentation_Id_vod__c'];
      query_params.where_clause = 'WHERE (' + query_join + ') AND Status_vod__c = "'+ _this.briefcase_status +'"';
      query_params.sort_clause = ['Name, ASC'];
      query_params.limit = _this.MAX_LIMIT;

      outputDebugMessage('presentation status', _this.briefcase_status);
      
      // if key and value exist, overwrite the custom query
      if(current_briefcase_key !== null && current_briefcase_value !== null) {
        query_custom_clause = current_briefcase_key + ' = "' + current_briefcase_value + '"';
        query_params.where_clause = 'WHERE (' + query_join + ') AND ' + query_custom_clause;
      }
      
      outputDebugMessage('Getting results for function getPresentationData', '');
            
      presentation_data = queryVeevaDatabase(query_params, getPresentationTestData(_this.test_error_data));

      outputDebugMessage('presentation_data', presentation_data);
      return presentation_data;

    };

    //hide all briefcase triggers if there is no presentation_data result
    var hideAllBriefcaseTriggers = function(presentation_data){
      if(!presentation_data.success || presentation_data.record_count == 0 ) {
         //$('[' + _this.data_attr_trigger  + ']').hide();
         $('[' + _this.data_attr_trigger  + ']').addClass('disabled');
         $('[' + _this.data_attr_trigger  + ']').hammer().off('tap');
         return;
      }else{
        return presentation_data;
      }
    }
    
    // gets all presentation slide data
    // uses Record ID to Get all slides that match the presentation, where slide starts at (1.0)
    // assumes that the first presentation in an IVA is 1.0
    var getPresentationSlideData = function (presentation_data) {

      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(!presentation_data.success) {
        return presentation_data;
      }
      
      var presentation_slide_data,
          query_where_clause_arr = [],
          query_params = {};
      
      // build where clause using record ids
      presentation_data.forEach(function(item) {
        var record_id = item.Id,
            query_where_clause = '( Clm_Presentation_vod__c = "' + record_id + '" AND Display_Order_vod__c = 1.0)'; // assume 1.0 is the first slide in an iva

        query_where_clause_arr.push(query_where_clause);
      });

      query_params.object_name = 'Clm_Presentation_Slide_vod__c';
      query_params.fields = ['Id', 'Display_Order_vod__c', 'Clm_Presentation_vod__c', 'Key_Message_vod__c'];
      query_params.where_clause = 'WHERE ' + query_where_clause_arr.join(' OR ');
      query_params.sort_clause = null;
      query_params.limit = _this.MAX_LIMIT;

      outputDebugMessage('Getting results for function getPresentationSlideData', '');
      presentation_slide_data = queryVeevaDatabase(query_params, getPresentationSlideTestData(_this.test_error_data));

      return presentation_slide_data;
      
    };

    // based on the presentation slide data
    // gets Media File Name from the database
    // returns presentation key message data
    var getPresentationKeyMessageData = function (presentation_slide_data) {
      
      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(!presentation_slide_data.success) {
        return presentation_slide_data;
      }
      
      var presentation_key_messages,
          query_where_clause_arr = [],
          query_params = {};
            
      // build where clause using record ids
      presentation_slide_data.forEach(function(item) {

        var key_message_id = item.Key_Message_vod__c,
            query_where_clause = 'Id = "' + key_message_id + '"';

        query_where_clause_arr.push(query_where_clause);
      });

      query_params.object_name = 'Key_Message_vod__c';
      query_params.fields = ['Id','Media_File_Name_vod__c'];
      query_params.where_clause = 'WHERE ' + query_where_clause_arr.join(' OR ');
      query_params.sort_clause = null;
      query_params.limit = _this.MAX_LIMIT;

      outputDebugMessage('Getting results for function getPresentationKeyMessageData', '');
      presentation_key_messages = queryVeevaDatabase(query_params, getPresentationKeyMessageTestData(_this.test_error_data));

      return presentation_key_messages;
    };
    
       
    // uses key message record id to determine the corresponding presentation id
    // returns promise of keymessages with presentation id
    var getKeyMessagesWithPresentationID = function (presentation_key_messages) {
  
      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(!presentation_key_messages.success) {
        return presentation_key_messages;
      }
      
      var arr = [],
          presentation_slide_data = addPresentationIDToKeyMessages(0, presentation_key_messages, arr);
      return presentation_slide_data;
    };
    
    
    // recursive function that perform a chain of promises synchronously
    // returns our list of key message data which includes the presentation id
    var addPresentationIDToKeyMessages = function (index, presentation_key_messages, data_array) {
      
      if(index >= presentation_key_messages.length ) return; // exit function

      return new Promise (function(resolve, reject) {

        var record_id = presentation_key_messages[index].Id, // key message record id
            presentation_id = getPresentationIDByKeyMessageID(record_id);
                   
        presentation_id.then(function(id){
          presentation_key_messages[index].Presentation_Id_vod__c = id;
          data_array.push(presentation_key_messages[index]);
        })
        .then(addPresentationIDToKeyMessages.bind(null,index+1, presentation_key_messages, data_array))
        .then(function(){
          resolve(data_array);
        })
        .catch(function(err){
          reject(err);
        });

      });
  
    };

    
    // loop through our briefcase array of ivas
    // create new object containing presentation name, id and media file
    // match presentation id with briefcase name
    // returns new briefcase object
    var getBriefcaseData = function (presentation_slide_data) {
            
      // returns unsuccessful object
      // fix to allow script to continue when no results is returned
      // allows multiple briefcase presentations to exist in a presentation
      if(presentation_slide_data.success === false) {
        return presentation_slide_data;
      }
      
      return new Promise(function(resolve, reject) {
        
        outputDebugMessage('Getting results for function getBriefcaseData', global_briefcase_array);
        
        var briefcase_array = [];

        global_briefcase_array.forEach(function(item) {
          var slide_data,
              briefcase_object = {},
              briefcase_name = item.Name;
                                        
          // we can assume that only one value matches
          // looks for a match between briefcase name, and presentation
          // id obtained from the getKeyMessagesWithPresentationID function
          // returns filtered array that should only contain 1 unique entry
          slide_data = presentation_slide_data.filter(function(obj) {
            return briefcase_name === obj.Presentation_Id_vod__c;
          });
                    
          if(slide_data.length === 0) return ; // exit loop if slide data does not exist

          // we can assume if result exist it should be unique so
          // target first array item[0]
          briefcase_object.presentation_media = slide_data[0].Media_File_Name_vod__c;
          
          // populate our briefcase object with the presentation name and title
          briefcase_object.presentation_id = item.Name;
          briefcase_object.presentation_title = item.Description_vod__c;
          
          // add object to our briefcase array
          briefcase_array.push(briefcase_object);

        });
      
        outputDebugMessage('formatted briefcase array', briefcase_array);
        
        resolve(briefcase_array);
        
      });

    };

    // this is a custom function that is built as a fix to match our briefcase presentation to the appropriate media file
    // we are using this function to query instead of queryVeevaDatabase to avoid having to handle 2 sets of promises
    // queries Clm_Presentation_Slide_vod__c and Clm_Presentation_vod__c objects to determine Presentation_Id_vod__c
    // returns promise containing presentation id of current keymessage record id
    var getPresentationIDByKeyMessageID = function (record_id) {

      return new Promise(function(resolve, reject) {
        var object_name = "Clm_Presentation_Slide_vod__c",
            fields = ['Id', 'Clm_Presentation_vod__c'],
            where_clause = 'WHERE Key_Message_vod__c = "' + record_id + '"',
            sort_clause = null,
            limit = 1; // assumes we are returning a unique value

        if(_this.is_veeva_env) {
          com.veeva.clm.queryRecord(object_name, fields, where_clause, sort_clause, limit, function (result_slide) {
            if (result_slide.success === true && result_slide.record_count > 0) {
              var presentation_record_id = result_slide.Clm_Presentation_Slide_vod__c[0].Clm_Presentation_vod__c, // assuming only 1 value exists
                  object_name = "Clm_Presentation_vod__c",
                  fields = ['Id', 'Presentation_Id_vod__c'],
                  where_clause = 'WHERE Id = "' + presentation_record_id + '"',
                  sort_clause = null,
                  limit = 1; // assuming we are returning a unique value
              
              com.veeva.clm.queryRecord(object_name, fields, where_clause, sort_clause, limit, function (result) {
                if(result.success === true && result.record_count > 0) {
                  
                  // return  ONLY the value of the presentation id
                  // no other result is needed
                  // this is a specific query that is used as a fix for the media filename issue
                  resolve(result.Clm_Presentation_vod__c[0].Presentation_Id_vod__c);
                }
                else {
                  reject(result.message);
                }
              });
            }
            else {
              reject(result_slide.message);
            }
          });
        }
        else {
         var result = getTestPresentationIDByKeyMessageID(_this.test_error_data);
          resolve(result.Clm_Presentation_vod__c[0].Presentation_Id_vod__c); // resolve with our presentation id
        }
      });
      
    };
    

    // standardizes the query to the veeva api
    // passes offline data function, so we can handle test data
    var queryVeevaDatabase = function (params, offline_data_function) {

      return new Promise(function(resolve, reject) {
        
        if(_this.is_veeva_env) {
          com.veeva.clm.queryRecord(params.object_name, params.fields, params.where_clause, params.sort_clause, params.limit, function(result){

            try {
                            
              if(!result.success || result.record_count === 0) {
                
                result.success = false; // set result success to false
                
                if(result.message === undefined) result.message = '0 results'; // add result message
                                
                throw result; //throw resulting error to be handled
              }
              
              // if no error is thrown we can assume success is true
              // add success object paramater to our object name
              // filter result data by outputting object name
              result[params.object_name].success = true;
              
              resolve(result[params.object_name]);
              outputDebugMessage('DB query result:', result);
            }
            catch (err) {
              outputDebugMessage('Error Result:', err);
              // needs to be resolved rather than rejected
              // will suppress errors, and allow for muli presentaitons
              // errors will still be outputted as a our standard json object
              resolve(err);
            }

          });
        }
        else {
          
          try {
            var result = offline_data_function; // Get test data

            if(!result.success || result.record_count === 0) {

              result.success = false; // set result success to false

              if(result.message === undefined) result.message = '0 results'; // add result message

              throw result; //throw result to be handled
            }

            // if no error is thrown we can assume success is true
            // add success object paramater to our object name
            // filter result data by outputting object name
            result[params.object_name].success = true;
            
            resolve(result[params.object_name]);
            outputDebugMessage('DB query result:',result);
          }
          catch(err) {
            outputDebugMessage('Error Result:', err);
            
            // needs to be resolved rather than rejected
            // will suppress errors, and allow for muli presentaitons
            // errors will still be outputted as a our standard json object
            resolve(err);
          }
        }

      });

    };

    /*
    * TEST DATA FUNCTIONS
    * functions used to test our data locally
    */

    // Temp Data Output
    // Only used for testing logic
    // values are arbitrary and don't necessarily line up with each other
    var getCurrentPresentationTestRecordID = function (is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getCurrentPresentationTestRecordID: function failed...'};
      return {
        'success': true,
        'Presentation': {
          'Id': 'a115B000000KzVVQA0'
        }
      };
    };

    // Temp Data Output
    // Only used for testing logic locally
    var getCurrentPresentationTestData = function (is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getCurrentPresentationTestData: function failed...'};
      return {
        "Clm_Presentation_vod__c": [{
          "Approved_vod__c": 0,
          "Id": "a115B000000KzVVQA0",
          "Name": "Enterprise Briefcase Prototype",
          "Presentation_Id_vod__c": "enterprise_briefcase_prototype"
        }],
        "success": true,
        "record_count": 1
      };
    }

    var getBriefcasePresentationTestData = function(is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getBriefcasePresentationTestData: function failed...'};
      return {
        "Clm_Presentation_vod__c": [{
          "Approved_vod__c": 0,
          "Id": "a115B000000MGrZQAW",
          "Name": "Briefcase | Enterprise Briefcase Prototype",
          "Presentation_Id_vod__c": "briefcase_enterprise_briefcase_prototype"
        }],
        "success": true,
        "record_count": 1
      }

    };

    var getBriefcasePresentationSlideTestIDs = function(is_test_error_data) {
      if(is_test_error_data) return {"success":false,"message":"getBriefcasePresentationSlideTestIDs: function failed..."};
      return {
        "success": true,
        "Clm_Presentation_Slide_vod__c": [{
          "Key_Message_vod__c": "a0D5B000000P0b8UAC",
          "Id": "a1W5B000000QmnNUAS"
        }, {
          "Key_Message_vod__c": "a0D5B000000P0bEUAS",
          "Id": "a1W5B000000QmnSUAS"
        }, {
          "Key_Message_vod__c": "a0D5B000000P0bFUAS",
          "Id": "a1W5B000000QmnTUAS"
        }, {
          "Key_Message_vod__c": "a0D5B000000P0bDUAS",
          "Id": "a1W5B000000QmnUUAS"
        }],
        "record_count": 4
      }
    };

    var getBriefcaseKeyMessageTestData = function(is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getBriefcaseKeyMessageTestData: function failed...'};
      return {
        "success": true,
        "Key_Message_vod__c": [{
          "Description_vod__c": "Briefcase | Presentation #1",
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_iva.zip",
          "Name": "enterprise_briefcase_presentation_1_iva",
          "Id": "a0D5B000000P0bFUAS"
        }, {
          "Description_vod__c": "Briefcase | Presentation #2",
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_2_iva.zip",
          "Name": "enterprise_briefcase_presentation_2_iva",
          "Id": "a0D5B000000P0b8UAC"
        }, {
          "Description_vod__c": "Briefcase |  Presentation #3",
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_3_iva.zip",
          "Name": "enterprise_briefcase_presentation_3_iva",
          "Id": "a0D5B000000P0bDUAS"
        }, {
          "Description_vod__c": "Briefcase |  Presentation #4",
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_4_iva.zip",
          "Name": "enterprise_briefcase_presentation_4_iva",
          "Id": "a0D5B000000P0bEUAS"
        }],
        "record_count": 4
      }

    };
    
    

    var getPresentationTestData = function(is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getPresentationTestData: function failed...'};
      return {
        "Clm_Presentation_vod__c": [{
          "Approved_vod__c": 0,
          "Id": "a115B000000KyTGQA0",
          "Name": "Presentation #2",
          "Presentation_Id_vod__c": "enterprise_briefcase_presentation_2_iva"
        }, {
          "Approved_vod__c": 0,
          "Id": "a115B000000JhxKQAS",
          "Name": "Presentation #1",
          "Presentation_Id_vod__c": "enterprise_briefcase_presentation_1_iva"
        }, {
          "Approved_vod__c": 0,
          "Id": "a115B000000KnBiQAK",
          "Name": "Presentation #3",
          "Presentation_Id_vod__c": "enterprise_briefcase_presentation_3_iva"
        }, {
          "Approved_vod__c": 0,
          "Id": "a115B000000KlfkQAC",
          "Name": "Presentation #4",
          "Presentation_Id_vod__c": "enterprise_briefcase_presentation_4_iva"
        }],
        "success": true,
        "record_count": 4
      }

    };

    var getPresentationSlideTestData = function(is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getPresentationSlideTestData: function failed...'};
      return {
        "success": true,
        "Clm_Presentation_Slide_vod__c": [{
          "Display_Order_vod__c": 1,
          "Name": "CPS-000000031",
          "Clm_Presentation_vod__c": "a115B000000JhxKQAS",
          "Key_Message_vod__c": "a0D5B000000MtsYUAS",
          "Id": "a1W5B000000PQJvUAO"
        }, {
          "Display_Order_vod__c": 1,
          "Name": "CPS-000000182",
          "Clm_Presentation_vod__c": "a115B000000KlfkQAC",
          "Key_Message_vod__c": "a0D5B000000NXAqUAO",
          "Id": "a1W5B000000QNjKUAW"
        }, {
          "Display_Order_vod__c": 1,
          "Name": "CPS-000000206",
          "Clm_Presentation_vod__c": "a115B000000KnBiQAK",
          "Key_Message_vod__c": "a0D5B000000NYbHUAW",
          "Id": "a1W5B000000QSvwUAG"
        }, {
          "Display_Order_vod__c": 1,
          "Name": "CPS-000000291",
          "Clm_Presentation_vod__c": "a115B000000KyTGQA0",
          "Key_Message_vod__c": "a0D5B000000NmcGUAS",
          "Id": "a1W5B000000QbZ9UAK"
        }],
        "record_count": 4
      }
    };
    
    var getPresentationKeyMessageTestData = function(is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getPresentationKeyMessageTestData: function failed...'};
      return {
        "Key_Message_vod__c": [{
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_1_iva_1.zip",
          "Name": "Home Slide Title - Presentation #1",
          "Id": "a0D5B000000MtsYUAS"
        }, {
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_4_iva_10.zip",
          "Name": "Home Slide Title - Presentation #4",
          "Id": "a0D5B000000NXAqUAO"
        }, {
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_3_iva_10.zip",
          "Name": "Home Slide Title - Presentation #3",
          "Id": "a0D5B000000NYbHUAW"
        }, {
          "Media_File_Name_vod__c": "enterprise_briefcase_presentation_2_iva_10.zip",
          "Name": "Home Slide Title - Presentation #2",
          "Id": "a0D5B000000NmcGUAS"
        }],
        "success": true,
        "record_count": 4
      }
    };
    
    // Will only ever output 1 test example
    // Should be modified for future testing
    // TODO: update script to pass matching Id based on test data
    var getTestPresentationIDByKeyMessageID = function(is_test_error_data) {
      if(is_test_error_data) return {'success':false, 'message':'getTestPresentationIDByKeyMessageID: function failed...'};
      return {
        "Clm_Presentation_vod__c": [{
          "Id": "a115B000000JhxKQAS",
          "Presentation_Id_vod__c": "enterprise_briefcase_presentation_1_iva"
        }],
        "success": true,
        "record_count": 1
      }
    };
    
    var checkForNewSessionTest = function(is_new_session) {
      if(!is_new_session) return {message: "getDataForCurrentObject: getDataForObject called w…ch is not available in preview mode: Call2_vod__c", success: false, code: 1112};
      return {
        Call: {
          Id: "D5466499-D318-4370-8757-6ACCD29D1DEE"
        },
        success: true
      };
    };


    /*
      EVENT LISTENERS
    */
    
    window.addEventListener('unhandledrejection', function(event) {
      // Prevent error output on the console:
      event.preventDefault();
      console.log('Reason: ', event.reason);
    });
    
    window.addEventListener('rejectionhandled', function(event)  {
      console.log('REJECTIONHANDLED');
    });

  };

}());
