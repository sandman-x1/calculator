const buttons = document.querySelectorAll('.btn')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const display = document.getElementById('displayMain')
const miniDisplay = document.getElementById('displaySec')
const clearButton = document.getElementById('clear')
const allClearButton = document.getElementById('allClear')
const equalButton = document.getElementById('equal')
const decimalButton = document.getElementById('decimal')

let firstOperand = ''
let secondOperand = ''
let currentOperator = ''
let addingSecondOperand = false
let showingResult = false

numbers.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operators.forEach((button) => 
    button.addEventListener('click', () => evaluate(button.textContent))
)

decimalButton.addEventListener('click', () => limitDecimal())
equalButton.addEventListener('click', () => showResult())
allClearButton.addEventListener('click', () => resetAll())
clearButton.addEventListener('click', () => clearMain())

function evaluate(operator) {
    firstOperand = display.textContent
    currentOperator = operator
    miniDisplay.textContent = `${firstOperand} ${operator}`
    addingSecondOperand = true
    showingResult = false
}

function showResult() {
    if (firstOperand === '' || showingResult === true) return
    secondOperand = display.textContent
    let result = Math.floor(operate(currentOperator, firstOperand, secondOperand) * 1000) / 1000;
    miniDisplay.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`
    if (currentOperator === '÷' && secondOperand === '0') result = 'Nope'
    display.textContent = result
    addingSecondOperand = true
    showingResult = true
}

function appendNumber(number) {
    if (display.textContent === '0' || addingSecondOperand === true) {
        resetScreen()
        addingSecondOperand = false
    }
    display.textContent += number
}

function limitDecimal() {
    let checkDecimal = display.textContent.includes('.')
    if (checkDecimal === false) {
        display.textContent +='.'
    } else if (checkDecimal === true) {
        return
    }
}

function resetScreen() {
    display.textContent = ''
}

function resetAll() {
    display.textContent = '0'
    miniDisplay.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperator = ''
}

function clearMain() {
    display.textContent = '0'
}

/* Math Functions */
function add(a, b) {
    return +a + +b
}

function subtract(a, b) {
    return +a - +b
}

function multiply(a, b) {
    return +a * +b
}

function divide(a, b) {
    return +a / +b
}

function percentage(a, b) {
    return (+a * +b) / 100
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        case '%':
            return percentage(a, b);
    }
}