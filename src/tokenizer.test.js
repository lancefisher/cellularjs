import { tokenize, Token, TokenTypes } from './tokenizer';

function tokensShouldBe(input, expected, only = false) {
  const itFn = only ? it.only : it;
  itFn(input, () => {
    const tokens = tokenize(input);
    expect(tokens).toEqual(expected);
  });
}

function tokensShouldThrow(input, expectedError) {
  function t() {
    tokenize(input);
  }
  it(input, () => {
    expect(t).toThrow(expectedError);
  });
}

tokensShouldBe.only = (input, expected) => {
  tokensShouldBe(input, expected, true);
};

// Example Excel formulas: https://exceljet.net/formulas
tokensShouldBe('SUM(A1:B2)', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.NAME, 'A1'),
  new Token(TokenTypes.COLON, ':'),
  new Token(TokenTypes.NAME, 'B2'),
  new Token(TokenTypes.RPAREN, ')'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('SUM(', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('SUM', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.EOF),
]);

// handles whitespace after name
tokensShouldBe('SUM (A1:B2)', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.NAME, 'A1'),
  new Token(TokenTypes.COLON, ':'),
  new Token(TokenTypes.NAME, 'B2'),
  new Token(TokenTypes.RPAREN, ')'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('SUM(A1, SUM(A2, A3))', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.NAME, 'A1'),
  new Token(TokenTypes.COMMA, ','),
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.NAME, 'A2'),
  new Token(TokenTypes.COMMA, ','),
  new Token(TokenTypes.NAME, 'A3'),
  new Token(TokenTypes.RPAREN, ')'),
  new Token(TokenTypes.RPAREN, ')'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('"red"', [
  new Token(TokenTypes.STRING, 'red'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('123', [
  new Token(TokenTypes.NUMBER, '123'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('123.456', [
  new Token(TokenTypes.NUMBER, '123.456'),
  new Token(TokenTypes.EOF),
]);

tokensShouldThrow('12.34.56', TypeError);

tokensShouldBe('COUNTIF(D5:D11,"red")', [
  new Token(TokenTypes.NAME, 'COUNTIF'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.NAME, 'D5'),
  new Token(TokenTypes.COLON, ':'),
  new Token(TokenTypes.NAME, 'D11'),
  new Token(TokenTypes.COMMA, ','),
  new Token(TokenTypes.STRING, 'red'),
  new Token(TokenTypes.RPAREN, ')'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('1 + 2', [
  new Token(TokenTypes.NUMBER, '1'),
  new Token(TokenTypes.PLUS, '+'),
  new Token(TokenTypes.NUMBER, '2'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('2 - 1', [
  new Token(TokenTypes.NUMBER, '2'),
  new Token(TokenTypes.MINUS, '-'),
  new Token(TokenTypes.NUMBER, '1'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('1 * 2', [
  new Token(TokenTypes.NUMBER, '1'),
  new Token(TokenTypes.TIMES, '*'),
  new Token(TokenTypes.NUMBER, '2'),
  new Token(TokenTypes.EOF),
]);

tokensShouldBe('4 / 2', [
  new Token(TokenTypes.NUMBER, '4'),
  new Token(TokenTypes.DIVIDE, '/'),
  new Token(TokenTypes.NUMBER, '2'),
  new Token(TokenTypes.EOF),
]);
