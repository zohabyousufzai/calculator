// script.js
var display = document.querySelector('.display');
var buttons = Array.from(document.querySelectorAll('.buttons button'));
var currentInput = ''; // Store current input for the display
// Function to update the display
function updateDisplay(value) {
    display.value = value;
}
// Function to handle button click
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = button.textContent;
        if (buttonValue === 'C') {
            currentInput = ''; // Clear input
            updateDisplay(currentInput);
        }
        else if (buttonValue === '=') {
            try {
                currentInput = eval(currentInput).toString(); // Evaluate the expression
                updateDisplay(currentInput);
            }
            catch (_a) {
                currentInput = 'Error'; // In case of invalid expression
                updateDisplay(currentInput);
            }
        }
        else {
            currentInput += buttonValue; // Append the clicked button value to input
            updateDisplay(currentInput);
        }
    });
});
