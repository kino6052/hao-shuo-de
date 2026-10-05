// To ask if you may, say néng … ma? To suggest something or ask nicely, add
// hǎo ma? (okay?) at the end. Pattern: Who + néng + verb + ma? / …, hǎo ma?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "may-i",
  prose: {
    en: [
      "**To ask if you may**, put {{word:neng2}} (can) before the verb and {{word:ma}} at the end. **To suggest something, or to ask nicely**, add {{word:hao3}} {{word:ma}}? (okay?) at the end.",
      "",
      "**Who + {{word:neng2}} + verb + {{word:ma}}? / …, {{word:hao3}} {{word:ma}}?**",
      "",
      "To say yes, answer {{Word:neng2}}! or {{Word:hao3}}!. {{word:wo3}}-{{word:men}} + verb, {{word:hao3}} {{word:ma}}? is \"let's …, okay?\".",
    ],
    ru: [
      "**Чтобы спросить, можно ли**, поставьте {{word:neng2}} (мочь) перед глаголом, а {{word:ma}} — в конце. **Чтобы что-то предложить или вежливо попросить**, добавьте в конце {{word:hao3}} {{word:ma}}? («хорошо?»).",
      "",
      "**Кто + {{word:neng2}} + глагол + {{word:ma}}? / …, {{word:hao3}} {{word:ma}}?**",
      "",
      "Чтобы ответить «да», скажите {{Word:neng2}}! или {{Word:hao3}}!. {{word:wo3}}-{{word:men}} + глагол, {{word:hao3}} {{word:ma}}? — это «давай …, хорошо?».",
    ],
    tldr: {
      en: "{{word:neng2}} … {{word:ma}}? asks if you may. Add {{word:hao3}} {{word:ma}}? for let's or please.",
      ru: "{{word:neng2}} … {{word:ma}}? — «можно?». Добавьте {{word:hao3}} {{word:ma}}?, чтобы сказать «давай» или «пожалуйста».",
    },
    necessity: {
      en: "Now you can ask nicely, and make plans with people.",
      ru: "Теперь вы можете вежливо просить и договариваться с людьми.",
    },
  },
  info: {
    en: "{{word:neng2}} … {{word:ma}}?, may I: {{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}? (Can I come in?) …, {{word:hao3}} {{word:ma}}?, let's or please: {{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}? (Let's go out and play, okay?)",
    ru: "{{word:neng2}} … {{word:ma}}? — можно ли: {{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}? (Можно войти?) …, {{word:hao3}} {{word:ma}}? — давай или пожалуйста: {{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}? (Давай выйдем поиграть, хорошо?)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}?",
      hanzi: "我能进来吗？",
      en: "Can I come in?",
      ru: "Можно войти?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:mo1}} {{word:yi1}}-{{word:xia4}} {{word:ma}}?",
      hanzi: "我能摸一下吗？",
      en: "May I touch it?",
      ru: "Можно потрогать?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bu4}} {{word:neng2}} {{word:zai4}} {{word:zhe4}}-ge {{word:di4}}-{{light:fang1}} {{word:shui4jiao4}}.",
      hanzi: "你不能在这个地方睡觉。",
      en: "You can't sleep here.",
      ru: "Здесь нельзя спать.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "我们出去玩儿，好吗？",
      en: "Let's go out and play, okay?",
      ru: "Давай выйдем поиграть, хорошо?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "你帮我，好吗？",
      en: "Could you help me, please?",
      ru: "Помоги мне, пожалуйста.",
    },
    {
      pinyin: "{{Word:hao3}}!",
      hanzi: "好！",
      en: "Okay!",
      ru: "Хорошо!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zuo4}}-{{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "你坐在我的左边，好吗？",
      en: "Sit on my left, okay?",
      ru: "Сядь слева от меня, хорошо?",
    },
    {
      pinyin: "{{Word:hao3}}, {{word:wo3}} {{word:xian4zai4}} {{word:jiu4}} {{word:lai2}}!",
      hanzi: "好，我现在就来！",
      en: "Okay, I'm coming right now!",
      ru: "Хорошо, сейчас же приду!",
    },
  ],
  exercises: [
    {
      en: "Can I come in?",
      ru: "Можно войти?",
      answer: "{{Word:wo3}} {{word:neng2}} {{word:jin4}}-{{word:lai2}} {{word:ma}}?",
      hanzi: "我能进来吗？",
    },
    {
      en: "Let's eat, okay?",
      ru: "Давай поедим, хорошо?",
      answer: "{{Word:wo3}}-{{word:men}} {{word:chi1}} {{word:dong1}}-{{light:xi1}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "我们吃东西，好吗？",
    },
  ],
});
