// everyday-patterns ("Everyday Patterns"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Added after Phase 2 (BOOK_PLAN.md D45): the last, catch-all lesson. English "let" and "help"
// without a word for "let": wǒ lái (let me), gěi wǒ + verb + yī-xià (let me see), bāng (help),
// jiào + person + verb (have / let someone), néng … ma? (may I), and …, hǎo ma? (let's, please).
// New word: bāng.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- everyday-patterns).
import { lesson } from "../../../lib/lesson.ts";
import letMe from "./let-me.ts";
import myTurn from "./my-turn.ts";
import help from "./help.ts";
import teach from "./teach.ts";
import haveSomeone from "./have-someone.ts";
import mayI from "./may-i.ts";

export const meta = {
  id: "everyday-patterns",
  type: "lesson",
};

export default lesson(meta.id, {
  title: { en: "Everyday Patterns", ru: "Обороты на каждый день" },
  summary: {
    en: [
      "Every day, we offer help, ask for a turn, and let people do things.",
      "In this lesson, you'll be able to say \"Let me do it!\", \"Let me take a look.\", \"Help me!\", \"My parents won't let me go out.\", and \"Let's go out, okay?\"",
    ],
    ru: [
      "Каждый день мы предлагаем помощь, просим дать попробовать и разрешаем другим что-то делать.",
      "В этом уроке вы научитесь говорить «Давай я!», «Дай посмотреть.», «Помоги мне!», «Родители не пускают меня гулять.» и «Давай выйдем, хорошо?»",
    ],
  },
  modules: [
    letMe,
    myTurn,
    help,
    teach,
    haveSomeone,
    mayI,
  ],
});
