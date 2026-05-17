const celsiusParaFahrenheit = require('./temperatura');

test('deve converter 0°C para 32°F', () => {
    expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('deve converter 100°C para 212°F', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
});