/**
 * @file boileplate.forced-modal.js
 *
 * This file determines if a modal should already be visible when a slide is
 * visited for the first time.
 */

var iva_forced_modals = (function($) {

  var visited_slides_list = [];

  /**
   * Add bindings for modal events.
   */
  var init = function() {
    open_forced_modal();
    always_open_forced_modal();
    remember_slide_visit();
  };


  /**
   * For any modal that has been designated as 'open on load', open the modal.
   */
  var open_forced_modal = function() {
    // This isn't the first time we're viewing this slide, so don't force a
    // modal open.
    if (visited_slide()) {
      return;
    }

    $('[data-modal-open-on-load]').each(function() {
      $(this).trigger('tap');
    });
  };

  /**
   * For any modal that has been designated as 'ALWAYS open on load', open the modal.
   */
  var always_open_forced_modal = function() {

    $('[data-modal-always-open-on-load]').each(function() {
      $(this).trigger('tap');
    });
  };

  /**
   * Have we seen this slide before?
   *
   * @return boolean
   */
  var visited_slide = function() {
    if (localStorage.getItem("visited-slides") == null) {
      return false;
    }

    // Only force open the modal if the user hasn't been to the slide.
    else {
      var visited_list = localStorage.getItem("visited-slides").split(",");
      
      if (jQuery.inArray($("body").data("slideid").toString(), visited_list) >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  };


  /**
   * Record the current slide in the list of visited slides.
   *
   * We use this to determine whether we should force a modal to appear on not,
   * with the assumption that we only display forced modals the first time a
   * user visits the slide within a presentation.
   */
  var remember_slide_visit = function() {

    var currentSlideID = $("body").data("slideid").toString();

    if (localStorage.getItem("visited-slides") == null) {
      visited_slides_list.push(currentSlideID);
    }
    else {
      visited_slides_list = localStorage.getItem("visited-slides").split(",");

      if (jQuery.inArray(currentSlideID, visited_slides_list) < 0) {
        visited_slides_list.push(currentSlideID);
      }
    }

    localStorage.setItem("visited-slides", visited_slides_list);
  };


  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    iva_forced_modals.init();
  });
})(jQuery);

