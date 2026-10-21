import { describe, expect, test } from 'bun:test';
import { planTree } from './plan-tree.js';

const PLAN = [
  '# Akinator plan',
  '',
  'What it is, in one line.',
  '',
  '**Now:** A1, the tags.',
  '',
  '## 0. Setup',
  '',
  '- [x] **0.1 The plan:** this file',
  '- [~] **0.2 The page**',
  '  - [x] The parser',
  '  - [ ] The tests',
  '    a note under the tests',
  '  - [-] Dropped idea',
  '- [?] **0.3 Ask** the author',
  '- a plain bullet',
  '',
  '## A. Groundwork',
  '',
  'A note on the part.',
  '',
  '### A1 details',
  '',
  '- [ ] **A1. Tags**',
  '\t- [x] read them',
  '',
  '## Log',
  '',
  '- day 1',
  '- day 2',
].join('\r\n');

describe('planTree', () => {
  const tree = planTree(PLAN);

  test('title, intro and the Now line', () => {
    expect(tree.title).toBe('Akinator plan');
    expect(tree.intro).toEqual(['What it is, in one line.']);
    expect(tree.now).toBe('A1, the tags.');
  });

  test('sections in order, the Log apart and newest first', () => {
    expect(tree.sections.map((s) => [s.title, s.level])).toEqual([
      ['0. Setup', 2],
      ['A. Groundwork', 2],
      ['A1 details', 3],
    ]);
    expect(tree.sections[1].notes).toEqual(['A note on the part.']);
    expect(tree.log).toEqual(['day 2', 'day 1']);
  });

  test('items nest by indent, with their marks and notes', () => {
    const [plan, page, ask, plain] = tree.sections[0].items;
    expect(plan.mark).toBe('x');
    expect(page.mark).toBe('~');
    expect(page.children.map((c) => c.mark)).toEqual(['x', ' ', '-']);
    expect(page.children[1].notes).toEqual(['a note under the tests']);
    expect(ask.mark).toBe('?');
    expect(plain.mark).toBe(null);
    expect(page.line).toBe(10);
  });

  test('a tab indents like two spaces', () => {
    const tags = tree.sections[2].items[0];
    expect(tags.children.map((c) => c.text)).toEqual(['read them']);
  });

  test('keys follow the bold name and the parents', () => {
    const page = tree.sections[0].items[1];
    expect(page.key).toBe('0. Setup / 0.2 The page');
    expect(page.children[0].key).toBe('0. Setup / 0.2 The page / The parser');
  });

  test('counts go through the leaves; dropped and plain bullets are not in the total', () => {
    const page = tree.sections[0].items[1];
    expect(page.counts).toEqual({ total: 2, done: 1, doing: 0, waiting: 0, todo: 1, dropped: 1 });
    expect(tree.sections[0].counts).toEqual({ total: 4, done: 2, doing: 0, waiting: 1, todo: 1, dropped: 1 });
    // A1 counts through its one child, not itself
    expect(tree.counts.total).toBe(5);
    expect(tree.counts.done).toBe(3);
  });

  test('a dropped branch drops what is under it', () => {
    const t = planTree(['## S', '- [-] gone', '  - [ ] a', '  - [x] b'].join('\n'));
    expect(t.sections[0].counts).toEqual({ total: 0, done: 0, doing: 0, waiting: 0, todo: 0, dropped: 2 });
  });

  test('the real plan files parse', async () => {
    const { readFileSync } = await import('node:fs');
    const text = readFileSync(new URL('../../AKINATOR_PLAN.md', import.meta.url), 'utf-8');
    const t = planTree(text);
    expect(t.title).toContain('Akinator');
    expect(t.sections.length).toBeGreaterThan(4);
    expect(t.counts.total).toBeGreaterThan(50);
  });
});
