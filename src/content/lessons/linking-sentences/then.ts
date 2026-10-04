// To say "then" or "right away", put jiù right before the verb, after the
// who. Pattern: (rúguǒ X,) who + jiù + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "then",
  words: [
    {
      term: "{{word:jiu4}}",
      hanzi: "就",
      en: "then; right away; just",
      ru: "то, тогда; сразу; именно, только",
    },
  ],
  prose: {
    en: [
      "**To say \"then\" or \"right away\"**, put {{word:jiu4}} right before the verb, after the who.",
      "",
      "**({{word:ru2guo3}} X,) who + {{word:jiu4}} + verb**",
      "",
      "After {{word:ru2guo3}}, {{word:jiu4}} means \"then\": {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. On its own, it means \"right away\" or \"just\": {{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}.",
    ],
    ru: [
      "**Чтобы сказать «то» или «сразу»**, поставьте {{word:jiu4}} прямо перед глаголом, после того, кто делает.",
      "",
      "**({{word:ru2guo3}} X,) кто + {{word:jiu4}} + глагол**",
      "",
      "После {{word:ru2guo3}} {{word:jiu4}} значит «то», как в русском «если…, то…»: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. Само по себе оно значит «сразу» или «именно, только»: {{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}.",
    ],
    tldr: {
      en: "{{word:jiu4}} before the verb means then, or right away: {{Word:wo3}} {{word:jiu4}} {{word:qu4}}, I'm going right away.",
      ru: "{{word:jiu4}} перед глаголом значит «то» или «сразу»: {{Word:wo3}} {{word:jiu4}} {{word:qu4}} — я сразу иду.",
    },
    necessity: {
      en: "Now your sentences sound more natural.",
      ru: "Так ваши предложения звучат естественнее.",
    },
  },
  info: {
    en: "who + {{word:jiu4}} + verb, then / right away: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. (If you come, I'll wait for you.)",
    ru: "кто + {{word:jiu4}} + глагол — то / сразу: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. (Если ты придёшь, то я тебя подожду.)",
  },
  examples: [
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "如果你来，我就等你。",
      en: "If you come, I'll wait for you.",
      ru: "Если ты придёшь, то я тебя подожду.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:hen3}} {{word:yuan3}}, {{word:wo3}} {{word:jiu4}} {{word:bu4}} {{word:qu4}}.",
      hanzi: "如果很远，我就不去。",
      en: "If it's far, then I won't go.",
      ru: "Если далеко, то я не пойду.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}} {{word:jiu4}} {{word:qu4}}.",
      hanzi: "我吃完了就去。",
      en: "I'll go as soon as I've eaten.",
      ru: "Как только поем, сразу пойду.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}.",
      hanzi: "我现在就去。",
      en: "I'm going right now.",
      ru: "Я иду прямо сейчас.",
    },
    {
      pinyin: "{{Word:jiu4}} {{word:shi4}} {{word:zhe4}}-ge!",
      hanzi: "就是这个！",
      en: "That's the one!",
      ru: "Вот именно это!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:you3}} {{word:yi1}}-ge.",
      hanzi: "我就有一个。",
      en: "I only have one.",
      ru: "У меня только один.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:jiu4}} {{word:hui4}} {{word:si3}}.",
      hanzi: "如果没有水，植物就会死。",
      en: "If there's no water, the plant will die.",
      ru: "Если нет воды, то растение погибнет.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:jiu4}} {{word:neng2}} {{word:huo2}}.",
      hanzi: "如果有水，植物就能活。",
      en: "If there's water, then the plant can live.",
      ru: "Если есть вода, то растение может жить.",
    },
  ],
  exercises: [
    {
      en: "I'm going right now.",
      ru: "Я иду прямо сейчас.",
      answer: "{{Word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:qu4}}.",
      hanzi: "我现在就去。",
    },
    {
      en: "If it's cold, then I won't go out.",
      ru: "Если холодно, то я не выйду.",
      answer: "{{Word:ru2guo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:jiu4}} {{word:bu4}} {{word:chu1}}-{{word:qu4}}.",
      hanzi: "如果很冷，我就不出去。",
    },
  ],
  faq: [
    // do I need jiù after rúguǒ? (no, but it sounds more natural; it goes after the who)
    {
      question: {
        en: "Do I need {{word:jiu4}} after {{word:ru2guo3}}?",
        ru: "Нужно ли {{word:jiu4}} после {{word:ru2guo3}}?",
      },
      en: "No, but it sounds more natural: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. {{word:jiu4}} goes after the who, never before it.",
      ru: "Нет, но с ним звучит естественнее: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:jiu4}} {{word:deng3}} {{word:ni3}}. {{word:jiu4}} ставится после того, кто делает, и никогда — перед ним.",
    },
  ],
});
