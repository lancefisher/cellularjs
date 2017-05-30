import {
  tokenize,
  Token,
  NAME,
  LPAREN,
  RPAREN,
  COLON,
  STRING,
  COMMA,
  NUMBER,
} from './tokenizer';

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
  new Token(NAME, 'SUM'),
  new Token(LPAREN, '('),
  new Token(NAME, 'A1'),
  new Token(COLON, ':'),
  new Token(NAME, 'B2'),
  new Token(RPAREN, ')'),
]);

tokensShouldBe('SUM(', [
  new Token(NAME, 'SUM'),
  new Token(LPAREN, '('),
]);

tokensShouldBe('SUM', [
  new Token(NAME, 'SUM'),
]);

// handles whitespace after name
tokensShouldBe('SUM (A1:B2)', [
  new Token(NAME, 'SUM'),
  new Token(LPAREN, '('),
  new Token(NAME, 'A1'),
  new Token(COLON, ':'),
  new Token(NAME, 'B2'),
  new Token(RPAREN, ')'),
]);

tokensShouldBe('SUM(A1, SUM(A2, A3))', [
  new Token(NAME, 'SUM'),
  new Token(LPAREN, '('),
  new Token(NAME, 'A1'),
  new Token(COMMA, ','),
  new Token(NAME, 'SUM'),
  new Token(LPAREN, '('),
  new Token(NAME, 'A2'),
  new Token(COMMA, ','),
  new Token(NAME, 'A3'),
  new Token(RPAREN, ')'),
  new Token(RPAREN, ')'),
]);

tokensShouldBe('"red"', [
  new Token(STRING, 'red'),
]);

tokensShouldBe('123', [
  new Token(NUMBER, '123'),
]);

tokensShouldBe('123.456', [
  new Token(NUMBER, '123.456'),
]);

tokensShouldThrow('12.34.56', TypeError);

tokensShouldBe('COUNTIF(D5:D11,"red")', [
  new Token(NAME, 'COUNTIF'),
  new Token(LPAREN, '('),
  new Token(NAME, 'D5'),
  new Token(COLON, ':'),
  new Token(NAME, 'D11'),
  new Token(COMMA, ','),
  new Token(STRING, 'red'),
  new Token(RPAREN, ')'),
]);
