import Cell from './Cell';

export default class Sheet {
  constructor() {
    this.cells = new Map();
  }

  getCell(id) {
    if (this.cells.has(id)) return this.cells.get(id);
    const cell = new Cell(id);
    this.cells.set(id, cell);
    return cell;
  }

  calculate() {
    // todo process the sheet here
  }

  toString() {
    const lines = [];
    this.cells.forEach(cell => lines.push(
      `${cell.id}: ${cell.text} => ${cell.value}`
    ));
    return lines.join('\n');
  }
}
