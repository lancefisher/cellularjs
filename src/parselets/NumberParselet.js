import NumberExpression from '../expressions/NumberExpression';

export default class NumberParselet {
  constructor(precedence) {
    this.precedence = precedence;
  }

  parse(parser, token) {
    return new NumberExpression(Number(token.value));
  }

}
