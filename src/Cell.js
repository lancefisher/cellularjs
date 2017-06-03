export default class Cell {
  constructor(id) {
    this.id = id;
    this.text = null;
    this.value = null;
  }

  eval(interpreter) {
    // for now just assume it starts with an =
    const text = this.text;
    const expression = text.slice(1, text.length);
    const value = interpreter.eval(expression);
    this.value = value;
  }
}
