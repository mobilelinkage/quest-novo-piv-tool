var iva_accordion = (function($) {

    var init = function() {
      // Event listeners.
      $(".accordion-item").hammer().on('tap', on_accordion_item_tapped);
    };
  
    var on_accordion_item_tapped = function() {
        // check if accordion item is already open
        if (!$(this).hasClass('open')) {
            var accordionContainer = $(this).parents('.accordion-container');
            // close any open siblings
            $(accordionContainer).children('.accordion-item').removeClass('open');
            $(this).addClass('open');
        }
  
    };
  
    var public_interface = {};
    public_interface.init = function() {
      init();
    };
  
    return public_interface;
  
  }(jQuery));
  
  
  (function($) {
    $(document).ready(function() {
      iva_accordion.init($);
    });
  })(jQuery);
  