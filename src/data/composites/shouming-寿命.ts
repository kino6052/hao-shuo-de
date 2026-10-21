import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8438,
  phase: 4,
  zh: "寿命",
  py: "shòumìng",
  en: "lifespan; life expectancy; service life",
  ru: "срок жизни; продолжительность жизни",
  pos: "noun",
  hsd: [
    "{{word:neng2}} {{word:huo2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:huo2}} {{word:duo1}} {{word:chang2}}",
  ],
  tts: ["能活的时间", "活多长"],
  literal: "the time one can live / how long one lives",
  fit: "plain",
  topics: ["birth-and-death"],
  isA: ["time-span"],
  proposed: true,
});
