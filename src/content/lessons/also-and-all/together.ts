// Yī-qǐ before a verb says it is done together. Pattern: Who + yī-qǐ + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "together",
  prose: {
    en: [
      "**To say people do something together**, put {{word:yi1}}-{{word:qi3}} before the verb.",
      "",
      "**Who + {{word:yi1}}-{{word:qi3}} + verb**",
      "",
      "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}} is \"We eat together\". With {{word:dou1}}: {{word:wo3}}-{{word:men}} {{word:dou1}} {{word:yi1}}-{{word:qi3}} {{word:kan4}}, we all watch together.",
    ],
    ru: [
      "**Чтобы сказать, что люди делают что-то вместе**, поставьте {{word:yi1}}-{{word:qi3}} перед глаголом.",
      "",
      "**Кто + {{word:yi1}}-{{word:qi3}} + глагол**",
      "",
      "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}} — «Мы едим вместе». С {{word:dou1}}: {{word:wo3}}-{{word:men}} {{word:dou1}} {{word:yi1}}-{{word:qi3}} {{word:kan4}} — мы все смотрим вместе.",
    ],
    tldr: {
      en: "{{Word:yi1}}-{{word:qi3}} goes before the verb: {{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}, we eat together.",
      ru: "{{Word:yi1}}-{{word:qi3}} стоит перед глаголом: {{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}} — мы едим вместе.",
    },
    necessity: {
      en: "Now you can say you do things together.",
      ru: "Теперь вы можете сказать, что делаете что-то вместе.",
    },
  },
  info: {
    pattern: "yi-qi-together",
    en: "Who + {{word:yi1}}-{{word:qi3}} + verb: {{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}. (We eat together.)",
    ru: "Кто + {{word:yi1}}-{{word:qi3}} + глагол: {{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}. (Мы едим вместе.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}.",
      hanzi: "我们一起吃。",
      en: "We eat together.",
      ru: "Мы едим вместе.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}.",
      hanzi: "他们一起去。",
      en: "They go together.",
      ru: "Они идут вместе.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:yi1}}-{{word:qi3}} {{word:kan4}}.",
      hanzi: "我们都一起看。",
      en: "We all watch together.",
      ru: "Мы все смотрим вместе.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ye3}} {{word:yi1}}-{{word:qi3}} {{word:lai2}} {{word:ma}}?",
      hanzi: "你也一起来吗？",
      en: "Are you coming along too?",
      ru: "Ты тоже придёшь вместе с нами?",
    },
  ],
  exercises: [
    {
      en: "We learn together.",
      ru: "Мы учимся вместе.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:xue2}}.",
      hanzi: "我们一起学。",
    },
    {
      en: "They eat together.",
      ru: "Они едят вместе.",
      answer: "{{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}.",
      hanzi: "他们一起吃。",
    },
    {
      en: "Are you coming together?",
      ru: "Вы приходите вместе?",
      answer: "{{Word:ni3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:lai2}} {{word:ma}}?",
      hanzi: "你们一起来吗？",
    },
  ],
});
