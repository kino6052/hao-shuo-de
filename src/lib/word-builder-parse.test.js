import { describe, expect, test } from "bun:test";
import dict from "../data/dictionary.ts";
import composites from "../data/composites.ts";
import { formWords, builderForm, builderEntries, treeOfForm } from "./word-builder-parse.js";
import { render, pinyinSystem } from "./word-builder.js";

// Plain pinyin ids -> a dictionary form: "shui3-li3-de dong4wu4" -> "{{word:shui3}}-{{word:li3}}-...".
const form = (s) => s.replace(/[a-z]+\d?[a-z]*\d?/g, (id) => `{{word:${id}}}`);
const py = (tree) => render(tree, pinyinSystem(dict));

describe("formWords", () => {
  test("word ids, and which ones a hyphen joins to the word before", () => {
    expect(formWords(form("shui3-li3-de dong4wu4"))).toEqual({
      ids: ["shui3", "li3", "de", "dong4wu4"],
      glued: [false, true, true, false],
    });
    expect(formWords(`${form("zhe4")}-ge`)).toBe(null);
  });
});

describe("builderForm", () => {
  test("an older form is read and rewritten the Word Builder's way", () => {
    const built = builderForm(dict, form("shui3-li3-de dong4wu4"));
    expect(built.same).toBe(false);
    expect(py(built.tree)).toBe("zài-shuǐ-lǐ-de dòngwù");
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
    // "toothbrush": nòng hǎo X, fix X.
    expect(builderForm(dict, form("nong4-hao3 kou3-li3-de ying4 dong1xi-de gong1ju4"))).toBe(null);
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

  test("the words a reader can open include fish, book, and walk", () => {
    const opened = builderEntries(dict, composites.entries).map((b) => b.entry.en);
    expect(opened).toContain("fish");
    expect(opened).toContain("book");
    expect(opened).toContain("walk; leave");
    const fish = composites.entries.find((e) => e.en === "fish");
    expect(py(treeOfForm(dict, fish.hsd))).toBe("zài-shuǐ-lǐ-de dòngwù");
  });
});
