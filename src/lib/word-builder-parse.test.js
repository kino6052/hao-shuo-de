import { describe, expect, test } from "bun:test";
import dict from "../data/dictionary.ts";
import composites from "../data/composites.ts";
import { formWords, builderForm, builderEntries, treeOfForm } from "./word-builder-parse.js";
import { render, pinyinSystem } from "./word-builder.js";

// Plain pinyin ids -> a dictionary form: "shui3-li3-de dong4-wu4" -> "{{word:shui3}}-{{word:li3}}-...".
const form = (s) => s.replace(/[a-z]+\d?[a-z]*\d?/g, (id) => `{{word:${id}}}`);
const py = (tree) => render(tree, pinyinSystem(dict));

describe("formWords", () => {
  test("word ids, and which ones a hyphen joins to the word before", () => {
    expect(formWords(form("shui3-li3-de dong4-wu4"), dict)).toEqual({
      ids: ["shui3", "li3", "de", "动物"],
      glued: [false, true, true, false],
    });
    expect(formWords(`${form("zhe4")}-ge`)).toBe(null);
  });
});

describe("builderForm", () => {
  test("an older form is read and rewritten the Word Builder's way", () => {
    const built = builderForm(dict, form("shui3-li3-de dong4-wu4"));
    expect(built.same).toBe(false);
    expect(py(built.tree)).toBe("zài-shuǐ-lǐ-de dòng-wù");
    expect(builderForm(dict, built.form).same).toBe(true);
  });

  test("a verb description stays a verb", () => {
    expect(builderForm(dict, form("yong4 jiao3 qu4")).same).toBe(true);
  });

  test("a form the Word Builder can't say, or could read two ways, is left alone", () => {
    // "drive": kāi + the car, or a tool that drives to many places.
    expect(builderForm(dict, form("kai1 qu4-hen3-duo1-di4fang1-de gong1ju4"))).toBe(null);
    // "expert": the one who knows a lot, not "knows many people".
    expect(builderForm(dict, form("zhi1dao4 hen3 duo1-de ren2"))).toBe(null);
    // "passenger": zuò zài X, sit at X.
    expect(builderForm(dict, form("zuo4 zai4 jia1-li3-de ren2"))).toBe(null);
    // "toothbrush": zuò hǎo X, fix X.
    expect(builderForm(dict, form("zuo4-hao3 kou3-li3-de ying4 dong1-xi1-de gong1-ju4"))).toBe(null);
  });

  test("words of their own are not descriptions", () => {
    expect(builderForm(dict, form("xiao3-xin1"))).toBe(null);
    expect(builderForm(dict, form("da4 bu4fen"))).toBe(null);
  });
});

describe("the composite dictionary", () => {
  test("every description the Word Builder rewrites reads back the same", () => {
    for (const e of composites.entries) {
      for (const f of (e.hsd ?? "").split(" / ")) {
        const built = f && builderForm(dict, f);
        if (built && !built.same) expect(builderForm(dict, built.form)?.same).toBe(true);
      }
    }
  });

  test("the words a reader can open include fish, computer, and kitchen", () => {
    const opened = builderEntries(dict, composites.entries).map((b) => b.entry.en);
    expect(opened).toContain("fish");
    expect(opened).toContain("computer");
    expect(opened).toContain("kitchen");
    const fish = composites.entries.find((e) => e.en === "fish");
    expect(py(treeOfForm(dict, fish.hsd))).toBe("zài-shuǐ-lǐ-de dòng-wù");
  });
});

describe("units", () => {
  // A ready-made unit: dōng-xi, "thing", made of two words (src/lib/composite.ts, role).
  const unitDict = {
    ...dict,
    words: {
      ...dict.words,
      dong1: { term: "dōng", hanzi: "东", pos: { eng: "noun" }, definition: { eng: "east" } },
      xi1: { term: "xī", hanzi: "西", pos: { eng: "noun" }, definition: { eng: "west" } },
    },
    units: {
      东西: { term: "dōng-xi", form: "{{word:dong1}}-{{light:xi1}}", hanzi: "东西", role: "noun", pos: { eng: "noun" }, definition: { eng: "thing", rus: "вещь", zh: "东西" } },
    },
  };

  test("a unit's hyphen-joined words read as the unit", () => {
    expect(formWords("{{word:da4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}", unitDict)).toEqual({
      ids: ["da4", "de", "东西"],
      glued: [false, true, false],
    });
    expect(formWords("{{word:dong1}} {{light:xi1}}", unitDict).ids).toEqual(["dong1", "xi1"]);
  });

  test("a unit is offered, written and read back like a word", async () => {
    const { roleOf, poolFor, refSystem, hanziSystem, newNode, firstSense } = await import("./word-builder.js");
    expect(roleOf(unitDict, "东西")).toBe("noun");
    expect(poolFor(unitDict, "noun")).toContain("东西");
    expect(firstSense(unitDict, "东西", "eng")).toBe("thing");
    const tree = { ...newNode(unitDict, "东西"), answers: { kind: { node: newNode(unitDict, "da4") } } };
    const refs = render(tree, refSystem(unitDict));
    expect(refs).toContain("{{word:dong1}}-{{light:xi1}}");
    expect(render(tree, pinyinSystem(unitDict))).toContain("dōng-xi");
    expect(render(tree, hanziSystem(new Map([["da4", "大"], ["de", "的"]]), unitDict))).toContain("东西");
    expect(treeOfForm(unitDict, refs)?.id).toBe("东西");
  });
});
