let firstNumber = '';
let secondNumber = '';
let currentNumber = '';
let operatorChoice = '';
let operatorOptions = ['+', '-', '*', '/'];
const content = document.getElementById('result');
const operands = document.getElementsByClassName('operand');
const operandsArray = Array.prototype.slice.call(operands);
const operators = document.getElementsByClassName('operator');
const operatorsArray = Array.prototype.slice.call(operators);

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

function updateNumber(number, operand) {
    number += operand.value;
    console.log(number);
    updateDisplay(number);
    return number;
}

operatorsArray.forEach(operator => {
    operator.addEventListener('click', function() {
        console.log(operator.value);
        operatorChoice = operator.value;
        clearDisplay();
        getSecondNumber();
    });
});

operandsArray.forEach(operand => {
    operand.addEventListener('click', updateNumber(firstNumber, operand))
});
