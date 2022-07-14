var custom_expanding_isi = (function($) {
  var scrollPosition = parseInt($('body').attr('data-isi-scroll-to'));
  scrollPosition = 0 - scrollPosition;

  var expanded_height,
      config = {
        el_expanding_isi: '[data-expanding-isi]'
      };

  var init = function() {


    var btn_expanded = '<div data-toggle-expand-isi></div>';
    $(config.el_expanding_isi).append(btn_expanded);
    $(window).on('modal-opened', on_modal_opened);

    expanding_ISI_iScroll_obj = new IScroll('[data-expandable-content]', {
      scrollX: true,
      scrollbars: true,
      scrollbars: 'custom',
      resizeScrollbars: false
    });
    

    expanding_ISI_iScroll_obj.refresh();


    expanding_ISI_iScroll_obj.scrollTo(0,scrollPosition,0);

    if (typeof clickstream != "undefined") {
      clickstream.trackScrolling('Expanding ISI', expanding_ISI_iScroll_obj);
    }
    
    // Event listeners.
    $('[data-expanding-isi] [data-toggle-expand-isi]').hammer().on('tap', toggle_expanding_isi);

    // Event listeners.
    $(window).on('expand-expandable-isi', expand_isi);
    $(window).on('collapse-expandable-isi', collapse_isi);

    $(config.el_expanding_isi).on('webkitTransitionEnd transitionend', function(event){
      var attr = $(event.target).attr('data-expanding-isi');
    //check scrollPosition against content height and container height
    var contentHeight = $('.isi-full').height();
    var containerHeight = $('.expandable-isi-container').height();

      if (typeof attr !== typeof undefined && attr !== false) {
        if(scrollPosition < (containerHeight-contentHeight)){
          var new_scrollPosition = containerHeight-contentHeight;
            expanding_ISI_iScroll_obj.refresh();
            expanding_ISI_iScroll_obj.scrollTo(0,new_scrollPosition,0);
        }else{
          setTimeout(function() {
            expanding_ISI_iScroll_obj.refresh();
            expanding_ISI_iScroll_obj.scrollTo(0,scrollPosition,0);
          },250)
        }
      }
    });

    //bind tabs to change expandable ISI
    $('[data-tab-isi-scroll-to]').hammer().bind('tap', function(e) {
      //set attribute and scrollPostiion
      var tab_scrollPosition = parseInt($(this).attr('data-tab-isi-scroll-to'));
      $('body').attr('data-isi-scroll-to', tab_scrollPosition);
      if(tab_scrollPosition !== "undefined"){
        scrollPosition = 0 - tab_scrollPosition;
        console.log(scrollPosition);
        expanding_ISI_iScroll_obj.refresh();
        expanding_ISI_iScroll_obj.scrollTo(0,scrollPosition,0);
      }
    });

  };


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
  };

  /**
   * Collapse ISI.
   */
  var collapse_isi = function() {
    $(config.el_expanding_isi).removeClass('is-expanded');
  };

  var public_interface = {};
  public_interface.init = function() {
    init();
  };
  
  /**
   * When a modal is about to open, collapse the ISI.
  */
  var on_modal_opened = function() {
    $(window).trigger('collapse-expandable-isi');
  }

  return public_interface;

}(jQuery));


(function($) {
  $(document).ready(function() {
    custom_expanding_isi.init($);
  });
})(jQuery);
