// feelings ("Feelings"): its modules, in reading order.
// See src/lib/lesson.ts.
//
// Split off Greetings and Feelings (section cap, 7 per lesson): feelings (jué-de, pà, xiào, D41), remembering (jì-de), the heart (xīn), and hearing sounds (shēngyīn).
// Only words from this lesson and earlier ones; passes every gate
// (npm run check -- feelings).
import { lesson } from "../../../lib/lesson.ts";
import feel from "./feel.ts";
import remember from "./remember.ts";
import laugh from "./laugh.ts";
import heart from "./heart.ts";
import hear from "./hear.ts";
import reading from "./reading.ts";

export const meta = {
  id: "feelings",
  type: "lesson",
};

export default lesson(meta.id, {
  story: "Summer, yellow accent. The year is ending: glad, sad, missing, tired. A few words are enough. Cast: the student, Miao-miao, the girl.",
  title: { en: "Feelings", ru: "Чувства" },
  summary: {
    en: [
      "We also say how we feel, and what we hear and remember.",
      "In this lesson, you'll be able to say \"I feel cold.\" and \"I'm scared of fire.\"",
    ],
    ru: [
      "Мы ещё говорим, что чувствуем, слышим и помним.",
      "В этом уроке вы научитесь говорить «Мне холодно.» и «Я боюсь огня.»",
    ],
  },
  // Summer, yellow (MASCOT_PLAN.md): glad because the cat came; the student remembers the day they arrived.
  images: [
    {
      alt: {
        en: "Summer evening in a room. The student sits on the edge of a bed with a yellow blanket, a packed suitcase on the floor beside it. Miao-miao sits in their lap with eyes closed, happy. In a thought bubble above, a tiny picture shows a boy and a small cat at a door.",
        ru: "Летний вечер в комнате. Студент сидит на краю кровати с жёлтым одеялом, рядом на полу собранный чемодан. У него на коленях сидит Miao-miao с закрытыми глазами, довольная. В облачке мыслей над ними крошечная картинка: мальчик и маленькая кошка у двери.",
      },
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:hao3}}, {{word:yin1wei4}} {{word:ni3}} {{word:lai2}} {{word:le}}.",
      hanzi: "我觉得很好，因为你来了。",
      en: "I feel good, because you've come.",
      ru: "Мне хорошо, потому что ты пришёл.",
    },
  ],
  modules: [
    feel,
    remember,
    laugh,
    heart,
    hear,
    reading,
  ],
});
