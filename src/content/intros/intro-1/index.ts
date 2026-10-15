// intro-1: its sections, in reading order. See src/lib/intro.ts.
import { intro } from "../../../lib/intro.ts";
import question from "./question.ts";
import hskBroken from "./hsk-broken.ts";
import openSea from "./open-sea.ts";
import realChinese from "./real-chinese.ts";
import howItHelps from "./how-it-helps.ts";
import listening from "./listening.ts";
import welcome from "./welcome.ts";


export const meta = {
  id: "intro-1",
  type: "intro",
  lessonNumber: 1,
  order: 1,
};

export default intro(meta.id, {
  title: {
    en: [
      "Welcome to Hao-shuo-de!"
    ],
    ru: [
      "Добро пожаловать в Hǎo-shuō-de!"
    ],
  },
  summary: {
    en: [
      "Hao-shuo-de is Chinese with only the words you need most. It helps you learn Chinese much faster."
    ],
    ru: [
      "Hǎo-shuō-de — это китайский, в котором оставлены только самые нужные слова. С ним китайский учится гораздо быстрее."
    ],
  },
  sections: [question, hskBroken, openSea, realChinese, howItHelps, listening, welcome],
});
