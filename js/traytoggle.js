$(document).ready(function() {
// for inside the iva instead (function($) {




/* toggle the tray */
//$('.inputsTrayTrigger').hammer().on('tap', function() {
$('.inputsTrayTrigger').click(function() {
	$('.inputsTray').toggleClass("fullSize");
	$('.number-input__container').toggleClass("flow-up");
	$('#showIndustry').toggleClass("flow-up");
});

//$('.trayCalculateButton').hammer().on('tap', function() {
$(".trayCalculateButton").click(function() {
	$('.inputsTray').addClass("fullSize");
});



// for inside the iva instead })(jQuery);
});