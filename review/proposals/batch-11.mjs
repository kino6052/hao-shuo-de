// Claude's proposals for review batch 11 (composite ranks 1001-1100), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=11.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const THING = `${W("dong1")}-${L("xi1")}`;
const parts = (...ids) => ids.map((id) => W(id)).join("-");

export default {
  "任务": {
    hsd: [`${W("yao4")} ${W("zuo4")}-${W("de")}`],
    tts: ["要做的"],
    literal: "what is to be done",
    why: "The same as 项目 (yào zuò-de), which you chose in batch 10; a task is the small project.",
  },
  "作家": {
    hsd: [`${W("xie3")} ${W("shu1")}-${W("de")} ${W("ren2")}`],
    tts: ["写书的人"],
    literal: "a person who writes books",
    why: "Plain 'xiě-de rén' is anyone who writes; a writer is the person who writes books (a person, as in the chair rule).",
  },
  "使": {
    hsd: [`${W("rang4")} X + verb`],
    tts: ["让X…"],
    literal: "let X do it",
    why: "ràng is the word for making or letting someone do something (as in 介绍, 保护, and the passive); jiào is 'tell someone to'.",
  },
  "压力": {
    hsd: [`${W("jue2")}-${L("de2")} ${W("hen3")} ${W("zhong4")}`],
    tts: ["觉得很重"],
    literal: "feel that it is heavy",
    why: "Pressure is a weight you feel; zhòng (heavy) is core, while 'hěn nán' only says it is hard.",
  },
  "广告": {
    hsd: [`${parts("rang4", "ren2", "mai3", "de")} ${THING}`],
    tts: ["让人买的东西"],
    literal: "a thing that makes people buy",
    why: "The chair rule: it is people who buy. ràng-rén-mǎi-de, not jiào-rén-mǎi-de (as 钥匙 is ràng-rén-kāi-mén-de).",
  },
  "建立": {
    hsd: [`${W("ba3")} X ${W("zuo4")} ${W("qi3")}-${W("lai2")}`],
    tts: ["把X做起来"],
    literal: "make X come up",
    why: "The same as 建设 (bǎ X zuò qǐ-lái), which you chose in batch 10: synonyms share one form.",
  },
  "引起": {
    hsd: [`${W("rang4")} X ${W("fa1")}-${W("sheng1")}`],
    tts: ["让X发生"],
    literal: "let X happen",
    why: "As 使: ràng (make, let) instead of jiào (tell someone to).",
  },
};
