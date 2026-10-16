// intro-4: the story that runs through the book, and how to read its pictures
// (MASCOT_PLAN.md §8). See src/lib/intro.ts.
import { intro } from "../../../lib/intro.ts";
import cat from "./cat.ts";
import youArrive from "./you-arrive.ts";
import neighbors from "./neighbors.ts";
import howItTalks from "./how-it-talks.ts";
import fourColors from "./four-colors.ts";
import notesOnTheDoor from "./notes-on-the-door.ts";

export const meta = {
  id: "intro-4",
  type: "intro",
  lessonNumber: 4,
  order: 4,
};

export default intro(meta.id, {
  story: "The cast and the year. Autumn orange, winter blue, spring pale green and summer yellow follow one school year. Cast: Miao-miao the cat, the nameless exchange student, the girl next door who speaks only Chinese, a bird that talks too much, a mouse that does sums, and an owner nobody sees who leaves notes on the door.",
  title: {
    en: "Meet Miao-miao",
    ru: "Знакомьтесь: Miao-miao",
  },
  summary: {
    en: "Every lesson has a picture of Miao-miao, a cat who knows Chinese and thinks it is too complicated. Meet the cast and the year ahead.",
    ru: "В каждом уроке есть картинка с Miao-miao — кошкой, которая знает китайский и считает его слишком сложным. Познакомьтесь с героями и с предстоящим годом.",
  },
  sections: [cat, youArrive, neighbors, howItTalks, fourColors, notesOnTheDoor],
});
