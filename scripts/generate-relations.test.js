import { describe, expect, test } from 'bun:test';
import { relationsIndex } from './generate-relations.js';

const words = { tou2: {}, shen1ti3: {} };
const composites = [{ zh: '上面' }, { zh: '下面' }, { zh: '上边' }];
const report = {
  relations: [
    { kind: 'opposite', status: 'accepted', a: '上面', b: '下面' },
    { kind: 'opposite', status: 'proposed', a: '上面', b: '上边' },
    { kind: 'same-form', status: 'accepted', members: ['上面', '上边'] },
    { kind: 'part-of', status: 'accepted', a: 'tou2', b: 'shen1ti3', ends: 'mixed' },
    { kind: 'part-of', status: 'accepted', a: '上面', b: 'dì-fang', ends: 'composite-text' },
  ],
};

describe('the relations the dictionaries show', () => {
  const index = relationsIndex(report, { words, composites });

  test('a pair or a group is stored at each end; a relation still proposed is left out', () => {
    expect(index.composites['上面']).toEqual({ opposite: ['下面'], same: ['上边'] });
    expect(index.composites['下面']).toEqual({ opposite: ['上面'] });
    expect(index.composites['上边']).toEqual({ same: ['上面'] });
  });

  test('a whole and its parts are stored for words; a part named only by text is left out', () => {
    expect(index.words.tou2).toEqual({ partOf: ['word:shen1ti3'] });
    expect(index.words.shen1ti3).toEqual({ parts: ['word:tou2'] });
  });
});
