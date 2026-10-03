// English text for doubling-words, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Doubling Words"] },
  summary: {
    en: [
      "Chinese often says a word twice to change what it means.",
      "In this lesson, you'll be able to say \"Let me have a look.\", \"The moon is nice and round.\", \"Study hard!\", and \"Everyone needs water.\"",
    ],
  },
  proseVerbs: {
    en: [
      "**To do something a little, or just try it**, say the verb twice. The second one is short and light.",
      "",
      "**verb-verb**",
      "",
      "It's softer than the verb alone, like verb + {{word:yi1xia4}} (Lesson {{lesson:around-an-action}}): {{Word:wo3}} {{word:kan4}}-kan is \"let me have a look\". You already know one: {{word:xie4}}-xie (Lesson {{lesson:greetings-and-feelings}}).",
    ],
    tldr: {
      en: [
        "Say a verb twice to do it a little: {{word:kan4}}-kan, have a look.",
      ],
    },
    necessity: { en: ["Now you can make a request softer."] },
  },
  exampleVerbs1: { en: ["Let me have a look."] },
  exampleVerbs2: { en: ["Wait a bit!"] },
  exampleVerbs3: { en: ["Listen to this sound."] },
  exampleVerbs4: { en: ["He just smiles and doesn't say anything."] },
  exampleVerbs5: { en: ["I don't know, so I'll ask."] },
  exampleVerbs6: { en: ["Is the bug dead? Let me have a look."] },
  exampleVerbs7: { en: ["If you have time, let's play a bit."] },
  exampleVerbs8: { en: ["Don't be scared, touch it."] },
  exampleVerbs9: { en: ["Thanks, let me have a look."] },
  exampleVerbs10: { en: ["Come in and have a look!"] },
  exampleVerbs11: { en: ["Let's go out and play a bit."] },
  exampleVerbs12: { en: ["Look, he's really happy."] },
  proseDescribe: {
    en: [
      "**To make a describing word stronger and livelier**, say it twice, then add -{{word:de}}.",
      "",
      "**adjective-adjective-{{word:de}}**",
      "",
      "Don't add {{word:hen3}}: saying it twice already does that job. {{word:hao3}}-{{word:hao3}} before a verb means \"well, properly\": {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! And {{word:yi1}}-{{word:dian3}}-{{word:dian3}} is \"just a tiny bit\".",
    ],
    tldr: {
      en: [
        "Say a describing word twice, then -{{word:de}}, to make it stronger: {{word:yuan2}}-{{word:yuan2}}-{{word:de}}.",
      ],
    },
    necessity: { en: ["Now you can describe things more vividly."] },
  },
  exampleDescribe1: { en: ["The moon is nice and round."] },
  exampleDescribe2: { en: ["I want some nice hot water."] },
  exampleDescribe3: { en: ["The fruit is tiny, but nice and sweet."] },
  exampleDescribe4: { en: ["Study hard!"] },
  exampleDescribe5: { en: ["I think this one is perfectly fine."] },
  exampleDescribe6: { en: ["I want just a tiny bit of salt."] },
  exampleDescribe7: { en: ["The plant is alive and well."] },
  proseEvery: {
    en: [
      "**To say every**, say a counting word, or one of a few nouns, twice. Put {{word:dou1}} before the verb.",
      "",
      "**{{word:ge4}}-{{word:ge4}} / {{word:ren2}}-{{word:ren2}} + {{word:dou1}} + verb**",
      "",
      "{{word:ren2}}-{{word:ren2}} is everyone, {{word:jia1}}-{{word:jia1}} is every home, {{word:ge4}}-{{word:ge4}} is every one, and {{word:ci4}}-{{word:ci4}} is every time. Most nouns can't be doubled.",
    ],
    tldr: {
      en: [
        "Say {{word:ren2}} or {{word:ge4}} twice, with {{word:dou1}}, for every: {{word:ren2}}-{{word:ren2}} {{word:dou1}}.",
      ],
    },
    necessity: { en: ["Now you can say every one of them."] },
  },
  exampleEvery1: { en: ["Everyone needs water."] },
  exampleEvery2: { en: ["Every one of them is good."] },
  exampleEvery3: { en: ["Every home has a fire."] },
  exampleEvery4: { en: ["It's the same every time."] },
  exampleEvery5: { en: ["Everyone laughed."] },
  exampleEvery6: { en: ["What's his name? Everyone knows."] },
  infoDoubling: {
    title: { en: ["Doubling Words"] },
    items: [
      {
        en: [
          "verb-verb, a little: {{Word:wo3}} {{word:kan4}}-kan. (Let me have a look.)",
        ],
      },
      {
        en: [
          "adjective-adjective-{{word:de}}, stronger: {{Word:yue4}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}}. (The moon is nice and round.) {{word:hao3}}-{{word:hao3}} + verb, well: {{Word:hao3}}-{{word:hao3}} {{word:xue2}}! (Study hard!)",
        ],
      },
      {
        en: [
          "{{word:ren2}}-{{word:ren2}} / {{word:ge4}}-{{word:ge4}} + {{word:dou1}}, every: {{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}. (Everyone needs water.)",
        ],
      },
    ],
  },
  exercise1: { en: ["Let me have a listen."] },
  exercise2: { en: ["Let's talk a bit."] },
  exercise3: { en: ["The water is nice and cold."] },
  exercise4: { en: ["Sleep well!"] },
  exercise5: { en: ["Everyone has money."] },
  exercise6: { en: ["It's different every time."] },
  answer1: { en: ["{{Word:wo3}} {{word:ting1}}-ting."] },
  answer2: { en: ["{{Word:wo3}}-{{word:men}} {{word:shuo1}}-shuo."] },
  answer3: { en: ["{{Word:shui3}} {{word:leng3}}-{{word:leng3}}-{{word:de}}."] },
  answer4: { en: ["{{Word:hao3}}-{{word:hao3}} {{word:shui4jiao4}}!"] },
  answer5: { en: ["{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:you3}} {{word:jin1}}."] },
  answer6: { en: ["{{Word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:bu4tong2}}."] },
  faqLight: {
    question: { en: ["Is the second half always light?"] },
    en: [
      "For a verb, yes: {{word:kan4}}-kan, {{word:xie4}}-xie. A doubled describing word keeps its tone: {{word:da4}}-{{word:da4}}-{{word:de}}.",
    ],
  },
  faqWhichVerbs: {
    question: { en: ["Can I double any verb?"] },
    en: [
      "Most action verbs, yes: {{word:kan4}}-kan, {{word:ting1}}-ting, {{word:deng3}}-deng. Not {{word:shi4}} or {{word:you3}}: you can't do those \"a little\".",
    ],
  },
  faqHaoHaoKan: {
    question: { en: ["Does {{word:hao3}}-{{word:hao3}} {{word:kan4}} mean \"look carefully\"?"] },
    en: [
      "It can. But it also means \"really good-looking\": {{word:hao3}} {{word:kan4}} (good to look at) made stronger. The situation tells you which.",
    ],
  },
};

export default en;
