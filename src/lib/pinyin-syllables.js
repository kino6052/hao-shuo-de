// The syllables of a pinyin word, one per character (used for the frequency list's sounds).

const V = 'aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ';
const SYL = new RegExp(`(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?[${V}]+(?:ng(?![${V}])|n(?![${V}])|r(?![${V}]))?`, 'gi');

// -> the syllables of a pinyin word, one per character, or null if they don't line up.
export function syllables(py, zh) {
  const s = py.normalize('NFC').toLowerCase().replace(new RegExp(`[^a-z${V}]`, 'g'), ' ').match(SYL) ?? [];
  const chars = [...zh];
  // erhua: 一会儿 is yīhuìr, two syllables for three characters
  if (s.length === chars.length - 1 && chars[chars.length - 1] === '儿' && /r$/.test(s[s.length - 1])) {
    s[s.length - 1] = s[s.length - 1].slice(0, -1);
    s.push('r');
  }
  return s.length === chars.length ? s : null;
}
