
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);  //transforms user input into an integer
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationId, prevResult, initialResult, newResult) {
    const logEntry = {  //log entry into object
        operation: operationId,
        prevResult: prevResult,
        number: initialResult,
        result: newResult
    };
    logEntries.push(logEntry);  //push object into array
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if (
        calculationType !== "ADD" &&
        calculationType !== "SUBTRACT" &&
        calculationType !== "MULTIPLY" &&
        calculationType !== "DIVIDE" ||
        !enteredNumber //enteredNumber is falsy (0), ! returns true
    ) {
        return;
    }
    if (calculationType === "ADD") {
        currentResult += enteredNumber;
        mathOperator = "+";
    } else if (calculationType === "SUBTRACT") {
        currentResult -= enteredNumber;
        mathOperator = "-";
    } else if (calculationType === "MULTIPLY") {
        currentResult *= enteredNumber;
        mathOperator = "*";
    } else if (calculationType === "DIVIDE") {
        currentResult /= enteredNumber;
        mathOperator = "/";
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);

    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult("ADD");
}
function subtract() {
    calculateResult("SUBTRACT");
}
function multiply() {
    calculateResult("MULTIPLY");
}
function divide() {
    calculateResult("DIVIDE");
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


