/**
 * Dependencies:
 * - hammer.js
 * - jquery.hammer.js
 * - boilerplate.modal.js
 * - iscroll.js
 */

var iva_references = (function ($) {

  var references_iScroll_obj;

  var init = function () {
    //$('.study-design-link').hammer().on('tap', on_study_design_selected);
	$('.references-link').hammer().on('tap', on_references_selected);
    //$('.modal-overlay, .study-design-container .modal-button-close, [data-modal-trigger-open]').hammer().on('tap', on_study_design_exit);
	$('.modal-overlay, .references-container .modal-button-close, [data-modal-trigger-open]').hammer().on('tap', on_references_exit);
  };

  /**
   * When the study design modal is triggered.
   */
  var on_references_selected = function (e) {
    // Change the opacity of the study_design button.
    $(this).addClass('active');

    setTimeout(function () {
      references_iScroll_obj = new IScroll('.references-content', {
        scrollX: true,
        scrollbars: true,
        scrollbars: 'custom',
        resizeScrollbars: false,
        bindToWrapper: true
      });

      references_iScroll_obj.refresh();
      references_iScroll_obj.scrollTo(0, 0, 0);

      if (typeof clickstream != "undefined") {
        clickstream.trackScrolling('References', references_iScroll_obj);
      }
    }, 500);

  };

  /**
   * Destroy the iScroll object for optimzation.
   */
  var destroy_references_scroll = function () {
    if (references_iScroll_obj) {
      references_iScroll_obj.destroy();
    }
  }

  /**
   * When the user closes the study design modal.
   */
  var on_references_exit = function () {
    //$('.study-design-link').removeClass('active');
	$('.references-link').removeClass('active');
    $('.img--study-design-full').attr('style', '');
    destroy_references_scroll();
  };

  var public_interface = {};
  public_interface.init = function () {
    init();
  };
  public_interface.destroystudy_designObject = function () {
    destroy_references_scroll();
  };

  return public_interface;

}(jQuery));


(function ($) {
  $(document).ready(function () {

    setTimeout(function () {
        var isDcs = $('.img--study-design-full').hasClass('dcs-sd')
        
        if(isDcs){
          console.log('Do nothing')
        }else{
          iva_references.init($);
        }
    }, 400);
    

    
    
    
  });
})(jQuery);
