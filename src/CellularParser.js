import Parser from './Parser';
import TokenTypes from './TokenTypes';
import NumberParselet from './parselets/NumberParselet';
import NameParselet from './parselets/NameParselet';
import BinaryOperatorParselet from './parselets/BinaryOperatorParselet';

const Precedence = {
  SUM: 1,
  PRODUCT: 2,
};

export default class CellularParser extends Parser {
  constructor(expressionString) {
    super(expressionString);

    this.registerPrefixParselet(TokenTypes.NUMBER, new NumberParselet());
    this.registerPrefixParselet(TokenTypes.NAME, new NameParselet());

    this.infix(TokenTypes.PLUS, Precedence.SUM);
    this.infix(TokenTypes.TIMES, Precedence.PRODUCT);
  }

  infix(tokenType, precedence) {
    this.registerInfixParselet(tokenType, new BinaryOperatorParselet(precedence));
  }
}
