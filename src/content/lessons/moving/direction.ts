// To say which way you move, join qǐ (up), shàng (up), or xià (down) to lái
// or qù. Pattern: qǐ-lái / shàng-lái / xià-lái
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "direction",
  words: [
    {
      word: "qi3",
      en: "rise; qǐ-lái: get up",
      ru: "подниматься; qǐ-lái: вставать",
    },
    {
      word: "wai4",
      en: "out; wài-miàn: outside",
      ru: "снаружи; wài-miàn: на улице, снаружи",
    },
    {
      word: "kou3",
      en: "opening, door",
      ru: "проём, дверь",
    },
  ],
  prose: {
    en: [
      "**To say which way you move**, join {{word:qi3}} (up), {{word:shang4}} (up), or {{word:xia4}} (down) to {{word:lai2}} or {{word:qu4}}.",
      "",
      "**{{word:qi3}}-{{word:lai2}} / {{word:shang4}}-{{word:lai2}} / {{word:xia4}}-{{word:lai2}}**",
      "",
      "{{word:qi3}}-{{word:lai2}} is get up. {{word:shang4}}-{{word:lai2}} is come up, and {{word:xia4}}-{{word:lai2}} is come down. Use {{word:qu4}} for going away: {{word:shang4}}-{{word:qu4}}, go up.",
      "{{word:wai4}}-{{word:mian4}} is outside, and {{word:kou3}} is an opening, like a door.",
    ],
    ru: [
      "**Чтобы сказать, куда вы движетесь**, присоедините {{word:qi3}} (вверх), {{word:shang4}} (вверх) или {{word:xia4}} (вниз) к {{word:lai2}} или {{word:qu4}}.",
      "",
      "**{{word:qi3}}-{{word:lai2}} / {{word:shang4}}-{{word:lai2}} / {{word:xia4}}-{{word:lai2}}**",
      "",
      "{{word:qi3}}-{{word:lai2}} — «вставать». {{word:shang4}}-{{word:lai2}} — «подняться сюда», {{word:xia4}}-{{word:lai2}} — «спуститься сюда». Если движение от говорящего, используйте {{word:qu4}}: {{word:shang4}}-{{word:qu4}} — «подняться туда».",
      "{{word:wai4}}-{{word:mian4}} — это «снаружи», а {{word:kou3}} — проём, например дверь.",
    ],
    tldr: {
      en: "{{word:qi3}}-{{word:lai2}} is get up. {{word:wai4}}-{{word:mian4}} is outside.",
      ru: "{{word:qi3}}-{{word:lai2}} — «вставать». {{word:wai4}}-{{word:mian4}} — «снаружи».",
    },
    necessity: {
      en: "Now you can say up, down, and out.",
      ru: "Теперь вы можете сказать «вверх», «вниз» и «наружу».",
    },
  },
  info: {
    en: "{{word:qi3}}-{{word:lai2}} (get up), {{word:shang4}}-{{word:lai2}} (come up), {{word:xia4}}-{{word:lai2}} (come down); with {{word:qu4}} for going away.",
    ru: "{{word:qi3}}-{{word:lai2}} (вставать), {{word:shang4}}-{{word:lai2}} (подняться сюда), {{word:xia4}}-{{word:lai2}} (спуститься сюда); с {{word:qu4}} — движение от говорящего.",
  },
  examples: [
    {
      pinyin: "{{Word:qi3}}-{{word:lai2}}!",
      hanzi: "起来！",
      en: "Get up!",
      ru: "Вставай!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qi3}}-{{word:lai2}} {{word:le}}.",
      hanzi: "我起来了。",
      en: "I got up.",
      ru: "Я встал.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xia4}}-{{word:lai2}}!",
      hanzi: "你下来！",
      en: "Come down!",
      ru: "Спускайся!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shang4}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他上去了。",
      en: "He went up.",
      ru: "Он поднялся наверх.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "我去外面。",
      en: "I'm going outside.",
      ru: "Я иду на улицу.",
    },
    {
      pinyin: "{{Word:cong2}} {{word:zhe4}}-ge {{word:kou3}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "从这个口去外面。",
      en: "Go outside through this opening.",
      ru: "Выйди наружу через этот проём.",
    },
    {
      pinyin: "{{Word:he2zi}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "盒子的口很小。",
      en: "The box's opening is small.",
      ru: "У коробки маленькое отверстие.",
    },
    {
      pinyin: "{{Word:kou3}} {{word:zai4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "口在哪里？",
      en: "Where is the door?",
      ru: "Где дверь?",
    },
  ],
  exercises: [
    {
      en: "Get up!",
      ru: "Вставай!",
      answer: "{{Word:qi3}}-{{word:lai2}}!",
      hanzi: "起来！",
    },
    {
      en: "The animal is outside.",
      ru: "Животное снаружи.",
      answer: "{{Word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "动物在外面。",
    },
    {
      en: "The box's opening is big.",
      ru: "У коробки большое отверстие.",
      answer: "{{Word:he2zi}}-{{word:de}} {{word:kou3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "盒子的口很大。",
    },
    {
      en: "Come down!",
      ru: "Спускайся!",
      answer: "{{Word:xia4}}-{{word:lai2}}!",
      hanzi: "下来！",
    },
  ],
});
