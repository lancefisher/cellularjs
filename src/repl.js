/* eslint-env node */
/* eslint-disable no-console */
import repl from 'repl';
import { tokenize } from './tokenizer';

// See: https://nodejs.org/api/repl.html

function interpret(cmd) {
  const tokens = tokenize(cmd);
  return tokens;
}

function evaluate(cmd, context, filename, callback) {
  callback(null, interpret(cmd));
}

console.log('Starting cellular REPL... (press ctrl-c to quit)');
repl.start({ prompt: '> ', eval: evaluate });
