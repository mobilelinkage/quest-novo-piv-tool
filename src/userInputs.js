// These functions will query the homepage and Results screen for user inputs and apply error handling
// As well as cover replace inputs that should not be user-accessible with divs to display the current value

function customUserInputs() {
    const [ realInputs, falseInputs ] = getUserInputs2();

    realInputs.forEach(input => {
        input.addEventListener('blur', () => {
            const userInputValue = verifyUserInput(input.value, input.id);
            const formattedValue = formatUserInput(userInputValue, input.id);
            input.value = formattedValue.toString();
        });
    });

    falseInputs.forEach(input => {
        input.style.display = 'none';

        const newInputDisplay = document.createElement('div');
        newInputDisplay.classList.add('false-input');
        if (input.nextSibling) {
            input.parentNode.removeChild(input.nextSibling);
        }
        input.parentNode.insertBefore(newInputDisplay, input.nextSibling);

        updateFalseInput(input, newInputDisplay);
    });
}

function getUserInputs2() {
    const realInputs = [];
    const falseInputs = [];
    const allInputs = document.querySelectorAll('.allInputs_InputCell input[type="text"]');

    allInputs.forEach(input => {
        if (!input.classList.contains('custom-user-input')) {
            realInputs.push(input);
        }
        else {
            falseInputs.push(input);
        }
    });
    return [realInputs, falseInputs];
}

function verifyUserInput(number, id) {
    let newNumber = parseFloat(number);

    if (newNumber < 0) {
        newNumber = 0;
    }
    if (newNumber > 100) {
        newNumber = 100;
    }
    if (id === 'myWorkingHoursInADay' && newNumber > 24) {
        newNumber = 24;
    }
    if (typeof newNumber !== 'number' ||  isNaN(newNumber)) {
        newNumber = 100; //todo Change to a default value?
    }

    return newNumber;
}

function formatUserInput(number, id) {
    let format;
    // todo This would be better if it were reading a specific attribute rather than an id
    if (id === 'myEmployeeHourlyCompensationID') {
        format = 'currency';
    } 
    else if (id === 'myWorkingHoursInADay') {
        format = 'none';
    }
    else {
        format = 'percentage';
    }

    const formatters = {
        'none': (number) => number.toFixed(1),
        'currency': (number) => number.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        'percentage': (number) => `${number.toFixed(2)}%`
    }

    return formatters[format](number);
}

function updateFalseInput(input, falseInput) {
    const userInputValue = verifyUserInput(input.value);
    const formattedValue = formatUserInput(userInputValue, input.id);
    falseInput.textContent = formattedValue;
}

