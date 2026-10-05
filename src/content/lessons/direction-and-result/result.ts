// To say how an action ends, join a result word to the verb: kàn-dào,
// zhǎo-dào, zuò-hǎo, zuò-huài, xué-huì. Pattern: verb-result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "result",
  words: [
    {
      word: "jian4",
      en: "see; {{word:kan4}}-{{word:jian4}}: see",
      ru: "видеть; {{word:kan4}}-{{word:jian4}} — увидеть",
    },
  ],
  prose: {
    en: [
      "**To say how an action ends**, join a result word to the verb. You know {{word:chi1}}-{{word:wan2}} (Lesson {{lesson:around-an-action}}).",
      "",
      "**verb-result**",
      "",
      "{{word:dao4}} says you reach it: {{word:kan4}}-{{word:dao4}} (see), {{word:ting1}}-{{word:dao4}} (hear), {{word:zhao3}}-{{word:dao4}} (find). {{word:zuo4}}-{{word:hao3}} is \"fix\", {{word:zuo4}}-{{word:huai4}} is \"break\", and {{word:xue2}}-{{word:hui4}} is \"learn until you can\". For \"didn't\", use {{word:mei2}} (Lesson {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
      "{{word:jian4}} after {{word:kan4}} or {{word:ting1}} says you caught it: {{word:kan4}}-{{word:jian4}}, see; {{word:ting1}}-{{word:jian4}}, hear.",
    ],
    ru: [
      "**Чтобы сказать, чем закончилось действие**, присоедините к глаголу слово-результат. Вы уже знаете {{word:chi1}}-{{word:wan2}} (урок {{lesson:around-an-action}}).",
      "",
      "**глагол-результат**",
      "",
      "{{word:dao4}} говорит, что вы этого достигли: {{word:kan4}}-{{word:dao4}} (увидеть), {{word:ting1}}-{{word:dao4}} (услышать), {{word:zhao3}}-{{word:dao4}} (найти) — как в русском «искать» и «найти». {{word:zuo4}}-{{word:hao3}} — «починить», {{word:zuo4}}-{{word:huai4}} — «сломать», а {{word:xue2}}-{{word:hui4}} — «учиться, пока не научишься». Чтобы сказать «не сделал», используйте {{word:mei2}} (урок {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
      "{{word:jian4}} после {{word:kan4}} или {{word:ting1}} говорит, что вы уловили: {{word:kan4}}-{{word:jian4}} — увидеть; {{word:ting1}}-{{word:jian4}} — услышать.",
    ],
    tldr: {
      en: "Join the result to the verb: {{word:zhao3}}-{{word:dao4}} is find, {{word:zuo4}}-{{word:huai4}} is break.",
      ru: "Присоедините результат к глаголу: {{word:zhao3}}-{{word:dao4}} — найти, {{word:zuo4}}-{{word:huai4}} — сломать.",
    },
    necessity: {
      en: "Now you can say you found it, fixed it, or broke it.",
      ru: "Теперь вы можете сказать, что нашли, починили или сломали.",
    },
  },
  info: {
    en: "verb-result: {{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}. (I found it.)",
    ru: "глагол-результат: {{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:le}}. (Я нашёл.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:bao1}} {{word:le}}.",
      hanzi: "我找到我的包了。",
      en: "I found my bag.",
      ru: "Я нашёл свою сумку.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
      hanzi: "我没找到。",
      en: "I didn't find it.",
      ru: "Я не нашёл.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}} {{word:le}} {{word:ma}}?",
      hanzi: "你看到他了吗？",
      en: "Did you see him?",
      ru: "Ты его увидел?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:gong1}}-{{word:ju4}} {{word:zuo4}}-{{word:huai4}} {{word:le}}.",
      hanzi: "他把工具做坏了。",
      en: "He broke the tool.",
      ru: "Он сломал инструмент.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:gong1}}-{{word:ju4}} {{word:zuo4}}-{{word:hao3}} {{word:le}}.",
      hanzi: "我把工具做好了。",
      en: "I fixed the tool.",
      ru: "Я починил инструмент.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xue2}}-{{word:hui4}} {{word:le}} {{word:ma}}?",
      hanzi: "你学会了吗？",
      en: "Have you learned how?",
      ru: "Ты научился?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:jian4}} {{word:le}}.",
      hanzi: "我看见了。",
      en: "I saw it.",
      ru: "Я увидел.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:jian4}} {{word:le}} {{word:ma}}?",
      hanzi: "你听见了吗？",
      en: "Did you hear it?",
      ru: "Ты услышал?",
    },
  ],
  exercises: [
    {
      en: "I found the money.",
      ru: "Я нашёл деньги.",
      answer: "{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:jin1}} {{word:le}}.",
      hanzi: "我找到金了。",
    },
    {
      en: "He broke the bag.",
      ru: "Он сломал сумку.",
      answer: "{{Word:ta1}} {{word:ba3}} {{word:bao1}} {{word:zuo4}}-{{word:huai4}} {{word:le}}.",
      hanzi: "他把包做坏了。",
    },
    {
      en: "I didn't see it.",
      ru: "Я не увидел.",
      answer: "{{Word:wo3}} {{word:mei2}} {{word:kan4}}-{{word:jian4}}.",
      hanzi: "我没看见。",
    },
  ],
});
