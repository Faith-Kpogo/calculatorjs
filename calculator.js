let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('result').value = displayValue;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
// ... (previous code) ...

function deleteSpace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
  }
  