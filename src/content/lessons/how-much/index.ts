// how-much ("Modifiers 1 — How much"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): very (hěn), really (zhēn), not and not very (bù, bù hěn), hard and how something looks (nán, hǎo-kàn / nán-kàn, D53), asking how something is, and value (jiàzhí).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- how-much).
import { lesson } from "../../../lib/lesson.ts";
import very from "./very.ts";
import really from "./really.ts";
import not from "./not.ts";
import hardAndLooks from "./hard-and-looks.ts";
import ask from "./ask.ts";
import some from "./some.ts";

export const meta = {
  id: "how-much",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Winter, blue accent. The market: how much, too much, a little. The girl asks the shivering student a question; Miao-miao, on the heater, looks too hot. Cast: the girl, the student, Miao-miao, the bird.",
  title: { en: "Modifiers 1 — How much", ru: "Уточнения 1 — Насколько" },
  summary: {
    en: [
      "We often want to say how much: a little, or a lot.",
      "In this lesson, you'll be able to say \"really hot\", \"very cold\", \"not very strange\", \"She's beautiful.\", and \"Are you cold?\"",
    ],
    ru: [
      "Нам часто хочется сказать, насколько: чуть-чуть или очень.",
      "В этом уроке вы научитесь говорить «правда жарко», «очень холодно», «не очень странно», «Она красивая.» и «Тебе холодно?»",
    ],
  },
  // Winter, blue (MASCOT_PLAN.md): the student is cold, Miao-miao is hot; the girl asks.
  images: [
    {
      alt: {
        en: "The student hugs their arms and shivers in a blue scarf. The neighbor girl stands beside them and tilts her head, asking with concern. Miao-miao lies on a radiator with her tongue out, far too hot.",
        ru: "Студент обнимает себя руками и дрожит в синем шарфе. Рядом стоит соседская девочка и с участием наклоняет голову. Miao-miao лежит на батарее с высунутым языком, ей слишком жарко.",
      },
      pinyin: "{{Word:ni3}} {{word:leng3}} {{word:ma}}?",
      hanzi: "你冷吗？",
      en: "Are you cold?",
      ru: "Тебе холодно?",
    },
  ],
  modules: [
    very,
    really,
    not,
    some,
    hardAndLooks,
    ask,
  ],
});
