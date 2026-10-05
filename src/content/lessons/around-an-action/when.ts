// To say "when", say "the time of" it: put -de shíjiān after the action, then
// a comma. Pattern: Who + verb-de shíjiān, the rest
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "when",
  words: [
    {
      word: "wan2r",
      en: "play",
      ru: "играть",
    },
  ],
  prose: {
    en: [
      "**To say \"when\"**, say \"the time of\" it: put -{{word:de}} {{word:shi2jian1}} after the action, then a comma.",
      "",
      "**Who + verb-{{word:de}} {{word:shi2jian1}}, the rest**",
      "",
      "There is no separate word for \"when\". {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}} is \"the time I eat\".",
    ],
    ru: [
      "**Чтобы сказать «когда»**, скажите «время, когда»: поставьте -{{word:de}} {{word:shi2jian1}} после действия, а потом запятую.",
      "",
      "**Кто + глагол-{{word:de}} {{word:shi2jian1}}, остальное**",
      "",
      "Отдельного слова для «когда» нет. {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}} — это «время, когда я ем».",
    ],
    tldr: {
      en: "\"When I eat\" is {{word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, \"the time I eat\".",
      ru: "«Когда я ем» — это {{word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, «время, когда я ем».",
    },
    necessity: {
      en: "Now you can say what happens when something else happens.",
      ru: "Теперь вы можете сказать, что происходит, когда происходит что-то другое.",
    },
  },
  info: {
    en: "verb-{{word:de}} {{word:shi2jian1}}, when: {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}. (When I eat, I don't talk.)",
    ru: "глагол-{{word:de}} {{word:shi2jian1}} — когда: {{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}. (Когда я ем, я не разговариваю.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:shuo1}}.",
      hanzi: "我吃的时间，我不说。",
      en: "When I eat, I don't talk.",
      ru: "Когда я ем, я не разговариваю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:ting1}}.",
      hanzi: "你说的时间，我听。",
      en: "When you speak, I listen.",
      ru: "Когда ты говоришь, я слушаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shui4jiao4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:wan2r}}.",
      hanzi: "他睡觉的时间，我玩儿。",
      en: "When he sleeps, I play.",
      ru: "Когда он спит, я играю.",
    },
  ],
  exercises: [
    {
      en: "When I write, I don't eat.",
      ru: "Когда я пишу, я не ем.",
      answer: "{{Word:wo3}} {{word:xie3}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:bu4}} {{word:chi1}}.",
      hanzi: "我写的时间，我不吃。",
    },
    {
      en: "Do you want to play?",
      ru: "Хочешь поиграть?",
      answer: "{{Word:ni3}} {{word:yao4}} {{word:wan2r}} {{word:ma}}?",
      hanzi: "你要玩儿吗？",
    },
  ],
});
