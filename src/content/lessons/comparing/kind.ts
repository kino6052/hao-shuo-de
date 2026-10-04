// To say what kind, use zhǒng (kind). It goes after zhè or nà, like gè.
// Pattern: zhè-zhǒng / nà-zhǒng + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "kind",
  words: [
    {
      term: "{{word:zhong3}}",
      hanzi: "种",
      en: "kind, type",
      ru: "вид, сорт",
    },
  ],
  prose: {
    en: [
      "**To say what kind**, use {{word:zhong3}} (kind). It goes after {{word:zhe4}} or {{word:na4}}, like {{word:ge4}}.",
      "",
      "**{{word:zhe4}}-{{word:zhong3}} / {{word:na4}}-{{word:zhong3}} + noun**",
    ],
    ru: [
      "**Чтобы сказать, какого вида что-то**, используйте {{word:zhong3}} (вид). Оно ставится после {{word:zhe4}} или {{word:na4}}, как {{word:ge4}}.",
      "",
      "**{{word:zhe4}}-{{word:zhong3}} / {{word:na4}}-{{word:zhong3}} + существительное**",
    ],
    tldr: {
      en: "{{word:zhe4}}-{{word:zhong3}} + noun means this kind of: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}}, this kind of fruit.",
      ru: "{{word:zhe4}}-{{word:zhong3}} + существительное — «такой вид»: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} — такие фрукты.",
    },
    necessity: {
      en: "Now you can talk about kinds of things, and compare them.",
      ru: "Теперь вы можете говорить о видах вещей и сравнивать их.",
    },
  },
  info: {
    en: "{{word:zhe4}}-{{word:zhong3}} + noun, this kind of: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} (this kind of fruit)",
    ru: "{{word:zhe4}}-{{word:zhong3}} + существительное — такой вид: {{word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} (такие фрукты)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "这种水果很甜。",
      en: "This kind of fruit is sweet.",
      ru: "Этот сорт фруктов сладкий.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:zhong3}} {{word:bi3}} {{word:na4}}-{{word:zhong3}} {{word:hao3}}.",
      hanzi: "这种比那种好。",
      en: "This kind is better than that kind.",
      ru: "Этот сорт лучше того.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:na4}}-{{word:zhong3}} {{word:gun4zi}}.",
      hanzi: "我要那种棍子。",
      en: "I want that kind of stick.",
      ru: "Мне нужна палка вон такого вида.",
    },
  ],
  exercises: [
    {
      en: "This kind of fruit is sweet.",
      ru: "Этот сорт фруктов сладкий.",
      answer: "{{Word:zhe4}}-{{word:zhong3}} {{word:shui3guo3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "这种水果很甜。",
    },
  ],
});
