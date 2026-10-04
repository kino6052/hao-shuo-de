// To say a place is far, use hěn yuǎn. To say something is near, put fùjìn
// (nearby) after zài. Pattern: Place + hěn + yuǎn / Thing + zài (+ place) +
// fùjìn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "far",
  words: [
    {
      term: "{{word:yuan3}}",
      hanzi: "远",
      en: "far",
      ru: "далеко, далёкий",
    },
    {
      term: "{{word:fu4jin4}}",
      hanzi: "附近",
      en: "nearby, the area near",
      ru: "поблизости, рядом",
    },
  ],
  prose: {
    en: [
      "**To say a place is far**, put {{word:hen3}} {{word:yuan3}} (very far) after it. **To say something is near**, put {{word:fu4jin4}} (nearby) after {{word:zai4}}, or after {{word:zai4}} and a place.",
      "",
      "**Place + {{word:hen3}} + {{word:yuan3}} / Thing + {{word:zai4}} (+ place) + {{word:fu4jin4}}**",
      "",
      "{{word:fu4jin4}} is a place word, like {{word:pang2bian1}}: say {{word:zai4}} {{word:fu4jin4}}, not {{word:hen3}} {{word:fu4jin4}}.",
    ],
    ru: [
      "**Чтобы сказать, что место далеко**, поставьте после него {{word:hen3}} {{word:yuan3}} (очень далеко). **Чтобы сказать, что что-то близко**, поставьте {{word:fu4jin4}} (поблизости) после {{word:zai4}} или после {{word:zai4}} и места.",
      "",
      "**Место + {{word:hen3}} + {{word:yuan3}} / Вещь + {{word:zai4}} (+ место) + {{word:fu4jin4}}**",
      "",
      "{{word:fu4jin4}} — слово места, как {{word:pang2bian1}}: говорите {{word:zai4}} {{word:fu4jin4}}, а не {{word:hen3}} {{word:fu4jin4}}.",
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
    en: "{{word:yuan3}} / {{word:fu4jin4}}, far / nearby: {{Word:na4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:yuan3}}. (That place is far.) {{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}. (My home is nearby.)",
    ru: "{{word:yuan3}} / {{word:fu4jin4}} — далеко / поблизости: {{Word:na4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:yuan3}}. (То место далеко.) {{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}. (Мой дом поблизости.)",
  },
  examples: [
    {
      pinyin: "{{Word:na4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:yuan3}}.",
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
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:fu4jin4}}-{{word:de}} {{word:di4fang1}}.",
      hanzi: "我们去附近的地方。",
      en: "We go somewhere nearby.",
      ru: "Мы идём куда-нибудь поблизости.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:hen3}} {{word:yuan3}}-{{word:de}} {{word:di4fang1}} {{word:lai2}}.",
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
  ],
  exercises: [
    {
      en: "My parents' home is far.",
      ru: "Дом моих родителей далеко.",
      answer: "{{Word:fu4mu3}}-{{word:de}} {{word:jia1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "父母的家很远。",
    },
    {
      en: "My home is nearby.",
      ru: "Мой дом поблизости.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}.",
      hanzi: "我的家在附近。",
    },
  ],
});
