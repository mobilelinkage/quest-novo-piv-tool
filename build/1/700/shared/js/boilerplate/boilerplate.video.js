/**
 * @file boilerplate.video.js
 *
 * Plays the video in the slide regardless if it's in a popup or not.
 *
 * Assumptions:
 * - there will be only 1 video on the current slide/page
 * - if video is in a popup, the popup will have the same functionally as
 *   any other modal popup
 *
 * e.g.
 *
 *   <div data-video-trigger data-video-replay></div>
 *   <video controls="controls" ...>
 *
 */

var iva_video_player = (function($) {

  var init = function() {
    $("[data-video-trigger]").hammer().on('tap', play_video);

    // Stop playing video, if video is in a modal.
    $(window).on("modal-closed", stop_video);
  };

  /**
   * Play the video.
   */
  var play_video = function(e) {
    if ($('video').length) {
      var video = $('video').get(0);

      if ($(this).data('video-replay') != undefined) {
        video.currentTime = 0;
      }

      video.play();
    }
  };

  /**
   * Pause/Stop the video.
   */
  var stop_video = function(e) {
    if ($('video').length) {
      $('video').get(0).pause();
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
    iva_video_player.init($);
  });
})(jQuery);

