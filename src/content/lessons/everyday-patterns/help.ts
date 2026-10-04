// To help someone do something, put bāng (help) and the person before the
// verb. Add yī-xià to ask nicely. Pattern: bāng + person + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "help",
  words: [
    {
      word: "bang1",
      en: "help",
      ru: "помогать",
    },
  ],
  prose: {
    en: [
      "**To help someone do something**, put {{word:bang1}} (help) and the person before the verb.",
      "",
      "**Who + {{word:bang1}} + person + verb**",
      "",
      "Add {{word:yi1}}-{{word:xia4}} to ask nicely: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1}}-{{word:xia4}} is \"could you look for it for me?\". \"Help me!\" is {{word:bang1}}-bang {{word:wo3}}!",
    ],
    ru: [
      "**Чтобы помочь кому-то что-то сделать**, поставьте {{word:bang1}} (помогать) и человека перед глаголом.",
      "",
      "**Кто + {{word:bang1}} + человек + глагол**",
      "",
      "Добавьте {{word:yi1}}-{{word:xia4}}, чтобы попросить вежливо: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1}}-{{word:xia4}} — «поищешь это за меня?». «Помоги мне!» — это {{word:bang1}}-bang {{word:wo3}}!",
    ],
    tldr: {
      en: "{{word:bang1}} + person + verb is help someone do it: {{word:wo3}} {{word:bang1}} {{word:ni3}} {{word:na2}}.",
      ru: "{{word:bang1}} + человек + глагол — помочь кому-то это сделать: {{word:wo3}} {{word:bang1}} {{word:ni3}} {{word:na2}}.",
    },
    necessity: {
      en: "Now you can ask for help and offer it.",
      ru: "Теперь вы можете попросить о помощи и предложить её.",
    },
  },
  info: {
    en: "{{word:bang1}} + person + verb, help: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:na2}} {{word:yi1}}-{{word:xia4}}. (Could you hold this for me?)",
    ru: "{{word:bang1}} + человек + глагол — помочь: {{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:na2}} {{word:yi1}}-{{word:xia4}}. (Подержишь это за меня?)",
  },
  examples: [
    {
      pinyin: "{{Word:bang1}}-bang {{word:wo3}}!",
      hanzi: "帮帮我！",
      en: "Help me!",
      ru: "Помоги мне!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:na2}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你帮我拿一下。",
      en: "Could you hold this for me?",
      ru: "Подержишь это за меня?",
    },
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:xiao4}}, {{word:bang1}}-bang {{word:wo3}}!",
      hanzi: "不要笑，帮帮我！",
      en: "Don't laugh, help me!",
      ru: "Не смейся, помоги мне!",
    },
    {
      pinyin: "{{Word:jia1}} {{word:hen3}} {{word:luan4}}, {{word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "家很乱，你帮我，好吗？",
      en: "The house is a mess. Could you help me?",
      ru: "Дома беспорядок. Поможешь мне?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:zhan4}}-{{word:qi3}}-{{word:lai2}}.",
      hanzi: "我帮你站起来。",
      en: "Let me help you stand up.",
      ru: "Давай я помогу тебе встать.",
    },
    {
      pinyin: "{{Word:kuai4}} {{word:lai2}} {{word:bang1}} {{word:wo3}}!",
      hanzi: "快来帮我！",
      en: "Come help me, quick!",
      ru: "Скорее, помоги мне!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:suan4}} {{word:yi1}}-{{word:xia4}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "你帮我算一下，好吗？",
      en: "Could you work it out for me?",
      ru: "Посчитаешь за меня?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "你帮我，我很开心。",
      en: "You're helping me, and that makes me happy.",
      ru: "Ты мне помогаешь, и я очень рад.",
    },
  ],
  exercises: [
    {
      en: "Help me!",
      ru: "Помоги мне!",
      answer: "{{Word:bang1}}-bang {{word:wo3}}!",
      hanzi: "帮帮我！",
    },
    {
      en: "I'll help you.",
      ru: "Я тебе помогу.",
      answer: "{{Word:wo3}} {{word:bang1}} {{word:ni3}}.",
      hanzi: "我帮你。",
    },
    {
      en: "Could you look for it for me?",
      ru: "Поищешь это за меня?",
      answer: "{{Word:ni3}} {{word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你帮我找一下。",
    },
    {
      en: "Thank you for helping me.",
      ru: "Спасибо, что помог мне.",
      answer: "{{Word:xie4}}-xie {{word:ni3}} {{word:bang1}} {{word:wo3}}.",
      hanzi: "谢谢你帮我。",
    },
    {
      en: "Help me find my phone.",
      ru: "Помоги мне найти телефон.",
      answer: "{{Word:bang1}} {{word:wo3}} {{word:zhao3}} {{word:wo3}}-{{word:de}} {{word:shou3}}-{{word:ji1}}.",
      hanzi: "帮我找我的手机。",
    },
  ],
});
