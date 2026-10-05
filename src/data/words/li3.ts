import { word } from "../../lib/word.ts";

export default word("li3", {
  term: "lǐ",
  hanzi: "里",
  pos: { eng: "noun/directional", rus: "существительное/направление", zh: "名词/方向" },
  definition: {
    eng: "inside, within; composes with other roots via a hyphen (e.g. {{word:li3}}-{{word:mian4}})",
    rus: "внутри, внутрь; соединяется с другими корнями через дефис (например, {{word:li3}}-{{word:mian4}})",
    zh: "里，里面，之内；通过连字符与其他词根组合（例如 {{word:li3}}-{{word:mian4}}）",
  },
  necessity: {
    index: 5,
    eng: "Inside, in: {{word:bao1}}-{{word:li3}}, in the box. The most used place word.",
    rus: "Внутри, в: {{word:bao1}}-{{word:li3}} — в коробке. Самое частое слово места.",
  },
  maps: "",
  senses: {
    reason: {
      hanzi: "理",
      eng: "reason",
      rus: "смысл, порядок",
      compounds: ["dao4 li3"],
      why: {
        eng: "Written 理, {{word:li3}} means reason in {{word:dao4}}-{{word:li3}}; on its own it is inside.",
        rus: "Записанное как 理, {{word:li3}} значит «смысл, порядок» в {{word:dao4}}-{{word:li3}}; само по себе — «внутри».",
      },
    },
  },
});
