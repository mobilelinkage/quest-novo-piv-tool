var show_active_modal = (function ($) {
  var active_modal = window.localStorage.getItem(iva_presentation_name + '_active_modal');
  var active_modal_slideid = window.localStorage.getItem(iva_presentation_name + '_active_modal_slideid');
  var current_slideid = $('body').attr('data-slideid');

  var init = function() {
    // check if active modal slide ID matches current slide ID
    if (active_modal != null && active_modal_slideid == current_slideid) {
      // SHOW active modal
      $("[data-modal-target='." + active_modal + "']").each(function() {
        $(this).trigger('tap');
      });
      // clear local storage after
      window.localStorage.removeItem(iva_presentation_name + '_active_modal');
      window.localStorage.removeItem(iva_presentation_name + '_active_modal_slideid');
    } else {
      // clear local storage
      window.localStorage.removeItem(iva_presentation_name + '_active_modal');
      window.localStorage.removeItem(iva_presentation_name + '_active_modal_slideid');
    }
  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;
}(jQuery));

(function ($) {
  $(document).ready(function () {
    show_active_modal.init($);
  });
})(jQuery);