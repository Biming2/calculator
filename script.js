let firstNumber = '';
let secondNumber = '';
let result;
let operator = '';
let operatorOptions = ['+', '-', '*', '/'];
const content = document.getElementById('result');
const operands = document.getElementsByClassName('operand');
const operandsArray = Array.prototype.slice.call(operands);
const operators = document.getElementsByClassName('operator');
const operatorsArray = Array.prototype.slice.call(operators);
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');

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
    a = parseInt(a);
    b = parseInt(b);

    switch(operator) {
        case '+':
            console.log('adding');
            result = add(a, b);
            break;
        case '-':
            console.log('subtracting');
            result = subtract(a, b);
            break;
        case '*':
            console.log('multiplying');
            result = multiply(a, b);
            break;
        case '/':
            console.log('dividing');
            result = divide(a, b);
            break;
        default:
            break;
    }

    return result;
}

function updateDisplay(result) {
    content.innerText = result;
}

function clearDisplay() {
    content.innerText = '';
}

operatorsArray.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function() {
        console.log(firstNumber);
        console.log(operatorBtn.value);
        operator = operatorBtn.value;
        secondNumber = firstNumber;
        firstNumber = '';
        clearDisplay();
    });
});

operandsArray.forEach(operand => {
    operand.addEventListener('click', function() {
        firstNumber += operand.value;
        updateDisplay(firstNumber);
    });
});

equal.addEventListener('click', function() {
    console.log(firstNumber, operator, secondNumber);
    result = operate(secondNumber, firstNumber, operator);
    console.log(result);
    updateDisplay(result);
    firstNumber = '';
    secondNumber = '';
});

clear.addEventListener('click', function() {
    console.log('CLEARING');
    clearDisplay();
    firstNumber = '';
    secondNumber = '';
    operator = '';
    console.log(firstNumber, secondNumber, operator);
    console.log('CLEARED');
})

sign.addEventListener('click', function() {
    firstNumber *= -1;
    console.log(firstNumber);
    updateDisplay(firstNumber);
});