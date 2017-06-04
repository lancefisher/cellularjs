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
