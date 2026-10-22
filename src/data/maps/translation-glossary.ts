// The translator's glossary (TRANSLATOR_PLAN.md E1, Q7): each English idea a translation settled, with the Hao-shuo-de form
// it chose and why. kb_lookup gives these first, so a choice made once is reused everywhere; a text may still differ, with a
// note. One shared glossary for every translation. A row starts `proposed` (Claude chose it while translating) and the
// author's review drops the mark. check-data parses every form: dictionary words only.
import { glossary } from "../../lib/data-maps.ts";

export default glossary([
  {
    en: "forgot to",
    form: "bù jì-de",
    why: "For a past forgetting to do something, bù jì-de and the verb (Wǒ bù jì-de ná zhè-ge dōng-xi). The dictionary's form of forget, xiàn-zài bù jì-de le, says I can't remember now, and xiàn-zài reads only as xiàn + zài.",
    source: "review/translations/2026-10-22-i-forgot-to-bring-my-umbrella.md",
    proposed: true,
  },
  {
    en: "on the way home",
    form: "huí jiā-de shí-jiān",
    why: "Who and huí jiā-de shí-jiān, a comma, then what happened (the when-clause). Zài huí jiā-de lù shàng at the front of a sentence reads only as calling out to the road, in all 500 readings.",
    source: "review/translations/2026-10-22-i-forgot-to-bring-my-umbrella.md",
    proposed: true,
  },
  {
    en: "warm again",
    form: "bù lěng le",
    why: "After being cold: not cold any more, the book's own sentence (Wǒ bù lěng le.). The dictionary's form of warm, bù lěng, yě bù hěn rè, is 6 words and says nothing about a change.",
    source: "review/translations/2026-10-22-i-forgot-to-bring-my-umbrella.md",
    proposed: true,
  },
]);
