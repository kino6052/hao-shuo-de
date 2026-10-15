import { introSection } from "../../../lib/intro.ts";
import { contents } from "./contents.ts";

export default introSection({
  id: "simplified",
  prose: {
    en: [
      "Toki Pona showed that a small, fixed set of words can still let you say almost anything.",
      "Hao-shuo-de borrows that idea, but not the language itself.",
      "Toki Pona invents its own grammar from scratch.",
      "Hao-shuo-de does the opposite: every rule of grammar you'll learn here is ordinary, real Mandarin.",
      "We are not building a Chinese-flavored Toki Pona.",
      "We are taking real Chinese and making it as small as it can be: the fewest words and rules that a native speaker still understands.",
      "Later, you can grow it into full Mandarin without starting over.",
      "",
      "The lessons are in three sections, and each one builds on the last. After them come four groups of everything that isn't a lesson: things to read, reference, tools, and extra articles."
    ],
    ru: [
      "Toki Pona показал, что даже с небольшим неизменным набором слов можно сказать почти что угодно.",
      "Hǎo-shuō-de заимствует эту идею, но не сам язык.",
      "Toki Pona придумывает свою грамматику с нуля.",
      "Hǎo-shuō-de делает наоборот: каждое правило грамматики, которое вы здесь выучите, — обычный, настоящий китайский.",
      "Мы не строим Toki Pona с китайским акцентом.",
      "Мы берём настоящий китайский и делаем его как можно меньше: минимум слов и правил, при котором носитель языка всё ещё вас понимает.",
      "Потом вы сможете дорастить его до полного китайского, не начиная заново.",
      "",
      "Уроки разделены на три раздела, и каждый опирается на предыдущий. После них идут четыре группы всего, что не является уроком: тексты для чтения, справочник, инструменты и дополнительные статьи."
    ],
  },
  image: {
    file: "intro-3-path",
    alt: {
      en: "A winding path of stepping stones leads from Miao-miao, who sits on the first orange stone, to a plain door in the top right corner.",
      ru: "Извилистая дорожка из камней ведёт от Miao-miao, которая сидит на первом оранжевом камне, к простой двери в правом верхнем углу.",
    },
    pinyin: "{{Word:wo3}} {{word:zou3}} {{word:lu4}}.",
    hanzi: "我走路。",
    en: "I walk.",
    ru: "Я иду.",
  },
  extra: contents,
});
