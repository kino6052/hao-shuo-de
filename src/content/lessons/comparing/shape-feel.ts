// To say how something looks or feels, use adjectives like yìng (hard) and
// yuán (round). Pattern: Thing + hěn + yìng / yuán
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "shape-feel",
  prose: {
    en: [
      "**To say how something looks or feels**, use adjectives like {{word:ying4}} (hard) and {{word:yuan2}} (round).",
      "",
      "**Thing + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}}**",
    ],
    ru: [
      "**Чтобы сказать, как что-то выглядит или ощущается**, используйте прилагательные, например {{word:ying4}} (твёрдый) и {{word:yuan2}} (круглый).",
      "",
      "**Вещь + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}}**",
    ],
    tldr: {
      en: "{{word:ying4}} is hard, {{word:yuan2}} is round. They work like any adjective.",
      ru: "{{word:ying4}} — «твёрдый», {{word:yuan2}} — «круглый». Они работают как любое прилагательное.",
    },
    necessity: { en: "Now you have more to compare.", ru: "Теперь вам есть что ещё сравнивать." },
  },
  info: {
    en: "Thing + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}}, how it feels or looks: {{Word:yue4}} {{word:hen3}} {{word:yuan2}}. (The moon is round.)",
    ru: "Вещь + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}} — какая она на ощупь или на вид: {{Word:yue4}} {{word:hen3}} {{word:yuan2}}. (Луна круглая.)",
  },
  examples: [
    {
      pinyin: "{{Word:gun4zi}} {{word:hen3}} {{word:ying4}}.",
      hanzi: "棍子很硬。",
      en: "The stick is hard.",
      ru: "Палка твёрдая.",
    },
    {
      pinyin: "{{Word:yue4}} {{word:hen3}} {{word:yuan2}}.",
      hanzi: "月很圆。",
      en: "The moon is round.",
      ru: "Луна круглая.",
    },
    {
      pinyin: "{{Word:xian4}} {{word:zai4}} {{word:he2zi}}-{{word:li3}}.",
      hanzi: "线在盒子里。",
      en: "The thread is in the box.",
      ru: "Нитка в коробке.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:gun4zi}}.",
      hanzi: "我有棍子。",
      en: "I have a stick.",
      ru: "У меня есть палка.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:kou3}} {{word:hen3}} {{word:yuan2}}.",
      hanzi: "这个口很圆。",
      en: "This opening is round.",
      ru: "Это отверстие круглое.",
    },
  ],
  exercises: [
    {
      en: "The moon is round.",
      ru: "Луна круглая.",
      answer: "{{Word:yue4}} {{word:hen3}} {{word:yuan2}}.",
      hanzi: "月很圆。",
    },
    {
      en: "Where is the rope?",
      ru: "Где верёвка?",
      answer: "{{Word:xian4}} {{word:zai4}} {{word:na3li3}}?",
      hanzi: "线在哪里？",
    },
    {
      en: "Is the stick hard?",
      ru: "Палка твёрдая?",
      answer: "{{Word:gun4zi}} {{word:ying4}} {{word:ma}}?",
      hanzi: "棍子硬吗？",
    },
  ],
});
