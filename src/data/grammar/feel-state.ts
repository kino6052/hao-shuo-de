import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("feel-state", {
  meaning: {
    eng: "Jué-dé says feel or think, then how it is or a whole thought: wǒ jué-dé hǎo, I feel good; wǒ jué-dé wǒ néng, I think I can. Shuō and yào can take a person and hǎo too: wǒ shuō nǐ hǎo, I say hello.",
    rus: "Jué-dé говорит «чувствовать» или «думать», затем как оно или целая мысль: wǒ jué-dé hǎo — мне хорошо; wǒ jué-dé wǒ néng — я думаю, что смогу. Shuō и yào тоже берут человека и hǎo: wǒ shuō nǐ hǎo — я говорю «здравствуй».",
  },
  covers: [],
  template: { hsd: "Who {{word:jue2}}-{{word:de2}} + how / thought", eng: "Who feels that" },
  rules: [
    { lhs: "VerbP", hsd: "=jue2 =de2 @adjective", eng: "jué-dé and a describing word: feel good" },
    { lhs: "VerbP", hsd: "=jue2 =de2 Clause", eng: "jué-dé and a thought" },
    { lhs: "VerbP", hsd: "=shuo1 State", eng: "shuō and a state: say you are good" },
    { lhs: "VerbP", hsd: "=yao4 State", eng: "yào and a state: want you well" },
    { lhs: "VP", hsd: "hen3 @adjective S", eng: "hěn, a feeling, and why: glad that you came" },
  ],
  taught: "feelings/feel",
  examples: [
    ["Wǒ jué-dé hǎo.", "I feel good."],
    ["Wǒ jué-dé wǒ néng.", "I think I can."],
    ["Wǒ shuō nǐ hǎo.", "I say hello."],
    ["Wǒ-men hěn kāi-xīn nǐ lái le.", "We're glad you've come."],
  ],
});
