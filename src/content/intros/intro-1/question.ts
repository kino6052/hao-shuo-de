import { introSection } from "../../../lib/intro.ts";

export default introSection({
  id: "question",
  prose: {
    en: [
      "Whether you're just starting or have studied for years, you've probably wondered: what's the *best* way to learn Chinese?",
      "How do I keep moving forward without getting stuck?"
    ],
    ru: [
      "Только начинаете вы или учите уже много лет, вы наверняка задумывались: как *лучше всего* учить китайский?",
      "Как двигаться вперёд и не застревать?"
    ],
  },
  image: {
    file: "intro-1-tangle",
    alt: {
      en: "Miao-miao the cat sits next to a huge tangle of black lines. One clean straight line leaves the tangle and runs away to the right.",
      ru: "Кошка Miao-miao сидит рядом с огромным клубком чёрных линий. Из клубка выходит одна чистая прямая линия и уходит вправо.",
    },
    pinyin: "Nà ge hěn nán. Zhè ge bù nán.",
    hanzi: "那个很难。这个不难。",
    en: "That one is very hard. This one is not hard.",
    ru: "Тот очень трудный. Этот не трудный.",
  },
});
