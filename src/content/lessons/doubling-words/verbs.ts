// To do something a little, or just try it, say the verb twice; the second
// one is light. Pattern: verb-verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "verbs",
  prose: {
    en: [
      "**To do something a little, or just try it**, say the verb twice. The second one is short and light.",
      "",
      "**verb-verb**",
      "",
      "It's softer than the verb alone, like verb + {{word:yi1}}-{{word:xia4}} (Lesson {{lesson:around-an-action}}): {{Word:wo3}} {{word:kan4}}-kan is \"let me have a look\". You already know one: {{word:xie4}}-xie (Lesson {{lesson:greetings-and-feelings}}).",
    ],
    ru: [
      "**Чтобы сделать что-то немного или просто попробовать**, скажите глагол два раза. Второй раз — коротко и легко.",
      "",
      "**глагол-глагол**",
      "",
      "Так мягче, чем один глагол, — как глагол + {{word:yi1}}-{{word:xia4}} (урок {{lesson:around-an-action}}): {{Word:wo3}} {{word:kan4}}-kan — «дай-ка я посмотрю». Одно такое слово вы уже знаете: {{word:xie4}}-xie (урок {{lesson:greetings-and-feelings}}).",
    ],
    tldr: {
      en: "Say a verb twice to do it a little: {{word:kan4}}-kan, have a look.",
      ru: "Скажите глагол дважды, чтобы сделать это немного: {{word:kan4}}-kan — посмотреть.",
    },
    necessity: { en: "Now you can make a request softer.", ru: "Теперь вы можете сделать просьбу мягче." },
  },
  info: {
    en: "verb-verb, a little: {{Word:wo3}} {{word:kan4}}-kan. (Let me have a look.)",
    ru: "глагол-глагол — немного: {{Word:wo3}} {{word:kan4}}-kan. (Дай-ка я посмотрю.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-kan.",
      hanzi: "我看看。",
      en: "Let me have a look.",
      ru: "Дай-ка я посмотрю.",
    },
    {
      pinyin: "{{Word:yin1wei4}} {{word:wo3}} {{word:bu4}} {{word:zhi1dao4}}, {{word:wo3}} {{word:wen4}}-wen.",
      hanzi: "因为我不知道，我问问。",
      en: "I don't know, so I'll ask.",
      ru: "Я не знаю, так что спрошу.",
    },
    {
      pinyin: "{{Word:dong4wu4}} {{word:si3}} {{word:le}}? {{Word:wo3}} {{word:kan4}}-kan.",
      hanzi: "动物死了？我看看。",
      en: "Is the animal dead? Let me have a look.",
      ru: "Животное умерло? Дай-ка посмотрю.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:you3}} {{word:shi2jian1}}, {{word:wo3}}-{{word:men}} {{word:wan2r}}-wanr.",
      hanzi: "如果你有时间，我们玩玩。",
      en: "If you have time, let's play a bit.",
      ru: "Если у тебя есть время, давай немного поиграем.",
    },
    {
      pinyin: "{{Word:xie4}}-xie, {{word:wo3}} {{word:kan4}}-kan.",
      hanzi: "谢谢，我看看。",
      en: "Thanks, let me have a look.",
      ru: "Спасибо, дай-ка посмотрю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jin4}}-{{word:lai2}} {{word:kan4}}-kan!",
      hanzi: "你进来看看！",
      en: "Come in and have a look!",
      ru: "Заходи, посмотри!",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}-wanr.",
      hanzi: "我们出去玩玩。",
      en: "Let's go out and play a bit.",
      ru: "Давай выйдем, немного поиграем.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-kan, {{word:ta1}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "你看看，他很开心。",
      en: "Look, he's really happy.",
      ru: "Посмотри-ка, он такой радостный.",
    },
  ],
  exercises: [
    {
      en: "Let me have a listen.",
      ru: "Дай-ка я послушаю.",
      answer: "{{Word:wo3}} {{word:ting1}}-ting.",
      hanzi: "我听听。",
    },
    {
      en: "Let's talk a bit.",
      ru: "Давай немного поговорим.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:shuo1}}-shuo.",
      hanzi: "我们说说。",
    },
    {
      en: "Let me have a look online.",
      ru: "Дай-ка посмотрю в интернете.",
      answer: "{{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:kan4}}-kan.",
      hanzi: "我在网上看看。",
    },
  ],
  faq: [
    // is the second half always light? (verbs yes; describing words keep their tone)
    {
      question: { en: "Is the second half always light?", ru: "Вторая половина всегда звучит легко?" },
      en: "For a verb, yes: {{word:kan4}}-kan, {{word:xie4}}-xie. A doubled describing word keeps its tone: {{word:da4}}-{{word:da4}}-{{word:de}}.",
      ru: "У глагола — да: {{word:kan4}}-kan, {{word:xie4}}-xie. Удвоенное описательное слово сохраняет свой тон: {{word:da4}}-{{word:da4}}-{{word:de}}.",
    },
    // can I double any verb? (action verbs yes; not shì or yǒu)
    {
      question: { en: "Can I double any verb?", ru: "Любой ли глагол можно удвоить?" },
      en: "Most action verbs, yes: {{word:kan4}}-kan, {{word:ting1}}-ting, {{word:deng3}}-deng. Not {{word:shi4}} or {{word:you3}}: you can't do those \"a little\".",
      ru: "Большинство глаголов действия — да: {{word:kan4}}-kan, {{word:ting1}}-ting, {{word:deng3}}-deng. Но не {{word:shi4}} и не {{word:you3}}: их нельзя сделать «немного».",
    },
  ],
});
