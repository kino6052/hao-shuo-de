// kb_memory, the translation memory (TRANSLATOR_PLAN.md C2): an English sentence -> the closest book sentences
// by their own English, from the Akinator's pool (every sentence of the dictionary: lesson examples and answers,
// composite examples, story lines, the phrase book). Once an approved-translations store exists (TR1, E1) it is
// searched first, ahead of the book's own sentences; there is none yet, so the pool is the only source.
//
// "Closest" is Jaccard over each sentence's own English words (a 's/plural s stripped) against the query's --
// nothing about Hao-shuo-de or grammar, only what the two say in English.
//
// skip leaves out the sentences whose pool id starts with one of its prefixes. The translator's test set sets
// HAOSHUODE_MEMORY_SKIP for its sessions, so a story is not translated by copying the book it is compared with (F1).
//
//   askMemory(kb, { text, limit, skip }) -> { data, text }
//   memorySkip(env) -> [prefix]          HAOSHUODE_MEMORY_SKIP, comma-separated

export const MEMORY_SKIP_ENV = 'HAOSHUODE_MEMORY_SKIP';
export const memorySkip = (env = process.env) => String(env[MEMORY_SKIP_ENV] ?? '').split(',').map((s) => s.trim()).filter(Boolean);

const stem = (w) => w.replace(/'s$|s$/, '');
const tokens = (s) => new Set(String(s ?? '').toLowerCase().match(/[a-z']+/g)?.map(stem) ?? []);

// the pool's sentences with their tokens, kept per pool (a pool is made again only when the data changes), so a caller
// that asks once per sentence (the quick translator) tokenizes the 5,000-odd sentences once, not every time
const keptTokens = new WeakMap();
function poolSentences(pool) {
  let list = keptTokens.get(pool);
  if (!list) {
    list = pool.items.filter((i) => i.type === 'sentence' && i.source !== 'pattern_example' && i.text.en).map((it) => ({ it, t: tokens(it.text.en) }));
    keptTokens.set(pool, list);
  }
  return list;
}

export function askMemory(kb, { text, limit = 10, skip = [] } = {}) {
  if (!text) throw new Error('text is required (an English sentence)');
  const q = tokens(text);
  if (!q.size) throw new Error('nothing to match: give an English sentence');
  const sentences = poolSentences(kb.pool()).filter(({ it }) => !skip.some((p) => it.id.startsWith(p)));
  const scored = sentences
    .map(({ it, t }) => {
      const shared = [...q].filter((w) => t.has(w)).length;
      return { it, shared, score: shared / (q.size + t.size - shared || 1) };
    })
    .filter((s) => s.shared > 0)
    .sort((a, b) => b.score - a.score || (a.it.id < b.it.id ? -1 : 1));
  const lim = Number(limit) || 10;
  const rows = scored.slice(0, lim).map((s) => ({ id: s.it.id, en: s.it.text.en, pinyin: s.it.text.py, hanzi: s.it.text.zh, lesson: s.it.lesson ?? null, score: Number(s.score.toFixed(3)) }));
  const out = [`English "${text}": ${rows.length} of ${scored.length} match(es)`];
  if (!rows.length) out.push('Nothing close in the book.');
  for (const r of rows) out.push('', `${r.pinyin}  ${r.hanzi}  "${r.en}"`, `  lesson ${r.lesson ?? 'none'}; ${Math.round(r.score * 100)}% shared`);
  return { data: { query: text, rows }, text: out.join('\n') };
}
