// To say maybe, put kě-néng (maybe) before the verb. Pattern: Who + kě-néng +
// verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "maybe",
  words: [
    {
      word: "ke3",
      en: "can, may; {{word:ke3}}-{{word:neng2}}: maybe",
      ru: "можно; {{word:ke3}}-{{word:neng2}} — может быть",
    },
  ],
  prose: {
    en: [
      "**To say maybe**, put {{word:ke3}}-{{word:neng2}} (maybe) before the verb.",
      "",
      "**Who + {{word:ke3}}-{{word:neng2}} + verb**",
      "",
      "On its own, {{Word:ke3}}-{{word:neng2}}. means \"Maybe.\"",
    ],
    ru: [
      "**Чтобы сказать «может быть»**, поставьте {{word:ke3}}-{{word:neng2}} (может быть) перед глаголом.",
      "",
      "**Кто + {{word:ke3}}-{{word:neng2}} + глагол**",
      "",
      "Само по себе {{Word:ke3}}-{{word:neng2}}. значит «Может быть.»",
    ],
    tldr: {
      en: "Put {{word:ke3}}-{{word:neng2}} before a verb to say it might be so.",
      ru: "Поставьте {{word:ke3}}-{{word:neng2}} перед глаголом, чтобы сказать, что так, возможно, и есть.",
    },
    necessity: { en: "Now you can say you're not sure.", ru: "Теперь вы можете сказать, что не уверены." },
  },
  info: {
    en: "{{word:ke3}}-{{word:neng2}} + verb, maybe: {{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:zhi1dao4}}. (He might know.)",
    ru: "{{word:ke3}}-{{word:neng2}} + глагол — может быть: {{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:zhi1dao4}}. (Он, может быть, знает.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:zhi1dao4}}.",
      hanzi: "他可能知道。",
      en: "He might know.",
      ru: "Он, может быть, знает.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "她可能要吃。",
      en: "She might want to eat.",
      ru: "Она, может быть, хочет есть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ke3}}-{{word:neng2}} {{word:bu4}} {{word:neng2}} {{word:deng3}}.",
      hanzi: "我可能不能等。",
      en: "I might not be able to wait.",
      ru: "Может быть, я не смогу подождать.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ke3}}-{{word:neng2}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "我可能不吃。",
      en: "I might not eat.",
      ru: "Может быть, я не буду есть.",
    },
  ],
  exercises: [
    {
      en: "Maybe she knows.",
      ru: "Может быть, она знает.",
      answer: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:zhi1dao4}}.",
      hanzi: "她可能知道。",
    },
  ],
});
