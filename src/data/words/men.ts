import { word } from "../../lib/word.ts";

export default word("men", {
  term: "men",
  hanzi: "们",
  pos: { eng: "particle", rus: "частица", zh: "助词" },
  definition: {
    eng: "more than one person: after a pointer or a word for people, as in {{word:wo3}}-{{word:men}} (\"we\")",
    rus: "больше одного человека: после указательного слова или слова о людях, как в {{word:wo3}}-{{word:men}} («мы»)",
    zh: "表示不止一个人：用在指人的词后面，如 {{word:wo3}}-{{word:men}}（“我们”）",
  },
  necessity: {
    index: 4,
    eng: "Without it, you can't say \"we\" or \"they\": {{word:wo3}}-{{word:men}} is the only way to show more than one person.",
    rus: "Без него нельзя сказать «мы» или «они»: {{word:wo3}}-{{word:men}} — единственный способ показать, что людей несколько.",
  },
});
