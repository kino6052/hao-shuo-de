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
  story: "Before the year starts, in autumn orange. Miao-miao is a cat who already speaks Chinese and finds it too complicated, so it is the honest guide: it sits beside the reader's problem (a huge tangle, a broken ladder) and offers the small way instead. Cast: Miao-miao and the reader's stand-in, the student, who is unnamed.",
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
