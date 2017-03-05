import repl from 'repl'

// See: https://nodejs.org/api/repl.html

function interpret(cmd) {
  return `Checking ${cmd}...`
}

function evaluate(cmd, context, filename, callback) {
  callback(null, interpret(cmd));
}

console.log('Starting cellular REPL... (press ctrl-c to quit)');
repl.start({prompt: '> ', eval: evaluate });
