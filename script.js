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

operatorsArray.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', function() {
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
            operator = operatorBtn.value;
            secondNumber = result;
        }
        else {
            operator = operatorBtn.value;
            secondNumber = firstNumber;    
            firstNumber = '';
        }
    });
});

operandsArray.forEach(operand => {
    operand.addEventListener('click', function() {
        if(result != 0 && operator === '') {
            result = 0;
            firstNumber = '';
            secondNumber = '';
            operator = '';
            
        }
        firstNumber += operand.value;
        updateDisplay(firstNumber);
    });
});

equal.addEventListener('click', function() {
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
});

clear.addEventListener('click', function() {
    clearDisplay();
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = 0;
})

sign.addEventListener('click', function() {
    if(firstNumber != '') {
        firstNumber *= -1;
        updateDisplay(firstNumber);
    }
});

deleteBtn.addEventListener('click', function() {
    firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    updateDisplay(firstNumber);
});