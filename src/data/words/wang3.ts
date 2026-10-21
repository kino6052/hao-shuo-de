import { word } from "../../lib/word.ts";

export default word("wang3", {
  term: "wǎng",
  hanzi: "网",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "net, web; the internet (e.g. {{word:zai4}} {{word:wang3}}-{{word:shang4}}, \"online\")",
    rus: "сеть, паутина; интернет (например, {{word:zai4}} {{word:wang3}}-{{word:shang4}} — «в интернете»)",
    zh: "网",
  },
  necessity: {
    index: 2,
    eng: "A net, and the internet: online, websites, and downloads are all described from it.",
    rus: "Сеть и интернет: через него описывают «онлайн», сайты и загрузки.",
  },
  topics: ["internet-and-websites"],
  isA: ["computer-or-phone"],
  paraphrase: {
    forms: [
      "{{word:hen3}} {{word:duo1}} {{word:xian4}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, {{word:zhong1}}-{{word:jian1}} {{word:kong1}}-{{word:de}}",
    ],
    verdict: "clumsy",
  },
});
