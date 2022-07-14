
/**
*
* Expected Behaviour : Dabblers (4-7-9) - has required slide
- Impacted slide - A1C, Home and Insulin Response
- Required slide: 0.1.0 Insulin Response Chart
- If user's segment = Dabblers, we need to show required slide before A1C
- Check if user is in call
- Check if user has seen the required slide

- if user has seen the required slide, swiping  on homepage will take user to A1C
- if user has NOT seen the required slide, swiping on homepage will take user to Insulin Response
- if user pick A1C from swim-lane or menu and hasn't seen the required slide, they will be taken to Insulin Response

- on Insulin Response slide:
  • if user is in segment "Dabblers"
  • user can swipe from this slide to A1C

  Required Storage Data :
  - ozempic-segment-id
*
**/

var forceSlide = (function ($) {

  //Constants
  const FORCE_SEGMENT = "Dabblers";

  //Private variables
  var _hasSeenSlide;

  var init = function () {

    //Check force slide is needed.
    checkForceNeeded()

    forceSlideOrReveal();
  }

  var checkForceNeeded = function () {
    _hasSeenSlide = localStorage.getItem('ozempic-seen-slide');

    //check if force slide requirement checked or not.
    switch (_hasSeenSlide) {

      case "seen":  //Checked and forced already, skip the process
        return false;

      case 'notrequired': //Checked and notrequired, skip the process
        return false;

      case null: //Never checked so evaluate

        //If the current segmentation needs forced slide, set as 'no'
        if (localStorage.getItem('ozempic-segment-id') == FORCE_SEGMENT) {

          _hasSeenSlide = 'no';
          localStorage.setItem('ozempic-seen-slide', 'no');
          return true;
        } else {

          //Set ozempic-seen-slide to not required
          _hasSeenSlide = 'notrequired';
          localStorage.setItem('ozempic-seen-slide', 'notrequired');
          return false;
        }

      case "no"://Already evaluated. Need to force but not forced yet.
        return true;

      default:
        return false;
    }
  }

  var forceSlideOrReveal = function () {

    if (_hasSeenSlide == "no") {
      console.log("Forced to change slide to insulin response");
      com.veeva.clm.gotoSlide("novo_ozempic_insulin_response_2000.zip", "novo_ozempic_insulin_response");
    } else {
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

    //set event listner to execute this script when segment ID storing completed
    //In this slide, scripts are called in the following order with event triggers : Custom.segment.js -> custom.quickflow-check.js -> custom.force_slide.js
    $(window).on('presentationIdStored', function () {

      forceSlide.init();
    });

  });
})(jQuery);