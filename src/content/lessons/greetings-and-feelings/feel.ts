// To say how you feel, put jué-de (feel) before the adjective. Pattern: Who +
// jué-de + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "feel",
  words: [
    {
      word: "jue2",
      en: "feel; {{word:jue2}}-{{light:de2}}: feel, think",
      ru: "чувствовать; {{word:jue2}}-{{light:de2}} — чувствовать, считать",
    },
    {
      word: "ding4",
      en: "settled; {{word:yi1}}-{{word:ding4}}: surely",
      ru: "решённый; {{word:yi1}}-{{word:ding4}} — обязательно",
    },
  ],
  prose: {
    en: [
      "**To say how you feel**, put {{word:jue2}}-{{light:de2}} (feel) before the adjective.",
      "",
      "**Who + {{word:jue2}}-{{light:de2}} + adjective**",
      "",
      "{{word:pa4}} means be scared of: {{Word:wo3}} {{word:pa4}} {{word:huo3}}, I'm scared of fire.",
    ],
    ru: [
      "**Чтобы сказать, как вы себя чувствуете**, поставьте {{word:jue2}}-{{light:de2}} (чувствовать) перед прилагательным.",
      "",
      "**Кто + {{word:jue2}}-{{light:de2}} + прилагательное**",
      "",
      "{{word:pa4}} значит «бояться»: {{Word:wo3}} {{word:pa4}} {{word:huo3}} — я боюсь огня.",
    ],
    tldr: {
      en: "{{word:jue2}}-{{light:de2}} + adjective says how you feel: {{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:leng3}}.",
      ru: "{{word:jue2}}-{{light:de2}} + прилагательное говорит, как вы себя чувствуете: {{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:leng3}}.",
    },
    necessity: { en: "Now you can say how you feel.", ru: "Теперь вы можете сказать, как себя чувствуете." },
  },
  info: {
    items: [
      {
        en: "{{word:jue2}}-{{light:de2}} + adjective, feel: {{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:leng3}}. (I feel cold.)",
        ru: "{{word:jue2}}-{{light:de2}} + прилагательное — чувствовать: {{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:leng3}}. (Мне холодно.)",
      },
      {
        en: "{{word:pa4}} + thing, scared of: {{Word:wo3}} {{word:pa4}} {{word:huo3}}. (I'm scared of fire.)",
        ru: "{{word:pa4}} + вещь — бояться: {{Word:wo3}} {{word:pa4}} {{word:huo3}}. (Я боюсь огня.)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:leng3}}.",
      hanzi: "我觉得冷。",
      en: "I feel cold.",
      ru: "Мне холодно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:pa4}} {{word:huo3}}.",
      hanzi: "我怕火。",
      en: "I'm scared of fire.",
      ru: "Я боюсь огня.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:pa4}} {{word:huo3}}.",
      hanzi: "她怕火。",
      en: "She's scared of fire.",
      ru: "Она боится огня.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:hao3}}, {{word:yin1wei4}} {{word:ni3}} {{word:lai2}} {{word:le}}.",
      hanzi: "我觉得很好，因为你来了。",
      en: "I feel good, because you've come.",
      ru: "Мне хорошо, потому что ты пришёл.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:si3}} {{word:le}}, {{word:ta1}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:huai4}}.",
      hanzi: "她的动物死了，她觉得很坏。",
      en: "Her animal died, and she feels bad.",
      ru: "Её животное умерло, и ей очень плохо.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:zhe4}}-ge {{word:yan2se4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我觉得这个颜色很好。",
      en: "I think this color is nice.",
      ru: "Мне кажется, этот цвет хороший.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:huo2}} {{word:le}}, {{word:wo3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "动物活了，我觉得很好。",
      en: "The animal lived, and I feel good.",
      ru: "Животное выжило, и мне хорошо.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zui4}} {{word:pa4}} {{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我最怕月的时间。",
      en: "I'm most scared of the night.",
      ru: "Больше всего я боюсь ночи.",
    },
  ],
  exercises: [
    {
      en: "I'll surely come.",
      ru: "Я обязательно приду.",
      answer: "{{Word:wo3}} {{word:yi1}}-{{word:ding4}} {{word:lai2}}.",
      hanzi: "我一定来。",
    },
    {
      en: "Do you feel cold?",
      ru: "Тебе холодно?",
      answer: "{{Word:ni3}} {{word:jue2}}-{{light:de2}} {{word:leng3}} {{word:ma}}?",
      hanzi: "你觉得冷吗？",
    },
    {
      en: "I'm not scared.",
      ru: "Я не боюсь.",
      answer: "{{Word:wo3}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "我不怕。",
    },
    {
      en: "There's water on my hand.",
      ru: "У меня на руке вода.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:shang4}} {{word:you3}} {{word:shui3}}.",
      hanzi: "我的手上有水。",
    },
  ],
  faq: [
    // can jué-de mean "I think"? (yes)
    {
      question: {
        en: "Can I use {{word:jue2}}-{{light:de2}} for \"I think\"?",
        ru: "Можно ли сказать {{word:jue2}}-{{light:de2}} в значении «я думаю»?",
      },
      en: "Yes. {{word:jue2}}-{{light:de2}} works for opinions too: {{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:zhe4}}-ge {{word:hen3}} {{word:hao3}} (I think this is good).",
      ru: "Да. {{word:jue2}}-{{light:de2}} подходит и для мнений: {{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:zhe4}}-ge {{word:hen3}} {{word:hao3}} (Я думаю, это хорошо).",
    },
  ],
});
