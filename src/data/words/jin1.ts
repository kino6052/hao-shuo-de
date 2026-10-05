import { word } from "../../lib/word.ts";

export default word("jin1", {
  term: "jīn",
  hanzi: "金",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "money, cash, savings, wealth",
    rus: "деньги, наличные, сбережения, богатство",
    zh: "钱，现金，储蓄，财富",
  },
  necessity: {
    index: 4,
    eng: "Money: buying, paying, price. Daily life needs it, and no description is short.",
    rus: "Деньги: покупать, платить, цена. Без них не обойтись в жизни, а короткого описания нет.",
  },
  maps: "mani",
  senses: {
    today: {
      hanzi: "今",
      eng: "this, now",
      rus: "этот, нынешний",
      compounds: ["jin1 tian1", "jin1 nian2"],
      why: {
        eng: "Written 今, {{word:jin1}} means this, now in {{word:jin1}}-{{word:tian1}}, {{word:jin1}}-{{word:nian2}}; on its own it is gold, money.",
        rus: "Записанное как 今, {{word:jin1}} значит «этот, нынешний» в {{word:jin1}}-{{word:tian1}}, {{word:jin1}}-{{word:nian2}}; само по себе — «золото, деньги».",
      },
    },
  },
});
