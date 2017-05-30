export default class PrefixParselet {
  parse() {
    throw new Error(`${this.constructor.name} should implement parse()`);
  }
}
