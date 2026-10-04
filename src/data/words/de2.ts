import { word } from "../../lib/word.ts";

export default word("de2", {
  term: "dé",
  hanzi: "得",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to get, obtain, acquire, come to have; combines with a de-nominalized verb phrase to express acquiring an abstract result (e.g. de zhidao-de, \"to learn\", literally \"to obtain the known-thing\")",
    rus: "получать, обретать, приобретать; сочетается с номинализированной через de глагольной фразой для выражения приобретения абстрактного результата (например, de zhidao-de, «учиться», буквально «получить познанное»)",
    zh: "得到，获得，取得；与经 de 名词化的动词短语搭配，表示获得某种抽象结果（例如 de zhidao-de，“学习”，字面意思是“得到已知之物”）",
  },
  necessity: {
    index: 3,
    eng: "Get, receive. Winning, earning, and getting sick are described with it.",
    rus: "Получать. Через него описывают выигрыш, заработок и болезнь.",
  },
  maps: "kama",
});
