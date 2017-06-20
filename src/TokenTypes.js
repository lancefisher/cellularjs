const TokenTypes = {
  NAME: Symbol('NAME'),
  LPAREN: Symbol('LPAREN'),
  RPAREN: Symbol('RPAREN'),
  COLON: Symbol('COLON'),
  STRING: Symbol('STRING'),
  COMMA: Symbol('COMMA'),
  NUMBER: Symbol('NUMBER'),
  PLUS: Symbol('PLUS'),
  MINUS: Symbol('MINUS'),
  TIMES: Symbol('TIMES'),
  DIVIDE: Symbol('DIVIDE'),
  EOF: Symbol('EOF'),
};

export default TokenTypes;
