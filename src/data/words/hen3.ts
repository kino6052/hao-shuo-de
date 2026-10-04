import { word } from "../../lib/word.ts";

export default word("hen3", {
  term: "hěn",
  hanzi: "很",
  pos: { eng: "adverb", rus: "наречие", zh: "副词" },
  definition: {
    eng: "very, highly, intensely; syntactic structural anchor required before isolated adjectives in predicates",
    rus: "очень, весьма, сильно; обязательный синтаксический якорь перед одиночным прилагательным в сказуемом",
    zh: "很，非常，强烈地；谓语中单独出现的形容词前必需的语法支点",
  },
  necessity: {
    index: 5,
    eng: "Very, and the link between a thing and its adjective: {{word:shui3}} {{word:hen3}} {{word:hao3}}.",
    rus: "Очень, а также связка между вещью и прилагательным: {{word:shui3}} {{word:hen3}} {{word:hao3}}.",
  },
  maps: "mute",
});
