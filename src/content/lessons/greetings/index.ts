// greetings ("Greetings"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): hello (nǐ hǎo), thank you (xiè-xie, D43), names (jiào), and orders (a bare verb, bù yào).
// Split off Greetings and Feelings (section cap, 7 per lesson): feelings moved to feelings.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- greetings).
import { lesson } from "../../../lib/lesson.ts";
import hello from "./hello.ts";
import thanks from "./thanks.ts";
import name from "./name.ts";
import order from "./order.ts";
import calling from "./calling.ts";
import neverMind from "./never-mind.ts";
import reading from "./reading.ts";

export const meta = {
  id: "greetings",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Summer, yellow accent. The joke: it is almost the end of the year and the student has never said hello and goodbye properly. Miao-miao says 'you forgot,' and they do it now with the girl. Cast: the girl, the student, Miao-miao.",
  title: { en: "Greetings", ru: "Приветствия" },
  summary: {
    en: [
      "Every day, we greet people and ask them for things.",
      "In this lesson, you'll be able to say \"Hello!\", \"Thank you!\", \"What's your name?\", \"Eat!\", and \"Don't laugh!\"",
    ],
    ru: [
      "Каждый день мы здороваемся с людьми и о чём-то их просим.",
      "В этом уроке вы научитесь говорить «Привет!», «Спасибо!», «Как тебя зовут?», «Ешь!» и «Не смейся!»",
    ],
  },
  // Summer, yellow (MASCOT_PLAN.md): "Hello!"; the student and the girl face each other and wave.
  images: [
    {
      alt: {
        en: "Summer. The student and the neighbor girl stand face to face and wave at each other. The girl holds a yellow flower, and Miao-miao sits on the ground between them.",
        ru: "Лето. Студент и соседская девочка стоят лицом к лицу и машут друг другу. Девочка держит жёлтый цветок, а Miao-miao сидит на земле между ними.",
      },
      pinyin: "{{Word:ni3}} {{word:hao3}}!",
      hanzi: "你好！",
      en: "Hello!",
      ru: "Привет!",
    },
  ],
  modules: [
    hello,
    calling,
    thanks,
    neverMind,
    name,
    order,
    reading,
  ],
});
