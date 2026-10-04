// direction-and-result ("Verbs 2 — Direction and result"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Added after Phase 2 (BOOK_PLAN.md D44): what comes after a verb. Which way it goes (ná-lái,
// jìn / chū / huí + lái / qù, ná-chū-lái), how it ends (zhǎo-dào, nòng-huài, xué-huì), whether
// you can get there (kàn-bù-dào, kàn-de-dào), and qǐ-lái (seems, starts) / xià-qù (keep going).
// New words: ná (moved here from Numbers), jìn, chū, huí; tōng (go through, lead to) joined in D51.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- direction-and-result).
import { lesson } from "../../../lib/lesson.ts";
import towardAway from "./toward-away.ts";
import inOut from "./in-out.ts";
import body from "./body.ts";
import moveThing from "./move-thing.ts";
import result from "./result.ts";
import canCant from "./can-cant.ts";
import through from "./through.ts";
import seems from "./seems.ts";

export const meta = {
  id: "direction-and-result",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Verbs 2 — Direction and result", ru: "Глаголы 2 — Направление и результат" },
  summary: {
    en: [
      "A verb can say more than the action: which way it goes, and how it ends.",
      "In this lesson, you'll be able to say \"Come in!\", \"He took out the money.\", \"I found it.\", and \"I can't see it.\"",
    ],
    ru: [
      "Глагол может сказать больше, чем само действие: куда оно направлено и чем закончилось.",
      "В этом уроке вы научитесь говорить «Входи!», «Он вынул деньги.», «Я нашёл.» и «Мне не видно.»",
    ],
  },
  modules: [
    towardAway,
    inOut,
    body,
    moveThing,
    result,
    canCant,
    through,
    seems,
  ],
});
