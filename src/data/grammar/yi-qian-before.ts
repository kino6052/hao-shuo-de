import { pattern } from "../../lib/grammar-pattern.ts";

export default pattern("yi-qian-before", {
  meaning: {
    eng: "Yǐ-qián means before and yǐ-hòu means after: yǐ-qián wǒ zài \"Zhōngguó\", I used to be in China. Xiǎo shí-hòu is as a child; xīn-nián is the New Year.",
    rus: "Yǐ-qián значит «раньше», yǐ-hòu — «потом»: yǐ-qián wǒ zài \"Zhōngguó\" — раньше я был в Китае. Xiǎo shí-hòu — в детстве; xīn-nián — Новый год.",
  },
  covers: ["grammar:when"],
  template: { hsd: "{{word:yi3}}-{{word:qian2}} / {{word:yi3}}-{{word:hou4}}", eng: "Before / after" },
  rules: [
    { lhs: "Time", hsd: "=yi3 =qian2", eng: "yǐ-qián, before" },
    { lhs: "Time", hsd: "=yi3 =hou4", eng: "yǐ-hòu, after" },
    { lhs: "Time", hsd: "Moment =yi3 =qian2", eng: "a moment ago" },
    { lhs: "Time", hsd: "=xiao3 =shi2 =hou4", eng: "xiǎo shí-hòu, as a child" },
    { lhs: "Time", hsd: "=xin1 =nian2", eng: "xīn-nián, the New Year" },
  ],
  taught: "around-an-action/when",
  examples: [
    ["Yǐ-qián wǒ zài jiā.", "I used to be at home."],
    ["Xiǎo shí-hòu wǒ ài shuǐ.", "As a child I loved water."],
    ["Xīn-nián wǒ-men huí jiā.", "We go home for the New Year."],
  ],
});
