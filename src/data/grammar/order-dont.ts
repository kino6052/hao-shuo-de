import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("order-dont", {
  meaning: {
    eng: "A verb on its own is an order: chī, eat! For don't, put bù yào first. A countdown ends on the order: yī, èr, sān, kāishǐ!",
    rus: "Глагол сам по себе — приказ: chī — ешь! Для «не надо» поставьте bù yào вперёд. Обратный отсчёт кончается приказом: yī, èr, sān, kāishǐ!",
  },
  covers: ["grammar:dont"],
  tags: ["command", "negation", "cat:action"],
  template: { hsd: "verb! / {{word:bu4}} {{word:yao4}} + verb!", eng: "Do it! / Don't do it!" },
  rules: [
    { lhs: "VP", hsd: "bu4 =yao4 VP", eng: "bù yào and a verb: don't" },
    { lhs: "Utt", hsd: "Tally @comma VP", eng: "numbers counted out, then the order" },
  ],
  taught: "greetings/order",
  examples: [
    ["Bù yào shuō!", "Don't talk!"],
    ["Bù yào mō wǒ-de bízi!", "Don't touch my nose!"],
    ["Yī, èr, sān, kāishǐ!", "One, two, three, go!"],
  ],
});
