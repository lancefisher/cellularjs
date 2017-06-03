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
