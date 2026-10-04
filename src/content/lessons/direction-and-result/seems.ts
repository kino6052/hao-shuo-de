// To say how something seems, put qǐ-lái after kàn, tīng, or chī. Also:
// adjective-qǐ-lái (starts to get), verb-xià-qù (keep going). Pattern: Thing
// + verb-qǐ-lái + hěn + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "seems",
  prose: {
    en: [
      "**To say how something seems**, put {{word:qi3}}-{{word:lai2}} after {{word:kan4}} (look), {{word:ting1}} (listen), or {{word:chi1}} (eat).",
      "",
      "**Thing + verb-{{word:qi3}}-{{word:lai2}} + {{word:hen3}} + adjective**",
      "",
      "Two more jobs: after a describing word, {{word:qi3}}-{{word:lai2}} means it starts to get that way: {{word:leng3}}-{{word:qi3}}-{{word:lai2}}. And verb-{{word:xia4}}-{{word:qu4}} means \"keep going\": {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}!",
    ],
    ru: [
      "**Чтобы сказать, каким что-то кажется**, поставьте {{word:qi3}}-{{word:lai2}} после {{word:kan4}} (смотреть), {{word:ting1}} (слушать) или {{word:chi1}} (есть).",
      "",
      "**Вещь + глагол-{{word:qi3}}-{{word:lai2}} + {{word:hen3}} + прилагательное**",
      "",
      "Ещё две работы: после описательного слова {{word:qi3}}-{{word:lai2}} значит, что что-то начинает таким становиться: {{word:leng3}}-{{word:qi3}}-{{word:lai2}}. А глагол-{{word:xia4}}-{{word:qu4}} значит «продолжать»: {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}!",
    ],
    tldr: {
      en: "{{word:kan4}}-{{word:qi3}}-{{word:lai2}} is looks, {{word:ting1}}-{{word:qi3}}-{{word:lai2}} is sounds. verb-{{word:xia4}}-{{word:qu4}} is keep going.",
      ru: "{{word:kan4}}-{{word:qi3}}-{{word:lai2}} — «выглядит», {{word:ting1}}-{{word:qi3}}-{{word:lai2}} — «звучит». глагол-{{word:xia4}}-{{word:qu4}} — «продолжать».",
    },
    necessity: {
      en: "Now you can say how things look, sound, and taste.",
      ru: "Теперь вы можете сказать, как что-то выглядит, звучит и какое на вкус.",
    },
  },
  info: {
    en: "verb-{{word:qi3}}-{{word:lai2}}, seems: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}. (This looks good.) verb-{{word:xia4}}-{{word:qu4}}, keep going: {{Word:shuo1}}-{{word:xia4}}-{{word:qu4}}! (Keep talking!)",
    ru: "глагол-{{word:qi3}}-{{word:lai2}} — кажется: {{Word:zhe4}}-ge {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}. (Это выглядит хорошо.) глагол-{{word:xia4}}-{{word:qu4}} — продолжать: {{Word:shuo1}}-{{word:xia4}}-{{word:qu4}}! (Говори дальше!)",
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-ge {{word:zhi2wu4}} {{word:kan4}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个植物看起来很好。",
      en: "This plant looks good.",
      ru: "Это растение выглядит хорошо.",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "吃起来很甜。",
      en: "It tastes sweet.",
      ru: "На вкус сладко.",
    },
    {
      pinyin: "{{Word:ting1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:qi2guai4}}.",
      hanzi: "听起来很奇怪。",
      en: "That sounds strange.",
      ru: "Звучит странно.",
    },
    {
      pinyin: "{{Word:kong1}}-{{word:qi4}} {{word:leng3}}-{{word:qi3}}-{{word:lai2}} {{word:le}}.",
      hanzi: "空气冷起来了。",
      en: "It's getting cold.",
      ru: "Становится холодно.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}!",
      hanzi: "你说下去！",
      en: "Go on, keep talking!",
      ru: "Продолжай, говори!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:xue2}}-{{word:xia4}}-{{word:qu4}}.",
      hanzi: "我要学下去。",
      en: "I want to keep learning.",
      ru: "Я хочу учиться дальше.",
    },
  ],
  exercises: [
    {
      en: "This tastes good.",
      ru: "Это вкусно.",
      answer: "{{Word:zhe4}}-ge {{word:chi1}}-{{word:qi3}}-{{word:lai2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个吃起来很好。",
    },
    {
      en: "Keep writing!",
      ru: "Пиши дальше!",
      answer: "{{Word:xie3}}-{{word:xia4}}-{{word:qu4}}!",
      hanzi: "写下去！",
    },
  ],
});
