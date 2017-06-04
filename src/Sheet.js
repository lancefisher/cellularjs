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

  getEvalOrder() {
    this.resolveReferences();

    const keys = Array.from(this.cells.keys());
    // A map to keep track of which cells we visit
    const visited = new Map(keys.map(k => [k, false]));
    // Holds the execution order when finished,
    // push cell ids onto this as we traverse using
    // depth first search
    const order = [];

    // recursive function to walk the cell references
    const sortUtil = (key) => {
      visited.set(key, true);
      this.getCell(key).refs.forEach((ref) => {
        if (!visited.get(ref)) sortUtil(ref);
      });
      order.push(key);
    };

    // kick off the sort by iterating all the cells
    keys.forEach((key) => {
      if (!visited.get(key)) sortUtil(key);
    });

    return order;
  }

  toString() {
    const lines = [];
    this.cells.forEach(cell => lines.push(
      `${cell.id}: ${cell.text} => ${cell.value}`,
    ));
    return lines.join('\n');
  }
}
