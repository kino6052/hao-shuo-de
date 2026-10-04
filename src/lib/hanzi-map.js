// Every dictionary word's hanzi, read from the lessons' word cards (a vocab
// slot's `ttsText`), since src/data/dictionary.json keeps only pinyin. Every
// word is taught on a card in some lesson, so the map is complete. Pure, so
// both the app (src/lib/word-hanzi.js) and the build scripts can use it.

// Cards that say the word in its usual place-word form (lǐ as 里面), where
// the word itself is one character: 里 + 面 must not become 里面面.
const OWN_HANZI = { li3: "里", shang4: "上", xia4: "下" };

// -> Map of word id -> hanzi, from the lessons' assembled entries (each
// lesson's index.ts default export).
export function hanziFromLessons(lessons) {
  const map = new Map();
  for (const entries of lessons) {
    for (const slot of entries) {
      const id = slot.type === "vocab" && slot.term.match(/^\{\{word:([a-z0-9-]+)\}\}$/)?.[1];
      if (id && slot.ttsText) map.set(id, OWN_HANZI[id] ?? slot.ttsText);
    }
  }
  return map;
}
