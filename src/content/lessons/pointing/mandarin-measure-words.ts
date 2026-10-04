// Full Chinese has a different measure word for each kind of thing. [from old
// L11]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "mandarin-measure-words",
  prose: {
    en: [
      "In Chinese, you can't put a number or a pronoun right before a noun (you can't directly say \"this apple\"). A small counting word (measure word) goes in between.",
      "Full Chinese has dozens of these measure words, one for each kind of thing: flat things, long things, animals, and so on.",
      "Learners spend years getting them right.",
    ],
    ru: [
      "В китайском нельзя поставить число или местоимение прямо перед существительным (нельзя просто сказать «это яблоко»). Между ними ставится маленькое счётное слово.",
      "В полном китайском десятки таких счётных слов, для каждого вида вещей своё: для плоских вещей, для длинных, для животных и так далее.",
      "Те, кто учит китайский, годами учатся ставить их правильно.",
    ],
    tldr: {
      en: "Full Chinese uses a different measure word for each kind of thing.",
      ru: "В полном китайском для каждого вида вещей своё счётное слово.",
    },
    necessity: {
      en: "It shows how much work Hao-shuo-de saves you.",
      ru: "Так видно, сколько труда экономит Hǎo-shuō-de.",
    },
  },
  info: {
    kind: "note",
    en: "Mandarin puts a counting word between this, that, or a number and the noun.",
    ru: "В китайском между «этот», «тот» или числом и существительным стоит счётное слово.",
  },
  exercises: [
    {
      en: "In Mandarin, can \"this\" go right before a noun?",
      ru: "Можно ли в китайском поставить «этот» прямо перед существительным?",
      answer: { en: "No: a counting word goes in between.", ru: "Нет: между ними стоит счётное слово." },
    },
  ],
});
