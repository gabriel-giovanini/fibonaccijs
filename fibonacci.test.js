const fibonacci = require('./fibonacci');

test('gera os 5 primeiros números de Fibonacci', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
});

test('retorna array vazio para n <= 0', () => {
  expect(fibonacci(0)).toEqual([]);
});

test('retorna apenas [0] para n = 1', () => {
  expect(fibonacci(1)).toEqual([0]);
});
