/**
 * @file boilerplate.expanding-isi.js
 *
 * Trigger and dismisses the expandable ISI currently on the slide.
 *
 * Assumptions:
 * - Calculate to determine if the expand button should be inserted
 * - Part of the ISI will be visible on the slide
 * - ISI copy is all live text
 *
 * e.g.:
 *
 *   <div data-expanding-isi>
 *     <div isi-expandable-content>
 *        <p>Expanded ISI content</p>
 *     </div>
 *   </div>
 *
 * Events:
 * -------
 * When the ISI is expanded, send a 'expandable-isi-expanded' event.
 * When the ISI is collapsed, send a 'expandable-isi-collapsed' event.
 *
 * Listeners:
 * ----------
 * Listen for 'collapse-expandable-isi' event.
 * Listen for 'expand-expandable-isi' event.
 */
var iva_expanding_isi = (function($) {

  var expanded_height,
      config = {
        el_expanding_isi: '[data-expanding-isi]'
      };

  var init = function() {
    calculate_expanded_height();
    determine_expanded_isi();

    // Event listeners.
    $(window).on('expand-expandable-isi', expand_isi);
    $(window).on('collapse-expandable-isi', collapse_isi);
  };

  /**
   * Calculates the height when the expanded ISI needs to be shown.
   */
  var calculate_expanded_height = function() {
    // Temporarily set height to auto to calculate the actual height.
    $(config.el_expanding_isi).css({
      height: 'auto'
    });

    // If there is a footer, take the footer's height into account.
    var footer_height = ($('.footer').length > 0) ? $('.footer').innerHeight() : 0;
    expanded_height = $(config.el_expanding_isi).innerHeight() + footer_height;
    $(config.el_expanding_isi).attr('style', '');

    console.log(expanded_height);
  };


  /**
   * Determine whether to add the expand/collapse button 
   * based off of the height. 
   */
  var determine_expanded_isi = function() {
    var expanded = expanded_height > ($(config.el_expanding_isi).innerHeight());

    if (expanded) {
      var btn_expanded = '<div data-toggle-expand-isi class="button" data-button-name="Expanding ISI Toggle"></div>';
      $(config.el_expanding_isi).append(btn_expanded);

      // Event listeners.
      $('[data-expanding-isi] [data-toggle-expand-isi]').hammer().on('tap', toggle_expanding_isi);
    }
  }

  /**
   * Toggle expanding ISI.
   */
  var toggle_expanding_isi = function() {
    $(config.el_expanding_isi).toggleClass('is-expanded');

    if ($(config.el_expanding_isi).hasClass('is-expanded')) {
      $(window).trigger('expandable-isi-expanded');
      expand_isi();
    }

    else {
      $(window).trigger('expandable-isi-collapsed');
      collapse_isi();
    }
  };

  /**
   * Expand ISI.
   */
  var expand_isi = function() {
    $(config.el_expanding_isi).addClass('is-expanded');
    $(config.el_expanding_isi).css({
      height: expanded_height
    });
  };

  /**
   * Collapse ISI.
   */
  var collapse_isi = function() {
    $(config.el_expanding_isi).removeClass('is-expanded');
    $(config.el_expanding_isi).attr('style', '');
  };



  var public_interface = {};
  public_interface.init = function() {
    init();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    iva_expanding_isi.init($);
  });
})(jQuery);
