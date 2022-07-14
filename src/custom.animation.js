var animations = (function($) {
  var init = function() {
    bind_btns();
  };

  /**
   * Add bindings for tab buttons.
   */

  var lineID = 2;
  var inAnimation = false;

  var bind_btns = function() {

    $(".animation-controller").hammer().bind("tap", function(e) {
      if (!inAnimation) {
        if (lineID != 4) {
          clickstream.trackAnimationPlay($(this).attr("data-animation-target"));
          showaline();
        } else {
          $("[data-button-reset]").addClass("button-hide");
          $("[data-button-play]").removeClass("button-hide");
          $("[data-animation-line]").removeClass("show-line");
          $(".animation-label").removeClass("show-label");
          lineID = 2;
        }
      }
    });

  };

  var showaline = function() {
    $("[data-animation-line" + lineID + "]").css("webkitAnimation", "none");

    setTimeout(function() {
      inAnimation = true;
      $("[data-animation-line" + lineID + "]").css("webkitAnimation", "");
    }, 10);

    $("[data-animation-line" + lineID + "]").addClass("show-line");

    $("[data-animation-line" + lineID + "]").one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(e) {
        inAnimation = false;
        lineID = $(this).attr("data-animation-line");

        $("[data-button-play], [data-button-reset]").removeClass(function(index, className) {
          return (className.match(/(^|\s)sequence\S+/g) || []).join(" ");
        });

        $("[data-button-play], [data-button-reset]").addClass("sequence" + lineID);

        $("[data-animation-label" + lineID + "]").addClass("show-label");

        //increment the lineID
        lineID++;

        if (lineID == 4) {
          //reset
          $("[data-button-play]").addClass("button-hide");
          $("[data-button-reset]").removeClass("button-hide");
        }
      }
    );
  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;
})(jQuery);

(function($) {
  $(document).ready(function() {
    animations.init();
  });
})(jQuery);
