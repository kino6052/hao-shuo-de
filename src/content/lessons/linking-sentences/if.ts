// To say "if", put rúguǒ at the start of the if-part, then a comma. Pattern:
// rúguǒ X, the rest
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "if",
  words: [
    {
      word: "ru2guo3",
      en: "if",
      ru: "если",
    },
  ],
  prose: {
    en: [
      "**To say \"if\"**, put {{word:ru2guo3}} (if) at the start of the if-part, then a comma.",
      "",
      "**{{word:ru2guo3}} X, the rest**",
      "",
      "You can also leave out {{word:ru2guo3}} and just put the if-part first: {{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:hui4}} {{word:si3}}.",
      "{{word:huo2}} (live) is the opposite of {{word:si3}} (die): {{Word:ru2guo3}} {{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:neng2}} {{word:huo2}}.",
    ],
    ru: [
      "**Чтобы сказать «если»**, поставьте {{word:ru2guo3}} (если) в начало части с условием, а потом запятую.",
      "",
      "**{{word:ru2guo3}} X, остальное**",
      "",
      "Можно и не говорить {{word:ru2guo3}}, а просто поставить условие первым: {{Word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:hui4}} {{word:si3}}.",
      "{{word:huo2}} (жить) — противоположность {{word:si3}} (умирать): {{Word:ru2guo3}} {{word:you3}} {{word:shui3}}, {{word:zhi2wu4}} {{word:neng2}} {{word:huo2}}.",
    ],
    tldr: {
      en: "{{word:ru2guo3}} X means if X: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      ru: "{{word:ru2guo3}} X значит «если X»: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
    },
    necessity: {
      en: "Now you can talk about what might happen.",
      ru: "Теперь вы можете говорить о том, что может случиться.",
    },
  },
  info: {
    en: "{{word:ru2guo3}} X, …, if: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}. (If you come, I'll wait for you.)",
    ru: "{{word:ru2guo3}} X, … — если: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}. (Если ты придёшь, я тебя подожду.)",
  },
  examples: [
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "如果你来，我等你。",
      en: "If you come, I'll wait for you.",
      ru: "Если ты придёшь, я тебя подожду.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:wo3}} {{word:gei3}} {{word:ni3}} {{word:yi1fu}}.",
      hanzi: "如果你冷，我给你衣服。",
      en: "If you're cold, I'll give you clothes.",
      ru: "Если тебе холодно, я дам тебе одежду.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:zhi2wu4}} {{word:mei2}}-{{word:you3}} {{word:shui3}}, {{word:ta1}} {{word:hui4}} {{word:si3}}.",
      hanzi: "如果植物没有水，它会死。",
      en: "If a plant has no water, it will die.",
      ru: "Если у растения нет воды, оно погибнет.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:wu3}}-{{word:hao4}} {{word:bu4}} {{word:zai4}}, {{word:wo3}}-{{word:men}} {{word:deng3}}.",
      hanzi: "如果五号不在，我们等。",
      en: "If number five isn't here, we wait.",
      ru: "Если номера пять нет, мы ждём.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:bu4}} {{word:zhi1dao4}} {{word:zhe4}}-ge {{word:ci2}}, {{word:wen4}} {{word:wo3}}.",
      hanzi: "如果你不知道这个词，问我。",
      en: "If you don't know this word, ask me.",
      ru: "Если ты не знаешь этого слова, спроси меня.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:yao4}}, {{word:he1}} {{word:shui3}} {{word:huo4}}-{{word:zhe3}} {{word:chi1}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "如果你要，喝水或者吃东西。",
      en: "If you want, drink some water or eat something.",
      ru: "Если хочешь, попей воды или поешь.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:na4}}-ge {{word:di4}}-{{light:fang1}} {{word:yuan3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      hanzi: "如果那个地方远，我不去。",
      en: "If that place is far, I won't go.",
      ru: "Если то место далеко, я не пойду.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:hui2}}-{{word:lai2}}, {{word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}.",
      hanzi: "如果你回来，我们一起吃。",
      en: "If you come back, we'll eat together.",
      ru: "Если ты вернёшься, мы поедим вместе.",
    },
  ],
  exercises: [
    {
      en: "If you want it, I'll give it to you.",
      ru: "Если хочешь, я тебе дам.",
      answer: "{{Word:ru2guo3}} {{word:ni3}} {{word:yao4}}, {{word:wo3}} {{word:gei3}} {{word:ni3}}.",
      hanzi: "如果你要，我给你。",
    },
    {
      en: "If you're cold, come inside.",
      ru: "Если тебе холодно, заходи внутрь.",
      answer: "{{Word:ru2guo3}} {{word:ni3}} {{word:leng3}}, {{word:lai2}} {{word:li3}}-{{word:mian4}}.",
      hanzi: "如果你冷，来里面。",
    },
    {
      en: "If there's air, we can live.",
      ru: "Если есть воздух, мы можем жить.",
      answer: "{{Word:ru2guo3}} {{word:you3}} {{word:kong1}}-{{word:qi4}}, {{word:wo3}}-{{word:men}} {{word:neng2}} {{word:huo2}}.",
      hanzi: "如果有空气，我们能活。",
    },
    {
      en: "If you don't know, look online.",
      ru: "Если не знаешь, поищи в интернете.",
      answer: "{{Word:ru2guo3}} {{word:ni3}} {{word:bu4}} {{word:zhi1dao4}}, {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:zhao3}}.",
      hanzi: "如果你不知道，在网上找。",
    },
    {
      en: "If you come next year, we'll play together.",
      ru: "Если ты приедешь в следующем году, мы поиграем вместе.",
      answer: "{{Word:ru2guo3}} {{word:ni3}} {{word:ming2}}-{{word:nian2}} {{word:lai2}}, {{word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:wan2r}}.",
      hanzi: "如果你明年来，我们一起玩儿。",
    },
  ],
  faq: [
    // where does rúguǒ go? (at the start of the if-part, before or after the who)
    {
      question: { en: "Where does {{word:ru2guo3}} go?", ru: "Где ставить {{word:ru2guo3}}?" },
      en: "At the start of the if-part, before or after the who: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, … or {{Word:ni3}} {{word:ru2guo3}} {{word:lai2}}, … Both are fine.",
      ru: "В начало части с условием, до или после того, кто делает: {{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, … или {{Word:ni3}} {{word:ru2guo3}} {{word:lai2}}, … Оба варианта правильные.",
    },
  ],
});
