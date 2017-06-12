import CellularParser from "./CellularParser";
import {
  OperatorExpression,
  NameExpression,
  NumberExpression
} from "./expressions";
import TokenTypes from "./TokenTypes";

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

      if (node.operator === TokenTypes.MINUS) {
        return left - right;
      }

      if (node.operator === TokenTypes.TIMES) {
        return left * right;
      }

      if (node.operator === TokenTypes.DIVIDE) {
        return left / right;
      }
    }

    throw new TypeError("Could not intrepret expression: ", node);
  }

  getRefs(expression) {
    const parser = new CellularParser(expression);
    const ast = parser.parseExpression();
    const refs = [];
    this.evalRefs(ast, refs);
    return refs;
  }

  // Walk the AST, and collect references in refs
  evalRefs(node, refs = []) {
    if (node instanceof NumberExpression) {
      return;
    }

    if (node instanceof NameExpression) {
      refs.push(node.name);
      return;
    }

    if (node instanceof OperatorExpression) {
      this.evalRefs(node.left, refs);
      this.evalRefs(node.right, refs);
      return;
    }

    throw new TypeError("Could not intrepret expression: ", node);
  }
}
