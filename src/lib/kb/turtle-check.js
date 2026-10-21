// A small Turtle reader the tests use to check that the exported file is valid. It knows the part of Turtle the export writes (prefixes,
// IRIs, prefixed names, strings with a language tag or datatype, `a`, `;` and `,` lists, `[]`) and throws on anything else.
// It is for the tests; use a real RDF library for anything wider. Nothing here changes data.
//
//   parseTurtle(text) -> { prefixes, triples: [[s, p, o]] }   terms are strings: <iri> expanded, "literal"@lang, _:b1

const ESCAPES = { n: '\n', r: '\r', t: '\t', '"': '"', '\\': '\\' };
const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';

export function parseTurtle(text) {
  const prefixes = {};
  const triples = [];
  let i = 0;
  let bnodes = 0;
  const fail = (message) => {
    throw new Error(`Turtle: ${message} near "${text.slice(Math.max(0, i - 40), i)}<here>${text.slice(i, i + 40)}"`);
  };
  const skip = () => {
    for (;;) {
      while (i < text.length && /\s/.test(text[i])) i++;
      if (text[i] === '#') while (i < text.length && text[i] !== '\n') i++;
      else return;
    }
  };

  const term = () => {
    skip();
    const c = text[i];
    if (c === '<') {
      const end = text.indexOf('>', i);
      if (end < 0) fail('an IRI is not closed');
      const iri = text.slice(i + 1, end);
      if (/[\s<"{}|^`\\]/.test(iri)) fail(`a character that cannot be in an IRI: ${iri}`);
      i = end + 1;
      return iri;
    }
    if (c === '"') {
      let j = i + 1;
      let value = '';
      while (text[j] !== '"') {
        if (j >= text.length) fail('a string is not closed');
        if (text[j] === '\n') fail('a raw newline in a string');
        if (text[j] === '\\') {
          const e = ESCAPES[text[j + 1]];
          if (e === undefined) fail('an unknown escape in a string');
          value += e;
          j += 2;
        } else value += text[j++];
      }
      i = j + 1;
      const tag = /^@[a-zA-Z]+(?:-[a-zA-Z0-9]+)*/.exec(text.slice(i));
      if (tag) {
        i += tag[0].length;
        return `"${value}"${tag[0]}`;
      }
      if (text.startsWith('^^', i)) {
        i += 2;
        return `"${value}"^^${term()}`;
      }
      return `"${value}"`;
    }
    if (c === '[') {
      i++;
      skip();
      if (text[i] !== ']') fail('only [] is supported');
      i++;
      return `_:b${++bnodes}`;
    }
    const m = /^([A-Za-z][\w-]*)?:((?:[\w-]|%[0-9A-Fa-f]{2})*)/.exec(text.slice(i));
    if (!m) fail('not a term');
    const base = prefixes[m[1] ?? ''];
    if (base === undefined) fail(`prefix "${m[1]}" is not declared`);
    i += m[0].length;
    return base + m[2];
  };

  for (;;) {
    skip();
    if (i >= text.length) break;
    if (text.startsWith('@prefix', i)) {
      i += 7;
      skip();
      const m = /^([A-Za-z][\w-]*)?:/.exec(text.slice(i));
      if (!m) fail('a prefix name');
      i += m[0].length;
      prefixes[m[1] ?? ''] = term();
      skip();
      if (text[i++] !== '.') fail('a prefix line does not end with a dot');
      continue;
    }
    const subject = term();
    for (;;) {
      skip();
      let predicate;
      if (text[i] === 'a' && /\s/.test(text[i + 1] ?? '')) {
        i++;
        predicate = RDF_TYPE;
      } else predicate = term();
      for (;;) {
        triples.push([subject, predicate, term()]);
        skip();
        if (text[i] === ',') i++;
        else break;
      }
      if (text[i] === ';') {
        i++;
        skip();
        if (text[i] === '.') {
          i++;
          break;
        }
        continue;
      }
      if (text[i] === '.') {
        i++;
        break;
      }
      fail('expected ; , or .');
    }
  }
  return { prefixes, triples };
}
