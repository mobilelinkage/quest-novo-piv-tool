$(document).ready(function() {
    // for inside the iva instead (function($) {
    const slider = document.getElementById('range-slider__range');
    const thumb = document.getElementById('range-slider__thumb');
    
    // Display selected value inside custom thumb
    function updateThumbText(value) {
        thumb.textContent = value;
    }
    // Move custom thumb along range as value is updated
    function updateThumbPosition(value) {
        const min = slider.min;
        const max = slider.max;
        // Calculate number of intervals
        const intervals = max - min;
        // Calculate width of interval, in percent
        const intervalLength = 100 / intervals;
        // Calculate which number interval a value is
        // i.e. min=5, value 6 is 1st interval
        const valueInterval = value - min;
        // Multiply interval by interval-length to determine position
        const position = valueInterval * intervalLength;
        // Calculate exact postion, offsetting to account for
        // width of the custom thumb
        const offset = (position / 100) * thumb.offsetWidth;
        // Move custom thumb!
        thumb.style.left = `calc(${position}% - ${offset}px)`;
    }
    
    slider.addEventListener("input", function() {
        // Fire click event to trigger numberpad event listener, hide numberpad
        slider.click();
        const value = slider.value;
        updateThumbText(value);
        updateThumbPosition(value);
    });

    // Show default value and ensure thumb is in
    // correct position on load
    const initialValue = slider.value;
    updateThumbText(initialValue);
    updateThumbPosition(initialValue);
    myTimeHorizonValue = initialValue;


// for inside the iva instead })(jQuery);
});


function showMe() {
    const slider = document.getElementById('range-slider__range');
    myTimeHorizonValue = slider.value;
//    console.log(myTimeHorizonValue);
    
}

