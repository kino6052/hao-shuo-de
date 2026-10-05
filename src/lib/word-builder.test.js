import { describe, expect, test } from "bun:test";
import dict from "../data/dictionary.ts";
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
    zai4: "在", cong2: "从", lai2: "来", dao4: "到", jia1: "家", lu4: "路", fei1: "飞",
  })),
  dict,
);

// node(id, { key: answer }) with word answers given as nodes.
const node = (id, answers = {}) => ({ ...newNode(dict, id), answers });
const word = (n, extra = {}) => ({ node: n, ...extra });

describe("roleOf / poolFor", () => {
  test("reads the first part of speech, with colors and overrides", () => {
    expect(roleOf(dict, "shui3")).toBe("noun");
    expect(roleOf(dict, "chi1")).toBe("verb");
    expect(roleOf(dict, "da4")).toBe("adj");
    expect(roleOf(dict, "hong2")).toBe("color");
    expect(roleOf(dict, "jue2")).toBe("verb");
    expect(roleOf(dict, "ma")).toBe(null);
  });

  test("never offers grammar or position words", () => {
    const nouns = poolFor(dict, "noun");
    expect(nouns).toContain("shui3");
    expect(nouns).not.toContain("pang2bian1");
    expect(poolFor(dict, "verb")).not.toContain("zai4");
    expect(poolFor(dict, "adj")).not.toContain("hong2");
    expect(poolFor(dict, "adj")).not.toContain("zhen1");
  });
});

describe("render: nouns", () => {
  test("where: zài + place + position + de", () => {
    const fish = node("动物", { where: word(node("shui3")) });
    expect(render(fish, py)).toBe("zài-shuǐ-lǐ-de dòng-wù");
    expect(render(fish, hz)).toBe("在水里的动物");
  });

  test("from where: cóng + place + lái + de", () => {
    const n = node("动物", { from: word(node("shui3")) });
    expect(render(n, py)).toBe("cóng-shuǐ-lǐ-lái-de dòng-wù");
    expect(render(n, hz)).toBe("从水里来的动物");
  });

  test("to where: dào (the default) or qù + place + de; a place word needs no lǐ", () => {
    expect(render(node("lu4", { to: word(node("jia1")) }), py)).toBe("dào-jiā-de lù");
    expect(render(node("lu4", { to: word(node("jia1"), { via: "qu4" }) }), hz)).toBe("去家的路");
    expect(render(node("lu4", { to: word(node("jia1"), { position: "in" }) }), py)).toBe("dào-jiā-lǐ-de lù");
  });

  test("the parts follow Mandarin order, not answer order", () => {
    const n = node("动物", {
      color: word(node("huang2")),
      kind: word(node("xiao3")),
      where: word(node("shui3")),
      from: word(node("jia1")),
    });
    expect(render(n, py)).toBe("cóng-jiā-lái-de zài-shuǐ-lǐ-de xiǎo-de huáng-de dòng-wù");
  });

  test("answers nest, and duō takes hěn", () => {
    const things = node("东西", { kind: word(node("duo1")) });
    const computer = node("工具", { does: word(node("zhi1dao4", { what: word(things) })) });
    expect(render(computer, py)).toBe("zhīdào-hěn-duō-de-dōng-xi-de gōng-jù");
    expect(render(computer, hz)).toBe("知道很多的东西的工具");
  });

  test("a degree goes before the describing word", () => {
    const n = node("动物", { kind: word(node("da4", { degree: { value: "hen3" } })) });
    expect(render(n, py)).toBe("hěn-dà-de dòng-wù");
  });

  test("other positions", () => {
    const n = node("东西", { where: word(node("bao1"), { position: "under" }) });
    expect(render(n, py)).toBe("zài-bāo-xià-miàn-de dōng-xi");
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
    expect(render(node("chi1", { what: word(node("东西")) }), py)).toBe("chī dōng-xi");
  });

  test("with lái or qù as the verb, the direction ends in the verb itself", () => {
    expect(render(node("qu4", { direction: { value: "chu1-qu4" } }), py)).toBe("chū-qù");
    expect(choicesFor(node("qu4"), "direction")).toEqual(["shang4-qu4", "xia4-qu4", "jin4-qu4", "chu1-qu4", "hui2-qu4"]);
    expect(choicesFor(node("fei1"), "direction")).toHaveLength(11);
  });

  test("from where: cóng + place before the verb", () => {
    expect(render(node("lai2", { from: word(node("jia1")) }), py)).toBe("cóng jiā lái");
  });

  test("to where: verb-dào / verb-qù + place; after lái or qù the place follows directly", () => {
    expect(render(node("fei1", { to: word(node("shui3")) }), py)).toBe("fēi-dào shuǐ-lǐ");
    expect(render(node("fei1", { to: word(node("shui3"), { via: "qu4" }) }), hz)).toBe("飞去水里");
    expect(render(node("qu4", { to: word(node("jia1"), { via: "dao4" }) }), py)).toBe("qù jiā");
    expect(render(node("qu4", { from: word(node("jia1")), to: word(node("shui3")) }), py)).toBe("cóng jiā qù shuǐ-lǐ");
  });

  test("a thing with a place it goes to moves up front with bǎ", () => {
    expect(render(node("na2", { what: word(node("jin1")), to: word(node("jia1")) }), py)).toBe("bǎ jīn ná-dào jiā");
  });
});

describe("openQuestions", () => {
  test("lists the unanswered questions in asking order", () => {
    expect(openQuestions(node("动物"))).toEqual(["kind", "color", "where", "from", "to", "does"]);
    expect(openQuestions(node("动物", { kind: word(node("da4")) }))).toEqual(["color", "where", "from", "to", "does"]);
    expect(openQuestions(node("hong2"))).toEqual([]);
  });

  test("a verb takes a direction or a place it goes to, not both", () => {
    expect(openQuestions(node("fei1", { to: word(node("jia1")) }))).not.toContain("direction");
    expect(openQuestions(node("fei1", { direction: { value: "shang4-qu4" } }))).not.toContain("to");
  });
});

describe("glossTree", () => {
  const label = (key) => `<${key}>`;

  test("first sense of each word, nested like the word", () => {
    expect(firstSense(dict, "shui3", "eng")).toBe("water");
    const fish = node("动物", { where: word(node("shui3", { kind: word(node("da4")) })) });
    expect(glossTree(dict, fish, "eng", label)).toEqual({
      text: firstSense(dict, "动物", "eng"),
      items: [
        {
          question: "<where>",
          text: "water (<pos_in>)",
          items: [{ question: "<kind>", text: firstSense(dict, "da4", "eng"), items: [] }],
        },
      ],
    });
  });

  test("place answers note their position (not 'the place itself') and dào or qù", () => {
    const n = node("lu4", { to: word(node("jia1"), { via: "qu4" }), from: word(node("shui3")) });
    expect(glossTree(dict, n, "eng", label).items.map((i) => i.text)).toEqual([
      "water (<pos_in>)",
      `${firstSense(dict, "jia1", "eng")} (<via_qu4>)`,
    ]);
    // With qù as the verb there is no dào or qù to pick.
    expect(glossTree(dict, node("qu4", { to: word(node("jia1")) }), "eng", label).items[0].text).toBe(
      firstSense(dict, "jia1", "eng"),
    );
  });

  test("choice answers are named by their value", () => {
    const n = node("fei1", { direction: { value: "shang4-qu4" } });
    expect(glossTree(dict, n, "rus", label).items).toEqual([
      { question: "<direction>", text: "<direction_shang4-qu4>", items: [] },
    ]);
  });
});

describe("hanzi with senses", () => {
  test("a word in a listed compound writes its sense's hanzi", () => {
    const sensed = {
      ...dict,
      words: { ...dict.words, zuo4: { ...dict.words.zuo4, hanzi: "做", senses: { sit: { hanzi: "坐", compounds: ["zuo4 che1"] } } } },
    };
    const hzs = hanziSystem(new Map([["zuo4", "做"], ["che1", "车"], ["de", "的"], ["ren2", "人"]]), sensed);
    const rider = node("ren2", { does: word(node("zuo4", { what: word(node("che1")) })) });
    expect(render(rider, hzs)).toBe("坐车的人");
    const glued = { ...rider, answers: {} };
    expect(render(glued, hzs)).toBe("人");
    expect(hzs.finish("⟦zuo4⟧-⟦che1⟧ ⟦ren2⟧")).toBe("坐车人");
  });
});
