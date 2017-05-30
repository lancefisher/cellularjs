import {
  tokenize,
  TokenTypes,
} from './tokenizer';

class NumberExpression {
  constructor(value) {
    this.number = Number(value);
  }
}

class OperatorExpression {
  constructor(left, operator, right) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
}

const prefixParslets = new Map([
  [TokenTypes.NUMBER, (parser, token) => new NumberExpression(token.value)],
]);

function binaryOperatorParselet(parser, leftExpression, token) {
  const rightExpression = parser.parseExpression();
  return new OperatorExpression(leftExpression, token.type, rightExpression);
}

const infixParslets = new Map([
  [TokenTypes.PLUS, binaryOperatorParselet],
  [TokenTypes.MULTIPLY, binaryOperatorParselet],
]);

class Parser {
  constructor(expressionString) {
    this.expressionString = expressionString;
    this.tokens = tokenize(this.expressionString);
    this.currentIndex = -1;
  }

  // returns the next token
  consume() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.tokens.length) {
      throw new Error('Cannot cosume. Index exceeds tokens length.');
    }
    const token = this.tokens[this.currentIndex];
    return token;
  }

  // returns the upcoming token n spots ahead. lookAhead(1) returns the next token.
  lookAhead(n) {
    const i = this.currentIndex + n;
    if (i > this.tokens.length) {
      throw new Error('LookAhead is beyond the end of tokens');
    }
    return this.tokens[i];
  }

  parseExpression() {
    const token = this.consume();
    const prefixParslet = prefixParslets.get(token.type);
    if (!prefixParslet) {
      throw new TypeError(`Could not parse token of type: ${token.type.toStringTag}`);
    }

    const leftExpression = prefixParslet(this, token);

    const rightToken = this.lookAhead(1);
    const infixParslet = infixParslets.get(rightToken.type);
    if (!infixParslet) return leftExpression;

    this.consume();
    return infixParslet(this, leftExpression, rightToken);
  }

}

export default Parser;
