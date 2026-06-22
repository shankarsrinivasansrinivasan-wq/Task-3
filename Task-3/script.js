document.getElementById('convertBtn').addEventListener('click', function() {
    
    const tempInput = document.getElementById('tempInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const errorMsg = document.getElementById('errorMsg');
    const resultDisplay = document.getElementById('resultDisplay');

    
    if (tempInput === "" || isNaN(tempInput)) {
        errorMsg.style.display = 'block';
        resultDisplay.innerText = "Waiting for valid input...";
        return;
    }
    
    
    errorMsg.style.display = 'none';

    const temp = parseFloat(tempInput);
    let result;
    let unitLabel;

    
    if (fromUnit === toUnit) {
        result = temp;
    } else {
        // Step A: Convert the starting unit into a baseline (Celsius)
        let tempInCelsius;
        if (fromUnit === 'C') {
            tempInCelsius = temp;
        } else if (fromUnit === 'F') {
            tempInCelsius = (temp - 32) * 5 / 9;
        } else if (fromUnit === 'K') {
            tempInCelsius = temp - 273.15;
        }

    
        if (toUnit === 'C') {
            result = tempInCelsius;
        } else if (toUnit === 'F') {
            result = (tempInCelsius * 9 / 5) + 32;
        } else if (toUnit === 'K') {
            result = tempInCelsius + 273.15;
        }
    }

    
    
    if (toUnit === 'C') unitLabel = '°C';
    else if (toUnit === 'F') unitLabel = '°F';
    else if (toUnit === 'K') unitLabel = 'K';

    
    const finalResult = Math.round(result * 100) / 100;

    
    const originalUnitLabel = fromUnit === 'K' ? 'K' : '°' + fromUnit;
    resultDisplay.innerText = `${temp}${originalUnitLabel} = ${finalResult}${unitLabel}`;
});