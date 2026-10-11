// Claude's proposals for review batch 9 (composite ranks 801-900), checked by hand:
// zh -> { hsd: forms (refs), tts: their hanzi, literal, fit?, transparent?, why }.
// Entries not listed are proposed as they are. Shown at /__review/?batch=9.
const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const THING = `${W("dong1")}-${L("xi1")}`;
const parts = (...ids) => ids.map((id) => W(id)).join("-");

export default {
  "云": {
    hsd: [`${parts("tian1", "shang4", "de")} ${W("bai2")}-${W("se4")} ${THING}`],
    tts: ["天上的白色东西"],
    literal: "the white thing up in the sky",
    why: "kōng-qì-lǐ is 'in the air'; a cloud is the white thing you see in the sky (tiān-shàng, as 天空).",
  },
  "低": {
    hsd: [`${W("bu4")} ${W("gao1")}`],
    tts: ["不高"],
    literal: "not high",
    why: "gāo is core, so low is simply not high (as 软 is bù yìng).",
  },
  "假期": {
    hsd: [`${W("bu4")} ${parts("gong1", "zuo4", "de")} ${parts("shi2", "jian1")}`],
    tts: ["不工作的时间"],
    literal: "the time when one doesn't work",
    why: "Same as 部门 and 同事: gōng-zuò is work, a bare zuò is any doing.",
  },
  "冰箱": {
    hsd: [`${parts("rang4", "chi1", "de", "dong1", "xi1")} ${W("leng3")}-${W("de")} ${W("ji1")}`],
    tts: ["让吃的东西冷的机"],
    literal: "the machine that makes food cold",
    why: "A fridge doesn't just 'be cold'; people use it to keep food cold (the chair rule).",
  },
  "同事": {
    hsd: [`${W("yi1")}-${W("qi3")} ${parts("gong1", "zuo4", "de")} ${W("ren2")}`],
    tts: ["一起工作的人"],
    literal: "a person one works with",
    why: "Same wording as the second form of 部门.",
  },
  "家具": {
    hsd: [`${W("jia1")}-${W("ju4")}`, `${parts("jia1", "li3", "yong4", "de")} ${THING}`],
    tts: ["家具", "家里用的东西"],
    literal: "home tool / the things used at home",
    why: "Furniture is what people use in the home; 'big things at home' also fits a house.",
  },
  "手表": {
    hsd: [`${W("shou3")}-${W("shang4")} ${parts("kan4", "dian3", "yong4", "de")} ${W("gong1")}-${L("ju4")}`],
    tts: ["手上看点用的工具"],
    literal: "the tool on the hand used for looking at the time",
    why: "Same as 表 (batch 8), on the hand.",
  },
  "星星": {
    hsd: [`${parts("tian1", "shang4", "de")} ${W("xiao3")} ${W("ri4")}`],
    tts: ["天上的小日"],
    literal: "a small sun in the sky",
    why: "A star is a small sun far away, as a lamp is a small sun at home (灯); 'small moon' made it a moon.",
  },
  "河": {
    hsd: [`${W("zai4")} ${W("di4")}-${W("shang4")} ${W("dong4")}-${W("de")} ${W("shui3")}`],
    tts: ["在地上动的水"],
    literal: "water that moves along the ground",
    why: "The sea is the big water; a river is water moving on the ground.",
  },
  "玻璃": {
    hsd: [`${parts("rang4", "ren2", "kan4", "dao4", "hou4", "mian4", "de")} ${W("ying4")} ${THING}`],
    tts: ["让人看到后面的硬东西"],
    literal: "a hard thing that lets a person see what's behind",
    why: "Glass doesn't 'can'; it lets a person see through (the chair rule).",
  },
  "眼镜": {
    hsd: [`${W("bang1")} ${W("ren2")} ${W("kan4")}-${W("de")} ${THING}`],
    tts: ["帮人看的东西"],
    literal: "a thing that helps a person see",
    why: "Glasses help a person; bāng alone has no one to help.",
  },
  "窗": {
    hsd: [`${W("kan4")} ${W("wai4")}-${W("mian4")}-${W("de")} ${W("kou3")}`],
    tts: ["看外面的口"],
    literal: "an opening for looking outside",
    why: "kǒu alone is any opening (a door, a mouth); a window is the one you look outside through.",
  },
};
