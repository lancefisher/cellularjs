class NameExpression {
  constructor(value) {
    this.name = value;
  }
}

class NumberExpression {
  constructor(value) {
    this.number = Number(value);
  }
}

class OperatorExpression {
  constructor(left, operator, right) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
}

export {
  NameExpression,
  NumberExpression,
  OperatorExpression,
};
