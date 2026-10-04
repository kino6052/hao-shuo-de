// To say maybe, put kěnéng (maybe) before the verb. Pattern: Who + kěnéng +
// verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "maybe",
  words: [
    {
      term: "{{word:ke3neng2}}",
      hanzi: "可能",
      en: "maybe, might",
      ru: "может быть, возможно",
    },
  ],
  prose: {
    en: [
      "**To say maybe**, put {{word:ke3neng2}} (maybe) before the verb.",
      "",
      "**Who + {{word:ke3neng2}} + verb**",
      "",
      "On its own, {{Word:ke3neng2}}. means \"Maybe.\"",
    ],
    ru: [
      "**Чтобы сказать «может быть»**, поставьте {{word:ke3neng2}} (может быть) перед глаголом.",
      "",
      "**Кто + {{word:ke3neng2}} + глагол**",
      "",
      "Само по себе {{Word:ke3neng2}}. значит «Может быть.»",
    ],
    tldr: {
      en: "Put {{word:ke3neng2}} before a verb to say it might be so.",
      ru: "Поставьте {{word:ke3neng2}} перед глаголом, чтобы сказать, что так, возможно, и есть.",
    },
    necessity: { en: "Now you can say you're not sure.", ru: "Теперь вы можете сказать, что не уверены." },
  },
  info: {
    en: "{{word:ke3neng2}} + verb, maybe: {{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}. (He might know.)",
    ru: "{{word:ke3neng2}} + глагол — может быть: {{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}. (Он, может быть, знает.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}.",
      hanzi: "他可能知道。",
      en: "He might know.",
      ru: "Он, может быть, знает.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ke3neng2}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "她可能要吃。",
      en: "She might want to eat.",
      ru: "Она, может быть, хочет есть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ke3neng2}} {{word:bu4}} {{word:neng2}} {{word:deng3}}.",
      hanzi: "我可能不能等。",
      en: "I might not be able to wait.",
      ru: "Может быть, я не смогу подождать.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ke3neng2}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "我可能不吃。",
      en: "I might not eat.",
      ru: "Может быть, я не буду есть.",
    },
  ],
  exercises: [
    {
      en: "Maybe she knows.",
      ru: "Может быть, она знает.",
      answer: "{{Word:ta1}} {{word:ke3neng2}} {{word:zhi1dao4}}.",
      hanzi: "她可能知道。",
    },
  ],
});
