import Sheet from './Sheet';

xit('should process a sheet', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '1';
  sheet.getCell('A2').text = '=A1 + 2';
  sheet.getCell('A3').text = '=A2 + 3 * 4';
  sheet.calculate();
  const cell = sheet.getCell('A3');
  expect(cell.value).toBe(15);
});

it('should display when toString() is called', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '1';
  sheet.getCell('A2').text = '=A1 + 2';
  sheet.getCell('A3').text = '=A2 + 3 * 4';
  sheet.calculate();
  const output = sheet.toString();
  expect(output).toBe([
    'A1: 1 => null',
    'A2: =A1 + 2 => null',
    'A3: =A2 + 3 * 4 => null',
  ].join('\n'));
});

it.only('should calculate cell values', () => {
  const sheet = new Sheet();
  const a1 = sheet.getCell('A1');
  a1.text = '=1 + 2';
  sheet.calculate();
  expect(a1.value).toBe(3);
});
