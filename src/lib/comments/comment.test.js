import { describe, expect, test } from 'bun:test';
import { DAY_MS, GAP_MS, LIMITS, PER_DAY, commentDoc, counterPlans, exportOf, quoteOf } from './comment.js';

describe('quoteOf', () => {
  test('one line, trimmed', () => {
    expect(quoteOf('  Nǐ hǎo.\n  — Hello. ')).toBe('Nǐ hǎo. — Hello.');
    expect(quoteOf(undefined)).toBe('');
  });

  test('cut to the limit with an ellipsis, never inside a character', () => {
    const q = quoteOf('x'.repeat(500));
    expect(q.length).toBe(LIMITS.quote);
    expect(q.endsWith('…')).toBe(true);
    const emoji = quoteOf('😀'.repeat(200));
    expect(emoji.length).toBeLessThanOrEqual(LIMITS.quote);
    expect([...emoji.slice(0, -1)].every((ch) => ch === '😀')).toBe(true);
  });
});

describe('commentDoc', () => {
  const input = { text: ' A typo here. ', page: 'also-and-all', part: 'also-do.example2', quote: 'Wǒ yě chī.', lang: 'rus', version: '0.0.1+abc', uid: 'u1', signedIn: false };

  test('the fields the rules take', () => {
    expect(commentDoc(input)).toEqual({ doc: { text: 'A typo here.', page: 'also-and-all', part: 'also-do.example2', quote: 'Wǒ yě chī.', lang: 'rus', version: '0.0.1+abc', uid: 'u1', signedIn: false } });
  });

  test('the reader\'s text: not empty, not over the limit', () => {
    expect(commentDoc({ ...input, text: '   ' })).toEqual({ error: 'empty' });
    expect(commentDoc({ ...input, text: 'x'.repeat(LIMITS.text + 1) })).toEqual({ error: 'long' });
    expect(commentDoc({ ...input, text: 'x'.repeat(LIMITS.text) }).doc.text.length).toBe(LIMITS.text);
  });

  test('the rest is made to fit', () => {
    const { doc } = commentDoc({ ...input, page: 'p'.repeat(100), part: '', lang: 'fr', version: '', signedIn: 'yes' });
    expect(doc.page.length).toBe(LIMITS.page);
    expect(doc.part).toBe('page');
    expect(doc.lang).toBe('eng');
    expect(doc.version).toBe('unknown');
    expect(doc.signedIn).toBe(false);
  });
});

describe('counterPlans', () => {
  const now = 1_000 * DAY_MS;

  test('a first comment starts the counter', () => {
    expect(counterPlans(null, now)).toEqual({ plans: [{ since: 'now', count: 1, total: 1 }] });
  });

  test('too soon: wait the rest of the gap', () => {
    expect(counterPlans({ last: now - 5_000, since: now - 60_000, count: 2, total: 7 }, now)).toEqual({ wait: GAP_MS - 5_000 });
  });

  test('the same day: one more, and a new day only if the server thinks so', () => {
    expect(counterPlans({ last: now - GAP_MS, since: now - 60_000, count: 2, total: 7 }, now)).toEqual({
      plans: [{ since: 'keep', count: 3, total: 8 }, { since: 'now', count: 1, total: 8 }],
    });
  });

  test('the day is over: a new day first', () => {
    expect(counterPlans({ last: now - 60_000, since: now - DAY_MS, count: 4, total: 9 }, now).plans[0]).toEqual({ since: 'now', count: 1, total: 10 });
  });

  test('the day\'s comments used up', () => {
    expect(counterPlans({ last: now - 60_000, since: now - 60_000, count: PER_DAY, total: 40 }, now)).toEqual({ full: true });
    expect(counterPlans({ last: now - 60_000, since: now - DAY_MS, count: PER_DAY, total: 40 }, now)).toEqual({ plans: [{ since: 'now', count: 1, total: 41 }] });
  });
});

describe('exportOf', () => {
  test('newest first, times as ISO strings, every field named', () => {
    const at = new Date(Date.UTC(2026, 9, 23));
    const out = exportOf(
      [
        { id: 'a-1', createdAt: Date.UTC(2026, 9, 21), text: 'old', page: 'p', part: 'page', quote: '', lang: 'eng', version: 'v', uid: 'a', signedIn: false },
        { id: 'b-1', createdAt: Date.UTC(2026, 9, 22), text: 'new', page: 'p', part: 'x.example1', quote: 'q', lang: 'zh', version: 'v', uid: 'b', signedIn: true, done: true },
      ],
      at,
    );
    expect(out.exportedAt).toBe('2026-10-23T00:00:00.000Z');
    expect(out.count).toBe(2);
    expect(out.comments.map((c) => c.id)).toEqual(['b-1', 'a-1']);
    expect(out.comments[0]).toEqual({ id: 'b-1', createdAt: '2026-10-22T00:00:00.000Z', page: 'p', part: 'x.example1', quote: 'q', text: 'new', lang: 'zh', version: 'v', signedIn: true, uid: 'b', done: true });
    expect(out.comments[1].done).toBe(false);
  });
});
