
function add(a, b) {
    return a+b
}

function subtract(a, b) {
    return a-b
}

function multiply(a, b) {
    return a*b
}

function divide(a, b) {
    return a/b
}

let number1 = ''
let operator = ''
let number2 = ''

function operate(number1, operator, number2) {
    if (operator === "+") {
        return add(number1, number2)
    }

    else if (operator === "-") {
        return subtract(number1, number2)
    }

    else if (operator === "/") {
        return divide(number1, number2)
    }

    else {
        return multiply(number1, number2)
    }
}

const displayText = document.querySelector("#displayText")
const buttons = document.querySelectorAll('.number');

let currentNumber = ''
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const number = event.target.textContent
        currentNumber += number
        displayText.textContent = currentNumber
    })
})

const operators = document.querySelectorAll('.operator')

operators.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.textContent
        if (value === 'C') {
            number1 = ''
            number2 = ''
            operator = ''
            currentNumber = ''
            displayText.textContent = ''
            return;
        }
        if (value !== '=') {
            number1 = parseFloat(currentNumber)
            currentNumber = ''
            displayText.textContent = currentNumber
            operator = value
        }
        
        else {
            number2 = parseFloat(currentNumber)
            displayText.textContent = operate(parseFloat(number1), operator, parseFloat(number2))
        }
    })
})

