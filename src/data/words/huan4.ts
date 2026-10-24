import { word } from "../../lib/word.ts";

export default word("huan4", {
  term: "huàn",
  hanzi: "换",
  pos: { eng: "verb", rus: "глагол", zh: "动词" },
  definition: {
    eng: "to swap, change one thing for another: {{word:huan4}} {{word:che1}}, change buses; {{word:huan4}} + person + verb, now that person does it: {{word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}}, I won't go, he goes instead",
    rus: "менять, обменивать одно на другое: {{word:huan4}} {{word:che1}} — сделать пересадку; {{word:huan4}} + человек + глагол — теперь это делает он: {{word:wo3}} {{word:bu4}} {{word:qu4}}, {{word:huan4}} {{word:ta1}} {{word:qu4}} — я не пойду, пойдёт он",
    zh: "换，交换，更换",
  },
  necessity: {
    index: 4,
    eng: "Swap and change: {{word:huan4}} {{word:yi1fu}}, change clothes. It also says whose turn it is: {{word:huan4}} {{word:ni3}} {{word:shuo1}}, now you say it.",
    rus: "Менять и обмениваться: {{word:huan4}} {{word:yi1fu}} — переодеться. А ещё — чья очередь: {{word:huan4}} {{word:ni3}} {{word:shuo1}} — теперь скажи ты.",
  },
  topics: ["mixing-passing-on-and-changing"],
  isA: ["handling-action"],
  paraphrase: {
    forms: ["{{word:gei3}} X, {{word:na2}} Y"],
    verdict: "fine",
    note: "The paraphrase says a swap; changing buses or clothes and someone else's turn take two clauses without it (xià chē, shàng bié-de chē; wǒ bù qù, tā qù). Mandarin's #852, almost three times as common as tì.",
  },
});
