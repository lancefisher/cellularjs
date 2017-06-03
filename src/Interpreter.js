import CellularParser from './CellularParser';
import NumberExpression from './expressions/NumberExpression';
import NameExpression from './expressions/NameExpression';
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

    if (node instanceof NameExpression) {
      const cell = this.sheet.getCell(node.name);
      return cell.value;
    }

    if (node instanceof OperatorExpression) {
      const left = this.evalAst(node.left);
      const right = this.evalAst(node.right);

      if (node.operator === TokenTypes.PLUS) {
        return left + right;
      }

      if (node.operator === TokenTypes.TIMES) {
        return left * right;
      }
    }

    throw new TypeError('Could not intrepret expression: ', node);
  }
}
