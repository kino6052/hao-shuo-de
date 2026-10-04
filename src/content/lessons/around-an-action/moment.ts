// To do something just for a moment, put yī-xià (one go) after the verb.
// Pattern: Who + verb + yī-xià
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "moment",
  words: [
    {
      word: "yi1",
      en: "one; yī-xià: a moment",
      ru: "один; yī-xià: мгновение",
    },
    {
      word: "xia4",
      en: "down, under",
      ru: "вниз, под",
    },
  ],
  prose: {
    en: [
      "**To do something just for a moment**, put {{word:yi1}}-{{word:xia4}} (a moment) after the verb.",
      "",
      "**Who + verb + {{word:yi1}}-{{word:xia4}}**",
      "",
      "{{word:yi1}}-{{word:xia4}} is {{word:yi1}} (one) + {{word:xia4}} (down): one quick go. It makes a request softer: {{Word:deng3}} {{word:yi1}}-{{word:xia4}}! is \"Wait a moment!\"",
    ],
    ru: [
      "**Чтобы сделать что-то совсем недолго**, поставьте {{word:yi1}}-{{word:xia4}} (мгновение) после глагола.",
      "",
      "**Кто + глагол + {{word:yi1}}-{{word:xia4}}**",
      "",
      "{{word:yi1}}-{{word:xia4}} — это {{word:yi1}} (один) + {{word:xia4}} (вниз): «один раз, быстро». Так просьба звучит мягче: {{Word:deng3}} {{word:yi1}}-{{word:xia4}}! — «Подожди минутку!»",
    ],
    tldr: {
      en: "Put {{word:yi1}}-{{word:xia4}} after a verb to do it for a moment: {{Word:deng3}} {{word:yi1}}-{{word:xia4}}!",
      ru: "Поставьте {{word:yi1}}-{{word:xia4}} после глагола, чтобы сделать это на минутку: {{Word:deng3}} {{word:yi1}}-{{word:xia4}}!",
    },
    necessity: {
      en: "Now you can ask for a moment, or do something just a little.",
      ru: "Теперь вы можете попросить минутку или сделать что-то совсем чуть-чуть.",
    },
  },
  info: {
    en: "verb + {{word:yi1}}-{{word:xia4}}, for a moment: {{Word:deng3}} {{word:yi1}}-{{word:xia4}}! (Wait a moment!)",
    ru: "глагол + {{word:yi1}}-{{word:xia4}} — на минутку: {{Word:deng3}} {{word:yi1}}-{{word:xia4}}! (Подожди минутку!)",
  },
  examples: [
    {
      pinyin: "{{Word:deng3}} {{word:yi1}}-{{word:xia4}}!",
      hanzi: "等一下！",
      en: "Wait a moment!",
      ru: "Подожди минутку!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我看一下。",
      en: "Let me have a look.",
      ru: "Дай-ка я посмотрю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:liu2}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你留一下。",
      en: "Stay a moment.",
      ru: "Останься на минутку.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:wan2r}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我们玩儿一下。",
      en: "Let's play for a bit.",
      ru: "Давай немного поиграем.",
    },
  ],
  exercises: [
    {
      en: "Wait a moment!",
      ru: "Подожди минутку!",
      answer: "{{Word:deng3}} {{word:yi1}}-{{word:xia4}}!",
      hanzi: "等一下！",
    },
    {
      en: "I waited a long time.",
      ru: "Я долго ждал.",
      answer: "{{Word:wo3}} {{word:deng3}} {{word:le}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:shi2jian1}}.",
      hanzi: "我等了很多的时间。",
    },
  ],
});
