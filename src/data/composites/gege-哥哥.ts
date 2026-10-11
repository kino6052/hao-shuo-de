import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 510,
  phase: 2,
  zh: "哥哥",
  py: "gēge",
  en: "older brother",
  ru: "старший брат",
  pos: "noun",
  hsd: [
    "{{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:da4}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{light:zi}}",
  ],
  tts: ["我爸爸妈妈的比我大的男孩子"],
  literal: "my parents' boy, bigger than me",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:da4}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "我爸爸妈妈的比我大的男孩子很高。",
      en: "My older brother is tall.",
      ru: "Мой старший брат высокий.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:wo3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:bi3}}-{{word:wo3}}-{{word:da4}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我和我爸爸妈妈的比我大的男孩子一起吃饭。",
      en: "I eat with my older brother.",
      ru: "Я ем вместе со старшим братом.",
    },
  ],
});
