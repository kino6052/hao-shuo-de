import { word } from "../../lib/word.ts";

export default word("zuo4", {
  term: "zuò",
  hanzi: "做",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to do, make: {{word:zuo4}}-{{word:hao3}}, do well, finish; {{word:zuo4}} {{word:dong1}}-{{light:xi1}}, make things",
    rus: "делать: {{word:zuo4}}-{{word:hao3}} — сделать, доделать; {{word:zuo4}} {{word:dong1}}-{{light:xi1}} — делать вещи",
    zh: "做",
  },
  necessity: {
    index: 5,
    eng: "Do, make: the all-purpose action. Most work and making verbs are described with it.",
    rus: "Делать — универсальное действие. Через него описывают почти любую работу.",
  },
  senses: {
    sit: {
      hanzi: "坐",
      eng: "sit",
      rus: "сидеть",
      why: {
        eng: "Written 坐, {{word:zuo4}} means sit in {{word:zuo4}}-{{word:xia4}} (sit down), {{word:zuo4}}-{{word:zai4}} (sit at) and {{word:zuo4}}-{{word:che1}} (ride); on its own it is do.",
        rus: "Записанное как 坐, {{word:zuo4}} значит «сидеть» в {{word:zuo4}}-{{word:xia4}} (сесть), {{word:zuo4}}-{{word:zai4}} (сидеть на) и {{word:zuo4}}-{{word:che1}} (ехать); само по себе — «делать».",
      },
      compounds: ["zuo4 xia4", "zuo4 zai4", "zuo4 che1"],
    },
    work: {
      hanzi: "作",
      eng: "work",
      rus: "работа",
      why: {
        eng: "Written 作, {{word:zuo4}} means work in {{word:gong1}}-{{word:zuo4}} (work, job), {{word:zuo4}}-{{word:zhe3}} (author), {{word:zuo4}}-{{word:yong4}} (use, effect), {{word:dong4}}-{{word:zuo4}} (movement) and {{word:xie3}}-{{word:zuo4}} (writing).",
        rus: "Записанное как 作, {{word:zuo4}} значит «работа» в {{word:gong1}}-{{word:zuo4}} (работа), {{word:zuo4}}-{{word:zhe3}} (автор), {{word:zuo4}}-{{word:yong4}} (действие, польза), {{word:dong4}}-{{word:zuo4}} (движение) и {{word:xie3}}-{{word:zuo4}} (письмо, сочинение).",
      },
      compounds: ["gong1 zuo4", "zuo4 zhe3", "zuo4 yong4", "dong4 zuo4", "xie3 zuo4"],
    },
  },
});
