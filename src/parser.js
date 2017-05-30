import {
  tokenize,
} from './tokenizer';

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

  // returns the upcoming token n spots ahead
  lookAhead(n) {
    const i = this.currentIndex + n;
    if (i > this.tokens.length) {
      throw new Error('LookAhead is beyond the end of tokens');
    }
    return this.tokens[i];
  }

}

export default Parser;
