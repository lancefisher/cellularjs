import NumberExpression from '../expressions/NumberExpression';
import PrefixParselet from './PrefixParselet';

export default class NumberParselet extends PrefixParselet {
  parse(parser, token) {  // eslint-disable-line class-methods-use-this
    return new NumberExpression(Number(token.value));
  }
}
