import { word } from "../../lib/word.ts";

export default word("dao4", {
  term: "dào",
  hanzi: "到",
  pos: { eng: "verb/directional", rus: "глагол/направление", zh: "动词/趋向词" },
  definition: {
    eng: "to arrive, reach, go to; to (a place); after a verb, marks reaching the goal (e.g. {{word:ting1}}-{{word:dao4}}, \"hear\")",
    rus: "прибывать, достигать, доходить до; до (какого-то места); после глагола отмечает достижение цели (например, {{word:ting1}}-{{word:dao4}}, «услышать»)",
    zh: "到达，到；到（某地）；用在动词后表示达到目标（如 {{word:ting1}}-{{word:dao4}}，“听到”）",
  },
  necessity: {
    index: 5,
    eng: "Arrive, to: {{word:qu4}}-{{word:dao4}} … , and a result reached ({{word:zhao3}}-{{word:dao4}}, found).",
    rus: "Добраться, до: {{word:qu4}}-{{word:dao4}} …, а также достигнутый результат ({{word:zhao3}}-{{word:dao4}} — нашёл).",
  },
  topics: ["arriving-and-reaching"],
  isA: ["moving-action"],
  senses: {
    way: {
      hanzi: "道",
      eng: "way",
      rus: "путь",
      compounds: ["wei4 dao4", "dao4 li3"],
      why: {
        eng: "{{hanzi:Written 道, }}{{word:dao4#way}} means way in {{word:wei4}}-{{word:dao4}}, {{word:dao4}}-{{word:li3}}; on its own it is arrive.",
        rus: "{{hanzi:Записанное как 道, }}{{word:dao4#way}} значит «путь» в {{word:wei4}}-{{word:dao4}}, {{word:dao4}}-{{word:li3}}; само по себе — «прийти».",
      },
    },
  },
  paraphrase: {
    forms: [
      "{{word:zou3}}-{{word:wan2}} {{word:lu4}}, {{word:zai4}} {{word:na4}}-{{word:li3}} {{word:le}}",
    ],
    verdict: "clumsy",
  },
});
