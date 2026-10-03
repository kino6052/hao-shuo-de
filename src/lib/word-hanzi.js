// Every dictionary word's hanzi, read from the lessons' word cards (a vocab
// slot's `ttsText`), since src/data/dictionary.json keeps only pinyin. Every
// word is taught on a card in some lesson, so the map is complete.
const shapes = import.meta.glob("../content/lessons/*/shape.ts", { eager: true });

// Cards that say the word in its usual place-word form (lǐ as 里面), where
// the word itself is one character: 里 + 面 must not become 里面面.
const OWN_HANZI = { li3: "里", shang4: "上", xia4: "下" };

export const WORD_HANZI = new Map();
for (const mod of Object.values(shapes)) {
  for (const slot of Object.values(mod.default)) {
    const id = slot.type === "vocab" && slot.term.match(/^\{\{word:([a-z0-9-]+)\}\}$/)?.[1];
    if (id && slot.ttsText) WORD_HANZI.set(id, OWN_HANZI[id] ?? slot.ttsText);
  }
}
