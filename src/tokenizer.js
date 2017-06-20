import TokenTypes from './TokenTypes';

class Token {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
}

function tokenize(input) {
  let current = 0;
  const tokens = [];

  while (current < input.length) {
    let char = input[current];

    if (char === '(') {
      tokens.push(new Token(TokenTypes.LPAREN, '('));
      current += 1;
      continue;
    }

    if (char === ')') {
      tokens.push(new Token(TokenTypes.RPAREN, ')'));
      current += 1;
      continue;
    }

    const WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current += 1;
      continue;
    }

    if (char === ':') {
      tokens.push(new Token(TokenTypes.COLON, ':'));
      current += 1;
      continue;
    }

    if (char === ',') {
      tokens.push(new Token(TokenTypes.COMMA, ','));
      current += 1;
      continue;
    }

    if (char === '+') {
      tokens.push(new Token(TokenTypes.PLUS, '+'));
      current += 1;
      continue;
    }
    if (char === '-') {
      tokens.push(new Token(TokenTypes.MINUS, '-'));
      current += 1;
      continue;
    }

    if (char === '*') {
      tokens.push(new Token(TokenTypes.TIMES, '*'));
      current += 1;
      continue;
    }
    if (char === '/') {
      tokens.push(new Token(TokenTypes.DIVIDE, '/'));
      current += 1;
      continue;
    }

    if (char === '"') {
      let value = '';
      current += 1;
      char = input[current]; // skip opening "
      while (char !== '"') {
        value += char;
        current += 1;
        char = input[current];
      }
      current += 1;
      char = input[current]; // skip closing "
      tokens.push(new Token(TokenTypes.STRING, value));
      continue;
    }

    const ALPHA = /[a-z]/i;
    const ALPHANUM = /[a-z0-9]/i;
    if (ALPHA.test(char)) {
      let value = '';
      while (char !== undefined && ALPHANUM.test(char)) {
        value += char;
        current += 1;
        char = input[current];
      }
      tokens.push(new Token(TokenTypes.NAME, value));
      continue;
    }

    const NUM = /[0-9]/i;
    const NUM_OR_DOT = /[0-9.]/i;
    if (NUM.test(char)) {
      let value = '';
      let foundDot = false;
      while (char !== undefined && NUM_OR_DOT.test(char)) {
        const isDot = char === '.';
        if (foundDot && isDot) throw new TypeError('Invalid number format x.x.');
        if (isDot) foundDot = true;
        value += char;
        current += 1;
        char = input[current];
      }
      tokens.push(new Token(TokenTypes.NUMBER, value));
      continue;
    }

    throw new TypeError(
      `Unexpected character: ${char} at ${current} in '${input}'`,
    );
  }

  tokens.push(new Token(TokenTypes.EOF));
  return tokens;
}

export { tokenize, Token, TokenTypes };
