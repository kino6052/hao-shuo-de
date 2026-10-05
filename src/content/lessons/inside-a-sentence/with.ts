// To say what you do something with, put yòng and the thing before the verb.
// Pattern: Who + yòng + thing + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "with",
  words: [
    {
      word: "yong4",
      en: "use; with",
      ru: "использовать; с помощью",
    },
    {
      word: "mo1",
      en: "touch",
      ru: "трогать",
    },
    {
      word: "da3",
      en: "hit",
      ru: "бить",
    },
  ],
  prose: {
    en: [
      "**To say what you do something with**, put {{word:yong4}} and the thing before the verb.",
      "",
      "**Who + {{word:yong4}} + thing + verb**",
    ],
    ru: [
      "**Чтобы сказать, чем вы что-то делаете**, поставьте {{word:yong4}} и вещь перед глаголом.",
      "",
      "**Кто + {{word:yong4}} + вещь + глагол**",
      "",
      "В русском это показывает окончание («пишу ручкой»), а в китайском — слово {{word:yong4}} («использую»).",
    ],
    tldr: {
      en: "{{word:yong4}} + thing + verb: {{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}, I write with a tool.",
      ru: "{{word:yong4}} + вещь + глагол: {{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}} — я пишу инструментом.",
    },
    necessity: {
      en: "Now you can say how you do things.",
      ru: "Теперь вы можете сказать, как вы что-то делаете.",
    },
  },
  info: {
    en: "{{word:yong4}} + thing + verb, with: {{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}. (I write with a tool.)",
    ru: "{{word:yong4}} + вещь + глагол — чем: {{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}. (Я пишу инструментом.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:xie3}}.",
      hanzi: "我用工具写。",
      en: "I write with a tool.",
      ru: "Я пишу инструментом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}} {{word:chi1}}.",
      hanzi: "他用手吃。",
      en: "He eats with his hands.",
      ru: "Он ест руками.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:da3}}.",
      hanzi: "他用长的东西打。",
      en: "He hits it with a stick.",
      ru: "Он бьёт палкой.",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:yong4}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:da3}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "不要用长的东西打动物。",
      en: "Don't hit the animal with a stick.",
      ru: "Не бей животное палкой.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:yong4}} {{word:bi2zi}} {{word:mo1}} {{word:wo3}}-{{word:de}} {{word:shou3}}.",
      hanzi: "动物用鼻子摸我的手。",
      en: "The animal touches my hand with its nose.",
      ru: "Животное трогает мою руку носом.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "他用不一样的方法。",
      en: "He does it a different way.",
      ru: "Он делает это по-другому.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:gong1}}-{{word:ju4}} {{word:suan4}}.",
      hanzi: "我用工具算。",
      en: "I work it out with a tool.",
      ru: "Я считаю с помощью инструмента.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:shou3}} {{word:mo1}} {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:mao2}}.",
      hanzi: "我用手摸动物的毛。",
      en: "I touch the animal's fur with my hand.",
      ru: "Я трогаю рукой шерсть животного.",
    },
  ],
  exercises: [
    {
      en: "She writes with a stick.",
      ru: "Она пишет палкой.",
      answer: "{{Word:ta1}} {{word:yong4}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:xie3}}.",
      hanzi: "她用长的东西写。",
    },
    {
      en: "Don't hit him.",
      ru: "Не бей его.",
      answer: "{{Word:bu4}} {{word:yao4}} {{word:da3}} {{word:ta1}}.",
      hanzi: "不要打他。",
    },
    {
      en: "Can I touch it?",
      ru: "Можно мне потрогать?",
      answer: "{{Word:wo3}} {{word:neng2}} {{word:mo1}} {{word:ma}}?",
      hanzi: "我能摸吗？",
    },
    {
      en: "I see with my eyes.",
      ru: "Я смотрю глазами.",
      answer: "{{Word:wo3}} {{word:yong4}} {{word:yan3jing}} {{word:kan4}}.",
      hanzi: "我用眼睛看。",
    },
    {
      en: "He writes to me on his phone.",
      ru: "Он пишет мне с телефона.",
      answer: "{{Word:ta1}} {{word:yong4}} {{word:shou3}}-{{word:ji1}} {{word:gei3}} {{word:wo3}} {{word:xie3}}.",
      hanzi: "他用手机给我写。",
    },
  ],
});
