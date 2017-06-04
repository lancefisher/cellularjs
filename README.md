
<img src="https://rawgit.com/lancefisher/cellular/master/images/svg/cellular-logo.svg" width="600px" height="329px">

Cellular
=========

Cellular is a JavaScript spreadsheet engine. It includes a formula parser.

```JavaScript
const sheet = new Sheet();
sheet.getCell('A1').text = 1;
sheet.getCell('A2').text = 2;
sheet.getCell('A3').text = 3;
sheet.getCell('B1').text = '=A1 + A2 * A3';
sheet.calculate();
sheet.getCell('B1').value;
// 7
```

## REPL

A REPL is included. It creates a sheet when you run it.

```bash
yarn repl
```

Run `sheet.calculate()` after entering values. The ouput from the current line as well as the current sheet is printed.

```JavaScript
sheet.getCell('A1').text = 1;
sheet.getCell('A2').text = 2;
sheet.getCell('A3').text = 3;
sheet.getCell('B1').text = '=A1 + A2 * A3';
sheet.calculate();
```

## Using Cellular

Find the UMD package at `./dist/cellular.js`. This is included with the NPM package.

You can import this where you need it.

```bash
npm install cellularjs
```

```JavaScript
var cellular = require('./dist/cellular');
var sheet = new cellular.Sheet();

sheet.getCell('A1').text = 11;
sheet.getCell('A2').text = 22;
sheet.getCell('A3').text = '=A1 + A2';

// Be sure to run calculate() after setting cell values
sheet.calculate();

// Then, print the output
sheet.toString();
// A1: 11 => 11
// A2: 22 => 22
// A3: =A1 + A2 => 33
```
