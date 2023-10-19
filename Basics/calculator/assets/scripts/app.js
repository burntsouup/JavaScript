
const defaultResult = 10;
let currentResult = defaultResult;

let calcDescription = `The result \n is ${currentResult}`;



function add(num1, num2) {
    const result = num1 + num2;
    alert('this is the result ' + result);
}

add(1, 2);

outputResult(currentResult, calcDescription);