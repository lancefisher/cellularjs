import OperatorExpression from '../expressions/OperatorExpression';

export default class BinaryOperatorParselet {
  constructor(precedence) {
    this.precedence = precedence;
  }

  parse(parser, leftExpression, token) {
    const rightExpression = parser.parseExpression(this.precedence);
    return new OperatorExpression(leftExpression, token.type, rightExpression);
  }

}
