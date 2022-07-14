/**
 * @file boileplate.forced-modal.js
 *
 * This file determines if a modal should already be visible when a slide is
 * visited for the first time.
 */

var iva_forced_modals = (function($) {
  //Constants
  const match_environment_url = 'localhost:3000';

  //Private variables
  var _is_veeva_env;
  var _call_id;
  var _is_incall;

  console.log('main function entered');
  var visited_slide_list = [];

  var init = function () {
    checkEnv();
    open_forced_modal();
    // console.log("_is_veeva_env Env : " + _is_veeva_env);
    // console.log("_call_id :" + _call_id);
    // console.log("_account_id :" + _account_id);
    // console.log("_segment_id :" + _segment_id);
    // console.log("_product_id :" + _product_id);
    };

    /**
    *
    * Check environment
    *
    **/

  var checkEnv = function () {
      var get_current_url = window.location.host;

      //only start the segmentation in veeva env
      _is_veeva_env = false;
      _is_veeva_env = (get_current_url.indexOf(match_environment_url) > -1) ? false : true;

      //moving to 1st step "Call ID"
      checkCallID();
  }

  /**
  *
  * Call ID
  *
  **/
  //TODO : replace by getting from storage instead of doing twice
  var checkCallID = function () {

      //Example for checking if user is in a Call and if it’s a new Call
      _call_id = localStorage.getItem('ozempic-call-id');
      _is_incall = localStorage.getItem('ozempic-is-in-call');

      //check is user is in veeva environment first
      if (_is_veeva_env) {
          com.veeva.clm.getDataForCurrentObject('Call', 'Id', setCallLocalStorage)

      } else {
          var resultC = checkForCallTest();
          setCallLocalStorage(resultC);
      }

  }
  var setCallLocalStorage = function (result) {
    if (result.success) {
        //user is in a call (includeing local fake call)
        _is_incall = true;

        if (result.Call.Id === _call_id) {
            console.log("same call ID as before");
            //same call ID as before, so no need to do anything for storing ID datas. Release stored event so that related code start executing.
            releaseCompleteEvent();
            return;

        } else {
            //new call ID
            console.log("new call ID");
            //Clear storage item for new session
            clearLocalStorage();

            _call_id = result.Call.Id;

            //reset tab history storage when new call starts.
            //localStorage.removeItem('ozempic-study-history');
        }
    } else {
        //user is not in a call
        _is_incall = false;
        console.log("user is not in a call");
        //Clear storage and set call id as undefined. (when swithed from call to no call...)
        //TODO : figure out the way to detect first session when not in call
        // if (localStorage.getItem('ozempic-call-id') !== 'undefined') {
        //     clearLocalStorage();
        //     _call_id = 'undefined'
        // }

        clearLocalStorage();
        _call_id = 'undefined'
    }

    localStorage.setItem('ozempic-call-id', _call_id);
    localStorage.setItem('ozempic-is-in-call', _is_incall);

    /**
     * Add bindings for modal events.
     */
    console.log("check forced modal");
  }

  var clearLocalStorage = function () {
    localStorage.removeItem('ozempic-account-id');
    localStorage.removeItem('ozempic-call-id');
    localStorage.removeItem('ozempic-is-in-call');
    localStorage.removeItem('ozempic-visited-slide-tab');
  }
  
  var checkForCallTest = function () {
    return {
        Call: {
            Id: "D5466499-D318-4370-8757-6ACCD29D1DEX"
        },
        success: true
    };
  };

  var releaseCompleteEvent = function () {
    //releasing custom event "callIDchecked" for proceeding related script
    console.log("releasing custom event 'callIDchecked'")
    $(window).trigger("callIDchecked");
}



  /**
   * Add bindings for tab buttons.
   */


      /**
       * For any modal that has been designated as 'open on load', open the modal.
       */
      var open_forced_modal = function() {
        // This isn't the first time we're viewing this slide, so don't force a modal open.
        $('[data-modal-open-on-tab]').hammer().bind('tap', function(e) {
          if (visited_slide()) {
            console.log('this is a visited slide');
            return;
          }else{
            console.log('not visited yet, so it should trigger the forced modal');
            $('[data-forced-modal-trigger]').each(function() {
              console.log('tap the hidden button to open the force modal');
              $(this).trigger('tap');
            });
            //set local storage
            remember_slide_visit();
          }
      
        });
      }



  /**
   * Have we seen this slide before?
   *
   * @return boolean
   */
  var visited_slide = function() {
    console.log('visited slide function entered');
    console.log(localStorage.getItem("ozempic-visited-slide-tab"));
    if (localStorage.getItem("ozempic-visited-slide-tab") == null) {
      console.log('not empty localstorage');
      return false;
    }

    // Only force open the modal if the user hasn't been to the slide.
    else {
      var visited_list = localStorage.getItem("ozempic-visited-slide-tab").split(",");
      
      if (jQuery.inArray($("body").data("slideid").toString(), visited_list) >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  };


  /**
   * Record the current slide in the list of visited slide.
   *
   * We use this to determine whether we should force a modal to appear on not,
   * with the assumption that we only display forced modals the first time a
   * user visits the slide within a presentation.
   */
  var remember_slide_visit = function() {

    var currentSlideID = $("body").data("slideid").toString();

    if (localStorage.getItem("ozempic-visited-slide-tab") == null) {
      visited_slide_list.push(currentSlideID);
    }
    else {
      visited_slide_list = localStorage.getItem("ozempic-visited-slide-tab").split(",");

      if (jQuery.inArray(currentSlideID, visited_slide_list) < 0) {
        visited_slide_list.push(currentSlideID);
      }
    }

    localStorage.setItem("ozempic-visited-slide-tab", visited_slide_list);
  };


  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    $(window).on("BriefcaseCompleted", function () {
      iva_forced_modals.init();
    });
  });
})(jQuery);

