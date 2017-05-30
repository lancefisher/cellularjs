import Parser from './Parser';
import TokenTypes from './TokenTypes';
import NumberParselet from './parselets/NumberParselet';
import BinaryOperatorParselet from './parselets/BinaryOperatorParselet';

const Precedence = {
  SUM: 1,
  PRODUCT: 2,
};

export default class CellularParser extends Parser {
  constructor(expressionString) {
    super(expressionString);

    this.registerPrefixParselet(TokenTypes.NUMBER, new NumberParselet());

    this.registerInfixParselet(TokenTypes.PLUS, new BinaryOperatorParselet(Precedence.SUM));
    this.registerInfixParselet(TokenTypes.TIMES, new BinaryOperatorParselet(Precedence.PRODUCT));
  }
}
