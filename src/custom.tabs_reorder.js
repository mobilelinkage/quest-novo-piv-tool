/**
 * *
 * Feature: Reorder tabs based on Segment ID/ heighlight current tab/ show current content
 * Note : Don't include this script and "custom.active_tab" at the same time,
 * as this scrip is merged with "custom.active_tab" script.
 *
 *  Required Storage Data :
 *  - ozempic-segment-id
 *  - iva_presentation_name + '_active_tab
 *  - iva_presentation_name + '_active_tab_slideid
 *
 **/

var reorderTabs = (function ($) {

  //Constants
  const VIEW_TYPE_MAP = {
    "GLP-1 Diversifiers": "2,3,1",
    "GLP1 Seg: QW Dominant": "2,3,1",
    "GLP-1 Skippers": "1,2,3",
    "Dabblers": "1,3,2",
    "Default": "2,3,1"
  }
  const TAB_STUDY_SLIDES = [200,300];

  //Private variables
  var _segmentID = "";
  var _viewType = "";
  var _orderNum = "";
  var _isModalTab = "";

  var _tabs = "";
  var _tabsTop = "";
  var _tabHeight = "";
  var _tabGap = "";
  var _currentSlideID;
  var _isStudyTabSlide;

  var init = function () {

    //set view type
    getViewType();

    //get expected tab order
    getTabOrder();

    //get existing tabs
    getExistingTabs()

    //reorder tabs
    reorderTabs();

    //check if study tab slide
    isStudyTabSlide();

    //If study tabs, assign event listner to tabs (ref. "custom.tab_selection_recorder.js")
    if (_isStudyTabSlide) tabStudySelectionRecorder.init();

    //show active tab as selected
    show_active_tab();

    //hide mask and reveal the content
    revealContent();
  };

  var isStudyTabSlide = function(){

    _currentSlideID = $('body').attr('data-slideid');
    _isStudyTabSlide = (TAB_STUDY_SLIDES.indexOf(Number(_currentSlideID)) < 0)? false : true;
  };

  var getViewType = function () {

    //check if segment view style is already set
    _viewType = localStorage.getItem('ozempic-segment-type');

    //if not set (first time), get it and store
    if (_viewType === null) {

      _segmentID = localStorage.getItem('ozempic-segment-id');

      //compare with the segment in VIEW_TYPE_MAP. and see if matches.

      for (var type in VIEW_TYPE_MAP) {

        if (type == _segmentID) {
          _viewType = type;
        }
      }

      //when there's no match in the mapping
      if (_viewType === null) _viewType = "Default";
      localStorage.setItem('ozempic-segment-type', _viewType);
    }
  }

  var getTabOrder = function () {

    //get tab order depending on incoming view type
    _orderNum = VIEW_TYPE_MAP[_viewType].split(",");

  }

  var getExistingTabs = function () {

    _isModalTab = ($('.tabParent').hasClass('modalTab')) ? true : false;
    _tabs = _isModalTab ? $('.tabParent [modal-data-tab-id]') : $('.tabParent [data-tab-id]');

    //get tab positions
    _tabsTop = parseInt(_tabs.css("top"));
    _tabHeight = _tabs.height();
    _tabGap = parseInt(_tabs.css("margin-bottom"));

    //add event listner for tabs
    $(_tabs).hammer().bind('tap', switchActiveTabOnClick);
  }

  var reorderTabs = function () {

    var top;

    //change the tab position
    for (var i = 0; i < _tabs.length; i++) {

      top = _tabsTop + (_tabHeight + _tabGap) * i + "px";

      $(_tabs[_orderNum[i] - 1]).css({
        "top": top
      })
    }
  }

  var switchActiveTabOnClick = function (e) {
    $(".selected").removeClass("selected");

    $(this).addClass("selected");
  }

  //NOTE: copied and modified from custom.activ_tab.js
  var show_active_tab = function () {
    var active_tab = window.localStorage.getItem(iva_presentation_name + '_active_tab');
    var active_tab_slideid = window.localStorage.getItem(iva_presentation_name + '_active_tab_slideid');
    var current_slideid = $('body').attr('data-slideid');

    // check if active tab slide ID matches current slide ID
    if (active_tab != null && active_tab_slideid == current_slideid) {//coming from hotlink and has active tab speficied.

      changeTabStyle(active_tab);

      //if it's study tab slide, memorise the selection
      if(_isStudyTabSlide)tabStudySelectionRecorder.recordInfoToLocalStorage(active_tab);

    }else if(active_tab === null && _isModalTab && !$('.modal-1').hasClass("modal-visible")){ //when active tab is not specified, and targeting slide with modal tab reorder, and modal tabs are not open

      changeTabStyle("1"); //show the 1st tab content

    }else{ //when it's not coming from hotlink with specific tab, show the top tab content

      var targetID = _orderNum[0];

      //if it's study tab slide, check if study tab is selected or not. If so, overwrite the ID to show
      if(_isStudyTabSlide) {

        tabStudySelectionRecorder.checkPreviousVisitAndOverwrite(_orderNum[0]);
        targetID = tabStudySelectionRecorder.tabHistory;

      }
      changeTabStyle(targetID);

    }

    // clear local storage
    window.localStorage.removeItem(iva_presentation_name + '_active_tab');
    window.localStorage.removeItem(iva_presentation_name + '_active_tab_slideid');
  };

  var changeTabStyle = function (active_tab) {

    if (_isModalTab){//check if the current slide has modal tab reordering

      if($('.modal-1').hasClass("modal-visible")) {//check if the modal is open (which means targeting modal tabs)

        // SHOW active modal tab content
        $('[modal-data-tab]').attr('modal-data-tab', active_tab);

        // Select active tab menu in modal
        $('[modal-data-tab-id=' + active_tab + ']').addClass("selected");

        // Also select parent tab behind
        $('[data-tab]').attr('data-tab', "2");  //In slide 500, 2nd tab has modal popup with reorder tabs

      } else { //when modal tabs exist but targeting non modal tabs
          // show the top modal tab content behind the scene
          $('[modal-data-tab]').attr('modal-data-tab', _orderNum[0]);

          // Prepare the top modal tab to be selected behind the scene
          $('[modal-data-tab-id=' + _orderNum[0] + ']').addClass("selected");

          //Show active tab content
          $('[data-tab]').attr('data-tab', active_tab);
      }

    }else{//no modal tabs

      // SHOW active tab
      $('[data-tab]').attr('data-tab', active_tab);

      // Select active tab menu
      $('[data-tab-id=' + active_tab + ']').addClass("selected");
    }

    // Change the selected tab look?
    // Note : Seems like not used anywhere so commenting out
    // $("[data-slide='" + active_tab + "']").addClass("selected");
  }

  var revealContent = function () {

      //If it's not foce slide, reveal the content after content load.
      //Note: In the force slide, content revealing is handled in the custom.force_slide.js instead after evaluating forcing is needed or not.
      if(!$(".mask").hasClass("force-slide")){
        $(".mask").addClass("hide");
      }
  }

  var public_interface = {};
  public_interface.init = function () {
    init();
  };

  return public_interface;
}(jQuery));

(function ($) {
  $(document).ready(function () {

    //set event listner to execute this script when segment ID storing completed.
    $(window).on('segmentIdStored', function () {
      reorderTabs.init();
    });

  });

})(jQuery);