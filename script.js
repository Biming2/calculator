let firstNumber = '';
let secondNumber = '';
let result = 0;
let operator = '';
let operatorOptions = ['+', '-', '*', '/'];
const operands = document.getElementsByClassName('operand');
const operandsArray = Array.prototype.slice.call(operands);
const operators = document.getElementsByClassName('operator');
const operatorsArray = Array.prototype.slice.call(operators);
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const deleteBtn = document.getElementById('delete');
const content = document.getElementById('result');

function add(a, b) {
    let result = a + b;
    return result;
}

function subtract(a, b) {
    let result = a - b;
    return result;
}

function multiply(a, b) {
    let result = a * b;
    return result;
}

function divide(a, b) {
    let result = a / b;
    return result;
}

function operate(a, b, operator) {
    let result;
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            break;
    }

    console.log(`${a} ${operator} ${b} = ${result}`);

    return result;
}

function updateDisplay(result) {
    content.innerText = result;
}

function clearDisplay() {
    content.innerText = '';
}

function appendNumber(number) {
    if(firstNumber === '' && number === '.') {
        firstNumber += '0.';
    }
    if(number === '.' && firstNumber.indexOf('.') > -1) {
        return;
    }
    if(firstNumber.charAt(0) === '0' && number === '0') {
        return;
    }
    if(result != 0 && operator === '') {
        result = 0;
        firstNumber = '';
        secondNumber = '';
        operator = '';
        
    }
    firstNumber += number;
    updateDisplay(firstNumber);
}

function evaluate() {
    if(operator === '' && firstNumber === '') {
        updateDisplay(result);
    }
    else if(operator === '' && firstNumber != '') {
        updateDisplay(firstNumber);
    }
    else {
        result = operate(secondNumber, firstNumber, operator);
        updateDisplay(result);
        firstNumber = '';
        secondNumber = '';
        operator = '';
    }
}

function deleteNumber() {
    firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    updateDisplay(firstNumber);
}

function clearButton() {
    clearDisplay();
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = 0;
}

function operatorButton(operatorValue) {
    if(firstNumber != '' && secondNumber != '') {
        if(result > 0) {
            secondNumber = result;
        }
        result = operate(secondNumber, firstNumber, operator);
        updateDisplay(result);
        secondNumber = firstNumber;
        firstNumber = '';
    }
    if(firstNumber === '') {
        operator = operatorValue;
        secondNumber = result;
    }
    else {
        operator = operatorValue;
        secondNumber = firstNumber;    
        firstNumber = '';
    }
}

operatorsArray.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => operatorButton(operatorBtn.value));
});

operandsArray.forEach(operand => {
    operand.addEventListener('click', () => appendNumber(operand.value))
});

equal.addEventListener('click', () => evaluate());

clear.addEventListener('click', () => clearButton());

deleteBtn.addEventListener('click', () => deleteNumber());

sign.addEventListener('click', function() {
    if(firstNumber != '') {
        firstNumber *= -1;
        updateDisplay(firstNumber);
    }
});

document.addEventListener('keyup', function(event) {
    if(event.key >= 0 && event.key <= 9) {
        appendNumber(event.key);
    }
    
    if(event.key === '.') {
        appendNumber(event.key);
    }
    if(event.key === '=' || event.key === 'Enter') {
        evaluate();
    }
    if(event.key === 'Backspace') {
        deleteNumber();
    }
    
    if(event.key === 'Escape') {
        clearButton();
    }
    if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        operatorButton(event.key);
    }
});
