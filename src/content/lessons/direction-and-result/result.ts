// To say how an action ends, join a result word to the verb: kàn-dào,
// zhǎo-dào, nòng-hǎo, nòng-huài, xué-huì. Pattern: verb-result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "result",
  prose: {
    en: [
      "**To say how an action ends**, join a result word to the verb. You know {{word:chi1}}-{{word:wan2}} (Lesson {{lesson:around-an-action}}).",
      "",
      "**verb-result**",
      "",
      "{{word:dao4}} says you reach it: {{word:kan4}}-{{word:dao4}} (see), {{word:ting1}}-{{word:dao4}} (hear), {{word:zhao3}}-{{word:dao4}} (find). {{word:nong4}}-{{word:hao3}} is \"fix\", {{word:nong4}}-{{word:huai4}} is \"break\", and {{word:xue2}}-{{word:hui4}} is \"learn until you can\". For \"didn't\", use {{word:mei2}} (Lesson {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
    ],
    ru: [
      "**Чтобы сказать, чем закончилось действие**, присоедините к глаголу слово-результат. Вы уже знаете {{word:chi1}}-{{word:wan2}} (урок {{lesson:around-an-action}}).",
      "",
      "**глагол-результат**",
      "",
      "{{word:dao4}} говорит, что вы этого достигли: {{word:kan4}}-{{word:dao4}} (увидеть), {{word:ting1}}-{{word:dao4}} (услышать), {{word:zhao3}}-{{word:dao4}} (найти) — как в русском «искать» и «найти». {{word:nong4}}-{{word:hao3}} — «починить», {{word:nong4}}-{{word:huai4}} — «сломать», а {{word:xue2}}-{{word:hui4}} — «учиться, пока не научишься». Чтобы сказать «не сделал», используйте {{word:mei2}} (урок {{lesson:also-and-all}}): {{word:mei2}} {{word:zhao3}}-{{word:dao4}}.",
    ],
    tldr: {
      en: "Join the result to the verb: {{word:zhao3}}-{{word:dao4}} is find, {{word:nong4}}-{{word:huai4}} is break.",
      ru: "Присоедините результат к глаголу: {{word:zhao3}}-{{word:dao4}} — найти, {{word:nong4}}-{{word:huai4}} — сломать.",
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
      pinyin: "{{Word:wo3}} {{word:zhao3}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:he2zi}} {{word:le}}.",
      hanzi: "我找到我的盒子了。",
      en: "I found my box.",
      ru: "Я нашёл свою коробку.",
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
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:gong1}}-{{word:ju4}} {{word:nong4}}-{{word:huai4}} {{word:le}}.",
      hanzi: "他把工具弄坏了。",
      en: "He broke the tool.",
      ru: "Он сломал инструмент.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:gong1}}-{{word:ju4}} {{word:nong4}}-{{word:hao3}} {{word:le}}.",
      hanzi: "我把工具弄好了。",
      en: "I fixed the tool.",
      ru: "Я починил инструмент.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xue2}}-{{word:hui4}} {{word:le}} {{word:ma}}?",
      hanzi: "你学会了吗？",
      en: "Have you learned how?",
      ru: "Ты научился?",
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
      en: "He broke the box.",
      ru: "Он сломал коробку.",
      answer: "{{Word:ta1}} {{word:ba3}} {{word:he2zi}} {{word:nong4}}-{{word:huai4}} {{word:le}}.",
      hanzi: "他把盒子弄坏了。",
    },
  ],
});
