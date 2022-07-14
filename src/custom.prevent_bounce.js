/**
 * custom.prevent_bounce.js
 * UIWebView deprecation: evaluation version will now be available in early 2019 (previously was supposed to be released on December 14th)
 * PREVENT touchMove
 */



(function($) {
  document.addEventListener('touchmove', event=>{
    event.preventDefault()},
  {capture: false, once:false, passive: false});
})(jQuery);

