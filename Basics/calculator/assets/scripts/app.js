
const defaultResult = 10;
let currentResult = defaultResult;





function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2);


let calcDescription = `The result \n is ${currentResult}`;
outputResult(currentResult, calcDescription);