function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from').value;
    let result = '';

    if (fromUnit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        const kelvin = temperature + 273.15;
        result = `${temperature}°C = ${fahrenheit.toFixed(2)}°F / ${kelvin.toFixed(2)}K`;
    } else if (fromUnit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        const kelvin = (temperature - 32) * 5/9 + 273.15;
        result = `${temperature}°F = ${celsius.toFixed(2)}°C / ${kelvin.toFixed(2)}K`;
    } else if (fromUnit === 'kelvin') {
        const celsius = temperature - 273.15;
        const fahrenheit = (temperature - 273.15) * 9/5 + 32;
        result = `${temperature}K = ${celsius.toFixed(2)}°C / ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById('result').textContent = result;
}