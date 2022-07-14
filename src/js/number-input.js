$(document).ready(function() {
    // for inside the iva instead (function($) {

    // const userInput = document.getElementById('number-input__input');
    const userInput = document.getElementById('numberOfIndividualsID');
    const numberDisplay = document.getElementById('number-input__display');
    const numberInput = document.getElementById('number-input');
    const numberButtons = document.querySelectorAll('.number-input__button');
    const deleteButton = document.querySelector('.number-input__delete');

    function getUserInput(button) {
        // Get the value of the button clicked
        return button.value;
    }
    function displayValue(value) {
        // Display value as comma-limited string
        // ORIGINAL
        // numberDisplay.textContent = Number(value).toLocaleString('en-US');

        // NEW
        // Remove any commas from value before converting to a number
        const newValue = value.replace(',', '');
        numberDisplay.textContent = Number(newValue).toLocaleString('en-US');
    }
    function showNumberpad() {
        numberInput.classList.remove('input-hide');
    }
    function hideNumberpad() {
        numberInput.classList.add('input-hide');
    }
    function triggerChange() {
        userInput.onchange();
    }

    // Add the value of the button clicked
    // to the input field
    numberButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // const currentValue = userInput.value;
            // Remove any commas from value before converting to a number
            const currentValue = userInput.value.replace(',', '');
            const newValue = currentValue + getUserInput(button);
            // Check max threshold before adding new value
            if (Number(newValue) <= 999999999) {
                userInput.value = newValue;
                displayValue(newValue);
                triggerChange();
            }
        });
    })
    // Allow user to delete last number
    // from input field
    deleteButton.addEventListener('click', function(event) {
        event.preventDefault();
        const currentValue = userInput.value;
        if (currentValue) {
            const newValue = currentValue.slice(0, -1);
            userInput.value = newValue;
            displayValue(newValue);
            triggerChange();
        }
    });
    // Reveal numberpad when display div is clicked
    numberDisplay.addEventListener('click', showNumberpad);
    // If user clicks outside number input element,
    // hide numberpad
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('number-input')) {
            hideNumberpad();
        }
    });


    // Display initial value on page load
    displayValue(userInput.value);

// for inside the iva instead })(jQuery);
});