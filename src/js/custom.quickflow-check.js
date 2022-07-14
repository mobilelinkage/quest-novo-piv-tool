/**
 * @file custom.quickflow-check.js
 *
 * Handles custom functionally for figuring out presentation ID, and is in Quickflow or not.
 * For local testing : In order to change the current presentation id, swap PRESENTATION_ID_TEST parameter to whatever you desire.
 * 
 */

var custom_quickflow_check = (function ($) {

  //Constants
  const match_environment_url = 'localhost:3000';
  const PRESENTATION_ID_TEST = "novo_ozempic_migration_glp";
  // const PRESENTATION_ID_TEST = "novo_ozempic_migration_insulin";
  // const PRESENTATION_ID_TEST = "novo_ozempic_migration_dosing";
  // const PRESENTATION_ID_TEST = "novo_ozempic_migration_path";
  const PRESENTATION_ID_CORE = "novo_ozempic_iva";

  //Private variables
  var _is_veeva_env = false;
  var _is_in_quickflow = false;
  var _presentation_id;

  var init = function () {
    checkEnv();

    // console.log("_is_veeva_env Env : " + _is_veeva_env);
    // console.log("_is_in_quickflow :" + _is_in_quickflow);
    // console.log("_presentation_id :" + _presentation_id);
  };

  /**
  *
  * Check environment
  *
  **/

  var checkEnv = function () {
    var get_current_url = window.location.host;

    _is_veeva_env = (get_current_url.indexOf(match_environment_url) > -1) ? false : true;

    //moving to "Presentation ID" check
    checkPresentationID();
  }

  /**
  *
  * Presentation ID
  *
  **/
  var checkPresentationID = function () {

    //Checking Presentation ID
    _presentation_id = localStorage.getItem('ozempic-presentation-id');

    if (_is_veeva_env) {
      com.veeva.clm.getDataForCurrentObject('Presentation', 'Presentation_Id_vod__c', setPresentationLocalStorage)

    } else {
      var resultC = checkForPresentationTest();
      setPresentationLocalStorage(resultC);
    }

  }

  var setPresentationLocalStorage = function (result) {
    if (result.success) {

      if (result.Presentation.Presentation_Id_vod__c === _presentation_id) {

        //same Presentation ID as before, so no need to do anything for storing ID datas. Release stored event so that related code start executing.
        releaseCompleteEvent();
        return;

      } else {
        //new Presentation ID

        //Clear storage item for new session
        clearLocalStorage();

        _presentation_id = result.Presentation.Presentation_Id_vod__c;

        //compare the Presentation ID and see if it's in Quickflow or not
        _is_in_quickflow = (_presentation_id == PRESENTATION_ID_CORE) ? false : true;
      }
    } else {

      //Clear storage and set presentation id as undefined.
      clearLocalStorage();
      _presentation_id = 'undefined'
    }

    localStorage.setItem('ozempic-presentation-id', _presentation_id);
    localStorage.setItem('ozempic-is-in-quickflow', _is_in_quickflow);

    releaseCompleteEvent();
  }

  var clearLocalStorage = function () {
    localStorage.removeItem('ozempic-presentation-id');
    localStorage.removeItem('is-in-quickflow');
  }

  var checkForPresentationTest = function () {
    return {
      Presentation: {
        Presentation_Id_vod__c: PRESENTATION_ID_TEST
      },
      success: true
    };
  };

  var releaseCompleteEvent = function () {
      //releasing custom event "presentationIdStored" for proceeding related script
      console.log("releasing custom event 'presentationIdStored'")
      $(window).trigger("presentationIdStored");
  }  

  var public_interface = {};
  public_interface.init = function () {
    init();
  };

  return public_interface;

}(jQuery));


(function ($) {
  $(document).ready(function () {

    //set event listner to execute this script when segment ID storing completed
    $(window).on('segmentIdStored', function () {
      custom_quickflow_check.init();
    });

  });
})(jQuery);
