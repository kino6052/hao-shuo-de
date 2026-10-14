import { word } from "../../lib/word.ts";

export default word("you2", {
  term: "yóu",
  hanzi: "油",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "oil, cooking oil, fat: {{word:zuo4}} {{word:fan4}} {{word:yong4}} {{word:you2}}, cooking uses oil",
    rus: "масло, жир: {{word:zuo4}} {{word:fan4}} {{word:yong4}} {{word:you2}} — для готовки нужно масло",
    zh: "油，食用油",
  },
  necessity: {
    index: 3,
    eng: "Oil for cooking and for machines: {{word:you2}}. Without it, you can only say \"the liquid used to cook\".",
    rus: "Масло для еды и для машин: {{word:you2}}. Без него остаётся только «жидкость для готовки».",
  },
  paraphrase: {
    forms: [
      "{{word:zuo4}} {{word:fan4}} {{word:yong4}}-{{word:de}}, {{word:he2}} {{word:shui3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:shui3}}",
    ],
    verdict: "fine",
  },
});
