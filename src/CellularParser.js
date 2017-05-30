import Parser from './Parser1';
import TokenTypes from './TokenTypes';
import NumberParselet from './parselets/NumberParselet';
import BinaryOperatorParselet from './parselets/BinaryOperatorParselet';

export default class CellularParser extends Parser {
  constructor(expressionString) {
    super(expressionString);

    this.registerPrefixParselet(TokenTypes.NUMBER, new NumberParselet());

    this.registerInfixParselet(TokenTypes.PLUS, new BinaryOperatorParselet(1));
    this.registerInfixParselet(TokenTypes.TIMES, new BinaryOperatorParselet(2));
  }
}
