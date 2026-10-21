import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 612,
  phase: 2,
  zh: "内",
  py: "nèi",
  en: "inside",
  ru: "внутри",
  pos: "noun",
  hsd: ["{{word:li3}}-{{word:mian4}}"],
  tts: ["里面"],
  fit: "natural",
  topics: ["near-and-far"],
  isA: ["place-word"],
  note: "Lesson {{lesson:where-it-is}}.",
  examples: [
    {
      pinyin: "{{Word:che1}}-{{word:de}} {{word:li3}}-{{word:mian4}} {{word:you3}} {{word:ren2}}.",
      hanzi: "车的里面有人。",
      en: "There are people inside the car.",
      ru: "Внутри машины люди.",
    },
    {
      pinyin: "{{Word:fang2}}-{{word:jian1}}-{{word:de}} {{word:li3}}-{{word:mian4}} {{word:hen3}} {{word:gan1jing4}}.",
      hanzi: "房间的里面很干净。",
      en: "The inside of the room is clean.",
      ru: "Внутри комнаты чисто.",
    },
  ],
});
