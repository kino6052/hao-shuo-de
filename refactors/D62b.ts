// D62b (with the author): the geometric shapes, as descriptions. Shape is
// yàng-zi (样子), and each shape says what it looks like with the words we
// have: no 形 or 体 roots. A box is described the same as a cube.
// Run: npm run refactor -- refactors/D62b.ts [--write]

const W = (id) => `{{word:${id}}}`;
const L = (id) => `{{light:${id}}}`;
const shape = `${W("yang4")}-${L("zi")}`;
const thing = `${W("dong1")}-${L("xi1")}`;
const chain = (...ids) => ids.map(W).join("-");

let next = 5405;
const entry = (zh, py, en, ru, hsd, tts, literal, rank) => ({
  op: "composite",
  zh,
  create: { rank: rank ?? next++, phase: rank ? Math.ceil(rank / 500) : 4, py, en, ru, pos: "noun" },
  set: { hsd: [hsd], tts: [tts], fit: "plain", literal, proposed: true },
});

const cube = `${chain("liu4", "mian4", "dou1", "fang1", "de")} ${thing}`;

export default [
  entry("圆形", "yuánxíng", "circle", "круг", `${chain("yuan2", "de")} ${shape}`, "圆的样子", "the round shape"),
  entry("正方形", "zhèngfāngxíng", "square", "квадрат", `${chain("si4", "bian1", "yi1", "yang4", "chang2", "de")} ${shape}`, "四边一样长的样子", "the shape with four equally long sides"),
  entry("长方形", "chángfāngxíng", "rectangle", "прямоугольник", `${chain("chang2", "fang1", "de")} ${shape}`, "长方的样子", "the long square shape"),
  entry("三角形", "sānjiǎoxíng", "triangle", "треугольник", `${chain("san1", "bian1", "de")} ${shape}`, "三边的样子", "the three-sided shape"),
  entry("五边形", "wǔbiānxíng", "pentagon", "пятиугольник", `${chain("wu3", "bian1", "de")} ${shape}`, "五边的样子", "the five-sided shape"),
  entry("六边形", "liùbiānxíng", "hexagon", "шестиугольник", `${chain("liu4", "bian1", "de")} ${shape}`, "六边的样子", "the six-sided shape"),
  entry("多边形", "duōbiānxíng", "polygon", "многоугольник", `${chain("duo1", "bian1", "de")} ${shape}`, "多边的样子", "the many-sided shape"),
  entry("椭圆", "tuǒyuán", "oval, ellipse", "овал, эллипс", `${chain("chang2", "yuan2", "de")} ${shape}`, "长圆的样子", "the long round shape"),
  entry("心形", "xīnxíng", "heart shape", "сердечко (форма)", `${chain("xin1", "de")} ${shape}`, "心的样子", "the shape of a heart"),
  entry("立方体", "lìfāngtǐ", "cube", "куб", cube, "六面都方的东西", "a thing square on all six faces"),
  entry("盒子", "hézi", "box", "коробка", cube, "六面都方的东西", "a thing square on all six faces (said like a cube)", 1665),
  entry("球体", "qiútǐ", "sphere", "шар, сфера", `${chain("na3", "bian1", "dou1", "yuan2", "de")} ${thing}`, "哪边都圆的东西", "a thing round on every side"),
  entry("圆柱", "yuánzhù", "cylinder", "цилиндр", `${chain("yuan2", "de")} ${chain("chang2", "de")} ${thing}`, "圆的长的东西", "a round long thing"),
  entry("圆锥", "yuánzhuī", "cone", "конус", `${chain("xia4", "mian4", "yuan2")}-${chain("shang4", "mian4", "xiao3", "de")} ${thing}`, "下面圆上面小的东西", "a thing round below and small on top"),
  entry("金字塔", "jīnzìtǎ", "pyramid", "пирамида", `${chain("xia4", "mian4", "fang1")}-${chain("shang4", "mian4", "xiao3", "de")} ${thing}`, "下面方上面小的东西", "a thing square below and small on top"),
  entry("角", "jiǎo", "angle, corner", "угол", `${chain("liang3", "bian1", "zai4", "yi1", "qi3", "de")} ${W("di4")}-${L("fang1")}`, "两边在一起的地方", "where two sides meet", 4541),
];
