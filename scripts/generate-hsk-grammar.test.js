import { describe, expect, test } from 'bun:test';
import { hskRows, parseCsv } from './generate-hsk-grammar.js';

describe('parseCsv', () => {
  test('a quoted field may hold commas, line breaks and doubled quotes', () => {
    expect(parseCsv('a,"b,c",d\n"x\ny","say ""hi""",z\n')).toEqual([['a', 'b,c', 'd'], ['x\ny', 'say "hi"', 'z']]);
  });
  test('reads Windows line ends and skips blank lines', () => {
    expect(parseCsv('a,b\r\n\r\nc,d\r\n')).toEqual([['a', 'b'], ['c', 'd']]);
  });
});

describe('hskRows', () => {
  const text = 'No,Level,Group,Category,Details,Content\n1,1,词类,名词,方位名词,"上、下、里"\n28,1,句子成分,状语,"副词、形容词作状语；\n表示时间、处所的词语作状语",\n';
  test('one row per grammar point, a multi-line field on one line', () => {
    const rows = hskRows(text);
    expect(rows).toHaveLength(2);
    expect(rows[0]).toEqual({ no: 1, level: '1', group: '词类', category: '名词', details: '方位名词', content: '上、下、里' });
    expect(rows[1]).toMatchObject({ no: 28, category: '状语', details: '副词、形容词作状语； 表示时间、处所的词语作状语' });
  });
});
