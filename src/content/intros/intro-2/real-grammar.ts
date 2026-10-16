import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "real-grammar",
  scene: "Acts out 'nǐ hǎo ma?': at the door the student greets the girl next door and she answers at once, surprised and pleased because she understood; Miao-miao watches from the mat. Orange: the student's speech bubble outline.",
  prose: {
    en: [
      "And because the grammar is entirely real, a native speaker understands you from your very first sentence.",
      "Don't expect to sound fluent.",
      "With {{dictionaryCount}} words, you'll speak the way a very honest, very literal person speaks.",
      "But every sentence will be correct Mandarin, not a simplified stand-in for it."
    ],
    ru: [
      "А поскольку грамматика полностью настоящая, носитель языка понимает вас с самой первой фразы.",
      "Не ждите, что будете говорить бегло.",
      "Когда слов всего {{dictionaryCount}}, вы говорите как очень честный человек, который всё называет прямо и буквально.",
      "Но каждое предложение будет правильным китайским, а не его упрощённой заменой."
    ],
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你好吗？",
      en: [
        "Hello, how are you? (literally: \"you good?\")"
      ],
      ru: [
        "Привет, как дела? (Дословно: «ты хорошо?»)"
      ],
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} \"Hǎo-shuō-de\".",
      hanzi: "我知道好说的。",
      en: [
        "I know Hǎo-shuō-de."
      ],
      ru: [
        "Я знаю Hǎo-shuō-de."
      ],
    },
  ],
});
