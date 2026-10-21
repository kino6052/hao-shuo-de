// The lesson lookups of the writer (AKINATOR_PLAN.md A2, WRITING_PLAN.md W21): words, composites, patterns and sentences of a
// lesson; the grammar patterns (all, by tag, by lesson); sentences like one given; where a word is used. The lesson is the main
// key: a word belongs to the lesson that first teaches it, a pattern to the lesson in its `taught`, a composite to the first
// lesson after which its description reads (A5). All of it is read from the pool (akinator-pool.js), so it is one list.
//
//   askLesson(pool, lessons, { lesson, kind, limit })    -> { data, text }   no lesson: every lesson with its counts
//   askPatterns(pool, lessons, { id, tag, lesson, upTo, limit })             the patterns; an id gives one in full
//   askSimilar(pool, { sentence, limit })                                    sentences like one, by shared words and patterns
//   askUses(pool, lessons, { word, limit })                                  the sentences and composites that use a word
//
// A lesson is its id ("comparing") or its number (12). A tag is a theme ("compare"), a category ("cat:action"), a lesson
// ("lesson:comparing"), a grammar item ("grammar:...") or any feature written in full.

const norm = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

function lessonOf(lessons, q) {
  const text = String(q).trim();
  const byNumber = /^\d+$/.test(text) ? lessons.find((l) => l.number === Number(text)) : null;
  const hit = byNumber ?? lessons.find((l) => l.id === text) ?? lessons.find((l) => l.id.startsWith(text));
  if (!hit) throw new Error(`no lesson "${q}" (an id such as comparing, or a number from 1 to ${lessons.length}); ask with no lesson to list them`);
  return hit;
}

const say = (it) => [it.text.zh, it.text.py, it.text.en && `(${it.text.en})`].filter(Boolean).join(' ');
const lessonTag = (lessons, it) => (it.lesson ? `lesson ${it.lesson}` : it.number !== null && it.number !== undefined ? `by lesson ${lessons.find((l) => l.number === it.number)?.id ?? it.number}` : 'outside the lessons');
const cut = (list, limit) => ({ shown: list.slice(0, limit), more: Math.max(0, list.length - limit) });
const more = (n) => (n ? [`  … ${n} more (raise the limit)`] : []);
const plain = (it, lessons) => ({ id: it.id, type: it.type, source: it.source, text: it.text, lesson: it.lesson, number: it.number, label: lessonTag(lessons, it) });

// -- lessons ---------------------------------------------------------------------------------------------------------------

export function askLesson(pool, lessons, { lesson, kind, limit = 30 } = {}) {
  const lim = Number(limit) || 30;
  const inLesson = (l) => ({
    words: pool.items.filter((i) => i.type === 'word' && i.lesson === l.id),
    composites: pool.items.filter((i) => i.type === 'composite' && i.number === l.number),
    patterns: pool.items.filter((i) => i.type === 'pattern' && i.lesson === l.id),
    sentences: pool.items.filter((i) => i.type === 'sentence' && i.lesson === l.id && i.source !== 'pattern_example'),
  });
  if (lesson === undefined || lesson === '') {
    const rows = lessons.map((l) => {
      const g = inLesson(l);
      return { id: l.id, number: l.number, words: g.words.length, composites: g.composites.length, patterns: g.patterns.length, sentences: g.sentences.length };
    });
    const text = ['Lessons (new words · composites that become readable · patterns taught · sentences):', ...rows.map((r) => `  ${String(r.number).padStart(2)} ${r.id.padEnd(24)} ${r.words} · ${r.composites} · ${r.patterns} · ${r.sentences}`)].join('\n');
    return { data: rows, text };
  }
  const l = lessonOf(lessons, lesson);
  const g = inLesson(l);
  const kinds = kind ? [kind] : ['words', 'patterns', 'composites', 'sentences'];
  for (const k of kinds) if (!g[k]) throw new Error(`kind "${k}" is not one of words, patterns, composites, sentences`);
  const out = [`Lesson ${l.number}: ${l.id}`];
  const data = { id: l.id, number: l.number };
  const titles = { words: 'New words (this lesson teaches them first)', patterns: 'Patterns taught', composites: 'Composites that become readable here (grammar and words by now)', sentences: 'Sentences of the lesson' };
  for (const k of kinds) {
    const { shown, more: rest } = cut(g[k], lim);
    data[k] = g[k].map((i) => plain(i, lessons));
    out.push('', `${titles[k]}: ${g[k].length}`, ...shown.map((i) => (k === 'patterns' ? `  ${i.id.slice('pattern:'.length)}: ${i.text.en}` : `  ${say(i)}`)), ...more(rest));
  }
  return { data, text: out.join('\n') };
}

// -- patterns ---------------------------------------------------------------------------------------------------------------

// "compare" -> theme:compare, a category -> cat:..., a feature already written in full stays
function featureOfTag(pool, tag) {
  const t = String(tag).trim();
  if (t.includes(':')) return t;
  for (const family of ['theme', 'cat', 'lesson', 'grammar']) if (pool.byFeature.has(`${family}:${t}`)) return `${family}:${t}`;
  throw new Error(`no pattern tag "${tag}" (a theme such as compare, a category such as cat:action, a lesson, or grammar:…); ask for the patterns with no tag to see them`);
}

export function askPatterns(pool, lessons, { id, tag, lesson, upTo, limit = 40 } = {}) {
  const lim = Number(limit) || 40;
  if (id) {
    const it = pool.item(`pattern:${id}`) ?? pool.items.find((i) => i.type === 'pattern' && norm(i.id).includes(norm(id)));
    if (!it) throw new Error(`no pattern "${id}"`);
    const pid = it.id.slice('pattern:'.length);
    const examples = pool.items.filter((i) => i.source === 'pattern_example' && i.id.startsWith(`sentence:pattern_example:${pid}/`));
    const composites = pool.members([`pattern:${pid}`]).filter((i) => i.type === 'composite');
    const sentences = pool.members([`pattern:${pid}`]).filter((i) => i.type === 'sentence' && i.source !== 'pattern_example');
    const tags = [...it.features].filter((f) => /^(theme|cat|lesson|module|grammar|coverage):/.test(f)).sort();
    const data = { id: pid, meaning: it.text.en, template: it.text.py, lesson: it.lesson, tags, examples: examples.map((e) => ({ py: e.text.py, en: e.text.en })), composites: composites.length, sentences: sentences.length };
    const out = [`${pid}  [${it.lesson ? `lesson ${it.lesson}` : 'not taught'}]`, `  ${it.text.en}`, `  Form: ${it.text.py}`, `  Tags: ${tags.join(' ')}`];
    out.push('', `Examples (${examples.length}):`, ...examples.map((e) => `  ${e.text.py}  (${e.text.en})`));
    const s = cut(sentences, 6);
    out.push('', `Used by ${sentences.length} sentences of the book:`, ...s.shown.map((i) => `  ${say(i)}  [${lessonTag(lessons, i)}]`), ...more(s.more));
    const c = cut(composites, 8);
    out.push('', `Used by ${composites.length} composite descriptions:`, ...c.shown.map((i) => `  ${say(i)}  [${lessonTag(lessons, i)}]`), ...more(c.more));
    return { data, text: out.join('\n') };
  }
  const features = [];
  if (tag) features.push(featureOfTag(pool, tag));
  let list = pool.items.filter((i) => i.type === 'pattern' && features.every((f) => i.features.has(f)));
  if (lesson !== undefined && lesson !== '') {
    const l = lessonOf(lessons, lesson);
    list = list.filter((i) => i.lesson === l.id);
  }
  if (upTo !== undefined && upTo !== '') list = list.filter((i) => i.number !== null && i.number <= Number(upTo));
  list.sort((a, b) => (a.number ?? 999) - (b.number ?? 999) || (a.id < b.id ? -1 : 1));
  const { shown, more: rest } = cut(list, lim);
  const title = [...features, lesson ? `lesson ${lesson}` : '', upTo ? `taught by lesson ${upTo}` : ''].filter(Boolean).join(' + ');
  const text = [`Patterns${title ? ` (${title})` : ''}: ${list.length}`, ...shown.map((i) => `  ${i.id.slice(8)}  [${i.lesson ?? 'not taught'}]  ${i.text.en}`), ...more(rest)].join('\n');
  return { data: list.map((i) => ({ id: i.id.slice(8), lesson: i.lesson, meaning: i.text.en })), text };
}

// -- similar sentences ------------------------------------------------------------------------------------------------------

const core = (it) => [...it.features].filter((f) => f.startsWith('word:') || f.startsWith('pattern:'));

export function askSimilar(pool, lessons, { sentence, limit = 10 } = {}) {
  if (!sentence) throw new Error('sentence is required (a sentence id, or some of its pinyin, hanzi or English)');
  const q = String(sentence).trim();
  // an example written inside a pattern can be the one asked about, but it has no lesson of its own, so it is not offered as "like" another
  const sentences = pool.items.filter((i) => i.type === 'sentence');
  let hits = sentences.filter((i) => i.id === q);
  if (!hits.length) hits = sentences.filter((i) => [i.text.py, i.text.zh, i.text.en].some((t) => norm(t).includes(norm(q))));
  if (!hits.length) throw new Error(`no sentence has "${sentence}"`);
  const from = hits[0];
  const mine = new Set(core(from));
  const seen = new Map();
  for (const f of mine) for (const it of pool.byFeature.get(f) ?? []) if (it.type === 'sentence' && it.source !== 'pattern_example' && it !== from) seen.set(it, (seen.get(it) ?? 0) + 1);
  // a sentence that shares less than a quarter (Jaccard) is not "like" it
  const scored = [...seen].map(([it, shared]) => ({ it, shared, score: shared / (mine.size + core(it).length - shared) })).filter((s) => s.score >= 0.25).sort((a, b) => b.score - a.score || (a.it.id < b.it.id ? -1 : 1));
  const { shown, more: rest } = cut(scored, Number(limit) || 10);
  const out = [`Like: ${say(from)}  [${lessonTag(lessons, from)}]${hits.length > 1 ? `   (${hits.length - 1} other sentences also have "${sentence}"; give the id to pick)` : ''}`, `  shares words and patterns: ${[...mine].join(' ')}`, '', 'Sentences like it:'];
  out.push(...shown.map((s) => `  ${say(s.it)}  [${lessonTag(lessons, s.it)}]  ${s.shared} shared, ${Math.round(s.score * 100)}%`), ...more(rest));
  return { data: { from: plain(from, lessons), like: scored.slice(0, Number(limit) || 10).map((s) => ({ ...plain(s.it, lessons), shared: s.shared, score: Number(s.score.toFixed(3)) })) }, text: out.join('\n') };
}

// -- where a word is used ---------------------------------------------------------------------------------------------------

export function askUses(pool, lessons, { word, limit = 12 } = {}) {
  if (!word) throw new Error('word is required (id, pinyin or hanzi)');
  const q = norm(word);
  const w = pool.items.find((i) => i.type === 'word' && (norm(i.words[0]) === q || norm(i.text.py) === q || i.text.zh === String(word).trim()));
  if (!w) throw new Error(`no core word "${word}" (the composites are asked with kb_built)`);
  const id = w.words[0];
  const users = pool.members([`word:${id}`]).filter((i) => i.type !== 'word');
  const sentences = users.filter((i) => i.type === 'sentence' && i.source !== 'pattern_example');
  const examples = users.filter((i) => i.source === 'pattern_example');
  const composites = users.filter((i) => i.type === 'composite');
  const byLesson = new Map();
  for (const s of sentences) (byLesson.get(s.lesson ?? 'outside the lessons') ?? byLesson.set(s.lesson ?? 'outside the lessons', []).get(s.lesson ?? 'outside the lessons')).push(s);
  const order = [...byLesson].sort((a, b) => (a[1][0].number ?? 999) - (b[1][0].number ?? 999));
  const lim = Number(limit) || 12;
  const out = [`${w.text.zh} ${w.text.py} (${w.text.en})  [taught in ${w.lesson ?? 'no lesson'}]`, `  ${sentences.length} sentences, ${examples.length} pattern examples, ${composites.length} composite descriptions use it (senses: kb word ${w.text.py})`];
  let shownCount = 0;
  for (const [l, list] of order) {
    out.push('', `${l} (${list.length}):`);
    for (const s of list.slice(0, 3)) {
      if (shownCount++ < lim) out.push(`  ${say(s)}`);
    }
  }
  const c = cut(composites, lim);
  out.push('', `Composites whose description uses it (${composites.length}):`, ...c.shown.map((i) => `  ${say(i)}  [${lessonTag(lessons, i)}]`), ...more(c.more));
  return { data: { word: id, sentences: sentences.length, patternExamples: examples.length, composites: composites.map((i) => plain(i, lessons)), byLesson: order.map(([l, list]) => ({ lesson: l, count: list.length })) }, text: out.join('\n') };
}
