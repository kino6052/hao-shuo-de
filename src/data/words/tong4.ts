import { word } from "../../lib/word.ts";

export default word("tong4", {
  term: "tòng",
  hanzi: "痛",
  pos: { eng: "adjective", rus: "прилагательное", zh: "形容词" },
  definition: {
    eng: "pain, painful, to hurt: {{word:wo3}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:tong4}}, my head hurts",
    rus: "боль, больно, болеть: {{word:wo3}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:tong4}} — у меня болит голова",
    zh: "痛，疼",
  },
  necessity: {
    index: 4,
    eng: "Pain: {{word:tong4}}. A feeling the body has and no other word describes. A doctor needs it first.",
    rus: "Боль: {{word:tong4}}. Ощущение тела, которое не описать другими словами. Врачу оно нужно в первую очередь.",
  },
  topics: ["illness"],
  isA: ["bodily-state"],
  classes: {
    noun: {
      why: {
        eng: "Pain is also the thing you get: you have it, you do not only feel it.",
        rus: "Боль ещё и то, что получаешь: она у тебя есть, ты не только её чувствуешь.",
      },
      example: "Wǒ dé le tòng.",
    },
  },
  atom: {
    eng: "A feeling in the body, learned by hurting; no description makes someone feel it.",
    rus: "Ощущение в теле, которое узнают, когда больно; никакое описание не даёт его почувствовать.",
  },
});
