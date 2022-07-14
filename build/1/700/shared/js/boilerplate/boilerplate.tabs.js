/**
 * @file boilerplate.tabs.js
 *
 * Trigger folder tabs.
 *
 * Assumptions:
 * - the parent container will have a 'data-tab' attribute
 * - each tab button will have a 'data-tab-id' attribute
 *
 * Example markup:
 *
 * <div data-tab="1"><!-- my background is the current tab's content -->
 *   <div data-tab-id="1"></div><!-- button to trigger tab 1 content -->
 *   <div data-tab-id="2"></div><!-- button to trigger tab 2 content -->
 *   ...
 * </div>
 *
 */

var iva_tabs = (function($) {

  var init = function() {
    bind_tabs();
  };

  /**
   * Add bindings for tab buttons.
   */
  var bind_tabs = function() {
    $('[data-tab-id]').hammer().bind('tap', function(e) {
      var tab_id = $(this).attr('data-tab-id');

      // Trigger custom event that tab switched if target tab is different.
      if(tab_id != $('[data-tab]').attr('data-tab')) $(window).trigger('tab-switched');

      $('[data-tab]').attr('data-tab', tab_id);

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
    iva_tabs.init();
  });
})(jQuery);
