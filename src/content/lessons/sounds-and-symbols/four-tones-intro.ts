// Those four words differ only by tone; here are Chinese's tones. [from old
// L01]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "four-tones-intro",
  prose: {
    en: [
      "**To tell those four words apart**, learn the tones.",
      "There are four tones, plus a light one.",
    ],
    ru: [
      "**Чтобы различать эти четыре слова**, выучите тоны.",
      "Есть четыре тона и ещё один лёгкий.",
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
          "**a** — Light tone. It has no tone mark.",
          "It is short and quiet.",
        ],
        ru: [
          "**a** — лёгкий тон. У него нет знака тона.",
          "Он короткий и тихий.",
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
      en: "Write {{word:hao3}} with a tone number instead of a tone mark.",
      ru: "Запишите {{word:hao3}}, обозначив тон цифрой, а не знаком.",
      answer: { en: "hao3.", ru: "hao3." },
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
