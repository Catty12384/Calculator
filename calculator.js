function clearDisplay() {
    document.form1.answer.value = '';
}

function sqrtValue() {
    document.form1.answer.value = Math.sqrt(eval(document.form1.answer.value));
}

function squareValue() {
    document.form1.answer.value = Math.pow(document.form1.answer.value, 2);
}

function appendValue(value) {
    document.form1.answer.value += value;
}

function calculate() {
    document.form1.answer.value = eval(document.form1.answer.value);
}
