// Makes the pronunciation clips (public/audio/<slug>.mp3) for every play button in the book's chapters, with
// Microsoft's edge-tts voices (pip install edge-tts). A clip that already exists is kept, so only new sentences
// are made. The page (src/lib/audio.js) asks for the same file names and falls back to the browser's voice.
//
//   node scripts/generate-audio.js            # make the missing clips
//   node scripts/generate-audio.js --list     # only list what would be made

import { existsSync, mkdirSync, rmSync } from "fs";
import { resolve, join } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import dictionaryData from "../src/data/dictionary.ts";
import { countDictionaryWords, buildWordIndex } from "../src/lib/dictionary-stats.js";
import { buildTsChapterView } from "../src/lib/chapter-content.js";
import { slugify } from "../src/lib/audio.js";
import { lessonNumber } from "../src/content/book.js";
import { LESSON_IDS } from "./lessons.js";
import { listContentFiles } from "./list-content-files.js";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const OUT = join(ROOT, "public/audio");
const VOICE = "zh-CN-XiaoxiaoNeural";
const RATE = "-15%";
const refs = { wordIndex: buildWordIndex(dictionaryData), wordCount: countDictionaryWords(dictionaryData),
  chapterTitles: { eng: { get: (id) => id } } }; // titles don't matter here, only the sentences

const chapters = []; // { meta, entries }
for (const id of LESSON_IDS) {
  const mod = await import(`../src/content/lessons/${id}/index.ts`);
  chapters.push({ meta: { ...mod.meta, lessonNumber: lessonNumber(id), order: lessonNumber(id) }, entries: mod.default });
}
for (const f of listContentFiles(join(ROOT, "src/content"))) {
  if (!f.endsWith(".ts") || f.startsWith("lessons/")) continue;
  if (f.includes("/") && !(f.startsWith("intros/") && f.endsWith("/index.ts"))) continue;
  const mod = await import(`../src/content/${f}`);
  if (mod.meta && Array.isArray(mod.default)) chapters.push({ meta: mod.meta, entries: mod.default });
}

const clips = new Map(); // slug -> { text, from }
const conflicts = [];
const take = (item, from) => {
  const pinyin = item && (item.pinyin ?? item.text);
  if (!pinyin) return;
  const text = item.ttsText || pinyin;
  const slug = item.audioFile || slugify(pinyin);
  if (!slug) return;
  const seen = clips.get(slug);
  if (seen && seen.text !== text) conflicts.push(`${slug}: "${seen.text}" (${seen.from}) vs "${text}" (${from})`);
  else if (!seen) clips.set(slug, { text, from });
};
for (const { meta, entries } of chapters) {
  const view = buildTsChapterView(meta, entries, "eng", refs);
  for (const g of view.flow) {
    if (g.kind === "exercise") g.answers.forEach((a) => take(a, meta.id));
    else if (Array.isArray(g.items)) g.items.forEach((i) => typeof i === "object" && take(i, meta.id));
  }
}

const todo = [...clips].filter(([slug]) => !existsSync(join(OUT, `${slug}.mp3`)));
console.log(`${clips.size} clips in the book, ${todo.length} to make${conflicts.length ? `, ${conflicts.length} clashing names` : ""}`);
for (const c of conflicts) console.log(`  clash: ${c}`);
if (process.argv.includes("--list")) { for (const [s, c] of todo) console.log(`${s}\t${c.text}`); process.exit(0); }

mkdirSync(OUT, { recursive: true });
let n = 0;
const run = (slug, text) => new Promise((done) => {
  const p = spawn("python", ["-m", "edge_tts", "--voice", VOICE, `--rate=${RATE}`, "--text", text, "--write-media", join(OUT, `${slug}.mp3`)]);
  let err = "";
  p.stderr.on("data", (d) => (err += d));
  p.on("close", (code) => {
    if (code !== 0) rmSync(join(OUT, `${slug}.mp3`), { force: true }); // edge-tts leaves an empty file behind
    if (code !== 0) console.error(`failed: ${slug} (${text}): ${err.trim().split(/\r?\n/).pop()}`);
    else if (++n % 100 === 0) console.log(`  ${n}/${todo.length}`);
    done();
  });
});
const queue = [...todo];
await Promise.all(Array.from({ length: 8 }, async () => { for (let t; (t = queue.shift()); ) await run(t[0], t[1].text); }));
console.log(`made ${n} clips in public/audio/`);
