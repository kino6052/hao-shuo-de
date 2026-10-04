// To say how something looks or feels, use adjectives like yìng (hard),
// yuán (round) and gāo (tall). Pattern: Thing + hěn + yìng / yuán / gāo
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "shape-feel",
  words: [
    {
      word: "gao1",
      en: "tall, high",
      ru: "высокий",
    },
  ],
  prose: {
    en: [
      "**To say how something looks or feels**, use adjectives like {{word:ying4}} (hard), {{word:yuan2}} (round) and {{word:gao1}} (tall).",
      "",
      "**Thing + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}} / {{word:gao1}}**",
      "",
      "They compare like any adjective: {{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:gao1}}, he's taller than me.",
    ],
    ru: [
      "**Чтобы сказать, как что-то выглядит или ощущается**, используйте прилагательные, например {{word:ying4}} (твёрдый), {{word:yuan2}} (круглый) и {{word:gao1}} (высокий).",
      "",
      "**Вещь + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}} / {{word:gao1}}**",
      "",
      "Их сравнивают, как любое прилагательное: {{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:gao1}} — он выше меня.",
    ],
    tldr: {
      en: "{{word:ying4}} is hard, {{word:yuan2}} is round, {{word:gao1}} is tall. They work like any adjective.",
      ru: "{{word:ying4}} — «твёрдый», {{word:yuan2}} — «круглый», {{word:gao1}} — «высокий». Они работают как любое прилагательное.",
    },
    necessity: { en: "Now you have more to compare.", ru: "Теперь вам есть что ещё сравнивать." },
  },
  info: {
    en: "Thing + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}} / {{word:gao1}}, how it feels or looks: {{Word:yue4}} {{word:hen3}} {{word:yuan2}}. (The moon is round.)",
    ru: "Вещь + {{word:hen3}} + {{word:ying4}} / {{word:yuan2}} / {{word:gao1}} — какая она на ощупь или на вид: {{Word:yue4}} {{word:hen3}} {{word:yuan2}}. (Луна круглая.)",
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
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "他很高。",
      en: "He's tall.",
      ru: "Он высокий.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:gao1}}.",
      hanzi: "他比我高。",
      en: "He's taller than me.",
      ru: "Он выше меня.",
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
    {
      en: "He's taller than you.",
      ru: "Он выше тебя.",
      answer: "{{Word:ta1}} {{word:bi3}} {{word:ni3}} {{word:gao1}}.",
      hanzi: "他比你高。",
    },
  ],
});
