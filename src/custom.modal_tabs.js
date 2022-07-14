var iva_modal_tabs = (function($) {

  var init = function() {
    bind_modal_tabs();
  };
  
  /**
   * Add bindings for tab buttons.
   */
  var bind_modal_tabs = function() {
    $('[modal-data-tab-id]').hammer().bind('tap', function(e) {
      var modal_tab_id = $(this).attr('modal-data-tab-id');
      $('[modal-data-tab]').attr('modal-data-tab', modal_tab_id);
      //clickstream tracking for tab buttons
      if (typeof clickstream != "undefined") {
        clickstream.trackButtonTap($(this).attr('data-button-name') + ' tab', function(){});
      };
    });
  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    iva_modal_tabs.init();
  });
})(jQuery);
