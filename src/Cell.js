export default class Cell {
  constructor(id) {
    this.id = id;
    this.text = null;
    this.value = null;
    this.refs = [];
  }

  eval(interpreter) {
    if (this.isLiteral()) {
      this.value = Number(this.text);
    } else {
      const expression = this.text.slice(1, this.text.length);
      const value = interpreter.eval(expression);
      this.value = value;
    }
  }

  resolveReferences(interpreter) {
    if (this.isLiteral()) return;

    const text = this.text;
    const expression = text.slice(1, text.length);
    this.refs = interpreter.getRefs(expression);
  }

  isLiteral() {
    if (typeof this.text === "number") return true;
    if (this.text[0] !== "=") return true;
    return false;
  }
}
