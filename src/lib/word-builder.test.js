import { describe, expect, test } from "bun:test";
import dict from "../data/dictionary.json";
import {
  roleOf,
  poolFor,
  newNode,
  openQuestions,
  choicesFor,
  render,
  pinyinSystem,
  hanziSystem,
  glossTree,
  firstSense,
} from "./word-builder.js";

const py = pinyinSystem(dict);
const hz = hanziSystem(
  new Map(Object.entries({
    dong4wu4: "动物", shui3: "水", li3: "里", de: "的", qu4: "去", kuai4: "快",
    gong1ju4: "工具", zhi1dao4: "知道", hen3: "很", duo1: "多", dong1xi: "东西",
  })),
);

// node(id, { key: answer }) with word answers given as nodes.
const node = (id, answers = {}) => ({ ...newNode(dict, id), answers });
const word = (n, extra = {}) => ({ node: n, ...extra });

describe("roleOf / poolFor", () => {
  test("reads the first part of speech, with colors and overrides", () => {
    expect(roleOf(dict, "shui3")).toBe("noun");
    expect(roleOf(dict, "chi1")).toBe("verb");
    expect(roleOf(dict, "da4")).toBe("adj");
    expect(roleOf(dict, "hong2se4")).toBe("color");
    expect(roleOf(dict, "jue2de")).toBe("verb");
    expect(roleOf(dict, "ma")).toBe(null);
  });

  test("never offers grammar or position words", () => {
    const nouns = poolFor(dict, "noun");
    expect(nouns).toContain("shui3");
    expect(nouns).not.toContain("pang2bian1");
    expect(poolFor(dict, "verb")).not.toContain("zai4");
    expect(poolFor(dict, "adj")).not.toContain("hong2se4");
    expect(poolFor(dict, "adj")).not.toContain("zhen1");
  });
});

describe("render: nouns", () => {
  test("where: place + position + de", () => {
    const fish = node("dong4wu4", { where: word(node("shui3")) });
    expect(render(fish, py)).toBe("shuǐ-lǐ-de dòngwù");
    expect(render(fish, hz)).toBe("水里的动物");
  });

  test("the parts follow Mandarin order, not answer order", () => {
    const n = node("dong4wu4", {
      color: word(node("huang2se4")),
      kind: word(node("xiao3")),
      where: word(node("shui3")),
    });
    expect(render(n, py)).toBe("shuǐ-lǐ-de xiǎo-de huángsè-de dòngwù");
  });

  test("answers nest, and duō takes hěn", () => {
    const things = node("dong1xi", { kind: word(node("duo1")) });
    const computer = node("gong1ju4", { does: word(node("zhi1dao4", { what: word(things) })) });
    expect(render(computer, py)).toBe("zhīdào-hěn-duō-de-dōngxi-de gōngjù");
    expect(render(computer, hz)).toBe("知道很多的东西的工具");
  });

  test("a degree goes before the describing word", () => {
    const n = node("dong4wu4", { kind: word(node("da4", { degree: { value: "hen3" } })) });
    expect(render(n, py)).toBe("hěn-dà-de dòngwù");
  });

  test("other positions", () => {
    const n = node("dong1xi", { where: word(node("he2zi"), { position: "under" }) });
    expect(render(n, py)).toBe("hézi-xià-miàn-de dōngxi");
  });
});

describe("render: verbs", () => {
  test("in what way: a one-syllable word is doubled", () => {
    const run = node("qu4", { way: word(node("kuai4")) });
    expect(render(run, py)).toBe("kuài-kuài-de qù");
    expect(render(run, hz)).toBe("快快地去");
  });

  test("a longer describing word is not doubled", () => {
    expect(render(node("shuo1", { way: word(node("qi2guai4")) }), py)).toBe("qíguài-de shuō");
  });

  test("where, with, way, verb-direction, what", () => {
    const n = node("qu4", {
      way: word(node("kuai4")),
      with: word(node("jiao3")),
      where: word(node("shui3")),
    });
    expect(render(n, py)).toBe("zài shuǐ-lǐ yòng jiǎo kuài-kuài-de qù");
    expect(render(node("fei1", { direction: { value: "shang4-qu4" } }), py)).toBe("fēi-shàng-qù");
    expect(render(node("chi1", { what: word(node("mi3fan4")) }), py)).toBe("chī mǐfàn");
  });

  test("with lái or qù as the verb, the direction ends in the verb itself", () => {
    expect(render(node("qu4", { direction: { value: "chu1-qu4" } }), py)).toBe("chū-qù");
    expect(choicesFor(node("qu4"), "direction")).toEqual(["shang4-qu4", "xia4-qu4", "jin4-qu4", "chu1-qu4", "hui2-qu4"]);
    expect(choicesFor(node("fei1"), "direction")).toHaveLength(11);
  });
});

describe("openQuestions", () => {
  test("lists the unanswered questions in asking order", () => {
    expect(openQuestions(node("dong4wu4"))).toEqual(["kind", "color", "where", "does"]);
    expect(openQuestions(node("dong4wu4", { kind: word(node("da4")) }))).toEqual(["color", "where", "does"]);
    expect(openQuestions(node("hong2se4"))).toEqual([]);
  });
});

describe("glossTree", () => {
  const label = (key) => `<${key}>`;

  test("first sense of each word, nested like the word", () => {
    expect(firstSense(dict, "shui3", "eng")).toBe("water");
    const fish = node("dong4wu4", { where: word(node("shui3", { kind: word(node("da4")) })) });
    expect(glossTree(dict, fish, "eng", label)).toEqual({
      text: firstSense(dict, "dong4wu4", "eng"),
      items: [
        {
          question: "<where>",
          text: "water (<pos_in>)",
          items: [{ question: "<kind>", text: firstSense(dict, "da4", "eng"), items: [] }],
        },
      ],
    });
  });

  test("choice answers are named by their value", () => {
    const n = node("fei1", { direction: { value: "shang4-qu4" } });
    expect(glossTree(dict, n, "rus", label).items).toEqual([
      { question: "<direction>", text: "<direction_shang4-qu4>", items: [] },
    ]);
  });
});
