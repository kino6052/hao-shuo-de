import { word } from "../../lib/word.ts";

export default word("shuo1", {
  term: "shuō",
  hanzi: "说",
  pos: { eng: "verb/noun", rus: "глагол/существительное", zh: "动词/名词" },
  definition: {
    eng: "to communicate, say, speak, talk, use language; language, speech",
    rus: "сообщать, говорить, разговаривать, пользоваться языком; язык, речь",
    zh: "交流，说，讲话，使用语言；语言，言语",
  },
  necessity: {
    index: 5,
    eng: "Say, speak. Without it, you can't talk about talking.",
    rus: "Говорить, сказать. Без него не рассказать, кто что сказал.",
  },
  topics: ["saying-and-calling"],
  isA: ["speaking-action"],
  maps: "toki",
  paraphrase: {
    forms: [
      "{{word:yong4}} {{word:kou3}} {{word:rang4}} {{word:bie2}}-{{word:ren2}} {{word:ting1}}-{{word:dao4}} {{word:ci2}}",
    ],
    verdict: "clumsy",
  },
});
