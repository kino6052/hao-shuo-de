// To say which way you move a thing, put the direction words right after the
// verb, and the thing first with bǎ. Pattern: Who + bǎ + thing +
// verb-direction-lái / qù
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "move-thing",
  prose: {
    en: [
      "**To say which way you move a thing**, put the direction words right after the verb: {{word:shang4}}, {{word:xia4}}, {{word:jin4}}, {{word:chu1}}, {{word:hui2}}, or {{word:qi3}}, then {{word:lai2}} or {{word:qu4}}.",
      "",
      "**Who + {{word:ba3}} + thing + verb-direction-{{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:ba3}} puts the thing first, so the direction words stay together. {{word:na2}}-{{word:chu1}}-{{word:lai2}} is \"take out\", {{word:na2}}-{{word:qi3}}-{{word:lai2}} is \"pick up\", and {{word:fang4}}-{{word:xia4}} is \"put down\".",
    ],
    ru: [
      "**Чтобы сказать, куда вы перемещаете вещь**, поставьте слова направления сразу после глагола: {{word:shang4}}, {{word:xia4}}, {{word:jin4}}, {{word:chu1}}, {{word:hui2}} или {{word:qi3}}, а потом {{word:lai2}} или {{word:qu4}}.",
      "",
      "**Кто + {{word:ba3}} + вещь + глагол-направление-{{word:lai2}} / {{word:qu4}}**",
      "",
      "{{word:ba3}} ставит вещь вперёд, поэтому слова направления остаются вместе. {{word:na2}}-{{word:chu1}}-{{word:lai2}} — «вынуть», {{word:na2}}-{{word:qi3}}-{{word:lai2}} — «поднять», а {{word:fang4}}-{{word:xia4}} — «положить, опустить».",
      "В русском эту работу делают приставки: «вы-нуть», «под-нять».",
    ],
    tldr: {
      en: "Put direction words after the verb: {{word:na2}}-{{word:chu1}}-{{word:lai2}}, take out; {{word:fang4}}-{{word:xia4}}, put down.",
      ru: "Слова направления ставятся после глагола: {{word:na2}}-{{word:chu1}}-{{word:lai2}} — вынуть; {{word:fang4}}-{{word:xia4}} — положить.",
    },
    necessity: {
      en: "Now you can say take out, put in, pick up, and put down.",
      ru: "Теперь вы можете сказать «вынуть», «положить внутрь», «поднять» и «опустить».",
    },
  },
  info: {
    en: "verb + direction words: {{Word:ta1}} {{word:ba3}} {{word:jin1}} {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:le}}. (He took out the money.)",
    ru: "глагол + слова направления: {{Word:ta1}} {{word:ba3}} {{word:jin1}} {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:le}}. (Он вынул деньги.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:jin1}} {{word:na2}}-{{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他把金拿出来了。",
      en: "He took out the money.",
      ru: "Он вынул деньги.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:yi1fu}} {{word:fang4}}-{{word:jin4}}-{{word:qu4}}!",
      hanzi: "把衣服放进去！",
      en: "Put the clothes in!",
      ru: "Положи одежду внутрь!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:shui3guo3}} {{word:na2}}-{{word:qi3}}-{{word:lai2}}.",
      hanzi: "我把水果拿起来。",
      en: "I pick up the fruit.",
      ru: "Я поднимаю фрукт.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:gong1ju4}} {{word:fang4}}-{{word:xia4}}!",
      hanzi: "把工具放下！",
      en: "Put the tool down!",
      ru: "Положи инструмент!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ba3}} {{word:he2zi}} {{word:na2}}-{{word:hui2}}-{{word:qu4}}.",
      hanzi: "你把盒子拿回去。",
      en: "Take the box back.",
      ru: "Отнеси коробку обратно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:gun4zi}} {{word:na2}}-{{word:shang4}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他把棍子拿上来了。",
      en: "He brought the stick up.",
      ru: "Он принёс палку наверх.",
    },
  ],
  exercises: [
    {
      en: "Take out the tool!",
      ru: "Вынь инструмент!",
      answer: "{{Word:ba3}} {{word:gong1ju4}} {{word:na2}}-{{word:chu1}}-{{word:lai2}}!",
      hanzi: "把工具拿出来！",
    },
    {
      en: "Put the box down!",
      ru: "Опусти коробку!",
      answer: "{{Word:ba3}} {{word:he2zi}} {{word:fang4}}-{{word:xia4}}!",
      hanzi: "把盒子放下！",
    },
  ],
  faq: [
    // where does the thing go without bǎ? (between the direction word and lái / qù)
    {
      question: {
        en: "Where does the thing go without {{word:ba3}}?",
        ru: "Где стоит вещь без {{word:ba3}}?",
      },
      en: "Usually before {{word:lai2}} or {{word:qu4}}: {{Word:ta1}} {{word:na2}}-{{word:chu1}} {{word:jin1}} {{word:lai2}} {{word:le}} (He took out the money). A place goes there too: {{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:qu4}} {{word:le}} (She went back home). With {{word:ba3}}, the direction words stay together, so it's easier.",
      ru: "Обычно перед {{word:lai2}} или {{word:qu4}}: {{Word:ta1}} {{word:na2}}-{{word:chu1}} {{word:jin1}} {{word:lai2}} {{word:le}} (Он вынул деньги). Место ставится туда же: {{Word:ta1}} {{word:hui2}} {{word:jia1}} {{word:qu4}} {{word:le}} (Она вернулась домой). С {{word:ba3}} слова направления остаются вместе, так проще.",
    },
  ],
});
