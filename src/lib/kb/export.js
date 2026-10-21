// Writes the dictionary as OntoLex-Lemon Turtle, a standard format that tools like Protégé can open and share.
// The reasoner stays clingo; this is a one-way export (KB_PLAN.md phase 7, K1). Nothing here changes data.
//
//   buildExport({ words, composites, links, relations, base, includeProposed, date }) -> { prefixes, header, blocks, counts }
//   exportTurtle(model)                                  -> the whole file as text
//   exportFragment(model, name)                          -> the prefixes and the blocks of one entry (a word id or a hanzi)
//   renderExportSummary(counts)                          -> the counts as text
//
// words       the core words { id: { term, hanzi, pos, definition, senses } }
// composites  the entries [{ zh, py, en, ru, pos, hsd, tts, proposed, ... }]
// links       kb/wordnet/links.json: { linked: { zh: [ili] }, words: { id: [ili] } }
// relations   the relation report's list [{ kind, status, a, b, members, why }]
//
// The model:
//   - every core word is an ontolex:LexicalEntry <w:id>, every composite one <c:hanzi>; each has a canonical Form (the hanzi
//     and the pinyin as two written representations) and a LexicalSense (the English and Russian gloss);
//   - a sense that is linked to WordNet points at its CILI id with ontolex:reference (http://ili.globalwordnet.org/ili/i…);
//   - a composite carries its descriptions (hsd:description, in hanzi) and hsd:definedBy for each word they use;
//   - relations with two ends become triples (hsd:kindOf, hsd:partOf, hsd:oppositeOf, hsd:closeTo, …); relations with
//     members become an hsd:Group. Only accepted relations are exported unless `includeProposed`, and then each proposed
//     one is marked by an owl:Axiom annotation (hsd:status "proposed");
//   - an entry the author has not reviewed is marked hsd:status "proposed".
// The base IRI is a placeholder (https://haoshuode.example/): change it with `base` before publishing.

import { wordRefIds } from '../word-refs.js';

export const DEFAULT_BASE = 'https://haoshuode.example/';
const ILI = 'http://ili.globalwordnet.org/ili/';

// part of speech -> a LexInfo class (the ones that surely exist); other values stay as the text in hsd:pos
const POS = { noun: 'noun', verb: 'verb', adjective: 'adjective', adverb: 'adverb', pronoun: 'pronoun', preposition: 'preposition', conjunction: 'conjunction', particle: 'particle', interjection: 'interjection', number: 'numeral', prefix: 'prefix', suffix: 'suffix' };

// relation kind -> the property that carries it
const PROPERTY = {
  'kind-of': 'kindOf',
  'part-of': 'partOf',
  opposite: 'oppositeOf',
  close: 'closeTo',
  'opposite-by-not': 'oppositeByNot',
  agent: 'agentIs',
  'defined-by': 'definedBy',
  'close-by-paraphrase': 'closeByParaphrase',
  circular: 'circularWith',
};
const SYMMETRIC = new Set(['oppositeOf', 'closeTo', 'oppositeByNot', 'closeByParaphrase', 'circularWith']);

const camel = (s) => s.replace(/-(\w)/g, (_, c) => c.toUpperCase());

// a name safe in a Turtle prefixed name: everything but letters, digits, _ and - becomes %XX (UTF-8 bytes)
export function encodeName(s) {
  return [...String(s)]
    .map((ch) => (/[A-Za-z0-9_-]/.test(ch) ? ch : [...new TextEncoder().encode(ch)].map((b) => `%${b.toString(16).toUpperCase().padStart(2, '0')}`).join('')))
    .join('');
}

const str = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r/g, '\\r').replace(/\n/g, '\\n')}"`;
const lit = (s, lang) => `${str(s)}${lang ? `@${lang}` : ''}`;
// one Turtle statement: a subject and its predicate-object pairs, one predicate to a line (a predicate used twice
// keeps its objects together: `hsd:definedBy a , b`)
const stmt = (subject, lines) => {
  const byPredicate = new Map();
  for (const line of lines) {
    const cut = line.indexOf(' ');
    const predicate = cut < 0 ? line : line.slice(0, cut);
    byPredicate.set(predicate, [...(byPredicate.get(predicate) ?? []), cut < 0 ? '' : line.slice(cut + 1)]);
  }
  const merged = [...byPredicate].map(([p, objects]) => (objects[0] === '' ? p : `${p} ${objects.join(' , ')}`));
  return `${subject} ${merged.join(' ;\n    ')} .\n`;
};
const plainGloss = (s) => String(s ?? '').replace(/\{\{[^}]*\}\}/g, '').replace(/\s+/g, ' ').trim();

export function buildExport({ words = {}, composites = [], links = {}, relations = [], base = DEFAULT_BASE, includeProposed = false, date = new Date() } = {}) {
  const wIri = (id) => `hsdw:${encodeName(id)}`;
  const cIri = (zh) => `hsdc:${encodeName(zh)}`;
  const haveComposite = new Set(composites.map((c) => c.zh));
  const end = (x) => (typeof x === 'string' ? (words[x] ? wIri(x) : haveComposite.has(x) ? cIri(x) : null) : null);

  const counts = { words: 0, composites: 0, senses: 0, linkedSenses: 0, proposedEntries: 0, relations: {}, groups: 0, proposedRelations: 0, skipped: {}, definedBy: 0 };
  const skip = (why) => (counts.skipped[why] = (counts.skipped[why] ?? 0) + 1);
  const blocks = new Map(); // entry key -> text; the key is a word id or a hanzi
  const extra = new Map(); // the same key -> the relation statements whose subject is the entry
  const groups = [];
  const used = new Set(); // the properties actually used, to declare

  const entryBlock = (key, iri, { label, py, pos, glosses, ilis, proposed, descriptions, uses, comment }) => {
    const posParts = String(pos ?? '').split('/').map((p) => p.trim());
    const lexinfo = posParts.map((p) => POS[p]).find(Boolean);
    const head = [
      'a ontolex:LexicalEntry',
      `rdfs:label ${lit(label, 'cmn-Hans')}`,
      ...(lexinfo ? [`lexinfo:partOfSpeech lexinfo:${lexinfo}`] : []),
      ...(pos ? [`hsd:pos ${lit(pos)}`] : []),
      `ontolex:canonicalForm ${iri}_form`,
      `ontolex:sense ${iri}_sense`,
      ...(proposed ? ['hsd:status "proposed"'] : []),
      ...(comment ? [`rdfs:comment ${lit(comment, 'en')}`] : []),
      ...descriptions.map((d) => `hsd:description ${lit(d, 'cmn-Hans')}`),
      ...uses.map((u) => `hsd:definedBy ${u}`),
    ];
    const form = [`a ontolex:Form`, `ontolex:writtenRep ${[lit(label, 'cmn-Hans'), ...(py ? [lit(py, 'cmn-Latn-pinyin')] : [])].join(' , ')}`];
    const sense = [
      'a ontolex:LexicalSense',
      ...(glosses.length ? [`skos:definition ${glosses.map(([text, lang]) => lit(text, lang)).join(' , ')}`] : []),
      ...(ilis.length ? [`ontolex:reference ${ilis.map((i) => `<${ILI}${i}>`).join(' , ')}`] : []),
    ];
    counts.senses++;
    if (ilis.length) counts.linkedSenses++;
    if (proposed) counts.proposedEntries++;
    blocks.set(key, { iri, head, text: [stmt(`${iri}_form`, form), stmt(`${iri}_sense`, sense)].join('') });
  };

  // core words
  for (const [id, w] of Object.entries(words)) {
    counts.words++;
    const gloss = plainGloss(w.definition?.eng);
    const ru = plainGloss(w.definition?.rus);
    entryBlock(id, wIri(id), {
      label: w.hanzi ?? w.term,
      py: w.term,
      pos: w.pos?.eng,
      glosses: [...(gloss ? [[gloss, 'en']] : []), ...(ru ? [[ru, 'ru']] : [])],
      ilis: links.words?.[id] ?? [],
      proposed: false,
      descriptions: [],
      uses: [],
      comment: null,
    });
  }

  // composites
  for (const c of composites) {
    counts.composites++;
    const forms = c.hsd ? String(c.hsd).split(' / ') : [];
    const uses = [...new Set(forms.flatMap((f) => wordRefIds(f)).filter((id) => words[id]))].map(wIri);
    counts.definedBy += uses.length;
    entryBlock(c.zh, cIri(c.zh), {
      label: c.zh,
      py: c.py,
      pos: c.pos,
      glosses: [...(c.en ? [[String(c.en), 'en']] : []), ...(c.ru ? [[String(c.ru), 'ru']] : [])],
      ilis: links.linked?.[c.zh] ?? [],
      proposed: !!c.proposed,
      descriptions: [].concat(c.tts ?? []).filter(Boolean),
      uses,
      comment: c.literal ? `literally: ${c.literal}` : null,
    });
  }

  // relations
  const axioms = [];
  for (const r of relations) {
    const proposed = r.status === 'proposed';
    if (proposed && !includeProposed) {
      skip('proposed');
      continue;
    }
    if (r.b !== undefined && !r.members) {
      const a = end(r.a);
      const b = end(r.b);
      if (!a || !b) {
        skip(`an end is not an entry (${r.kind})`);
        continue;
      }
      const prop = PROPERTY[r.kind] ?? camel(r.kind);
      used.add(prop);
      const key = r.a;
      extra.set(key, [...(extra.get(key) ?? []), `hsd:${prop} ${b}`]);
      counts.relations[prop] = (counts.relations[prop] ?? 0) + 1;
      if (proposed) {
        counts.proposedRelations++;
        axioms.push(`[] a owl:Axiom ;\n    owl:annotatedSource ${a} ;\n    owl:annotatedProperty hsd:${prop} ;\n    owl:annotatedTarget ${b} ;\n    hsd:status "proposed" .\n`);
      }
    } else if (r.members?.length) {
      const members = r.members.map(end).filter(Boolean);
      if (members.length < 2) {
        skip(`a group with fewer than two entries (${r.kind})`);
        continue;
      }
      groups.push({ kind: r.kind, why: r.why, members, proposed });
      counts.groups++;
    } else {
      skip(`no entry at the end (${r.kind})`);
    }
  }

  const prefixes = [
    ['rdf', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#'],
    ['rdfs', 'http://www.w3.org/2000/01/rdf-schema#'],
    ['owl', 'http://www.w3.org/2002/07/owl#'],
    ['xsd', 'http://www.w3.org/2001/XMLSchema#'],
    ['skos', 'http://www.w3.org/2004/02/skos/core#'],
    ['dct', 'http://purl.org/dc/terms/'],
    ['ontolex', 'http://www.w3.org/ns/lemon/ontolex#'],
    ['lime', 'http://www.w3.org/ns/lemon/lime#'],
    ['lexinfo', 'http://www.lexinfo.net/ontology/3.0/lexinfo#'],
    ['hsd', `${base}ns#`],
    ['hsdw', `${base}word/`],
    ['hsdc', `${base}entry/`],
    ['hsdg', `${base}group/`],
  ];

  const declared = [
    'hsd:pos a owl:DatatypeProperty ; rdfs:comment "The part of speech as the dictionary writes it." .',
    'hsd:description a owl:DatatypeProperty ; rdfs:comment "A description of the entry in dictionary words, written in hanzi." .',
    'hsd:status a owl:AnnotationProperty ; rdfs:comment "\\"proposed\\": made by Claude or a rule and not yet reviewed by the author." .',
    'hsd:definedBy a owl:ObjectProperty ; rdfs:comment "The core word a description of the entry uses." .',
    'hsd:Group a owl:Class ; rdfs:comment "Entries that belong together (a scale, a set, a family, the words of a prime)." .',
    'hsd:groupKind a owl:DatatypeProperty .',
    'hsd:member a owl:ObjectProperty .',
    ...[...used].filter((p) => p !== 'definedBy').sort().map((p) => `hsd:${p} a owl:ObjectProperty${SYMMETRIC.has(p) ? ', owl:SymmetricProperty' : ''} .`),
  ];
  const iso = date.toISOString().slice(0, 10);
  const header = [
    `<${base}> a owl:Ontology ;\n    dct:title "Hao-shuo-de dictionary"@en ;\n    dct:created "${iso}"^^xsd:date ;\n    rdfs:comment "The dictionary of the Hao-shuo-de minimal language as OntoLex-Lemon, exported from the knowledge base. The base IRI is a placeholder." ;\n    owl:imports <http://www.w3.org/ns/lemon/ontolex> .\n`,
    ...declared.map((d) => `${d}\n`),
    `hsd:lexicon a lime:Lexicon ;\n    lime:language "cmn-Hans" ;\n    rdfs:label "Hao-shuo-de"@en .\n`,
  ].join('\n');

  const groupBlocks = groups.map((g, i) => {
    const iri = `hsdg:${encodeName(g.kind)}-${i + 1}`;
    const text = stmt(iri, ['a hsd:Group', `hsd:groupKind ${lit(g.kind)}`, ...(g.why ? [`rdfs:comment ${lit(g.why, 'en')}`] : []), ...(g.proposed ? ['hsd:status "proposed"'] : []), `hsd:member ${g.members.join(' , ')}`]);
    return text;
  });

  return { prefixes, header, blocks, extra, groupBlocks, axioms, counts };
}

const prefixLines = (m) => m.prefixes.map(([p, iri]) => `@prefix ${p}: <${iri}> .`).join('\n');

const entryText = (m, key) => {
  const b = m.blocks.get(key);
  return stmt(b.iri, [...b.head, ...(m.extra.get(key) ?? [])]) + b.text;
};

export function exportTurtle(m) {
  const entries = [...m.blocks.keys()].map((k) => entryText(m, k));
  const lexicon = `hsd:lexicon lime:entry ${[...m.blocks.values()].map((b) => b.iri).join(' ,\n    ')} .\n`;
  return [prefixLines(m), '', m.header, lexicon, ...entries, ...m.groupBlocks, ...m.axioms].join('\n') + '\n';
}

// -> the prefixes and what one entry's block holds (a word id or a hanzi), or null when there is no such entry
export function exportFragment(m, name) {
  if (!m.blocks.has(name)) return null;
  return `${prefixLines(m)}\n\n${entryText(m, name)}`;
}

export function renderExportSummary(counts) {
  const rel = Object.entries(counts.relations).map(([k, n]) => `${k} ${n}`).join(', ') || 'none';
  const skipped = Object.entries(counts.skipped).map(([k, n]) => `${k}: ${n}`).join('; ') || 'none';
  return [
    'OntoLex export (Turtle)',
    `  entries: ${counts.words} core words, ${counts.composites} composites (${counts.proposedEntries} proposed)`,
    `  senses: ${counts.senses}, ${counts.linkedSenses} linked to WordNet (ontolex:reference to CILI)`,
    `  definedBy: ${counts.definedBy} links from a composite to a word its description uses`,
    `  relations: ${rel}; ${counts.groups} groups; ${counts.proposedRelations} proposed relations marked`,
    `  left out: ${skipped}`,
  ].join('\n');
}
