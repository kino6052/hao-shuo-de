// greetings-and-feelings ("Greetings and Feelings"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Rewritten in Phase 2 (BOOK_PLAN.md): hello (nǐ hǎo), thank you (xiè-xie, D43), names (jiào), orders (a bare verb, bù yào), feelings (juéde, pà, xiào, D41), and hearing sounds (shēngyīn).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- greetings-and-feelings).
import { lesson } from "../../../lib/lesson.ts";
import hello from "./hello.ts";
import thanks from "./thanks.ts";
import name from "./name.ts";
import order from "./order.ts";
import feel from "./feel.ts";
import laugh from "./laugh.ts";
import heart from "./heart.ts";
import hear from "./hear.ts";

export const meta = {
  id: "greetings-and-feelings",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Greetings and Feelings", ru: "Приветствия и чувства" },
  summary: {
    en: [
      "Every day, we greet people and say how we feel.",
      "In this lesson, you'll be able to say \"Hello!\", \"Thank you!\", \"What's your name?\", \"Eat!\", \"Don't laugh!\", \"I feel cold.\", and \"I'm scared of bugs.\"",
    ],
    ru: [
      "Каждый день мы здороваемся с людьми и говорим, как себя чувствуем.",
      "В этом уроке вы научитесь говорить «Привет!», «Спасибо!», «Как тебя зовут?», «Ешь!», «Не смейся!», «Мне холодно.» и «Я боюсь насекомых.»",
    ],
  },
  modules: [
    hello,
    thanks,
    name,
    order,
    feel,
    laugh,
    heart,
    hear,
  ],
});
