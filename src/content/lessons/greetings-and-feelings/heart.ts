// To talk about the heart, use xīn: kāi-xīn (happy), xiǎo-xīn (careful),
// fàng-xīn (don't worry). Pattern: kāi-xīn / xiǎo-xīn / fàng-xīn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "heart",
  words: [
    {
      word: "xin1",
      en: "heart",
      ru: "сердце",
    },
  ],
  prose: {
    en: [
      "**To say how you are inside**, use {{word:xin1}} (heart). It joins other words.",
      "",
      "**{{word:kai1}}-{{word:xin1}} / {{word:xiao3}}-{{word:xin1}} / {{word:fang4}}-{{word:xin1}}**",
      "",
      "{{word:kai1}}-{{word:xin1}} (open heart) is \"happy\", {{word:xiao3}}-{{word:xin1}} (small heart) is \"careful\", and {{word:fang4}}-{{word:xin1}} (put the heart down) is \"don't worry\".",
    ],
    ru: [
      "**Чтобы сказать, что у вас на душе**, используйте {{word:xin1}} (сердце). Оно соединяется с другими словами.",
      "",
      "**{{word:kai1}}-{{word:xin1}} / {{word:xiao3}}-{{word:xin1}} / {{word:fang4}}-{{word:xin1}}**",
      "",
      "{{word:kai1}}-{{word:xin1}} («открытое сердце») — «радостный», {{word:xiao3}}-{{word:xin1}} («маленькое сердце») — «осторожный», а {{word:fang4}}-{{word:xin1}} («положить сердце») — «не волнуйся».",
    ],
    tldr: {
      en: "{{word:kai1}}-{{word:xin1}} is happy, {{word:xiao3}}-{{word:xin1}} is careful, {{word:fang4}}-{{word:xin1}} is don't worry.",
      ru: "{{word:kai1}}-{{word:xin1}} — радостный, {{word:xiao3}}-{{word:xin1}} — осторожно, {{word:fang4}}-{{word:xin1}} — не волнуйся.",
    },
    necessity: {
      en: "Now you can say you're happy, and tell someone to be careful.",
      ru: "Теперь вы можете сказать, что рады, и попросить быть осторожнее.",
    },
  },
  info: {
    en: "{{word:kai1}}-{{word:xin1}}, happy: {{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}. (I'm very happy.) {{Word:xiao3}}-{{word:xin1}}! (Be careful!)",
    ru: "{{word:kai1}}-{{word:xin1}} — радостный: {{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}. (Я очень рад.) {{Word:xiao3}}-{{word:xin1}}! (Осторожно!)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "我很开心。",
      en: "I'm very happy.",
      ru: "Я очень рад.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kai1}}-{{word:xin1}} {{word:ma}}?",
      hanzi: "你开心吗？",
      en: "Are you happy?",
      ru: "Ты рад?",
    },
    {
      pinyin: "{{Word:hen3}} {{word:kai1}}-{{word:xin1}} {{word:ni3}} {{word:lai2}} {{word:le}}!",
      hanzi: "很开心你来了！",
      en: "Welcome! I'm so glad you came!",
      ru: "Как хорошо, что ты пришёл!",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:xin1}}!",
      hanzi: "小心！",
      en: "Be careful!",
      ru: "Осторожно!",
    },
    {
      pinyin: "{{Word:fang4}}-{{word:xin1}}, {{word:mei2}}-{{word:you3}} {{word:guan1xi}}.",
      hanzi: "放心，没有关系。",
      en: "Don't worry, it doesn't matter.",
      ru: "Не волнуйся, ничего страшного.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2de}} {{word:bu4}} {{word:hao3}}, {{word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}.",
      hanzi: "我觉得不好，我要躺下。",
      en: "I don't feel well. I want to lie down.",
      ru: "Мне плохо, я хочу лечь.",
    },
  ],
  exercises: [
    {
      en: "I'm very happy.",
      ru: "Я очень рад.",
      answer: "{{Word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "我很开心。",
    },
    {
      en: "Be careful!",
      ru: "Осторожно!",
      answer: "{{Word:xiao3}}-{{word:xin1}}!",
      hanzi: "小心！",
    },
  ],
});
