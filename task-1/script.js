function convert() {
    const userUnit = document.getElementById('unit').value;
    const convertTo = document.getElementById('convert-to').value;
    const userValue = parseFloat(document.getElementById('temp-value').value);
    let convertedValue;

    switch(convertTo) {
        case 'Celcius':{
            if(userUnit === convertTo) {
                convertedValue = userValue;
            } else {
                if(userUnit === 'Fahrenheit') {
                    convertedValue = (userValue - 32) * 5/9;
                } else {
                    convertedValue = userValue - 273.15;
                }
            }
            document.getElementById('converted').innerText = convertedValue.toFixed(2) + '\u00B0 C';
        }
        break;
        case 'Fahrenheit':{
            if(userUnit === convertTo) {
                convertedValue = userValue;
            } else {
                if(userUnit === 'Celcius') {
                    convertedValue = (userValue * 9/5) + 32;
                } else {
                    convertedValue = (userValue - 273.15) * 9/5 + 32;
                }
            }
            document.getElementById('converted').innerText = convertedValue.toFixed(2) + '\u00B0 F';
        }
        break;
        case 'Kelvin':{
            if(userUnit === convertTo) {
                convertedValue = userValue;
            } else {
                if(userUnit === 'Celcius') {
                    convertedValue = userValue + 273.15;
                } else {
                    convertedValue = (userValue - 32) * 5/9 + 273.152;
                }
            }
            document.getElementById('converted').innerText = convertedValue.toFixed(2) + ' K';
        }
        break;
    }
}