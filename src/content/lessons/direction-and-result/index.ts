// direction-and-result ("Verbs 2 — Direction and result"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Added after Phase 2 (BOOK_PLAN.md D44): what comes after a verb. Which way it goes (ná-lái,
// jìn / chū / huí + lái / qù, ná-chū-lái), how it ends (zhǎo-dào, zuò-huài, xué-huì), whether
// you can get there (kàn-bù-dào, kàn-de-dào), and qǐ-lái (seems, starts) / xià-qù (keep going).
// New words: ná (moved here from Numbers), jìn, chū, huí; tōng (go through, lead to) joined in D51 and now shares in-out.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- direction-and-result).
// @teaches What comes after a verb: which way it goes (ná-lái, ná-chū-lái), how it ends (zhǎo-dào, xué-huì), whether you can get there (kàn-bù-dào, kàn-de-dào), and qǐ-lái / xià-qù.
import { lesson } from "../../../lib/lesson.ts";
import towardAway from "./toward-away.ts";
import inOut from "./in-out.ts";
import body from "./body.ts";
import moveThing from "./move-thing.ts";
import result from "./result.ts";
import canCant from "./can-cant.ts";
import seems from "./seems.ts";

export const meta = {
  id: "direction-and-result",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Spring, pale green accent. A dropped bag, a kite, a ball: out, up, back, caught, lost. Things get taken, found and brought, and the student is always chasing something. Cast: the student, Miao-miao, the girl.",
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
  // Spring, pale green (MASCOT_PLAN.md): chasing the kite, falling down, being pulled back up.
  images: [
    {
      alt: {
        en: "A spring meadow. The student has fallen and sits on the grass with a rueful face, still holding the string of a pale green kite in the sky. The neighbor girl reaches out a hand to pull them up, and Miao-miao sits a little way off, watching.",
        ru: "Весенний луг. Студент упал и сидит на траве с виноватым лицом, всё ещё держа верёвку бледно-зелёного воздушного змея в небе. Соседская девочка протягивает руку, чтобы поднять его, а Miao-miao сидит поодаль и смотрит.",
      },
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "我坐在地上。",
      en: "I sit on the ground.",
      ru: "Я сижу на земле.",
    },
  ],
  modules: [
    towardAway,
    inOut,
    body,
    moveThing,
    result,
    canCant,
    seems,
  ],
});
