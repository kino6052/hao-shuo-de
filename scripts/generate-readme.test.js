import { describe, expect, test } from 'bun:test';
import { clip, firstSentences, leadingComment, lessonTeaches, outsideBlocks, parseHeader, replaceBlock, table } from './generate-readme.js';

describe('leadingComment', () => {
  test('reads // lines and stops at the code', () => {
    expect(leadingComment('// One.\n// Two.\nimport x from "y";\n// not this')).toEqual(['One.', 'Two.']);
  });
  test('skips a shebang', () => {
    expect(leadingComment('#!/usr/bin/env node\n// Hello.\n')).toEqual(['Hello.']);
  });
  test('reads a JSDoc block', () => {
    expect(leadingComment('/**\n * A word.\n *   node x.js  # run\n */\nexport {}')).toEqual(['', 'A word.', '  node x.js  # run', '']);
  });
  test('reads % lines of a rules file', () => {
    expect(leadingComment('% Which words.\n% More.\n\nopp(A,B).')).toEqual(['Which words.', 'More.']);
  });
  test('a file with no comment has no header', () => {
    expect(leadingComment('import x from "y";\n// later')).toEqual([]);
  });
});

describe('parseHeader', () => {
  const source = [
    '#!/usr/bin/env node',
    '// Checks the data. It is quick.',
    '// A second line of the same paragraph.',
    '//',
    '//   npm run check-data  # what the build runs',
    '//   node scripts/x.js --flag   does a thing',
    '//   not a command',
    '//',
    '// Another paragraph.',
    'import a from "b";',
  ].join('\n');

  test('the summary is the first sentence', () => {
    expect(parseHeader(source).summary).toBe('Checks the data. It is quick.');
  });
  test('usage lines carry their notes, after # or after three spaces', () => {
    expect(parseHeader(source).usage).toEqual([
      { cmd: 'npm run check-data', note: 'what the build runs' },
      { cmd: 'node scripts/x.js --flag', note: 'does a thing' },
    ]);
  });
  test('indented lines are not part of the prose', () => {
    expect(parseHeader(source).paragraphs[0]).toBe('Checks the data. It is quick. A second line of the same paragraph.');
  });
  test('a tag at the start of a line sets the summary, an indented one is documentation', () => {
    expect(parseHeader('// @summary Says it better.\n// Long text. More.\n').summary).toBe('Says it better.');
    expect(parseHeader('// Text here.\n//   @summary <text>   documented\n').summary).toBe('Text here.');
  });
  test('@internal marks a file to leave out', () => {
    expect(parseHeader('// Text.\n// @internal\n').tags.internal).toBe(true);
  });
});

describe('firstSentences and clip', () => {
  test('does not split on e.g.', () => {
    expect(firstSentences('Lists the words the lessons use most, i.e. the atoms and e.g. the numbers. Then a second sentence follows here.')).toBe(
      'Lists the words the lessons use most, i.e. the atoms and e.g. the numbers.',
    );
  });
  test('a very short first sentence takes the second', () => {
    expect(firstSentences('Short one. And the second.')).toBe('Short one. And the second.');
  });
  test('a trailing colon becomes a full stop', () => {
    expect(firstSentences('Checks these things:')).toBe('Checks these things.');
  });
  test('clip cuts at a clause boundary and says so', () => {
    const long = 'Which roots would bring it closer: for every character the dictionary does not have yet, how many words of the list it would complete -- words whose other characters are all words';
    const out = clip(long, 120);
    expect(out.length).toBeLessThanOrEqual(121);
    expect(out.endsWith('…')).toBe(true);
    expect(clip('short', 120)).toBe('short');
  });
});

describe('lessonTeaches', () => {
  const header = [
    '// pointing ("Pointing at People and Things"): its modules, in reading order.',
    '// See src/lib/lesson.ts.',
    '//',
    '// Rewritten in Phase 2 (BOOK_PLAN.md): want, can, learn to (xué, D40), know',
    '// how, and maybe (kě-néng, D36). Only words from lessons 2-7; passes every gate.',
    '// Word cards sit next to the points that use them.',
    'import { lesson } from "x";',
  ].join('\n');

  test('reads what the lesson teaches and drops the closing lines and decision numbers', () => {
    expect(lessonTeaches(header)).toBe('Want, can, learn to (xué), know how, and maybe (kě-néng).');
  });
  test('a @teaches line wins', () => {
    expect(lessonTeaches(`${header.split('\nimport')[0]}\n// @teaches Pointing.\nimport x from "y";`)).toBe('Pointing.');
  });
  test('a lesson comment without the usual shape teaches nothing yet', () => {
    expect(lessonTeaches('// Just a note.\n')).toBe('');
  });
});

describe('replaceBlock and outsideBlocks', () => {
  const doc = 'Intro.\n<!-- generated:a -->\nold\n<!-- /generated:a -->\nHand-written.\n';

  test('replaces only the named part', () => {
    const out = replaceBlock(doc, 'a', 'new');
    expect(out).toContain('Intro.');
    expect(out).toContain('Hand-written.');
    expect(out).toContain('\nnew\n');
    expect(out).not.toContain('old');
  });
  test('is steady: a second run changes nothing', () => {
    const once = replaceBlock(doc, 'a', 'new');
    expect(replaceBlock(once, 'a', 'new')).toBe(once);
  });
  test('keeps the file\'s line endings', () => {
    const out = replaceBlock(doc.replace(/\n/g, '\r\n'), 'a', 'x\ny');
    expect(out.replace(/\r\n/g, '')).not.toContain('\n');
  });
  test('missing markers give null, not a guess', () => {
    expect(replaceBlock('no markers', 'a', 'x')).toBeNull();
    expect(replaceBlock(doc, 'b', 'x')).toBeNull();
  });
  test('outsideBlocks ignores what is generated', () => {
    expect(outsideBlocks(doc)).toBe(outsideBlocks(replaceBlock(doc, 'a', 'something else')));
    expect(outsideBlocks(doc)).not.toBe(outsideBlocks(doc.replace('Hand-written.', 'Edited.')));
  });
});

describe('table', () => {
  test('escapes pipes and flattens lines', () => {
    expect(table(['A', 'B'], [['x | y', 'one\ntwo']])).toBe('| A | B |\n| --- | --- |\n| x \\| y | one two |');
  });
});
