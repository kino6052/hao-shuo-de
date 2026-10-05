// See src/lib/chapter-content.js for the schema this is transformed by.
// zh intentionally blank -- not yet translated.
import type { Entry, InfoEntry, LangText } from "../lib/chapter-entry-types.ts";
import { SECTIONS, BACK_MATTER, lessonNumber } from "./book.js";

// The table of contents: one line per lesson, keyed by lesson id. The
// sections, their order, the lesson numbers, and the titles all come from
// src/content/book.js and the lessons themselves, so moving a lesson never
// touches this file. scripts/check-book.js checks that every lesson has a line.
export const LESSON_BLURBS: Record<string, LangText> = {
  "sounds-and-symbols": {
    en: ["where everything starts: how pinyin and tones work."],
    zh: [],
    ru: ["с чего всё начинается: как устроены пиньинь и тоны."],
  },
  "words-and-sentences": {
    en: ["your first words, and the simplest sentence you can build with them: NOUN + shì + NOUN."],
    zh: [],
    ru: ["ваши первые слова и самое простое предложение из них: СУЩЕСТВИТЕЛЬНОЕ + shì + СУЩЕСТВИТЕЛЬНОЕ."],
  },
  "modifying-nouns": {
    en: ["describing things: big, small, good, many, and few."],
    zh: [],
    ru: ["как описывать вещи: большой, маленький, хороший, много и мало."],
  },
  "pointing": {
    en: ["pointers: words that point at things and people. This one, that one (with the counting word gè), I, you, and he or she."],
    zh: [],
    ru: ["слова-указатели: слова, которые указывают на вещи и людей. Этот, тот (со счётным словом gè), я, ты и он или она."],
  },
  "who-does-what": {
    en: ["the second most important type of word, for sentences like \"I drink water.\""],
    zh: [],
    ru: ["второй по важности вид слов — для предложений вроде «Я пью воду.»"],
  },
  "questions": {
    en: ["a new type of sentence: yes-or-no questions, \"what?\", \"why?\", and \"how?\", and how to answer them."],
    zh: [],
    ru: ["новый вид предложений: вопросы «да или нет», «что?», «почему?» и «как?» и как на них отвечать."],
  },
  "pre-verbs": {
    en: ["words that go before a verb to say you want to, can, learn to, know how to, love to, or might."],
    zh: [],
    ru: ["слова перед глаголом, чтобы сказать, что вы хотите, можете, учитесь, умеете, любите что-то делать или, может быть, сделаете."],
  },
  "when-it-happens": {
    en: ["saying that something happened, is happening right now, will happen, or has happened before, placing a time up front in a sentence, and asking what happened."],
    zh: [],
    ru: ["как сказать, что что-то случилось, происходит прямо сейчас, случится или уже бывало раньше, как поставить время в начало предложения и как спросить, что случилось."],
  },
  "around-an-action": {
    en: ["\"when X\" with `X-de shí-jiān`, finishing an action, what comes after it, starting, doing it again, how many times, and doing something for a moment."],
    zh: [],
    ru: ["«когда X» с помощью `X-de shí-jiān`, как закончить действие, что идёт после него, как начать, сделать снова, сколько раз и как сделать что-то на минутку."],
  },
  "where-it-is": {
    en: ["saying where something is: inside, on, under, in front, behind, beside, left, and right."],
    zh: [],
    ru: ["как сказать, где что находится: внутри, на, под, впереди, сзади, рядом, слева и справа."],
  },
  "moving": {
    en: ["coming and going, where you come from, arriving, direction words like up and down, moving, far and nearby, and roads."],
    zh: [],
    ru: ["приходить и уходить, откуда вы, как добраться, слова направления вроде «вверх» и «вниз», движение, далеко и поблизости, дороги."],
  },
  "how-much": {
    en: ["words that say how much: very, really, and not very, and what something is worth."],
    zh: [],
    ru: ["слова, которые говорят «насколько»: очень, правда и не очень, а ещё — сколько что-то стоит."],
  },
  "comparing": {
    en: ["bigger than, the biggest, the same, different, other, and kinds of things."],
    zh: [],
    ru: ["больше чем, самый большой, одинаковый, разный, другой и виды вещей."],
  },
  "also-and-all": {
    en: ["also, all of them, everything, and part of it."],
    zh: [],
    ru: ["тоже, все, всё и часть."],
  },
  "becoming-and-making": {
    en: ["how things change (\"it got better\"), and how to make them change (\"fix it\")."],
    zh: [],
    ru: ["как вещи меняются («стало лучше») и как их изменить («починить»)."],
  },
  "direction-and-result": {
    en: ["words after a verb: which way it goes (bring, take out, come in, go home), sitting, standing, and lying down, how it ends (find, fix, break), whether you can (can't see, can't finish), and how things seem (looks good)."],
    zh: [],
    ru: ["слова после глагола: куда направлено действие (принести, вынуть, войти, пойти домой), сидеть, стоять и лежать, чем оно кончается (найти, починить, сломать), получается ли (не видно, не доесть) и каким что-то кажется (выглядит хорошо)."],
  },
  "numbers": {
    en: ["another type of noun: counting, saying how many, number one, number two, the time, a little, and simple sums."],
    zh: [],
    ru: ["ещё один вид существительных: счёт, сколько, номер один, номер два, время, немного и простые вычисления."],
  },
  "colors": {
    en: ["special nouns: red, yellow, blue, black, and white, and asking what color something is."],
    zh: [],
    ru: ["особые существительные: красный, жёлтый, синий, чёрный и белый, и как спросить, какого что-то цвета."],
  },
  "roles-of-a-word": {
    en: ["how -de turns a verb into a thing (\"what you eat\") or a person (\"the one who writes\"), and how to say how well someone does something."],
    zh: [],
    ru: ["как -de превращает глагол в вещь («то, что едят») или в человека («тот, кто пишет») и как сказать, насколько хорошо кто-то что-то делает."],
  },
  "inside-a-sentence": {
    en: ["giving to, using, and, or, toward, groups, and how people get along: ways to connect words inside one sentence."],
    zh: [],
    ru: ["давать кому-то, пользоваться чем-то, «и», «или», «к кому-то», группы и отношения между людьми: как связывать слова внутри одного предложения."],
  },
  "linking-sentences": {
    en: ["because, but, and if (rúguǒ): ways to link one sentence to another."],
    zh: [],
    ru: ["потому что, но и если (rúguǒ): как связать одно предложение с другим."],
  },
  "greetings-and-feelings": {
    en: ["another type of sentence: saying hello and thank you, saying your name, telling someone what to do, and saying how you feel: happy, scared, careful."],
    zh: [],
    ru: ["ещё один вид предложений: поздороваться и сказать спасибо, назвать своё имя, попросить кого-то что-то сделать и сказать, как вы себя чувствуете: радостно, страшно, осторожно."],
  },
  "doubling-words": {
    en: ["saying a word twice: to do something just a little, to make a describing word stronger, and to say every one."],
    zh: [],
    ru: ["слово, сказанное дважды: чтобы сделать что-то совсем немного, усилить описательное слово и сказать «каждый»."],
  },
  "everyday-patterns": {
    en: ["useful ways of saying things that don't fit anywhere else: let me (`wǒ lái`), let me see (`gěi wǒ kàn yī-xià`), help (bāng), letting someone (jiào), teaching (jiāo), may I, and let's."],
    zh: [],
    ru: ["полезные обороты, которые больше никуда не подошли: давай я (`wǒ lái`), дай посмотреть (`gěi wǒ kàn yī-xià`), помочь (bāng), разрешить кому-то (jiào), научить (jiāo), можно ли и давай."],
  },
};

const SECTION_TITLES: Record<string, LangText> = {
  sectionFoundations: { en: ["Section 1 — Sounds, Words, and Simple Sentences"], zh: [], ru: ["Раздел 1 — Звуки, слова и простые предложения"] },
  sectionModifying: { en: ["Section 2 — Modifying Words and Meaning"], zh: [], ru: ["Раздел 2 — Изменение слов и смысла"] },
  sectionSpecial: { en: ["Section 3 — Special Words and Concepts"], zh: [], ru: ["Раздел 3 — Особые слова и понятия"] },
};

// The same for the chapters after the lessons, keyed by chapter id, in the
// groups and order src/content/book.js gives them (BACK_MATTER).
export const CHAPTER_BLURBS: Record<string, LangText> = {
  "phrase-book": {
    en: ["ready-made sentences for travel and daily life: greetings, directions, food, shopping, and getting help."],
    zh: [],
    ru: ["готовые фразы для поездок и повседневной жизни: приветствия, дорога, еда, покупки и помощь."],
  },
  "appendix-stories": {
    en: ["ten well-known tales, retold with dictionary words only, with sound for every line."],
    zh: [],
    ru: ["десять известных сказок, пересказанных только словами из словаря, с озвучкой каждой строки."],
  },
  "appendix-pinyin": {
    en: ["every sound pinyin can spell, and the spellings that trip up English speakers."],
    zh: [],
    ru: ["все звуки, которые записывает пиньинь, и написания, которые легко прочитать неправильно."],
  },
  "appendix-sandhi": {
    en: ["how tones change when words come together."],
    zh: [],
    ru: ["как меняются тоны, когда слова стоят рядом."],
  },
  "appendix-grammar": {
    en: ["every grammar box from the lessons, in one place."],
    zh: [],
    ru: ["все грамматические схемы из уроков в одном месте."],
  },
  "dictionary": {
    en: ["every word, in alphabetical order."],
    zh: [],
    ru: ["все слова по алфавиту."],
  },
  "categorical-dictionary": {
    en: ["every word, grouped by meaning."],
    zh: [],
    ru: ["все слова, сгруппированные по смыслу."],
  },
  "composite-dictionary": {
    en: ["common words there's no word for, and how to say them by putting words together."],
    zh: [],
    ru: ["частые слова, для которых нет отдельного слова, и как сказать их, соединяя слова."],
  },
  "sentence-builder": {
    en: ["a tool for building your own sentences from the dictionary."],
    zh: [],
    ru: ["инструмент, чтобы строить свои предложения из слов словаря."],
  },
  "word-builder": {
    en: ["a tool for making a word Hao-shuo-de doesn't have, by answering questions like \"what kind?\" and \"where?\"."],
    zh: [],
    ru: ["инструмент, чтобы составить слово, которого нет в Hǎo-shuō-de, отвечая на вопросы вроде «какой?» и «где?»."],
  },
  "appendix-minimality": {
    en: ["why so few words can say so much."],
    zh: [],
    ru: ["почему так мало слов может сказать так много."],
  },
  "appendix-frontier": {
    en: ["what is still hard to say in Hao-shuo-de, and the best way to say it for now."],
    zh: [],
    ru: ["что на Hǎo-shuō-de всё ещё трудно сказать, и как сказать это пока."],
  },
  "appendix-toki-pona": {
    en: ["how Hao-shuo-de differs from Toki Pona."],
    zh: [],
    ru: ["чем Hǎo-shuō-de отличается от Toki Pona."],
  },
};

const GROUP_TITLES: Record<string, LangText> = {
  sectionContent: { en: ["Content — things to read"], zh: [], ru: ["Тексты — что почитать"] },
  sectionReference: { en: ["Reference — how the language works"], zh: [], ru: ["Справочник — как устроен язык"] },
  sectionTools: { en: ["Tools — dictionaries and builders"], zh: [], ru: ["Инструменты — словари и конструкторы"] },
  sectionMisc: { en: ["Misc — extra articles"], zh: [], ru: ["Разное — дополнительные статьи"] },
};

// One table-of-contents line, "**Title** — blurb", in every language the
// blurb is written in.
const tocLine = (id: string, blurb: LangText): LangText => ({
  en: [`**{{title:${id}}}** — ${blurb.en.join(" ")}`],
  zh: [],
  ru: blurb.ru.length ? [`**{{title:${id}}}** — ${blurb.ru.join(" ")}`] : [],
});

const backMatter: InfoEntry[] = BACK_MATTER.map((group) => ({
  type: "info",
  title: GROUP_TITLES[group.key],
  items: group.chapters.map((id) => ({ text: tocLine(id, CHAPTER_BLURBS[id]) })),
}));

const tableOfContents: InfoEntry[] = SECTIONS.map((section) => ({
  type: "info",
  title: SECTION_TITLES[section.key],
  ordered: true,
  start: lessonNumber(section.lessons[0]) ?? 1,
  items: section.lessons.map((id) => ({ text: tocLine(id, LESSON_BLURBS[id]) })),
}));

export const meta = {
  id: "intro-3",
  type: "intro",
  lessonNumber: 3,
  order: 3,
};

const content: Entry[] = [
  {
    type: "title",
    en: ["Simplified Chinese, Not Invented Chinese"],
    zh: [],
    ru: ["Упрощённый китайский, а не придуманный"],
  },
  {
    type: "summary",
    en: [
      "Hao-shuo-de is real Chinese, made as simple as it can be. This chapter shows how the book is laid out.",
    ],
    zh: [],
    ru: [
      "Hǎo-shuō-de — это настоящий китайский, упрощённый настолько, насколько возможно. В этой главе показано, как устроена книга.",
    ],
  },
  {
    type: "prose",
    en: [
      "Toki Pona showed that a small, fixed set of words can still let you say almost anything.",
      "Hao-shuo-de borrows that idea, but not the language itself.",
      "Toki Pona invents its own grammar from scratch.",
      "Hao-shuo-de does the opposite: every rule of grammar you'll learn here is ordinary, real Mandarin.",
      "We are not building a Chinese-flavored Toki Pona.",
      "We are taking real Chinese and making it as small as it can be: the fewest words and rules that a native speaker still understands.",
      "Later, you can grow it into full Mandarin without starting over.",
      "",
      "The lessons are in three sections, and each one builds on the last. After them come four groups of everything that isn't a lesson: things to read, reference, tools, and extra articles.",
    ],
    zh: [],
    ru: [
      "Toki Pona показал, что даже с небольшим неизменным набором слов можно сказать почти что угодно.",
      "Hǎo-shuō-de заимствует эту идею, но не сам язык.",
      "Toki Pona придумывает свою грамматику с нуля.",
      "Hǎo-shuō-de делает наоборот: каждое правило грамматики, которое вы здесь выучите, — обычный, настоящий китайский.",
      "Мы не строим Toki Pona с китайским акцентом.",
      "Мы берём настоящий китайский и делаем его как можно меньше: минимум слов и правил, при котором носитель языка всё ещё вас понимает.",
      "Потом вы сможете дорастить его до полного китайского, не начиная заново.",
      "",
      "Уроки разделены на три раздела, и каждый опирается на предыдущий. После них идут четыре группы всего, что не является уроком: тексты для чтения, справочник, инструменты и дополнительные статьи.",
    ],
  },
  ...tableOfContents,
  ...backMatter,
];

export default content;
