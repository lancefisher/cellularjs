Cellular
=========

The JavaScript spreadshseet engine.

## Tokenizer

Turns `SUM(A1, B3)` into a list of tokens.

## AST

Builds an abstract syntax tree from a list of tokens.

## Interpreter

Executes the AST.

## Evaluation order

Determine the order of cell evaulation.

## REPL

```bash
yarn repl
```

Example:

```
SUM(A1, B3)
```

Right now the AST will print.

## Debugging

Just set a breakpoint in Visual Studio code, and run the debugger!

## Using Cellular

After building:

```
yarn build
```

There will be a UMD package at `./dist/cellular.js`.


You can import this where you need it.

>For example, run `node` to start a node REPL and try the following.

```JavaScript
var cellular = require('./dist/cellular');
var sheet = new cellular.Sheet();
sheet.getCell('A1').text = '3';
sheet.toString();
// A1: 3 => null
```
