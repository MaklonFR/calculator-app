function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function square() {
    let display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function powerN() {
    let base = parseFloat(prompt("Masukkan basis:", ""));
    let exponent = parseFloat(prompt("Masukkan eksponen:", ""));
    document.getElementById('display').value = Math.pow(base, exponent);
}

function squareRoot() {
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function percentage() {
    let display = document.getElementById('display');
    display.value = parseFloat(display.value) / 100;
}

function modulus() {
    let display = document.getElementById('display');
    let values = display.value.split('%');
    if (values.length === 2) {
        display.value = parseFloat(values[0]) % parseFloat(values[1]);
    }
}

function integerDivision() {
    let display = document.getElementById('display');
    let values = display.value.split('//');
    if (values.length === 2) {
        display.value = Math.floor(parseFloat(values[0]) / parseFloat(values[1]));
    }
}
