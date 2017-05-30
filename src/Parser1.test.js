import Parser from './Parser1';

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

