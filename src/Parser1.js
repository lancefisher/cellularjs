import {
  tokenize,
} from './tokenizer';

export default class Parser {
  constructor(expressionString) {
    this.expressionString = expressionString;
    this.tokens = tokenize(this.expressionString);

    this.currentIndex = 0;

    this.prefixParselets = new Map();
    this.infixParselets = new Map();
  }

  // returns the next token
  consume() {
    if (this.currentIndex >= this.tokens.length) {
      throw new Error('Cannot consume. Index exceeds tokens length.');
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

  registerPrefixParselet(tokenType, parselet) {
    this.prefixParselets.set(tokenType, parselet);
  }

  registerInfixParselet(tokenType, parselet) {
    this.infixParselets.set(tokenType, parselet);
  }

  getPrecedence() {
    const token = this.lookAhead(0);
    const parselet = this.infixParselets.get(token.type);
    if (parselet) return parselet.precedence;
    return 0;
  }

  parseExpression(precedence = 0) {
    const leftToken = this.consume();
    const prefixParselet = this.prefixParselets.get(leftToken.type);
    if (!prefixParselet) {
      throw new TypeError(`Could not parse token of type: ${leftToken.type.toString()}`);
    }

    let leftExpression = prefixParselet.parse(this, leftToken);

    while (precedence < this.getPrecedence()) {
      const rightToken = this.consume();
      const infixParselet = this.infixParselets.get(rightToken.type);
      leftExpression = infixParselet.parse(this, leftExpression, rightToken);
    }

    return leftExpression;
  }
}
