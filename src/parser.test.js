import {
  Parser,
  OperatorExpression,
  NumberExpression,
} from './parser';

import {
  Token,
  TokenTypes,
} from './tokenizer';

it('consume gets first token', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  const consumedToken = parser.consume();
  const expectedToken = new Token(TokenTypes.NUMBER, '1');
  expect(consumedToken).toEqual(expectedToken);
});

it('lookAhead 0 returns current token', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  parser.consume();
  const lookAhead0Token = parser.lookAhead(0);
  expect(lookAhead0Token).toEqual(new Token(TokenTypes.PLUS, '+'));
});

it('lookAhead 1 returns next token', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  const consumed = parser.consume();
  expect(consumed).toEqual(new Token(TokenTypes.NUMBER, '1'));

  const lookAhead0Token = parser.lookAhead(1);
  expect(lookAhead0Token).toEqual(new Token(TokenTypes.NUMBER, '3'));
});

it('returns EOF when end of tokens is reached', () => {
  const expressionString = '1 + 3';
  const parser = new Parser(expressionString);

  expect(parser.consume()).toEqual(new Token(TokenTypes.NUMBER, '1'));
  expect(parser.consume()).toEqual(new Token(TokenTypes.PLUS, '+'));
  expect(parser.consume()).toEqual(new Token(TokenTypes.NUMBER, '3'));
  expect(parser.consume()).toEqual(new Token(TokenTypes.EOF));
});

it('1 + 2 * 3', () => {
  const expressionString = '1 + 2 * 3';
  const parser = new Parser(expressionString);

  const actual = parser.parseExpression();
  const expected = new OperatorExpression(
    new NumberExpression('1'),
    TokenTypes.PLUS,
    new OperatorExpression(
      new NumberExpression('2'),
      TokenTypes.TIMES,
      new NumberExpression('3'),
    ),
  );

  expect(actual).toEqual(expected);
});

it('1 * 2 + 3', () => {
  const expressionString = '1 * 2 + 3';
  const parser = new Parser(expressionString);

  const actual = parser.parseExpression();
  const expected = new OperatorExpression(
    new OperatorExpression(
      new NumberExpression('1'),
      TokenTypes.TIMES,
      new NumberExpression('2'),
    ),
    TokenTypes.PLUS,
    new NumberExpression('3'),
  );

  expect(actual).toEqual(expected);
});
