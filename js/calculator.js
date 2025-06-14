// Display Variables

let displayValue = [];
let screenText = document.querySelector('.screen-text');
let screenDisplayValue;

// Check Variables

let checkMultiply = false;
let checkDivide = false;
let checkSubtract = false;
let checkAdd = false;

// Operand & Operator Variables
let number1;
let number2;
let mathSign;

// Operator Functions

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Operate Function

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

window.addEventListener('click', (event) => {
    if (event.target.classList[0] !== 'btn') {
        return;
    } else if (event.target.classList[1] !== 'operator') {
    
        if (event.target.classList[1] == 'ac') {
            resetValues();
        } else {
            if (event.target.classList[1] == 'number') {
                if (displayValue.length < 11) {
                displayValue.push(event.target.textContent);
                screenDisplayValue = displayValue.join('');
                updateDisplay(screenDisplayValue);
                } else if (number1 || mathSign) {
                    if (displayValue == '+' || displayValue == '-' || displayValue == 'x' || displayValue == '/') {
                        resetDisplay();
                        displayValue.push(event.target.textContent);
                        screenDisplayValue = displayValue.join('');
                        updateDisplay(screenDisplayValue);
                    } else {
                    displayValue.push(event.target.textContent);
                    screenDisplayValue = displayValue.join('');
                    updateDisplay(screenDisplayValue);
                    }
                } else {
                    return;
                }
            }
        }        
    } else {
        if (event.target.classList[2] == 'add' || event.target.classList[2] == 'subtract' || event.target.classList[2] == 'multiply' || event.target.classList[2] == 'divide') {
            checkOperators(displayValue);
            if (!checkAdd && !checkDivide && !checkMultiply && !checkSubtract) {
                updateDisplay(event.target.textContent);
                number1 = Number(screenDisplayValue);
                mathSign = event.target.textContent;
                resetDisplay();
            } else {
                return;
            }
            
        } else if (event.target.classList[2] == 'equals' && number1 && mathSign) {
            number2 = Number(screenDisplayValue);
            if (mathSign == '+') {
                screenDisplayValue = operate(add, number1, number2);
                updateDisplay(screenDisplayValue);
            } else if (mathSign == '-') {
                screenDisplayValue = operate(subtract, number1, number2);
                updateDisplay(screenDisplayValue);
            } else if (mathSign == 'x') {
                screenDisplayValue = operate(multiply, number1, number2);
                updateDisplay(screenDisplayValue);
            } else if (mathSign == '/') {
                screenDisplayValue = operate(divide, parseFloat(number1), parseFloat(number2));
                updateDisplay(screenDisplayValue);
            } else {
                return;
            }
        }
    }
});

// Update Display function

function updateDisplay(userInput) {
    screenText.textContent = userInput;
}

// Check for already existing operators

function checkOperators(array) {
    checkMultiply = array.includes('x');
    checkDivide = array.includes('/');
    checkSubtract = array.includes('-');
    checkAdd = array.includes('+');
}

function resetDisplay() {

    screenDisplayValue = null;
    displayValue = [];
}

function resetValues() {
    screenText.textContent = '';
    displayValue = [];
    checkMultiply = false;
    checkDivide = false;
    checkSubtract = false;
    checkAdd = false;
    number1 = false;
    number2 = false;
    mathSign = false;
}