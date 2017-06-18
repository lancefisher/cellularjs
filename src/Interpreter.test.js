import Sheet from './Sheet';
import Interpreter from './Interpreter';

it('should parse a number', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output = interpreter.eval('12');
  expect(output).toBe(12);
});

it('should add two numbers', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output = interpreter.eval('1 + 2');
  expect(output).toBe(3);
});

it('should multiply two numbers', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output = interpreter.eval('2 * 3');
  expect(output).toBe(6);
});

it('should multiply and add', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output1 = interpreter.eval('1 + 2 * 3');
  expect(output1).toBe(7);
  const output2 = interpreter.eval('2 * 3 + 1');
  expect(output2).toBe(7);
});

it('should divide and add', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output1 = interpreter.eval('1 + 4 / 4');
  expect(output1).toBe(2);
  const output2 = interpreter.eval('4 / 4 + 1');
  expect(output2).toBe(2);
});

it('should subtract the second number from the first', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output = interpreter.eval('2 - 1');
  expect(output).toBe(1);
});

it('should divide the first number by the second', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output = interpreter.eval('4 / 2');
  expect(output).toBe(2);
});

it('should divide and subtract', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output1 = interpreter.eval('10 - 2 * 3');
  expect(output1).toBe(4);
  const output2 = interpreter.eval('2 * 3 - 2');
  expect(output2).toBe(4);
});

it('should divide, subtract and add', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output1 = interpreter.eval('10 - 2 * 3 + 6');
  expect(output1).toBe(10);
  const output2 = interpreter.eval('6 + 2 * 3 - 2');
  expect(output2).toBe(10);
});

it('should divide, subtract, add and multiply', () => {
  const sheet = new Sheet();
  const interpreter = new Interpreter(sheet);
  const output1 = interpreter.eval('20 / 10 - 2 * 3 + 6');
  expect(output1).toBe(2);
  const output2 = interpreter.eval('6 + 2 * 3 - 2 / 2');
  expect(output2).toBe(11);
});
