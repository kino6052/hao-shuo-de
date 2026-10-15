import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("mei-guanxi", {
  meaning: {
    eng: "Méi guānxi says never mind: méi guānxi, wǒ bù pà, never mind, I am not afraid.",
    rus: "Méi guānxi значит «ничего страшного»: méi guānxi, wǒ bù pà — ничего, я не боюсь.",
  },
  covers: [],
  template: { hsd: "{{word:mei2}} {{word:guan1xi}}", eng: "Never mind" },
  rules: [
    { lhs: "VP", hsd: "mei2 =guan1xi", eng: "méi guānxi, never mind" },
  ],
  taught: "greetings/never-mind",
  examples: [
    ["Méi guānxi, wǒ bù pà.", "Never mind, I am not afraid."],
  ],
});
