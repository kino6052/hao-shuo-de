// See src/lib/chapter-content.js for the schema this is transformed by.
// Extra resources: videos, songs and pages from elsewhere that help with
// Hao-shuo-de, one section per topic. A video is a `video` entry (the
// player's address, the video's own page, a caption).
import type { Entry } from "../lib/chapter-entry-types.ts";

export const meta = {
  id: "appendix-resources",
  type: "appendix",
  order: 2.4,
};

const content: Entry[] = [
  {
    type: "title",
    en: ["Extra Resources"],
    zh: [],
    ru: ["Дополнительные материалы"],
  },
  {
    type: "summary",
    en: ["Videos and songs from elsewhere that help with what the book teaches."],
    zh: [],
    ru: ["Видео и песни из других мест, которые помогают с тем, чему учит книга."],
  },
  {
    type: "prose",
    en: [
      "The book teaches with text and sound. Some things are easier to pick up by watching and singing along, so this page collects videos and songs made by others. They aren't part of the lessons: use them whenever they help.",
    ],
    zh: [],
    ru: [
      "Книга учит текстом и звуком. Некоторые вещи легче усвоить, если смотреть и подпевать, поэтому здесь собраны видео и песни, сделанные другими людьми. Они не входят в уроки: используйте их, когда они помогают.",
    ],
    tldr: {
      en: ["Videos and songs made by others, to use alongside the book."],
      zh: [],
      ru: ["Видео и песни других авторов, в помощь к книге."],
    },
    necessity: {
      en: ["Watching and singing along can make sounds stick faster than reading."],
      zh: [],
      ru: ["Если смотреть и подпевать, звуки запоминаются быстрее, чем при чтении."],
    },
  },
  {
    type: "prose",
    en: [
      "## Pinyin",
      "Pinyin is how this book writes every word (Lesson {{lesson:sounds-and-symbols}}). This short song is how Chinese children learn it: an animated cartoon sings through the letters one by one. It's in Chinese, but you don't need to understand the words; listen to each sound and say it along with the song. For the full table of sounds, see {{title:appendix-pinyin}}.",
    ],
    zh: [],
    ru: [
      "## Пиньинь",
      "Пиньинем эта книга записывает каждое слово (урок {{lesson:sounds-and-symbols}}). Эта короткая песня — то, как его учат китайские дети: мультфильм пропевает буквы одну за другой. Она на китайском, но понимать слова не нужно: слушайте каждый звук и повторяйте его вместе с песней. Полная таблица звуков — в главе «{{title:appendix-pinyin}}».",
    ],
    tldr: {
      en: ["A children's song that sings through every pinyin letter."],
      zh: [],
      ru: ["Детская песня, которая пропевает все буквы пиньиня."],
    },
    necessity: {
      en: ["Hearing each letter's sound helps you read pinyin out loud."],
      zh: [],
      ru: ["Если слышать звук каждой буквы, легче читать пиньинь вслух."],
    },
  },
  {
    type: "video",
    embed: "https://player.bilibili.com/player.html?bvid=BV1Xe4y1d7av&page=1&autoplay=0&danmaku=0",
    link: "https://www.bilibili.com/video/BV1Xe4y1d7av/",
    alt: {
      en: ["Pinyin song for children, an animated video on Bilibili"],
      zh: [],
      ru: ["Песня про пиньинь для детей, мультфильм на Bilibili"],
    },
    en: ["The pinyin song{{hanzi: (拼音歌)}}, by the children's channel Erge Duoduo{{hanzi: (儿歌多多)}}, on Bilibili. About two minutes."],
    zh: [],
    ru: ["Песня про пиньинь{{hanzi: (拼音歌)}} от детского канала Erge Duoduo{{hanzi: (儿歌多多)}} на Bilibili. Около двух минут."],
  },
];

export default content;
