// everyday-patterns ("Everyday Patterns"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Added after Phase 2 (BOOK_PLAN.md D45): the last, catch-all lesson. English "let" and "help"
// without a word for "let": wǒ lái (let me), gěi wǒ + verb + yī-xià (let me see), bāng (help),
// jiào + person + verb (have / let someone), néng … ma? (may I), and …, hǎo ma? (let's, please).
// New word: bāng.
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- everyday-patterns).
// @teaches "Let" and "help" without a word for "let": wǒ lái (let me), gěi wǒ + verb + yī-xià (let me see), bāng (help), jiào + person + verb (have or let someone), néng … ma? (may I), and …, hǎo ma? (let's, please).
import { lesson } from "../../../lib/lesson.ts";
import letMe from "./let-me.ts";
import myTurn from "./my-turn.ts";
import help from "./help.ts";
import teach from "./teach.ts";
import haveSomeone from "./have-someone.ts";
import mayI from "./may-i.ts";
import rain from "./rain.ts";

export const meta = {
  id: "everyday-patterns",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Summer, yellow accent. The last lesson: the student writes a full note to the owner in Hao-shuo-de, in characters, and puts it on the door. A hand pours tea. Miao-miao leaves with the note. Cast: the student, Miao-miao, a hand.",
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
  // Summer, yellow (MASCOT_PLAN.md): the last chapter; "Let's go out and play, okay?" at the open door.
  images: [
    {
      alt: {
        en: "Summer, at an open door with a blank note stuck on it. The student and the neighbor girl, who holds a small yellow basket, stand side by side looking out. Miao-miao is already on the path outside and looks back at them.",
        ru: "Лето, у открытой двери, на которой висит пустая записка. Студент и соседская девочка с маленькой жёлтой корзинкой стоят рядом и смотрят наружу. Miao-miao уже на дорожке за дверью и оглядывается на них.",
      },
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:chu1}}-{{word:qu4}} {{word:wan2r}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "我们出去玩儿，好吗？",
      en: "Let's go out and play, okay?",
      ru: "Давай выйдем поиграть, хорошо?",
    },
  ],
  modules: [
    letMe,
    myTurn,
    help,
    teach,
    haveSomeone,
    mayI,
    rain,
  ],
});
