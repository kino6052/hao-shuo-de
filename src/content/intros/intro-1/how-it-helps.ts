import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "how-it-helps",
  scene: "Acts out 'it helps you cross': Miao-miao carries the student's suitcase over a small plank bridge across the sea of lines, the student walking behind with both arms free. Orange: the plank bridge.",
  prose: {
    en: [
      "<h2>How does Hao-shuo-de help, exactly?</h2>",
      "Hao-shuo-de has only {{dictionaryCount}} words.",
      "It comes with a clear path of lessons, a growing community, and resources that help you learn it quickly."
    ],
    ru: [
      "<h2>Чем именно помогает Hǎo-shuō-de?</h2>",
      "Слов в Hǎo-shuō-de всего {{dictionaryCount}}.",
      "К нему прилагаются понятный путь из уроков, растущее сообщество и материалы, которые помогают быстро его выучить."
    ],
  },
});
