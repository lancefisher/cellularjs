import {
  tokenize,
  TokenTypes,
} from './tokenizer';

const tokenToPrecedenceMap = new Map([
  [TokenTypes.PLUS, 1],
  [TokenTypes.TIMES, 2],
]);

// Expressions //
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

// Parselets //
const prefixParslets = new Map([
  [TokenTypes.NUMBER, (parser, token) => new NumberExpression(token.value)],
]);

function binaryOperatorParselet(parser, leftExpression, token) {
  const precedence = tokenToPrecedenceMap.get(token.type);
  const rightExpression = parser.parseExpression(precedence);
  return new OperatorExpression(leftExpression, token.type, rightExpression);
}

const infixParslets = new Map([
  [TokenTypes.PLUS, binaryOperatorParselet],
  [TokenTypes.TIMES, binaryOperatorParselet],
]);

// The Parser //

class Parser {
  constructor(expressionString) {
    this.expressionString = expressionString;
    this.tokens = tokenize(this.expressionString);
    this.currentIndex = 0;
  }

  // returns the next token
  consume() {
    // console.log('consume');
    if (this.currentIndex >= this.tokens.length) {
      throw new Error('Cannot cosume. Index exceeds tokens length.');
    }
    const token = this.tokens[this.currentIndex];
    this.currentIndex += 1;
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

  getPrecedence() {
    const token = this.lookAhead(0);
    const precedence = tokenToPrecedenceMap.get(token.type);
    if (precedence) return precedence;
    return 0;
  }

  parseExpression(precedence = 0) {
    console.log('parseExpression', precedence);

    const leftToken = this.consume();
    const prefixParslet = prefixParslets.get(leftToken.type);
    if (!prefixParslet) {
      throw new TypeError(`Could not parse token of type: ${leftToken.type.toStringTag}`);
    }

    let leftExpression = prefixParslet(this, leftToken);

    while (precedence < this.getPrecedence()) {
      const rightToken = this.consume();
      const infixParslet = infixParslets.get(rightToken.type);
      leftExpression = infixParslet(this, leftExpression, rightToken);
    }

    return leftExpression;
  }

}

export {
  Parser,
  OperatorExpression,
  NumberExpression,
};
