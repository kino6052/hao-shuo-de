// To say why, put yīnwèi (because) before the reason. Pattern: yīnwèi +
// reason, result
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "because",
  words: [
    {
      word: "yin1wei4",
      en: "because",
      ru: "потому что, так как",
    },
    {
      word: "si3",
      en: "die; dead",
      ru: "умирать; мёртвый",
    },
    {
      word: "huo2",
      en: "live; alive",
      ru: "жить; живой",
    },
  ],
  prose: {
    en: [
      "**To say why**, put {{word:yin1wei4}} (because) before the reason.",
      "",
      "**{{word:yin1wei4}} + reason, result**",
      "",
      "The reason can also come second: {{Word:wo3}} {{word:bu4}} {{word:chi1}}, {{word:yin1wei4}} {{word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ],
    ru: [
      "**Чтобы сказать почему**, поставьте {{word:yin1wei4}} (потому что) перед причиной.",
      "",
      "**{{word:yin1wei4}} + причина, результат**",
      "",
      "Причина может стоять и второй: {{Word:wo3}} {{word:bu4}} {{word:chi1}}, {{word:yin1wei4}} {{word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
    ],
    tldr: {
      en: "{{word:yin1wei4}} + reason: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      ru: "{{word:yin1wei4}} + причина: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
    },
    necessity: { en: "Now you can give reasons.", ru: "Теперь вы можете объяснять причины." },
  },
  info: {
    en: "{{word:yin1wei4}} + reason, result: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}. (Because I'm cold, I'm not going.)",
    ru: "{{word:yin1wei4}} + причина, результат: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}. (Так как мне холодно, я не пойду.)",
  },
  examples: [
    {
      pinyin: "{{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}} {{word:wai4}}-{{word:mian4}}.",
      hanzi: "因为我很冷，我不去外面。",
      en: "Because I'm cold, I'm not going outside.",
      ru: "Так как мне холодно, я не пойду на улицу.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:hen3}} {{word:re4}}, {{word:wo3}} {{word:shen1ti3}}-{{word:de}} {{word:wai4}}-{{word:mian4}} {{word:bian4}} {{word:hong2se4}} {{word:le}}.",
      hanzi: "因为很热，我身体的外面变红色了。",
      en: "Because it was hot, my skin turned red.",
      ru: "Так как было жарко, у меня покраснела кожа.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:you3}} {{word:kong1}}-{{word:qi4}}, {{word:wo3}}-{{word:men}} {{word:neng2}} {{word:huo2}}.",
      hanzi: "因为有空气，我们能活。",
      en: "Because there's air, we can live.",
      ru: "Так как есть воздух, мы можем жить.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:hen3}} {{word:re4}}, {{word:wo3}} {{word:guan1}} {{word:le}} {{word:huo3}}.",
      hanzi: "因为很热，我关了火。",
      en: "Because it was hot, I turned off the fire.",
      ru: "Так как было жарко, я выключил огонь.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:kong1}}-{{word:qi4}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:chu1}}-{{word:qu4}}.",
      hanzi: "因为空气很冷，我不出去。",
      en: "It's cold out, so I'm not going out.",
      ru: "На улице холодно, поэтому я не выхожу.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:lu4}} {{word:hen3}} {{word:yuan3}}, {{word:wo3}}-{{word:men}} {{word:bu4}} {{word:qu4}}.",
      hanzi: "因为路很远，我们不去。",
      en: "It's a long way, so we're not going.",
      ru: "Путь далёкий, поэтому мы не пойдём.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:jia1}} {{word:hen3}} {{word:luan4}}, {{word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}.",
      hanzi: "因为家很乱，我们出去玩儿。",
      en: "The house is a mess, so we're going out to play.",
      ru: "Дома беспорядок, поэтому мы идём гулять.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:ta1}}-{{word:de}} {{word:jiao3}} {{word:huai4}} {{word:le}}, {{word:ta1}} {{word:zhan4}}-{{word:bu4}}-{{word:qi3}}-{{word:lai2}}.",
      hanzi: "因为他的脚坏了，他站不起来。",
      en: "His foot is hurt, so he can't stand up.",
      ru: "У него болит нога, поэтому он не может встать.",
    },
  ],
  exercises: [
    {
      en: "Because I'm cold, I want clothes.",
      ru: "Так как мне холодно, я хочу одежду.",
      answer: "{{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:yao4}} {{word:yi1fu}}.",
      hanzi: "因为我很冷，我要衣服。",
    },
    {
      en: "The plant died.",
      ru: "Растение погибло.",
      answer: "{{Word:zhi2wu4}} {{word:si3}} {{word:le}}.",
      hanzi: "植物死了。",
    },
    {
      en: "Because the light isn't bright, I can't see.",
      ru: "Свет тусклый, поэтому мне не видно.",
      answer: "{{Word:yin1wei4}} {{word:deng1}} {{word:bu4}} {{word:ming2}}, {{word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}}.",
      hanzi: "因为灯不明，我看不到。",
    },
  ],
  faq: [
    // do I need a word for "so" after yīnwèi?
    {
      question: {
        en: "Do I need a word for \"so\" after {{word:yin1wei4}}?",
        ru: "Нужно ли слово «поэтому» после {{word:yin1wei4}}?",
      },
      en: "Full Mandarin often adds one before the result. Hao-shuo-de leaves it out, and the comma is enough: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      ru: "В полном китайском его часто ставят перед результатом. Hǎo-shuō-de его опускает — хватает запятой: {{Word:yin1wei4}} {{word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
    },
  ],
});
