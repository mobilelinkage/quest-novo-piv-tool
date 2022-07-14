$(document).ready(function() {
// for inside the iva instead (function($) {




/* toggle the tray */
//$('.inputsTrayTrigger').hammer().on('tap', function() {
$('.inputsTrayTrigger').click(function() {
	$('.inputsTray').toggleClass("fullSize");
		//$('.number-input__container').toggleClass("flow-up");
		//$('#showIndustry').toggleClass("flow-up");

		// switch industry dropdown open direction based on tray status
		$('#showIndustry').toggleClass("flow-up");
		$('#showIndustry').toggleClass("flow-down");

		// switch industry dropdown open direction based on tray status
		$('#number-input').toggleClass("flow-up");
		$('#number-input').toggleClass("flow-down");
	
});

//$('.trayCalculateButton').hammer().on('tap', function() {
$(".trayCalculateButton").click(function() {
	// $('.inputsTray').addClass("fullSize");

	//console.log("industry", $('#showIndustry').classList.value);
	console.log("we flowing up?", $('#showIndustry').hasClass("flow-up"));
	//console.log("#showIndustry", $("showIndustry").outerHTML);

	// now that we're only results we only want dropdowns that drop down
	if ($('#showIndustry').hasClass("flow-up")) {
		$('#showIndustry').removeClass("flow-up");
		$('#number-input').removeClass("flow-up");
	}
	
	// ensure that we're not going to be duplicating class by getting rid of them first
	if (!$('#showIndustry').hasClass("flow-down")) {
		$('#showIndustry').addClass("flow-down");
		$('#number-input').addClass("flow-down");
	}
	
});



// for inside the iva instead })(jQuery);
});