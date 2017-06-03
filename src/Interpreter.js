import CellularParser from './CellularParser';
import NumberExpression from './expressions/NumberExpression';
import OperatorExpression from './expressions/OperatorExpression';
import TokenTypes from './TokenTypes';

export default class Interpreter {
  constructor(sheet) {
    this.sheet = sheet;
  }

  eval(expression) {
    const parser = new CellularParser(expression);
    const ast = parser.parseExpression();
    return this.evalAst(ast);
  }

  evalAst(node) {
    if (node instanceof NumberExpression) {
      return node.number;
    }

    if (node instanceof OperatorExpression) {
      if (node.operator === TokenTypes.PLUS) {
        const left = this.evalAst(node.left);
        const right = this.evalAst(node.right);
        return left + right;
      }
    }

    throw new TypeError('Could not intrepret expression: ', node);
  }
}
