import {
  tokenize,
  Token,
  TokenTypes,
} from './tokenizer';

function tokensShouldBe(input, expected, only = false) {
  // console.log(input);
  // console.log(expected);

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
]);

tokensShouldBe('SUM(', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
]);

tokensShouldBe('SUM', [
  new Token(TokenTypes.NAME, 'SUM'),
]);

// handles whitespace after name
tokensShouldBe('SUM (A1:B2)', [
  new Token(TokenTypes.NAME, 'SUM'),
  new Token(TokenTypes.LPAREN, '('),
  new Token(TokenTypes.NAME, 'A1'),
  new Token(TokenTypes.COLON, ':'),
  new Token(TokenTypes.NAME, 'B2'),
  new Token(TokenTypes.RPAREN, ')'),
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
]);

tokensShouldBe('"red"', [
  new Token(TokenTypes.STRING, 'red'),
]);

tokensShouldBe('123', [
  new Token(TokenTypes.NUMBER, '123'),
]);

tokensShouldBe('123.456', [
  new Token(TokenTypes.NUMBER, '123.456'),
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
]);

tokensShouldBe('1 + 2', [
  new Token(TokenTypes.NUMBER, '1'),
  new Token(TokenTypes.PLUS, '+'),
  new Token(TokenTypes.NUMBER, '2'),
]);
