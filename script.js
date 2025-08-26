const display = document.getElementById('output-screen');

function buttonFunction(input) {
    display.value += input;
}

function result() {
    const expression = display.value;
    if (expression === "") { // If button pressed without any input value
        display.value = "";
    } else {
    const result = eval(expression);
    display.value = result;
    }
}

function clearInput() {
    display.value = "";
}

function square() {
    const square = display.value;
    if (square === "") { // If button pressed without any input value
        display.value = "";
     } else {
    const squareEvaluate = eval(square);
    const squareResult = squareEvaluate * squareEvaluate;
    display.value = squareResult;
    // Works without "equal to" button
     }
}

function squareRoot() {
    const root = display.value;
    if (root === "") { // If button pressed without any input value
        display.value = "";
     } else {
    const rootResult = eval(root);
    display.value = Math.sqrt(rootResult);
    // Works without "equal to" button
     }
}