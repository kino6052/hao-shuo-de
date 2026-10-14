import { word } from "../../lib/word.ts";

export default word("mian4", {
  term: "miàn",
  hanzi: "面",
  pos: { eng: "noun/suffix", rus: "существительное/суффикс", zh: "名词/后缀" },
  definition: {
    eng: "side, face, surface; binds to a directional root via a hyphen to form a location noun (e.g. {{word:xia4}}-{{word:mian4}}, \"below\")",
    rus: "сторона, лицо, поверхность; присоединяется к направленческому корню через дефис, образуя пространственное существительное (например, {{word:xia4}}-{{word:mian4}}, «внизу»)",
    zh: "面，脸，表面；通过连字符与方向词根结合，构成方位名词（例如 {{word:xia4}}-{{word:mian4}}，“下面”）",
  },
  necessity: {
    index: 3,
    eng: "Side, face: it turns the direction words into places ({{word:li3}}-{{word:mian4}}, {{word:qian2}}-{{word:mian4}}).",
    rus: "Сторона, лицо: превращает слова направления в места ({{word:li3}}-{{word:mian4}}, {{word:qian2}}-{{word:mian4}}).",
  },
  maps: "",
  classes: {
    measure_word: {
      why: {
        eng: "Counts the sides of a thing: yī-miàn is one side, one page of a thing.",
        rus: "Считает стороны вещи: yī-miàn — одна сторона, одна страница вещи.",
      },
      example: "Wǒ kàn wǎng-shàng-de yī-miàn.",
      proposed: true,
    },
  },
  paraphrase: {
    forms: ["{{word:kan4}}-{{word:dao4}}-{{word:de}} {{word:na4}}-{{word:yi1}}-{{word:bian1}}"],
    verdict: "clumsy",
    note: "Too important a word to drop.",
  },
});
