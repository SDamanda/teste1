let display = document.getElementById("display");
let currentInput = "";

function appendNumber(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (operator === '.' && currentInput.includes('.')) return;
    if (currentInput === "" && operator !== ".") return;
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = new Function('return ' + currentInput)();
        if (isNaN(result) || !isFinite(result)) {
            display.textContent = "Erro";
            currentInput = "";
            return;
        }
        if (currentInput.includes('%')) {
            result = eval(currentInput.replace('%', '/100'));
        }
        if (!Number.isInteger(result)) {
            result = result.toFixed(2);
        }
        currentInput = result.toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "Erro";
        currentInput = "";
    }
}

function clearDisplay() {
    currentInput = "";
    display.textContent = "0";
}


