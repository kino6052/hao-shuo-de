// To say a place is far, use hěn yuǎn. To say something is near, put fùjìn
// (nearby) after zài. Pattern: Place + hěn + yuǎn / Thing + zài (+ place) +
// fùjìn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "far",
  words: [
    {
      word: "yuan3",
      en: "far",
      ru: "далеко, далёкий",
    },
    {
      word: "fu4jin4",
      en: "nearby, the area near",
      ru: "поблизости, рядом",
    },
    {
      word: "guo2",
      en: "country",
      ru: "страна",
    },
  ],
  prose: {
    en: [
      "**To say a place is far**, put {{word:hen3}} {{word:yuan3}} (very far) after it. **To say something is near**, put {{word:fu4jin4}} (nearby) after {{word:zai4}}, or after {{word:zai4}} and a place.",
      "",
      "**Place + {{word:hen3}} + {{word:yuan3}} / Thing + {{word:zai4}} (+ place) + {{word:fu4jin4}}**",
      "",
      "{{word:fu4jin4}} is a place word, like {{word:pang2bian1}}: say {{word:zai4}} {{word:fu4jin4}}, not {{word:hen3}} {{word:fu4jin4}}.",
      "{{word:guo2}} is a country: {{Word:wo3}}-{{word:de}} {{word:guo2}} {{word:hen3}} {{word:yuan3}}, my country is far. Everyday Mandarin often says {{word:guo2}}-{{word:jia1}}.",
    ],
    ru: [
      "**Чтобы сказать, что место далеко**, поставьте после него {{word:hen3}} {{word:yuan3}} (очень далеко). **Чтобы сказать, что что-то близко**, поставьте {{word:fu4jin4}} (поблизости) после {{word:zai4}} или после {{word:zai4}} и места.",
      "",
      "**Место + {{word:hen3}} + {{word:yuan3}} / Вещь + {{word:zai4}} (+ место) + {{word:fu4jin4}}**",
      "",
      "{{word:fu4jin4}} — слово места, как {{word:pang2bian1}}: говорите {{word:zai4}} {{word:fu4jin4}}, а не {{word:hen3}} {{word:fu4jin4}}.",
      "{{word:guo2}} — страна: {{Word:wo3}}-{{word:de}} {{word:guo2}} {{word:hen3}} {{word:yuan3}} — моя страна далеко. В обычном китайском часто говорят {{word:guo2}}-{{word:jia1}}.",
    ],
    tldr: {
      en: "{{word:yuan3}} is far: {{word:hen3}} {{word:yuan3}}. {{word:fu4jin4}} is nearby: {{word:zai4}} {{word:fu4jin4}}.",
      ru: "{{word:yuan3}} — «далеко»: {{word:hen3}} {{word:yuan3}}. {{word:fu4jin4}} — «поблизости»: {{word:zai4}} {{word:fu4jin4}}.",
    },
    necessity: {
      en: "Now you can say how far you have to go.",
      ru: "Теперь вы можете сказать, далеко ли идти.",
    },
  },
  info: {
    en: "{{word:yuan3}} / {{word:fu4jin4}}, far / nearby: {{Word:wo3}}-{{word:de}} {{word:guo2}} {{word:hen3}} {{word:yuan3}}. (My country is far.) {{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}. (My home is nearby.)",
    ru: "{{word:yuan3}} / {{word:fu4jin4}} — далеко / поблизости: {{Word:wo3}}-{{word:de}} {{word:guo2}} {{word:hen3}} {{word:yuan3}}. (Моя страна далеко.) {{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}. (Мой дом поблизости.)",
  },
  examples: [
    {
      pinyin: "{{Word:na4}}-ge {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "那个地方很远。",
      en: "That place is far.",
      ru: "То место далеко.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}.",
      hanzi: "我的家在附近。",
      en: "My home is nearby.",
      ru: "Мой дом поблизости.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:jia1}} {{word:yuan3}} {{word:ma}}?",
      hanzi: "你的家远吗？",
      en: "Is your home far?",
      ru: "Твой дом далеко?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:fu4jin4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我们去附近的地方。",
      en: "We go somewhere nearby.",
      ru: "Мы идём куда-нибудь поблизости.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:lai2}}.",
      hanzi: "他从很远的地方来。",
      en: "He comes from far away.",
      ru: "Он пришёл издалека.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:zai4}} {{word:jia1}} {{word:fu4jin4}} {{word:ma}}?",
      hanzi: "水在家附近吗？",
      en: "Is there water near home?",
      ru: "Около дома есть вода?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:guo2}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "我的国很远。",
      en: "My country is far.",
      ru: "Моя страна далеко.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:guo2}} {{word:hen3}} {{word:da4}} {{word:ma}}?",
      hanzi: "你的国很大吗？",
      en: "Is your country big?",
      ru: "Твоя страна большая?",
    },
  ],
  exercises: [
    {
      en: "My parents' home is far.",
      ru: "Дом моих родителей далеко.",
      answer: "{{Word:ba4ba}}-{{word:ma1ma}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "爸爸妈妈的家很远。",
    },
    {
      en: "My home is nearby.",
      ru: "Мой дом поблизости.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}.",
      hanzi: "我的家在附近。",
    },
    {
      en: "Is your country far?",
      ru: "Твоя страна далеко?",
      answer: "{{Word:ni3}}-{{word:de}} {{word:guo2}} {{word:yuan3}} {{word:ma}}?",
      hanzi: "你的国远吗？",
    },
  ],
});
