import Sheet from './Sheet';

it('should process a sheet', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '=1';
  sheet.getCell('A2').text = '=A1 + 2';
  sheet.getCell('A3').text = '=A2 + 3 * 4';
  sheet.calculate();
  const a3 = sheet.getCell('A3');
  expect(a3.value).toBe(15);
});

it('should display when toString() is called', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '=1';
  sheet.getCell('A2').text = '=A1 + 2';
  sheet.getCell('A3').text = '=A2 + 3 * 4';
  sheet.calculate();
  const output = sheet.toString();
  expect(output).toBe([
    'A1: =1 => 1',
    'A2: =A1 + 2 => 3',
    'A3: =A2 + 3 * 4 => 15',
  ].join('\n'));
});

it('should calculate cell values', () => {
  const sheet = new Sheet();
  const a1 = sheet.getCell('A1');
  a1.text = '=1 + 2';
  sheet.calculate();
  expect(a1.value).toBe(3);
});

it('should lookup cell values', () => {
  const sheet = new Sheet();
  const a1 = sheet.getCell('A1');
  a1.text = '=11';
  const b1 = sheet.getCell('B1');
  b1.text = '=A1 + 22';
  sheet.calculate();
  expect(b1.value).toBe(33);
});

it('should resolve references', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '=1';
  sheet.getCell('A2').text = '=2';
  sheet.getCell('B1').text = '=A1 + A2';
  sheet.getCell('C1').text = '=B1';

  sheet.resolveReferences();
  expect(sheet.getCell('A1').refs).toEqual([]);
  expect(sheet.getCell('B1').refs).toEqual(['A1', 'A2']);
  expect(sheet.getCell('C1').refs).toEqual(['B1']);
});

it('should determine eval order', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '=1';
  sheet.getCell('B1').text = '=C1 + C2';
  sheet.getCell('C1').text = '=A1';
  sheet.getCell('C2').text = '=A1';

  const evalOrder = sheet.getEvalOrder();
  expect(evalOrder).toEqual([
    'A1', 'C1', 'C2', 'B1',
  ]);
});

it('should calculate using eval order', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '=1';
  sheet.getCell('A2').text = '=2';
  sheet.getCell('B1').text = '=C1 + C2';
  sheet.getCell('C1').text = '=A1';
  sheet.getCell('C2').text = '=A2';

  sheet.calculate();

  expect(sheet.getCell('C1').value).toBe(1);
  expect(sheet.getCell('C2').value).toBe(2);
  expect(sheet.getCell('B1').value).toBe(3);
});

it('should get eval order entered out of order', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '=1';
  sheet.getCell('A2').text = '=2';
  sheet.getCell('B1').text = '=A1 + A2 * A3';
  sheet.getCell('A3').text = '=3';

  const evalOrder = sheet.getEvalOrder();
  expect(evalOrder).toEqual([
    'A1', 'A2', 'A3', 'B1',
  ]);
});

it('should eval literal strings as numbers', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = '123';
  sheet.calculate();
  expect(sheet.getCell('A1').value).toBe(123);
});

it('should eval literal numbers as numbers', () => {
  const sheet = new Sheet();
  sheet.getCell('A1').text = 123;
  sheet.calculate();
  expect(sheet.getCell('A1').value).toBe(123);
});
