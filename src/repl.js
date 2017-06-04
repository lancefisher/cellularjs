/* eslint-env node */
import repl from 'repl';
import chalk from 'chalk';
import Sheet from './Sheet';

const log = console.log; // eslint-disable-line no-console
const sheet = new Sheet();

function printSheet() {
  const lines = [];
  sheet.cells.forEach(cell => lines.push(
    `${chalk.cyan(cell.id)}: ${chalk.yellow(cell.text)} => ${chalk.green(cell.value)}`,
  ));
  return lines.join('\n');
}

function interpret(cmd) {
  // const parser = new CellularParser(cmd);
  // const expression = parser.parseExpression();
  // return expression;
  if (cmd.indexOf('sheet.') === 0) {
    eval(cmd); // eslint-disable-line no-eval
  }

  return printSheet();
}

function evaluate(cmd, context, filename, callback) {
  callback(null, interpret(cmd));
}

function writer(output) {
  return output;
}

// See: https://nodejs.org/api/repl.html
log('Starting cellular REPL... (press ctrl-c to quit)');
repl.start({ prompt: '> ', eval: evaluate, writer });

