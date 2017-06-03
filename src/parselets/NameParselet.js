import NameExpression from '../expressions/NameExpression';
import PrefixParselet from './PrefixParselet';

export default class NameParselet extends PrefixParselet {
  parse(parser, token) {  // eslint-disable-line class-methods-use-this
    return new NameExpression(token.value);
  }
}
