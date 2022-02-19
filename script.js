let displayValue = 0

const buttons = document.querySelectorAll('.btn')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const display = document.getElementById('displayMain')

display.textContent = displayValue



function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}