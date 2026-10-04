import { word } from "../../lib/word.ts";

export default word("he2", {
  term: "hé",
  hanzi: "和",
  pos: { eng: "conjunction", rus: "союз", zh: "连词" },
  definition: {
    eng: "and; used strictly to join multiple nouns or subjects",
    rus: "и; используется строго для соединения нескольких существительных или подлежащих",
    zh: "和；严格用于连接多个名词或主语",
  },
  necessity: {
    index: 4,
    eng: "And, between nouns: {{word:ni3}} {{word:he2}} {{word:wo3}}, you and me.",
    rus: "И, между существительными: {{word:ni3}} {{word:he2}} {{word:wo3}} — ты и я.",
  },
  maps: "en",
});
