function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value
            .replace(/\^/g, '**') // Ubah ^ menjadi ** untuk pangkat
            .replace(/\/\//g, '/'); // Ubah // menjadi /

        let result = new Function('return ' + expression)();

        if (document.getElementById('display').value.includes('//')) {
            result = Math.floor(result); // Jika "//" digunakan, buat hasilnya menjadi integer
        }

        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function square() {
    let display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function powerN() {
    let display = document.getElementById('display');
    display.value += '^'; // Menambahkan simbol ^ agar bisa digunakan sebagai pangkat
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
    display.value += '%'; // Menambahkan % agar bisa digunakan sebagai modulus
}

function integerDivision() {
    let display = document.getElementById('display');
    display.value += '//'; // Menambahkan "//" agar bisa digunakan untuk pembagian bulat
}
