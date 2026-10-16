// intro-3: its sections, in reading order. See src/lib/intro.ts.
import { intro } from "../../../lib/intro.ts";
import simplified from "./simplified.ts";

export { LESSON_BLURBS, CHAPTER_BLURBS } from "./contents.ts";

export const meta = {
  id: "intro-3",
  type: "intro",
  lessonNumber: 3,
  order: 3,
};

export default intro(meta.id, {
  story: "Before the year starts, autumn orange again. Miao-miao shows how the language is simplified and what the book contains; the path of stepping stones stands for the lessons ahead, each stone a small step towards the door. Cast: Miao-miao and the student.",
  title: {
    en: [
      "Simplified Chinese, Not Invented Chinese"
    ],
    ru: [
      "Упрощённый китайский, а не придуманный"
    ],
  },
  summary: {
    en: [
      "Hao-shuo-de is real Chinese, made as simple as it can be. This chapter shows how the book is laid out."
    ],
    ru: [
      "Hǎo-shuō-de — это настоящий китайский, упрощённый настолько, насколько возможно. В этой главе показано, как устроена книга."
    ],
  },
  sections: [simplified],
});
