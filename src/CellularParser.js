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
  const precedence = parser.precedenceFromTokenType.get(rightToken.type);
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

    this.registerPrefixParseFn(TokenTypes.NUMBER, parseNumber);
    this.registerPrefixParseFn(TokenTypes.NAME, parseName);

    this.registerInfixParseFn(TokenTypes.PLUS, parseBinaryOperator);
    this.registerInfixParseFn(TokenTypes.TIMES, parseBinaryOperator);

    this.setPrecedence(TokenTypes.PLUS, 1);
    this.setPrecedence(TokenTypes.TIMES, 2);
  }

}

