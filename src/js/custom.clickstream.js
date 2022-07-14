var customClickstream = (function($) {

  var init = function() {

      /********************************
      * Default tracking events
      *********************************/

    if (typeof clickstream != "undefined") {


      // Tracking slide load
      clickstream.trackSlideLoad($('body').attr('data-slidename'));


      // Tracking time on slide
      clickstream.trackTimeOnSlide($('body').attr('data-slidename'));

      // Tracking all videos
      // Videos must have attr: 'data-video-name
      $('video').each(function(index, element) {
          clickstream.trackVideo(element, $(element).attr('data-video-name'));
      });


      /********************************
       * Add custom tracking events here
       *********************************/

      // Tracking Custom Animation
      // $('[data-animation-target]').hammer().on('tap', function() {
      //   var target = $(this).attr('data-animation-target');
      //     // Specific to example animation
      //     $(target + ' .line-1').attr('data-img-reveal', 'rightleft');
      //     $(target + ' .line-2').attr('data-img-reveal', 'leftright');
      //     // END
      //   clickstream.trackAnimationPlay(target);
      // });
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
    customClickstream.init($);
  });
})(jQuery);
