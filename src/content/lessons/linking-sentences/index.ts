// linking-sentences ("Relationships 2 — Linking sentences"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): because (yīnwèi), but (dàn-shì), and if (rúguǒ, D46), with yán, sǐ, and huó.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- linking-sentences).
import { lesson } from "../../../lib/lesson.ts";
import because from "./because.ts";
import but from "./but.ts";
import ifPoint from "./if.ts";
import then from "./then.ts";
import only from "./only.ts";
import asSoonAs from "./as-soon-as.ts";

export const meta = {
  id: "linking-sentences",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Summer, yellow accent. Because, if, but: the student explains a late return to the girl, and the sentences begin to hang together. Cast: the student, the girl, Miao-miao.",
  title: { en: "Relationships 2 — Linking sentences", ru: "Связи 2 — Как связать предложения" },
  summary: {
    en: [
      "We often join two ideas: one thing happens because of another, or only if something else is true.",
      "In this lesson, you'll be able to say \"Because I'm cold, I'm not going.\", \"It looks good, but it doesn't taste good.\", and \"If you come, I'll wait for you.\"",
    ],
    ru: [
      "Мы часто соединяем две мысли: одно происходит из-за другого или только если верно что-то ещё.",
      "В этом уроке вы научитесь говорить «Так как мне холодно, я не пойду.», «Выглядит хорошо, но невкусно.» и «Если ты придёшь, я тебя подожду.»",
    ],
  },
  // Summer, yellow (MASCOT_PLAN.md): "If you come, I'll wait for you."
  images: [
    {
      alt: {
        en: "Summer, at the school gate. The student stands under a big tree with a yellow lantern and waits, looking down the road. Far away the neighbor girl is walking towards them and waving, and Miao-miao crouches on the low wall beside the gate.",
        ru: "Лето, у школьных ворот. Студент стоит под большим деревом с жёлтым фонариком и ждёт, глядя вдаль по дороге. Далеко идёт соседская девочка и машет рукой, а Miao-miao сидит на низкой стене у ворот.",
      },
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:deng3}} {{word:ni3}}.",
      hanzi: "如果你来，我等你。",
      en: "If you come, I'll wait for you.",
      ru: "Если ты придёшь, я тебя подожду.",
    },
  ],
  modules: [
    because,
    but,
    ifPoint,
    then,
    only,
    asSoonAs,
  ],
});
