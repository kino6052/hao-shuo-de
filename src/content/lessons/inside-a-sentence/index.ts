// inside-a-sentence ("Relationships 1 — Inside a sentence"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): give / for (gěi), with (yòng), and / or (hé, hái-shì), and toward / for (duì), with qún, mō, dǎ.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- inside-a-sentence).
import { lesson } from "../../../lib/lesson.ts";
import give from "./give.ts";
import withPoint from "./with.ts";
import andOr from "./and-or.ts";
import toward from "./toward.ts";
import group from "./group.ts";
import relation from "./relation.ts";
import right from "./right.ts";

export const meta = {
  id: "inside-a-sentence",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Summer, yellow accent. A longer sentence with a thing inside it: Miao-miao shortens it to its core. The summer air is warm and the lessons grow slightly longer too. Cast: the student, the girl, Miao-miao.",
  title: { en: "Relationships 1 — Inside a sentence", ru: "Связи 1 — Внутри предложения" },
  summary: {
    en: [
      "We often need to say who something is for, or what we do it with.",
      "In this lesson, you'll be able to say \"give it to me\", \"write with a tool\", \"you and me\", \"this or that\", and \"for me\".",
    ],
    ru: [
      "Нам часто нужно выразить связь между людьми, вещами и действиями в предложении.",
      "В этом уроке вы научитесь говорить «дай мне», «писать инструментом», «ты и я», «это или то» и «для меня».",
    ],
  },
  // Summer, yellow (MASCOT_PLAN.md): "give it to me"; the girl puts a yellow tangerine in the student's hand.
  images: [
    {
      alt: {
        en: "Summer, under a big tree. The student holds out an open hand, and the neighbor girl smiles as she places a yellow tangerine in it.",
        ru: "Лето, под большим деревом. Студент протягивает раскрытую ладонь, а соседская девочка с улыбкой кладёт в неё жёлтый мандарин.",
      },
      pinyin: "{{Word:gei3}} {{word:wo3}}.",
      hanzi: "给我。",
      en: "Give it to me.",
      ru: "Дай мне.",
    },
  ],
  modules: [
    give,
    withPoint,
    andOr,
    toward,
    right,
    group,
    relation,
  ],
});
