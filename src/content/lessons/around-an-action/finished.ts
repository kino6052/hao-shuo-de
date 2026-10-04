// To say you finished doing something, join wán to the verb, and add le.
// Pattern: Who + verb-wán le
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "finished",
  words: [
    {
      word: "wan2",
      en: "finish; after a verb: finished",
      ru: "закончить; после глагола: до конца",
    },
  ],
  prose: {
    en: [
      "**To say you finished doing something**, join {{word:wan2}} to the verb, and add {{word:le}}.",
      "",
      "**Who + verb-{{word:wan2}} {{word:le}}**",
      "",
      "{{word:le}} only says it's done. {{word:wan2}} says it's done all the way.",
    ],
    ru: [
      "**Чтобы сказать, что вы закончили что-то делать**, присоедините {{word:wan2}} к глаголу и добавьте {{word:le}}.",
      "",
      "**Кто + глагол-{{word:wan2}} {{word:le}}**",
      "",
      "{{word:le}} говорит только, что дело сделано. {{word:wan2}} — что оно сделано до конца. Как «поел» и «доел».",
    ],
    tldr: {
      en: "verb-{{word:wan2}} {{word:le}} means you finished doing it.",
      ru: "глагол-{{word:wan2}} {{word:le}} значит, что вы закончили это делать.",
    },
    necessity: {
      en: "Now you can say you're all done.",
      ru: "Теперь вы можете сказать, что совсем закончили.",
    },
  },
  info: {
    en: "verb-{{word:wan2}} {{word:le}}, finished: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. (I finished eating.)",
    ru: "глагол-{{word:wan2}} {{word:le}} — закончил: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. (Я доел.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我吃完了。",
      en: "I finished eating.",
      ru: "Я доел.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xie3}}-{{word:wan2}} {{word:le}} {{word:ma}}?",
      hanzi: "你写完了吗？",
      en: "Did you finish writing?",
      ru: "Ты дописал?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kan4}}-{{word:wan2}} {{word:le}}.",
      hanzi: "她看完了。",
      en: "She finished reading.",
      ru: "Она дочитала.",
    },
  ],
  exercises: [
    {
      en: "I finished writing.",
      ru: "Я дописал.",
      answer: "{{Word:wo3}} {{word:xie3}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我写完了。",
    },
  ],
  faq: [
    // wán (finish) vs wánr (play)
    {
      question: {
        en: "Are {{word:wan2}} and {{word:wan2r}} the same word?",
        ru: "{{word:wan2}} и {{word:wan2r}} — одно и то же слово?",
      },
      en: "No, they're two different words. {{word:wan2}} is \"finish\": {{word:chi1}}-{{word:wan2}} {{word:le}}. {{word:wan2r}} is \"play\", and the -r at the end is part of the word.",
      ru: "Нет, это два разных слова. {{word:wan2}} — «закончить»: {{word:chi1}}-{{word:wan2}} {{word:le}}. {{word:wan2r}} — «играть», и -r на конце — часть слова.",
    },
    // do I need both wán and le?
    {
      question: {
        en: "Do I need both -{{word:wan2}} and {{word:le}}?",
        ru: "Нужны ли сразу и -{{word:wan2}}, и {{word:le}}?",
      },
      en: "To say you finished, yes: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. Without {{word:le}}, {{word:chi1}}-{{word:wan2}} is only part of a sentence, like in {{word:chi1}}-{{word:wan2}} {{word:hou4}}, … (after eating, …).",
      ru: "Чтобы сказать, что вы закончили, — да: {{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}. Без {{word:le}} {{word:chi1}}-{{word:wan2}} — только часть предложения, как в {{word:chi1}}-{{word:wan2}} {{word:hou4}}, … (после еды …).",
    },
  ],
});
