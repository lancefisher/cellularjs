import CellularParser from './CellularParser';
import {
  OperatorExpression,
  NameExpression,
  NumberExpression,
} from './expressions';

import {
  TokenTypes,
} from './tokenizer';

function shouldParseAs(expressionString, expected, only = false) {
  const itFn = only ? it.only : it;
  itFn(expressionString, () => {
    const parser = new CellularParser(expressionString);
    const actual = parser.parseExpression();
    expect(actual).toEqual(expected);
  });
}

shouldParseAs.only = (input, expected) => {
  shouldParseAs(input, expected, true);
};

shouldParseAs('1 + 2 * 3',
  new OperatorExpression(
    new NumberExpression('1'),
    TokenTypes.PLUS,
    new OperatorExpression(
      new NumberExpression('2'),
      TokenTypes.TIMES,
      new NumberExpression('3'),
    ),
  ),
);

shouldParseAs('1 * 2 + 3',
  new OperatorExpression(
    new OperatorExpression(
      new NumberExpression('1'),
      TokenTypes.TIMES,
      new NumberExpression('2'),
    ),
    TokenTypes.PLUS,
    new NumberExpression('3'),
  ),
);

shouldParseAs('A1 + 2',
  new OperatorExpression(
    new NameExpression('A1'),
    TokenTypes.PLUS,
    new NumberExpression('2'),
  ),
);

// todo: paren grouping
// shouldParseAs('1 * (2 + 3)',
//   new OperatorExpression(
//     new NumberExpression('1'),
//     TokenTypes.TIMES,
//     new OperatorExpression(
//       new NumberExpression('2'),
//       TokenTypes.PLUS,
//       new NumberExpression('3'),
//     ),
//   ),
// );
