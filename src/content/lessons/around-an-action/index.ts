// around-an-action ("Time 2 — Around an action"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): when (X-de shí-jiān), finished (verb-wán), after (verb-wán hòu), start (kāishǐ), for a moment (yī-xià), again (yòu), and how many times (cì, D41). liú (stay, keep) is only used in their examples.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- around-an-action).
// @teaches When (X-de shí-jiān), finished (verb-wán), after (verb-wán hòu), start (kāishǐ), for a moment (yī-xià), again (yòu), and how many times (cì).
import { lesson } from "../../../lib/lesson.ts";
import when from "./when.ts";
import finished from "./finished.ts";
import after from "./after.ts";
import start from "./start.ts";
import moment from "./moment.ts";
import again from "./again.ts";
import times from "./times.ts";
import reading from "./reading.ts";

export const meta = {
  id: "around-an-action",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Winter, blue accent. Sharing an umbrella, walking with the girl, doing something for someone: the actions in this lesson have a before and an after, and the bird comments on all of them from the sill. Cast: the student, Miao-miao, the girl, the bird.",
  title: { en: "Time 2 — Around an action", ru: "Время 2 — Вокруг действия" },
  summary: {
    en: [
      "We often talk about what happens around an action: before it, after it, or while it goes on.",
      "In this lesson, you'll be able to say \"When I eat, …\", \"I finished eating.\", \"after eating\", \"I started to play.\", and \"He ate again.\"",
    ],
    ru: [
      "Мы часто говорим о том, что происходит вокруг действия: до него, после него или пока оно идёт.",
      "В этом уроке вы научитесь говорить «Когда я ем, …», «Я доел.», «после еды», «Я начал играть.» и «Он опять поел.»",
    ],
  },
  // Winter, blue (MASCOT_PLAN.md): playing together for a moment; the girl throws, the student catches.
  images: [
    {
      alt: {
        en: "A snowy yard with a low wall. The student and the neighbor girl stand face to face and pass a blue snowball between their hands. Miao-miao sits beside them, watching, and a small bird perches on the wall.",
        ru: "Заснеженный двор с низкой стеной. Студент и соседская девочка стоят лицом к лицу и передают друг другу синий снежок. Рядом сидит Miao-miao и наблюдает, а на стене устроилась маленькая птица.",
      },
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:wan2r}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我们玩儿一下。",
      en: "We play for a moment.",
      ru: "Мы немного поиграем.",
    },
  ],
  modules: [
    when,
    finished,
    after,
    start,
    moment,
    again,
    times,
    reading,
  ],
});
