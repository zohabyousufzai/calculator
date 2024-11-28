// script.js


// Function to handle button click
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let buttonValue = button.textContent;

        if (buttonValue === 'C') {
            currentInput = '';  // Clear input
            updateDisplay(currentInput);
        } else if (buttonValue === '=') {
            try {
                currentInput = eval(currentInput).toString();  // Evaluate the expression
                updateDisplay(currentInput);
            } catch {
                currentInput = 'Error';  // In case of invalid expression
                updateDisplay(currentInput);
            }
        } else {
            currentInput += buttonValue;  // Append the clicked button value to input
            updateDisplay(currentInput);
        }
    });
});
