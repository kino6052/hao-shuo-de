// R11b: the author, while reviewing batch 11: "news should be xin-wen". 新闻 says
// it with the word itself: xīn (the "new" sense) + a quoted "wén" (wén isn't core,
// as in 文学 "wén"-xué). 媒体 (news creators) uses it: zuò xīn-wén-de rén.
// Run: npm run refactor -- refactors/R11b.ts [--write]

const W = (id) => `{{word:${id}}}`;
const NEWS = `${W("xin1#new")}-"wén"`;

export default [
  {
    op: "composite", zh: "新闻",
    set: {
      hsd: [NEWS], tts: ["新闻"], literal: "new + wén", fit: "name",
      examples: [
        { pinyin: `{{Word:ni3}} ${W("kan4")} ${W("le")} ${W("jin1")}-${W("tian1")}-${W("de")} ${NEWS} ${W("ma")}?`, hanzi: "你看了今天的新闻吗？", en: "Did you see today's news?", ru: "Ты видел сегодняшние новости?" },
        { pinyin: `{{Word:you3}} ${W("shen2me")} ${NEWS}?`, hanzi: "有什么新闻？", en: "What's the news?", ru: "Какие новости?" },
      ],
    },
  },
  {
    op: "composite", zh: "媒体",
    set: {
      hsd: [`${W("zuo4")} ${NEWS}-${W("de")} ${W("ren2")}`], tts: ["做新闻的人"], literal: "people who make the news",
      examples: [
        { pinyin: `{{Word:ta1}} ${W("shi4")} ${W("zuo4")} ${NEWS}-${W("de")} ${W("ren2")}.`, hanzi: "他是做新闻的人。", en: "He works in the media.", ru: "Он работает в СМИ." },
        { pinyin: `{{Word:wo3}} ${W("ai4")} ${W("zuo4")} ${NEWS}-${W("de")} ${W("ren2")}.`, hanzi: "我爱做新闻的人。", en: "I like the media people.", ru: "Я люблю людей из СМИ." },
      ],
    },
  },
];
