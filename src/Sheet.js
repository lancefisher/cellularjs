import Cell from './Cell';
import Interpreter from './Interpreter';

export default class Sheet {
  constructor() {
    this.cells = new Map();
    this.interpreter = new Interpreter(this);
  }

  getCell(id) {
    if (this.cells.has(id)) return this.cells.get(id);
    const cell = new Cell(id);
    this.cells.set(id, cell);
    return cell;
  }

  calculate() {
    this.cells.forEach(cell => cell.eval(this.interpreter));
  }

  resolveReferences() {
    this.cells.forEach(cell => cell.resolveReferences(this.interpreter));
  }

  toString() {
    const lines = [];
    this.cells.forEach(cell => lines.push(
      `${cell.id}: ${cell.text} => ${cell.value}`,
    ));
    return lines.join('\n');
  }
}
