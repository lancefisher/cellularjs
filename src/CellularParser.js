import Parser from './Parser';
import TokenTypes from './TokenTypes';
import {
  OperatorExpression,
  NameExpression,
  NumberExpression,
} from './expressions';

/**
 * Infix Parse Functions. Each should have a signature as:
 * fn(parser, leftExpression, rightToken) returns expression
 */

function parseBinaryOperator(parser, leftExpression, rightToken) {
  const precedence = parser.tokenTypeToPrecedence.get(rightToken.type);
  const rightExpression = parser.parseExpression(precedence);
  return new OperatorExpression(leftExpression, rightToken.type, rightExpression);
}

/**
 * Prefix Parse Functions. Each should have a signature as:
 * fn(parser, leftToken) returns expression
 */

function parseName(parser, leftToken) {
  return new NameExpression(leftToken.value);
}

function parseNumber(parser, leftToken) {
  const num = Number(leftToken.value);
  return new NumberExpression(num);
}

export default class CellularParser extends Parser {
  constructor(expressionString) {
    super(expressionString);

    this.prefixParseFns.set(TokenTypes.NUMBER, parseNumber);
    this.prefixParseFns.set(TokenTypes.NAME, parseName);

    this.infixParseFns.set(TokenTypes.PLUS, parseBinaryOperator);
    this.infixParseFns.set(TokenTypes.TIMES, parseBinaryOperator);

    this.tokenTypeToPrecedence.set(TokenTypes.PLUS, 1);
    this.tokenTypeToPrecedence.set(TokenTypes.TIMES, 2);
  }
}
