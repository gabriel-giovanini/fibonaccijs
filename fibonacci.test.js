const fibonacci = require('../fibonacci'); // ajuste o caminho conforme seu projeto

describe('Função Fibonacci', () => {
  test('calcula corretamente valores da sequência', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  test('retorna undefined para n negativo', () => {
    expect(fibonacci(-1)).toBeUndefined();
    expect(fibonacci(-5)).toBeUndefined();
  });
});
