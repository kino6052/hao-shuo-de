import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "real-grammar",
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
      pinyin: "Nǐ hǎo ma?",
      en: [
        "Hello, how are you? (literally: \"you good?\")"
      ],
      ru: [
        "Привет, как дела? (Дословно: «ты хорошо?»)"
      ],
    },
    {
      pinyin: "Wǒ zhīdào Hǎo-shuō-de.",
      en: [
        "I know Hǎo-shuō-de."
      ],
      ru: [
        "Я знаю Hǎo-shuō-de."
      ],
    },
  ],
});
