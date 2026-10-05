// To say sit, stand, and lie down, use zuò, zhàn, and tǎng with direction
// words. fēi (fly) takes them too. Pattern: zuò-xià / zhàn-qǐ-lái / tǎng-xià
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "body",
  words: [
    {
      word: "zuo4",
      en: "sit",
      ru: "сидеть",
    },
    {
      word: "zhan4",
      en: "stand",
      ru: "стоять",
    },
    {
      word: "tang3",
      en: "lie",
      ru: "лежать",
    },
    {
      word: "fei1",
      en: "fly",
      ru: "летать",
    },
  ],
  prose: {
    en: [
      "**To say sit, stand, and lie down**, use {{word:zuo4}} (sit), {{word:zhan4}} (stand), and {{word:tang3}} (lie). Add direction words for the movement.",
      "",
      "**{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}}**",
      "",
      "To say where, add {{word:zai4}} and the place: {{word:zuo4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}, sit on the floor. {{word:fei1}} (fly) takes direction words too: {{word:fei1}}-{{word:shang4}}-{{word:qu4}}, fly up.",
    ],
    ru: [
      "**Чтобы сказать «сидеть», «стоять» и «лежать»**, используйте {{word:zuo4}} (сидеть), {{word:zhan4}} (стоять) и {{word:tang3}} (лежать). Чтобы показать движение, добавьте слова направления.",
      "",
      "**{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}}**",
      "",
      "Чтобы сказать где, добавьте {{word:zai4}} и место: {{word:zuo4}} {{word:zai4}} {{word:di4}}-{{word:shang4}} — сидеть на полу. {{word:fei1}} (летать) тоже берёт слова направления: {{word:fei1}}-{{word:shang4}}-{{word:qu4}} — взлететь.",
    ],
    tldr: {
      en: "{{word:zuo4}}-{{word:xia4}} is sit down, {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} is stand up, {{word:tang3}}-{{word:xia4}} is lie down.",
      ru: "{{word:zuo4}}-{{word:xia4}} — сесть, {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} — встать, {{word:tang3}}-{{word:xia4}} — лечь.",
    },
    necessity: {
      en: "Now you can sit down, stand up, and lie down.",
      ru: "Теперь вы можете сесть, встать и лечь.",
    },
  },
  info: {
    en: "{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}}, sit down / stand up / lie down: {{Word:ni3}} {{word:zuo4}}-{{word:xia4}}! (Sit down!)",
    ru: "{{word:zuo4}}-{{word:xia4}} / {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} / {{word:tang3}}-{{word:xia4}} — сесть / встать / лечь: {{Word:ni3}} {{word:zuo4}}-{{word:xia4}}! (Садись!)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:xia4}}!",
      hanzi: "你坐下！",
      en: "Sit down!",
      ru: "Садись!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "我坐在地上。",
      en: "I'm sitting on the floor.",
      ru: "Я сижу на полу.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:dou1}} {{word:zhan4}}-{{word:qi3}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他们都站起来了。",
      en: "They all stood up.",
      ru: "Они все встали.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhan4}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "他站在我的前面。",
      en: "He's standing in front of me.",
      ru: "Он стоит передо мной.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}.",
      hanzi: "我要躺下。",
      en: "I want to lie down.",
      ru: "Я хочу лечь.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:tang3}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "动物躺在地上。",
      en: "The animal is lying on the ground.",
      ru: "Животное лежит на земле.",
    },
    {
      pinyin: "{{Word:dong4}}-{{word:wu4}} {{word:fei1}}-{{word:shang4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "动物飞上去了。",
      en: "The animal flew up.",
      ru: "Животное взлетело.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:fei1}}-{{word:hui2}}-{{word:lai2}} {{word:le}}.",
      hanzi: "它飞回来了。",
      en: "It flew back.",
      ru: "Оно прилетело обратно.",
    },
  ],
  exercises: [
    {
      en: "Sit down!",
      ru: "Садись!",
      answer: "{{Word:ni3}} {{word:zuo4}}-{{word:xia4}}!",
      hanzi: "你坐下！",
    },
    {
      en: "Stand up!",
      ru: "Встань!",
      answer: "{{Word:zhan4}}-{{word:qi3}}-{{word:lai2}}!",
      hanzi: "站起来！",
    },
    {
      en: "I want to lie down.",
      ru: "Я хочу лечь.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:tang3}}-{{word:xia4}}.",
      hanzi: "我要躺下。",
    },
    {
      en: "It flew out.",
      ru: "Оно вылетело.",
      answer: "{{Word:ta1}} {{word:fei1}}-{{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "它飞出去了。",
    },
  ],
});
