// Ranks Chinese words by what making each one a core entry would bring, for growing Hao-shuo-de from 230 words to about
// 1000 core entries (the follow-up project, jiandanhua; KB_PLAN.md phase 8, K29). Nothing here changes data.
//
//   const model = gainModel(source, { freq })
//   model.rank({ target: 1000, mode: 'path' })    the words to promote, best first, each with what it brings
//   model.rank({ mode: 'alone' })                 every word measured against today's core only
//   model.explain('药店')                         what promoting one word would bring, with the words behind each number
//   renderGains(report, { limit }) / renderGainExplain(r)
//
// `freq` is the Mandarin frequency list [{ zh, py, rank }] (scripts/frequency-list.js). Without it nothing can be ranked.
//
// A word counts as written naturally when it can be cut into pieces that are all core entries (药店 = 药 + 店), so a
// promotion pays when it completes common words. What one promotion brings, each part weighted by rank (the top 1000
// words count 3, the top 2000 count 2, the rest 1, as in candidates.js):
//   completes  common words that become writable with it (every piece is then a core entry)         x GAINS.completes
//   near       common words it brings to one missing character (the next promotion finishes them)  x GAINS.near
//   shorter    descriptions of other composites that contain this word's own description,           x GAINS.shorter
//              counted in words saved (a clumsy phrase used many times is worth one word)
//   reach      composites whose hanzi contain it, which could be written with it                    x GAINS.reach
// 'alone' measures every word against the core as it is; 'path' promotes the best one, measures again and repeats until
// the core reaches the target, so a word that only pays once its partner is in (药, then 店) shows up in its turn.
// A word whose toned sound is already a core word is marked: it would join that word as a sense, not be a new word.

import { wordRefIds } from '../word-refs.js';
import { rankWeight } from './candidates.js';

export const GAINS = { completes: 1, near: 0.25, shorter: 0.5, reach: 0.25 };
const MAX_LEN = 4; // longest word that is a candidate (characters)
const TOP = 6000; // how much of the frequency list counts

const chars = (s) => [...s];

export function gainModel(source, { freq = null, top = TOP } = {}) {
  const words = source.words ?? {};
  const norm = (s) => String(s).normalize('NFC').toLowerCase();

  // -- what the core can write today ---------------------------------------------------------------
  const core0 = new Set(); // hanzi strings that are core entries: a character a word or sense gives, or a word of several characters
  const soundOf = new Map(); // toned sound -> word id
  for (const [id, w] of Object.entries(words)) {
    core0.add(w.hanzi);
    soundOf.set(norm(w.term), id);
    for (const s of Object.values(w.senses ?? {})) if (s.hanzi) core0.add(s.hanzi);
  }

  // -- the words that count -------------------------------------------------------------------------
  const entries = (freq ?? []).slice(0, top).map((r) => ({ zh: r.zh, py: r.py, rank: r.rank, w: rankWeight(r.rank), cs: chars(r.zh) }));
  const bySubstring = new Map(); // a substring of a word -> the entries that contain it (the word itself included)
  for (const e of entries) {
    const seen = new Set();
    for (let i = 0; i < e.cs.length; i++) {
      for (let n = 1; i + n <= e.cs.length && n <= MAX_LEN; n++) {
        const s = e.cs.slice(i, i + n).join('');
        if (seen.has(s)) continue;
        seen.add(s);
        (bySubstring.get(s) ?? bySubstring.set(s, []).get(s)).push(e);
      }
    }
  }

  // -- composites: forms and what contains what ---------------------------------------------------------
  // A form is read as pieces split by spaces; a hyphenated piece (xīn-dòng) is one word of the language already, so
  // only a run of two or more pieces is a phrase a word could shorten. A piece is its word ids, so spelling and
  // punctuation do not matter.
  const pieces = (form) =>
    form
      .split(/\s+/)
      .map((p) => wordRefIds(p).join('-'))
      .filter(Boolean);
  const comps = [];
  for (const c of source.composites ?? []) {
    if (!c.hsd) continue;
    comps.push({ zh: c.zh, py: c.py, rank: c.rank, w: rankWeight(c.rank), forms: c.hsd.split(' / ').map(pieces) });
  }
  const compOf = new Map(comps.map((c) => [c.zh, c]));
  const gramIndex = new Map(); // "piece piece" -> the composites with a form that contains that run
  comps.forEach((c, ci) => {
    for (const form of c.forms) {
      for (let i = 0; i < form.length; i++) {
        for (let n = 2; i + n <= form.length && n <= 6; n++) {
          const k = form.slice(i, i + n).join(' ');
          const hit = gramIndex.get(k) ?? gramIndex.set(k, new Set()).get(k);
          hit.add(ci);
        }
      }
    }
  });
  const hanziIn = (zh) => comps.filter((c) => c.zh !== zh && c.zh.includes(zh));

  // -- the measures --------------------------------------------------------------------------------------
  // the fewest characters of a word that no core string covers, cutting it into core strings (and `extra`)
  const gap = (cs, core, extra) => {
    const best = new Array(cs.length + 1).fill(Infinity);
    best[0] = 0;
    for (let i = 0; i < cs.length; i++) {
      if (best[i] === Infinity) continue;
      best[i + 1] = Math.min(best[i + 1], best[i] + 1);
      for (let n = 1; i + n <= cs.length && n <= MAX_LEN; n++) {
        const s = cs.slice(i, i + n).join('');
        if (core.has(s) || s === extra) best[i + n] = Math.min(best[i + n], best[i]);
      }
    }
    return best[cs.length];
  };

  // the characters of a word that no core string covers, in the best cut
  const uncovered = (cs, core) => {
    const best = new Array(cs.length + 1).fill(Infinity);
    const from = new Array(cs.length + 1).fill(0);
    best[0] = 0;
    for (let i = 0; i < cs.length; i++) {
      if (best[i] + 1 < best[i + 1]) (best[i + 1] = best[i] + 1, (from[i + 1] = i));
      for (let n = 1; i + n <= cs.length && n <= MAX_LEN; n++) {
        if (core.has(cs.slice(i, i + n).join('')) && best[i] < best[i + n]) (best[i + n] = best[i], (from[i + n] = i));
      }
    }
    const out = [];
    for (let j = cs.length; j > 0; j = from[j]) if (best[j] > best[from[j]]) out.unshift(cs[j - 1]);
    return out;
  };

  // what one word's promotion brings against the core `core`
  function measure(zh, core, { detail = false } = {}) {
    const completes = [];
    const near = [];
    let c = 0;
    let n = 0;
    for (const e of bySubstring.get(zh) ?? []) {
      if (e.zh === zh || core.has(e.zh)) continue;
      const before = gap(e.cs, core, null);
      if (before === 0) continue;
      const after = gap(e.cs, core, zh);
      if (after === 0) {
        c += e.w;
        if (detail) completes.push(e);
      } else if (after === 1 && before >= 2) {
        n += e.w;
        if (detail) near.push(e);
      }
    }
    // descriptions that contain this word's own description (the longest one of its forms that saves most)
    const own = compOf.get(zh);
    const shorter = [];
    let saved = 0;
    if (own) {
      const best = new Map(); // composite zh -> words saved
      for (const form of own.forms) {
        if (form.length < 2) continue;
        for (const ci of gramIndex.get(form.join(' ')) ?? []) {
          const other = comps[ci];
          if (other.zh === zh) continue;
          const s = (form.length - 1) * other.w;
          if (s > (best.get(other.zh)?.s ?? 0)) best.set(other.zh, { s, words: form.length - 1 });
        }
      }
      for (const [z, b] of best) {
        saved += b.s;
        if (detail) shorter.push({ zh: z, py: compOf.get(z).py, rank: compOf.get(z).rank, words: b.words });
      }
    }
    const reach = hanziIn(zh);
    const reachWeight = reach.reduce((a, x) => a + x.w, 0);
    const gain = GAINS.completes * c + GAINS.near * n + GAINS.shorter * saved + GAINS.reach * reachWeight;
    return { gain, parts: { completes: c, near: n, shorter: saved, reach: reachWeight }, completesList: completes, nearList: near, shorterList: shorter, reachList: reach };
  }

  // -- the candidates -----------------------------------------------------------------------------------------
  const rankOf = new Map(entries.map((e) => [e.zh, e]));
  const pool = () => {
    const out = new Map();
    for (const e of entries) if (e.cs.length <= MAX_LEN && !core0.has(e.zh)) out.set(e.zh, e);
    for (const c of comps) if (c.zh.length <= MAX_LEN && chars(c.zh).length <= MAX_LEN && !core0.has(c.zh) && !out.has(c.zh)) out.set(c.zh, { zh: c.zh, py: c.py, rank: c.rank, w: c.w, cs: chars(c.zh) });
    return out;
  };

  const line = (e, m, step, core) => {
    const sound = norm(e.py ?? '');
    const clash = soundOf.get(sound);
    return {
      zh: e.zh,
      py: e.py,
      rank: rankOf.get(e.zh)?.rank ?? e.rank,
      entry: compOf.has(e.zh),
      step,
      gain: m.gain,
      parts: m.parts,
      completes: m.completesList.map((x) => x.zh),
      near: m.nearList.map((x) => x.zh),
      shorter: m.shorterList,
      reach: m.reachList.map((x) => x.zh),
      clash: clash ? { id: clash, term: words[clash].term, hanzi: words[clash].hanzi } : null,
    };
  };

  // -> the words to promote, best first. 'alone': each against today's core. 'path': greedy until the core has `target` entries.
  function rank({ target = 1000, mode = 'path', limit } = {}) {
    if (!freq) return null;
    const candidates = pool();
    const core = new Set(core0);
    const have = Object.keys(words).length;
    const out = [];
    const gains = new Map();
    const dirty = new Set(candidates.keys());
    const steps = mode === 'alone' ? 0 : Math.max(0, target - have);
    for (let step = 1; step <= steps; step++) {
      for (const zh of dirty) gains.set(zh, candidates.has(zh) ? measure(zh, core).gain : -1);
      dirty.clear();
      let best = null;
      for (const [zh, g] of gains) {
        if (!candidates.has(zh)) continue;
        const e = candidates.get(zh);
        if (best === null || g > best.g || (g === best.g && e.rank < best.e.rank)) best = { zh, g, e };
      }
      if (!best || best.g <= 0) break;
      out.push(line(best.e, measure(best.zh, core, { detail: true }), step, core));
      core.add(best.zh);
      candidates.delete(best.zh);
      gains.delete(best.zh);
      // only the words inside the entries that contain it can have changed
      for (const e of bySubstring.get(best.zh) ?? []) {
        for (let i = 0; i < e.cs.length; i++) for (let n = 1; i + n <= e.cs.length && n <= MAX_LEN; n++) {
          const s = e.cs.slice(i, i + n).join('');
          if (candidates.has(s)) dirty.add(s);
        }
      }
    }
    if (mode === 'alone') {
      const rows = [...candidates.values()].map((e) => ({ e, m: measure(e.zh, core, { detail: true }) })).filter((x) => x.m.gain > 0).sort((a, b) => b.m.gain - a.m.gain || a.e.rank - b.e.rank);
      return { mode, core: have, target, words: rows.slice(0, limit ?? rows.length).map((x, i) => line(x.e, x.m, i + 1, core)), total: rows.length };
    }
    return { mode, core: have, target, words: out.slice(0, limit ?? out.length), total: out.length };
  }

  function explain(zh) {
    if (!freq) return null;
    const e = pool().get(zh) ?? rankOf.get(zh) ?? (compOf.has(zh) ? { zh, py: compOf.get(zh).py, rank: compOf.get(zh).rank, w: compOf.get(zh).w, cs: chars(zh) } : core0.has(zh) ? { zh, py: '', rank: undefined, w: 1, cs: chars(zh) } : null);
    if (!e) return { zh, unknown: true };
    return { ...line(e, measure(zh, core0, { detail: true }), 0, core0), already: core0.has(zh), needs: uncovered(e.cs, core0) };
  }

  return { rank, explain, hasFrequencies: !!freq, candidates: () => pool().size };
}

// -- text -------------------------------------------------------------------------------------------------------

const fmt = (x) => (Number.isInteger(x) ? String(x) : x.toFixed(1));
const list = (xs, n = 8) => (xs.length ? xs.slice(0, n).join(' ') + (xs.length > n ? ` … +${xs.length - n}` : '') : 'none');

export function renderGains(r, { limit = 30 } = {}) {
  if (!r) return 'No frequency list found (set HSD_FREQ_CSV), so no word can be ranked.';
  const head = r.mode === 'path' ? `Words to promote to core, in order, from ${r.core} words to ${r.target} (each step measured after the earlier ones; ${r.total} steps found)` : `Words ranked against today's ${r.core}-word core alone (${r.total} would bring something)`;
  const out = [head, `  gain = completes x${GAINS.completes} + near x${GAINS.near} + shorter x${GAINS.shorter} + reach x${GAINS.reach}, each weighted by rank (top 1000 count 3, top 2000 count 2, the rest 1)`];
  for (const x of r.words.slice(0, limit)) {
    const flags = [x.entry ? '' : 'no entry yet', x.clash ? `sound of ${x.clash.term} ${x.clash.hanzi}: would be a sense of it` : ''].filter(Boolean).join('; ');
    out.push(`  ${String(x.step).padStart(3)}. ${x.zh} ${x.py} #${x.rank}  gain ${fmt(x.gain)} (completes ${fmt(x.parts.completes)}, near ${fmt(x.parts.near)}, shorter ${fmt(x.parts.shorter)}, reach ${fmt(x.parts.reach)})${flags ? `  [${flags}]` : ''}`);
    if (x.completes.length) out.push(`        completes: ${list(x.completes)}`);
  }
  if (r.words.length > limit) out.push(`  … and ${r.words.length - limit} more`);
  return out.join('\n');
}

export function renderGainExplain(r) {
  if (!r) return 'No frequency list found (set HSD_FREQ_CSV), so no word can be ranked.';
  if (r.unknown) return `${r.zh} is not among the common Mandarin words or the composites.`;
  const out = [];
  if (r.already) out.push(`${r.zh} is already a core entry.`);
  out.push(`Promote ${r.zh} ${r.py}${r.rank ? ` (#${r.rank})` : ''}${r.entry ? ', which has an entry' : ', which has no entry yet'}: gain ${fmt(r.gain)}${r.clash ? `; its sound is ${r.clash.term} ${r.clash.hanzi}, so it would be a sense of that word` : ''}.`);
  out.push(r.needs.length ? `  Not writable from the core yet: it needs ${r.needs.join(' ')} first, so by itself it adds only itself.` : '  Already writable from the core (every character is a core entry).');
  out.push(`  Completes ${r.completes.length} word(s): ${list(r.completes, 20)}`);
  out.push(`  Brings to one missing character: ${r.near.length} word(s): ${list(r.near, 20)}`);
  out.push(`  Shortens ${r.shorter.length} description(s): ${r.shorter.length ? r.shorter.slice(0, 12).map((s) => `${s.zh} (${s.words} word${s.words === 1 ? '' : 's'})`).join(' ') : 'none'}`);
  out.push(`  Composites that contain it: ${r.reach.length}: ${list(r.reach, 20)}`);
  return out.join('\n');
}
