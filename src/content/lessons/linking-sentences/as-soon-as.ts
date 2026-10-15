// Yī, a verb, jiù and another verb says as soon as. Pattern: yī + verb + jiù + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "as-soon-as",
  prose: {
    en: [
      "**To say as soon as**, put {{word:yi1}} before the first verb and {{word:jiu4}} before the second.",
      "",
      "**{{word:yi1}} + verb + {{word:jiu4}} + verb**",
      "",
      "{{Word:na4}}-{{light:ge4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}} is \"As soon as you look at that, you know\".",
    ],
    ru: [
      "**Чтобы сказать «как только»**, поставьте {{word:yi1}} перед первым глаголом и {{word:jiu4}} перед вторым.",
      "",
      "**{{word:yi1}} + глагол + {{word:jiu4}} + глагол**",
      "",
      "{{Word:na4}}-{{light:ge4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}} — «Как только посмотришь на это, поймёшь».",
    ],
    tldr: {
      en: "{{Word:yi1}} + verb + {{word:jiu4}} + verb: as soon as one, the other.",
      ru: "{{Word:yi1}} + глагол + {{word:jiu4}} + глагол — «как только».",
    },
    necessity: {
      en: "Now you can say one thing follows right after another.",
      ru: "Теперь вы можете сказать, что одно следует сразу за другим.",
    },
  },
  info: {
    pattern: "yi-jiu-asap",
    en: "{{Word:yi1}} + verb + {{word:jiu4}} + verb: {{Word:na4}}-{{light:ge4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}. (As soon as you look, you know.)",
    ru: "{{Word:yi1}} + глагол + {{word:jiu4}} + глагол: {{Word:na4}}-{{light:ge4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}. (Как только посмотришь, поймёшь.)",
  },
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}.",
      hanzi: "那个一看就知道。",
      en: "As soon as you look at that, you know.",
      ru: "Как только посмотришь на это, поймёшь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yi1}} {{word:lai2}} {{word:jiu4}} {{word:chi1}}.",
      hanzi: "他一来就吃。",
      en: "As soon as he comes, he eats.",
      ru: "Как только он приходит, он ест.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yi1}} {{word:dao4}} {{word:jia1}} {{word:jiu4}} {{word:shui4jiao4}}.",
      hanzi: "我一到家就睡觉。",
      en: "As soon as I get home, I sleep.",
      ru: "Как только я прихожу домой, я сплю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yi1}} {{word:shuo1}} {{word:wo3}} {{word:jiu4}} {{word:zhi1dao4}}.",
      hanzi: "你一说我就知道。",
      en: "As soon as you say it, I know.",
      ru: "Как только ты скажешь, я пойму.",
    },
  ],
  exercises: [
    {
      en: "As soon as I look, I know.",
      ru: "Как только я посмотрю, я пойму.",
      answer: "{{Word:wo3}} {{word:yi1}} {{word:kan4}} {{word:jiu4}} {{word:zhi1dao4}}.",
      hanzi: "我一看就知道。",
    },
    {
      en: "As soon as he comes, he eats.",
      ru: "Как только он придёт, он ест.",
      answer: "{{Word:ta1}} {{word:yi1}} {{word:lai2}} {{word:jiu4}} {{word:chi1}}.",
      hanzi: "他一来就吃。",
    },
    {
      en: "As soon as I get home, I sleep.",
      ru: "Как только я дойду до дома, я сплю.",
      answer: "{{Word:wo3}} {{word:yi1}} {{word:dao4}} {{word:jia1}} {{word:jiu4}} {{word:shui4jiao4}}.",
      hanzi: "我一到家就睡觉。",
    },
  ],
});
