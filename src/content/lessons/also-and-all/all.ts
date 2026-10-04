// To say they all do something, put dōu (all) right before the verb, after
// the people or things. Pattern: People or things + dōu + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "all",
  words: [
    {
      term: "{{word:dou1}}",
      hanzi: "都",
      en: "all; shénme-dōu: everything",
      ru: "все; shénme-dōu: всё",
    },
  ],
  prose: {
    en: [
      "**To say they all do something**, put {{word:dou1}} (all) right before the verb, after the people or things.",
      "",
      "**People or things + {{word:dou1}} + verb**",
      "",
      "{{word:dou1}} comes after the who, like {{word:ye3}}. It never goes before a noun.",
    ],
    ru: [
      "**Чтобы сказать, что все что-то делают**, поставьте {{word:dou1}} (все) прямо перед глаголом, после людей или вещей.",
      "",
      "**Люди или вещи + {{word:dou1}} + глагол**",
      "",
      "{{word:dou1}}, как и {{word:ye3}}, стоит после того, о ком речь. Перед существительным оно не ставится никогда.",
    ],
    tldr: {
      en: "Put {{word:dou1}} before the verb: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}, we all eat.",
      ru: "Поставьте {{word:dou1}} перед глаголом: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}} — мы все едим.",
    },
    necessity: {
      en: "Now you can talk about every one of them.",
      ru: "Теперь вы можете говорить обо всех сразу.",
    },
  },
  info: {
    en: "{{word:dou1}} + verb, all: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}. (We all eat.)",
    ru: "{{word:dou1}} + глагол — все: {{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}. (Мы все едим.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:chi1}}.",
      hanzi: "我们都吃。",
      en: "We all eat.",
      ru: "Мы все едим.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.",
      hanzi: "植物都要水。",
      en: "All plants need water.",
      ru: "Всем растениям нужна вода.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他们都很好。",
      en: "They're all well.",
      ru: "У них у всех всё хорошо.",
    },
    {
      pinyin: "{{Word:shui3guo3}} {{word:dou1}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
      hanzi: "水果都吃完了。",
      en: "The fruit is all eaten.",
      ru: "Фрукты все съедены.",
    },
    {
      pinyin: "{{Word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kong1qi4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "外面的空气很好。",
      en: "The air outside is good.",
      ru: "Воздух на улице хороший.",
    },
    {
      pinyin: "{{Word:huo3}} {{word:zai4}} {{word:na3li3}}?",
      hanzi: "火在哪里？",
      en: "Where is the fire?",
      ru: "Где огонь?",
    },
    {
      pinyin: "{{Word:kou3}} {{word:dou1}} {{word:kai1}} {{word:le}}.",
      hanzi: "口都开了。",
      en: "The doors are all open.",
      ru: "Двери все открыты.",
    },
    {
      pinyin: "{{Word:huo3}} {{word:dou1}} {{word:guan1}} {{word:le}}.",
      hanzi: "火都关了。",
      en: "The fires are all off.",
      ru: "Огонь везде выключен.",
    },
  ],
  exercises: [
    {
      en: "We all want fruit.",
      ru: "Мы все хотим фруктов.",
      answer: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:yao4}} {{word:shui3guo3}}.",
      hanzi: "我们都要水果。",
    },
  ],
  faq: [
    // méi before a verb means "didn't"
    {
      question: {
        en: "Why is {{word:mei2}} used without {{word:you3}} here?",
        ru: "Почему здесь {{word:mei2}} стоит без {{word:you3}}?",
      },
      en: "Before a verb, {{word:mei2}} means \"didn't\": {{Word:wo3}} {{word:mei2}} {{word:chi1}} (I didn't eat). That's why {{word:shen2me}}-{{word:dou1}} {{word:mei2}} is \"nothing\" for something that didn't happen, and {{word:shen2me}}-{{word:dou1}} {{word:bu4}} is for now or in general.",
      ru: "Перед глаголом {{word:mei2}} значит «не сделал»: {{Word:wo3}} {{word:mei2}} {{word:chi1}} (Я не ел). Поэтому {{word:shen2me}}-{{word:dou1}} {{word:mei2}} — это «ничего» о том, чего не случилось, а {{word:shen2me}}-{{word:dou1}} {{word:bu4}} — о том, что сейчас или вообще.",
    },
    // how do I say "all people" if dōu can't go before a noun?
    {
      question: {
        en: "How do I say \"all people\" if {{word:dou1}} can't go before a noun?",
        ru: "Как сказать «все люди», если {{word:dou1}} не может стоять перед существительным?",
      },
      en: "Put {{word:dou1}} after them, before the verb: {{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}} (Everyone needs water).",
      ru: "Поставьте {{word:dou1}} после них, перед глаголом: {{Word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}} (Всем людям нужна вода).",
    },
  ],
});
