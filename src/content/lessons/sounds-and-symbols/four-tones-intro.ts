// Those four words differ only by tone; here are Chinese's tones. [from old
// L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "four-tones-intro",
  prose: {
    en: [
      "All the words above are different, and are pronounced differently, because they use different tones.",
      "Chinese has the following tones:",
    ],
    ru: [
      "Все слова выше разные и произносятся по-разному, потому что у них разные тоны.",
      "В китайском есть такие тоны:",
    ],
    tldr: {
      en: "Chinese has four tones, plus one light tone.",
      ru: "В китайском четыре тона и ещё один лёгкий тон.",
    },
    necessity: {
      en: "You need all of them to say words right.",
      ru: "Без них не получится правильно сказать слово.",
    },
  },
  info: {
    kind: "note",
    title: { en: "Tones", ru: "Тоны" },
    items: [
      {
        en: "**ā** — First tone. Level and sustained, as if you're humming a single unchanging note (like \"om\").",
        ru: "**ā** — первый тон. Ровный и долгий, как будто вы тянете одну и ту же ноту (как «ом»).",
      },
      {
        en: "**á** — Second tone. Rising, like the \"huh?\" you say when you didn't quite hear something.",
        ru: "**á** — второй тон. Поднимается, как переспрашивающее «а?», когда вы не расслышали.",
      },
      {
        en: "**ǎ** — Third tone. Dips down first, then curls back up — the sound of a skeptical \"hmm...\"",
        ru: "**ǎ** — третий тон. Сначала опускается, потом снова поднимается — как недоверчивое «хм…»",
      },
      {
        en: "**à** — Fourth tone. Sharp and falling, like a clipped, final \"No.\"",
        ru: "**à** — четвёртый тон. Резкий и падающий, как короткое решительное «Нет!»",
      },
      {
        en: [
          "**a** — Neutral tone. It's written without a tone mark, just as a plain letter.",
          "The neutral tone is shorter and unstressed.",
          "In the word Hǎo-shuō-de, the final syllable de carries the neutral tone.",
        ],
        ru: [
          "**a** — нейтральный тон. Пишется без знака тона, просто буквой.",
          "Нейтральный тон короче и без ударения.",
          "В слове Hǎo-shuō-de последний слог de произносится нейтральным тоном.",
        ],
      },
    ],
  },
  exercises: [
    {
      en: "Which tone is this: à (fourth tone mark)? Describe it in one word.",
      ru: "Какой это тон: à (знак четвёртого тона)? Опишите его одним словом.",
      answer: { en: "Fourth tone — sharp and falling.", ru: "Четвёртый тон — резкий и падающий." },
    },
    {
      en: "Rewrite {{Word:wo3}} {{word:hao3}} using tone-number notation instead of tone marks.",
      ru: "Запишите {{Word:wo3}} {{word:hao3}}, обозначив тоны цифрами, а не знаками.",
      answer: { en: "Wo3 hao3.", ru: "Wo3 hao3." },
    },
  ],
  faq: [
    // why do some tones sound different from how they're written? (two third tones)
    {
      question: {
        en: "Why do some tones sound different from how they're written?",
        ru: "Почему некоторые тоны звучат не так, как написаны?",
      },
      en: "Some tones change when they meet. The most common case: when two third tones meet, the first one is said as a second tone. **nǐ hǎo** sounds like **ní hǎo**, but the pinyin still shows the original tones. The appendix on tone changes lists the rest.",
      ru: "Некоторые тоны меняются, когда встречаются рядом. Самый частый случай: если встречаются два третьих тона, первый произносится как второй. **nǐ hǎo** звучит как **ní hǎo**, но в пиньине всё равно пишутся исходные тоны. Остальные случаи описаны в приложении об изменениях тонов.",
    },
  ],
});
