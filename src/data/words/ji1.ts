import { word } from "../../lib/word.ts";

export default word("ji1", {
  term: "jī",
  hanzi: "机",
  pos: { eng: "noun", rus: "существительное", zh: "名词" },
  definition: {
    eng: "machine (e.g. {{word:shou3}}-{{word:ji1}}, \"phone\"; {{word:fei1}}-{{word:ji1}}, \"plane\"; {{word:ji1}}-{{word:hui4}}, \"chance\")",
    rus: "машина, механизм (например, {{word:shou3}}-{{word:ji1}} — «телефон»; {{word:fei1}}-{{word:ji1}} — «самолёт»; {{word:ji1}}-{{word:hui4}} — «возможность»)",
    zh: "机",
  },
  necessity: {
    index: 3,
    eng: "Machines: the phone ({{word:shou3}}-{{word:ji1}}), the plane ({{word:fei1}}-{{word:ji1}}), and a chance ({{word:ji1}}-{{word:hui4}}).",
    rus: "Машины: телефон ({{word:shou3}}-{{word:ji1}}), самолёт ({{word:fei1}}-{{word:ji1}}) и возможность ({{word:ji1}}-{{word:hui4}}).",
  },
  senses: {
    chicken: {
      hanzi: "鸡",
      eng: "chicken",
      rus: "курица",
      compounds: ["ji1 dan4"],
      why: {
        eng: "Written 鸡, {{word:ji1}} means chicken in {{word:ji1}}-{{word:dan4}}; on its own it is machine.",
        rus: "Записанное как 鸡, {{word:ji1}} значит «курица» в {{word:ji1}}-{{word:dan4}}; само по себе — «машина».",
      },
    },
  },
});
