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
    $('.isi-trigger').hammer().on('tap', on_isi_selected);
    $('.modal-overlay, .isi-container .modal-button-close, [data-modal-trigger-open]:not(.isi-trigger)').hammer().on('tap', on_isi_exit);

  };

  /**
   * When the ISI modal is triggered.
   */
  var on_isi_selected = function(e) {
    // Change the opacity of the ISI button.
    $(this).addClass('active');
    var isi_position = $(this).attr('data-isi-position');
    console.log(isi_position);
    if (isi_position == undefined || isi_position == '') {
      isi_position = 0
    }
    console.log(isi_position);


    setTimeout(function () {
      isi_iScroll_obj = new IScroll('.isi-content', {
        scrollX: true,
        scrollbars: true,
        scrollbars: 'custom',
        resizeScrollbars: false
      });

      isi_iScroll_obj.refresh();
      //update iscroll syntax accoridng to https://github.com/cubiq/iscroll
      isi_iScroll_obj.scrollTo(0,isi_position, 100, IScroll.utils.ease.elastic);
     
      if(typeof clickstream != "undefined") {
        clickstream.trackScrolling('ISI', isi_iScroll_obj);
      }
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
