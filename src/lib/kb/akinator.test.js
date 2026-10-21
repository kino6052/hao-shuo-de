import { describe, expect, test } from 'bun:test';
import { createAkinator, normalizeAnswer } from './akinator.js';
import { makeDescribe, firstChoices, STRINGS } from './akinator-questions.js';
import { selfPlay, pickTargets } from './akinator-selfplay.js';
import { askAkinator, parseAnswers, priorFromHint } from './akinator-ask.js';
import { tagNet } from '../tag-net.js';

// a small pool: eight sentences and a pattern, each with a few features
const make = (id, type, features, number = 1) => ({ id, type, source: type, text: { py: id, zh: '', en: id }, lesson: null, number, words: [], features: new Set([...features, `type:${type}`, ...(type === 'sentence' && !features.some((f) => f.startsWith('theme:')) ? ['theme:basic'] : [])]) });
const items = [
  make('knife', 'sentence', ['kind:tool', 'topic:kitchen', 'kind:thing']),
  make('bowl', 'sentence', ['kind:tool', 'topic:kitchen', 'kind:thing', 'theme:count']),
  make('cat', 'sentence', ['kind:animal', 'topic:farm', 'kind:thing']),
  make('dog', 'sentence', ['kind:animal', 'topic:farm', 'kind:thing', 'theme:count']),
  make('eat', 'sentence', ['kind:doing', 'topic:kitchen']),
  make('run', 'sentence', ['kind:doing', 'topic:farm']),
  make('big', 'sentence', ['kind:quality', 'theme:compare']),
  make('small', 'sentence', ['kind:quality', 'theme:compare', 'theme:count']),
  make('compare', 'pattern', ['theme:compare', 'kind:quality'], 5),
];
const byFeature = new Map();
for (const it of items) for (const f of it.features) (byFeature.get(f) ?? byFeature.set(f, []).get(f)).push(it);
const pool = { items, byFeature };
const ak = createAkinator(pool, { cap: 20, clearLeader: 1.5 });

const play = (target, ask = ak) => {
  const answers = [{ feature: [...target.features].find((f) => f.startsWith('kind:')), answer: 'yes' }];
  for (;;) {
    const s = ask.step(answers);
    if (s.stage === 'result') return { s, answers };
    answers.push({ feature: s.question.feature, answer: target.features.has(s.question.feature) ? 'yes' : 'no' });
  }
};

describe('answers', () => {
  test('the five answers and their short forms', () => {
    expect(normalizeAnswer('Probably not')).toBe('probably-not');
    expect(normalizeAnswer('y')).toBe('yes');
    expect(normalizeAnswer('?')).toBe('unknown');
    expect(() => normalizeAnswer('maybe')).toThrow(/not an answer/);
  });
});

describe('the Akinator engine', () => {
  test('with no answers the first question is a choice', () => {
    const s = createAkinator(pool, { first: [{ feature: 'kind:doing', label: 'Doing something' }] }).step([]);
    expect(s.stage).toBe('first');
    expect(s.question.choices).toEqual([{ feature: 'kind:doing', label: 'Doing something' }]);
  });

  test('the next question is the one that splits what is left best, and it is never asked twice', () => {
    const s = ak.step([{ feature: 'kind:thing', answer: 'yes' }]);
    expect(s.stage).toBe('question');
    // among cat, dog, knife, bowl: kitchen versus farm (or tool versus animal, or counting) splits evenly
    expect(['topic:kitchen', 'topic:farm', 'kind:tool', 'kind:animal', 'theme:count', 'theme:basic']).toContain(s.question.feature);
    const again = ak.step([{ feature: 'kind:thing', answer: 'yes' }, { feature: s.question.feature, answer: 'yes' }]);
    expect(again.question?.feature).not.toBe(s.question.feature);
  });

  test('the same answers always give the same step', () => {
    const a = [{ feature: 'kind:thing', answer: 'yes' }];
    expect(JSON.stringify(ak.step(a))).toBe(JSON.stringify(ak.step(a)));
  });

  test('a perfect answerer finds every sentence', () => {
    for (const it of items.filter((i) => i.type === 'sentence')) {
      const { s } = play(it);
      expect(s.result.sentences[0].id).toBe(it.id);
    }
  });

  test('a soft answer sinks items and never removes them: dropping the answer brings them back', () => {
    const wrong = ak.step([{ feature: 'topic:farm', answer: 'no' }], { finish: true, limit: 20 });
    // a "no" sinks the farm sentences below what fits (they stay in the pool, and show up in `closest` if nothing else does)
    expect(wrong.result.sentences.find((r) => r.id === 'cat')).toBeUndefined();
    expect(ak.step([], { finish: true, limit: 20 }).result.sentences.find((r) => r.id === 'cat').fit).toBe(1);
    // and the same answer given again counts once; a changed answer replaces it
    const twice = ak.step([{ feature: 'topic:farm', answer: 'no' }, { feature: 'topic:farm', answer: 'yes' }], { finish: true, limit: 20 });
    expect(twice.result.sentences.find((r) => r.id === 'cat').fit).toBe(1);
    const soft = ak.step([{ feature: 'topic:farm', answer: 'probably-not' }], { finish: true });
    expect(soft.result.sentences.find((r) => r.id === 'cat').fit).toBe(0.3);
  });

  test('unknown changes nothing', () => {
    const a = ak.step([{ feature: 'topic:farm', answer: 'unknown' }], { finish: true });
    expect(a.result.sentences.every((r) => r.fit === 1)).toBe(true);
  });

  test('the result groups items, with their lesson and why they fit', () => {
    const s = ak.step([{ feature: 'theme:compare', answer: 'yes' }], { finish: true });
    expect(s.result.sentences.slice(0, 2).map((r) => r.id).sort()).toEqual(['big', 'small']);
    expect(s.result.patterns[0]).toMatchObject({ id: 'compare', number: 5, agrees: ['yes theme:compare'] });
    expect(s.result.verdict.gap).toBe(false);
  });

  test('a gap: no item agrees, and the answers none agree with are named', () => {
    // a, b and c have x; only d has z; nothing has both
    const small = [make('a', 'sentence', ['x']), make('b', 'sentence', ['x']), make('c', 'sentence', ['x', 'y']), make('d', 'sentence', ['z'])];
    const by = new Map();
    for (const it of small) for (const f of it.features) (by.get(f) ?? by.set(f, []).get(f)).push(it);
    const s = createAkinator({ items: small, byFeature: by }, { factors: { x: 1, y: 1, z: 1 } }).step([{ feature: 'x', answer: 'yes' }, { feature: 'z', answer: 'yes' }], { finish: true });
    expect(s.result.verdict.gap).toBe(true);
    expect(s.result.closest).toHaveLength(3);
    expect(s.result.missing).toHaveLength(1);
    expect(s.result.missing[0]).toMatchObject({ answer: 'yes', feature: 'z' });
  });

  test('an English hint (prior) starts the weights', () => {
    const hinted = createAkinator(pool, { prior: new Map([['dog', 5]]) });
    expect(hinted.step([{ feature: 'kind:thing', answer: 'yes' }], { finish: true }).result.sentences[0].id).toBe('dog');
  });

  test('it stops at the cap, and stops asking when one item clearly leads', () => {
    const capped = createAkinator(pool, { cap: 1 });
    expect(capped.step([{ feature: 'kind:thing', answer: 'yes' }]).stage).toBe('result');
    const one = play(items[0]).s;
    expect(one.effective).toBeLessThanOrEqual(6);
  });

  test('an unknown feature is an error', () => {
    expect(() => ak.step([{ feature: 'kind:nothing', answer: 'yes' }])).toThrow(/no feature/);
  });
});

describe('self-play', () => {
  const first = [{ feature: 'kind:thing', label: 'a thing' }, { feature: 'kind:doing', label: 'doing' }, { feature: 'kind:quality', label: 'like' }];
  const engine = createAkinator(pool, { cap: 20, clearLeader: 1.5, first });

  test('a sure answerer finds every item; the numbers are counted per type', () => {
    const targets = pickTargets(pool, { sentence: 8, pattern: 1, composite: 0, word: 0 });
    expect(targets).toHaveLength(9);
    const r = selfPlay(engine, { targets, mode: 'sure', find: 3 });
    expect(r.foundRate).toBe(1);
    expect(r.byType.sentence.targets).toBe(8);
    expect(r.asked).toBeGreaterThan(0);
  });

  test('it is deterministic, and a soft or noisy answerer is run the same way', () => {
    const targets = pickTargets(pool, { sentence: 8, pattern: 0, composite: 0, word: 0 });
    expect(JSON.stringify(selfPlay(engine, { targets, mode: 'noisy', find: 3 }))).toBe(JSON.stringify(selfPlay(engine, { targets, mode: 'noisy', find: 3 })));
    expect(selfPlay(engine, { targets, mode: 'soft', find: 3 }).targets).toBe(8);
  });
});

describe('asking it (command line and tool)', () => {
  // a stand-in for the KB: the pool, the engine over it, and an English lookup that knows "knife"
  const words = items.filter((i) => i.type === 'sentence').map((it) => ({ ...it, type: 'word', features: new Set([...it.features, `word:${it.id}`]), words: [it.id], text: { ...it.text, zh: it.id === 'knife' ? '刀' : '' } }));
  const wpool = { items: words, byFeature: new Map(), members: (fs) => words.filter((it) => fs.every((f) => it.features.has(f))) };
  for (const it of words) for (const f of it.features) (wpool.byFeature.get(f) ?? wpool.byFeature.set(f, []).get(f)).push(it);
  const kb = {
    pool: () => wpool,
    akinator: ({ prior = null } = {}) => createAkinator(wpool, { prior, clearLeader: 1.5, first: [{ feature: 'kind:thing', label: 'A thing' }], describe: makeDescribe({ topicNet: tagNet([]), kindNet: tagNet([]), themes: { count: 'counting' } }) }),
    english: (q) => ({ glosses: q === 'knife' ? [{ zh: '刀' }] : [], sameSense: [] }),
    source: { lessons: [{ id: 'start', number: 1 }] },
  };

  test('answers are written feature=answer, in a list or separated by commas', () => {
    expect(parseAnswers(['kind:doing=yes', 'theme:count=pn'])).toEqual([{ feature: 'kind:doing', answer: 'yes' }, { feature: 'theme:count', answer: 'probably-not' }]);
    expect(parseAnswers('kind:doing=yes, topic:farm=no')).toHaveLength(2);
    expect(() => parseAnswers(['kind:doing'])).toThrow(/feature=answer/);
  });

  test('no answers: the first question with its choices; then a question; then the result', () => {
    expect(askAkinator(kb, {}).text).toContain('What do you want to say?');
    const q = askAkinator(kb, { start: 'thing' });
    expect(q.data.stage).toBe('question');
    expect(q.text).toMatch(/^Question 2/);
    const r = askAkinator(kb, { answers: ['kind:thing=yes', 'topic:kitchen=yes', 'kind:tool=yes', 'theme:count=no'], finish: true });
    expect(r.data.stage).toBe('result');
    expect(r.text).toContain('Words:');
    expect(r.text).toContain('knife');
  });

  test('a hint word also finds a pattern by a rare word of its meaning, not of its example', () => {
    const pat = (id, en) => ({ ...make(`pattern:${id}`, 'pattern', [`pattern:${id}`]), text: { py: '', zh: '', en } }); // real ids carry the type
    const sent = { ...make('s1', 'sentence', ['pattern:bi']), source: 'lesson_example' };
    const items2 = [pat('bi', 'Says one thing is more than another: bǐ goes between them.'), pat('aloud', 'Numbers in a row: three is more than two.'), sent];
    const p2 = { items: items2, byFeature: new Map(), members: (fs) => items2.filter((it) => fs.every((f) => it.features.has(f))) };
    const kb2 = { pool: () => p2, english: () => ({ glosses: [], sameSense: [] }) };
    const { prior, matched } = priorFromHint(kb2, 'hungrier than you');
    expect(matched).toEqual(['bi']);
    expect(prior.get('s1')).toBeGreaterThan(1);
    expect(prior.has('aloud')).toBe(false);
  });

  test('a gap says so and names the answers nothing agrees with', () => {
    const r = askAkinator(kb, { answers: ['kind:doing=yes', 'theme:compare=yes', 'kind:animal=yes'], finish: true });
    expect(r.text).toContain('Nothing fits well yet');
  });

  test('an English hint sets the starting weights', () => {
    const { prior, matched } = priorFromHint(kb, 'a knife');
    expect(matched).toEqual(['刀']);
    expect(prior.get('knife')).toBeGreaterThan(1);
    expect(priorFromHint(kb, 'nothing here').prior).toBe(null);
    expect(askAkinator(kb, { answers: ['kind:thing=yes'], hint: 'knife', finish: true }).text).toContain('starts with: 刀');
  });
});

describe('the words of the questions', () => {
  const kindNet = tagNet([
    { id: 'thing', title: { eng: 'Thing' }, parents: [], note: 'what something is' },
    { id: 'doing', title: { eng: 'Doing' }, parents: [] },
  ]);
  const topicNet = tagNet([{ id: 'kitchen', title: { eng: 'Kitchen' }, parents: [] }]);
  const words = { dao1: { term: 'dāo', hanzi: '刀' } };
  const patterns = [{ id: 'compare', meaning: { eng: 'A is more than B' } }];
  const describe = makeDescribe({ topicNet, kindNet, patterns, words, themes: { count: 'counting and numbers' } });

  test('each family has a plain question', () => {
    expect(describe('kind:thing')).toEqual({ text: 'Does it count as “Thing”?', hint: 'what something is' });
    expect(describe('topic:kitchen').text).toBe('Do you meet it when talking about “Kitchen”?');
    expect(describe('theme:count').text).toBe('Is it about counting and numbers?');
    expect(describe('cat:action').text).toBe('Is it about doing?');
    expect(describe('pattern:compare').text).toBe('Does it use the pattern “A is more than B”?');
    expect(describe('word:dao1').text).toBe('Does it use the word dāo (刀)?');
    expect(describe('type:sentence').text).toBe('Is it a whole sentence?');
  });

  test('the first question is the top of the kind net and a whole sentence', () => {
    const c = firstChoices({ kindNet, strings: STRINGS.en });
    expect(c.map((x) => x.feature)).toEqual(['kind:thing', 'kind:doing', 'type:sentence']);
    expect(c[0].label).toBe('A thing, a person or a place');
  });
});
