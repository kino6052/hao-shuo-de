// intro-2: its sections, in reading order. See src/lib/intro.ts.
import { intro } from "../../../lib/intro.ts";
import question from "./question.ts";
import tokiPona from "./toki-pona.ts";
import borrowedDiscipline from "./borrowed-discipline.ts";
import realGrammar from "./real-grammar.ts";


export const meta = {
  id: "intro-2",
  type: "intro",
  lessonNumber: 2,
  order: 2,
};

export default intro(meta.id, {
  story: "Before the year starts, still autumn orange. Miao-miao explains where the small language comes from: a question about how few words are enough, and an experiment that answered it. The tone is curious and unhurried; the student listens and Miao-miao keeps showing less rather than more. Cast: Miao-miao, the student, and the girl next door for one greeting.",
  title: {
    en: [
      "How small can a language be?"
    ],
    ru: [
      "Насколько маленьким может быть язык?"
    ],
  },
  summary: {
    en: [
      "How few words do you need to say almost anything? Toki Pona showed that about 120 can be enough. Hao-shuo-de uses the same idea with real Mandarin."
    ],
    ru: [
      "Сколько слов нужно, чтобы сказать почти что угодно? Toki Pona показал, что может хватить около 120. Hǎo-shuō-de применяет ту же идею к настоящему китайскому."
    ],
  },
  sections: [question, tokiPona, borrowedDiscipline, realGrammar],
});
