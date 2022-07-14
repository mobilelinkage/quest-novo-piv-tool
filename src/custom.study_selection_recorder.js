/**
 * *
 * Feature: Remember and persist chosen Study state for 200, 300 slides for the duration of a single viewing/call of the IVA.
 * Dependencies : custom.tabs_reorder.js
 *
 * Note : This study tab retention feature doesn't work in local dev environment because localstorage gets all cleared in "boilerplate.briefcase.engine.js" (line 100 : localStorage.clear();) when briefcase items don't get loaded properly.
 **/

var tabStudySelectionRecorder = (function ($) {

  //Constants

  //Private variables
  var _tabs;
  // var _modalTabs;//NOTE :Unused for now. Leave it for possible future expansion.
  var _tabHistory;

  var init = function () {

    //prepare needed info
    prepareInfo();

    //every time tab selection happens, record it to the localstorage
    addRecordingEventToTabs();

  };

  var prepareInfo = function () {

    //get tab history from local storage.
    _tabHistory = JSON.parse(localStorage.getItem("ozempic-study-history"));

    //get tabs
    _tabs = $('[data-tab-id]');
    // _modalTabs = $(".tabParent [modal-data-tab-id]");//NOTE :Unused for now. Leave it for possible future expansion.
  };

  var addRecordingEventToTabs = function () {

    $(_tabs).hammer().bind('tap', function (e) {

      //get selected tab ID
      var selectedTabID = $(e.target).attr("data-tab-id");

      recordInfoToLocalStorage(selectedTabID);
    });

    //if modal tabs, retain modal tab selection as well. 
    //NOTE :Unused for now. Leave it for possible future expansion.
    // if (_modalTabs.length > 0) {
    //   $(_modalTabs).hammer().bind("tap", function (e) {

    //     //get selected modal tab ID
    //     var selectedModalTabID = $(e.target).attr("modal-data-tab-id");

    //     recordInfoToLocalStorage(selectedModalTabID);
    //   });
    // }
  };

  var recordInfoToLocalStorage = function (selectedTabId) {

    //if no record found, register new record
    _tabHistory = selectedTabId;
    localStorage.setItem('ozempic-study-history', JSON.stringify(_tabHistory));
  };

  var checkPreviousVisitAndOverwrite = function (defalt) {

    var target =  (_tabHistory != undefined) ? _tabHistory : defalt;

    //passing the return value through public interface
    public_interface.tabHistory = target;
  };

  var public_interface = {};
  public_interface.init = function () {
    init();
  };

  public_interface.checkPreviousVisitAndOverwrite = function (defalt) {
    checkPreviousVisitAndOverwrite(defalt);
  };

  public_interface.recordInfoToLocalStorage = function (selectedTabId) {
    recordInfoToLocalStorage(selectedTabId);
  };  

  return public_interface;
}(jQuery));

//unused constructor (constructors are called in custom.tabs_reorder.js file)
(function ($) {
  $(document).ready(function () {
  });

})(jQuery);