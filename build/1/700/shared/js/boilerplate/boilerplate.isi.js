/**
 * @file boilerplate.isi.js
 *
 * Handles ISI popup modal.
 * Dependencies:
 * - hammer.js
 * - jquery.hammer.js
 * - boilerplate.modal.js
 * - iscroll.js
 *
 *  <div class="isi-container ">
 *    <div class="isi-content">
 *      // DIV WITH ISI SET AS BG GOES HERE
 *    </div>
 *    <a class="modal-button-close" data-modal-trigger-close></a>
 *  </div>
 */

var iva_isi = (function($) {

  var isi_iScroll_obj;

  var init = function() {
    $('.isi-link').hammer().on('tap', on_isi_selected);
    $('.modal-overlay, .isi-container .modal-button-close, [data-modal-trigger-open]').hammer().on('tap', on_isi_exit);
  };

  /**
   * When the ISI modal is triggered.
   */
  var on_isi_selected = function(e) {
    // Change the opacity of the ISI button.
    $(this).addClass('active');

    setTimeout(function () {
      isi_iScroll_obj = new IScroll('.isi-content', {
        scrollX: true,
        scrollbars: true,
        scrollbars: 'custom',
        resizeScrollbars: false
      });

      isi_iScroll_obj.refresh();
      isi_iScroll_obj.scrollTo(0,0,0);
    }, 500);

  };

  /**
   * Destroy the iScroll object for optimzation.
   */
  var destroy_isi_scroll = function() {
    if (isi_iScroll_obj) {
      console.log("ISI iScroll object deleted");
      isi_iScroll_obj.destroy();
    }
  }

  /**
   * When the user closes the ISI modal.
   */
  var on_isi_exit = function() {
    $('.isi-link').removeClass('active');
    $('.img--isi-full').attr('style', '');
    destroy_isi_scroll();
  };
  
  var public_interface = {};
  public_interface.init = function() {
    init();
  };
  public_interface.destroyISIObject = function() {
    destroy_isi_scroll();
  };

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    iva_isi.init($);
  });
})(jQuery);
