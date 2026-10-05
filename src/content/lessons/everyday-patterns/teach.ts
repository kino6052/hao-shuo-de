// To teach someone, help them learn: bāng + person + xué + verb. Pattern:
// Who + bāng + person + xué + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "teach",
  prose: {
    en: [
      "**To teach someone to do something**, help them learn it: {{word:bang1}} and the person, then {{word:xue2}} and the verb.",
      "",
      "**Who + {{word:bang1}} + person + {{word:xue2}} + verb**",
      "",
      "There's no separate word for teach: teaching is helping someone learn. {{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:xue2}}: you help, I learn.",
    ],
    ru: [
      "**Чтобы научить кого-то что-то делать**, помогите ему научиться: {{word:bang1}} и человек, потом {{word:xue2}} и глагол.",
      "",
      "**Кто + {{word:bang1}} + человек + {{word:xue2}} + глагол**",
      "",
      "Отдельного слова «учить» нет: учить — значит помогать учиться. {{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:xue2}}: ты помогаешь, я учусь.",
    ],
    tldr: {
      en: "{{word:bang1}} + person + {{word:xue2}} + verb is teach: {{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:xue2}} {{word:xie3}}.",
      ru: "{{word:bang1}} + человек + {{word:xue2}} + глагол — научить: {{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:xue2}} {{word:xie3}}.",
    },
    necessity: {
      en: "Now you can teach, and ask to be taught.",
      ru: "Теперь вы можете учить других и просить научить вас.",
    },
  },
  info: {
    en: "{{word:bang1}} + person + {{word:xue2}} + verb, teach: {{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:xue2}} {{word:xie3}}. (I'll teach you to write.)",
    ru: "{{word:bang1}} + человек + {{word:xue2}} + глагол — научить: {{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:xue2}} {{word:xie3}}. (Я научу тебя писать.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:xue2}} {{word:xie3}}.",
      hanzi: "我帮你学写。",
      en: "I'll teach you to write.",
      ru: "Я научу тебя писать.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:bang1}} {{word:wo3}} {{word:xue2}} {{word:ma}}?",
      hanzi: "你能帮我学吗？",
      en: "Can you teach me?",
      ru: "Ты можешь меня научить?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:wo3}} {{word:xue2}}.",
      hanzi: "你帮我，我学。",
      en: "You teach, and I'll learn.",
      ru: "Ты учишь, а я учусь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:hui4}} {{word:bang1}} {{word:ren2}} {{word:xue2}}.",
      hanzi: "他很会帮人学。",
      en: "He's a good teacher.",
      ru: "Он хорошо учит.",
    },
  ],
  exercises: [
    {
      en: "Can you teach me?",
      ru: "Ты можешь меня научить?",
      answer: "{{Word:ni3}} {{word:neng2}} {{word:bang1}} {{word:wo3}} {{word:xue2}} {{word:ma}}?",
      hanzi: "你能帮我学吗？",
    },
    {
      en: "I'll teach you to write.",
      ru: "Я научу тебя писать.",
      answer: "{{Word:wo3}} {{word:bang1}} {{word:ni3}} {{word:xue2}} {{word:xie3}}.",
      hanzi: "我帮你学写。",
    },
  ],
});
