// Makes the pronunciation clips (public/audio/<slug>.mp3) for every play button in the book's chapters, with
// Microsoft's edge-tts voices (pip install edge-tts). A clip that is up to date is kept, so only new sentences, and
// sentences or words that changed since their clip was made, are made (again). public/audio/manifest.json remembers
// what each clip was made from; scripts/check-audio.js fails while a clip is missing or stale. The page
// (src/lib/audio.js) asks for the same file names and falls back to the browser's voice.
//
//   node scripts/generate-audio.js            # make the missing and the stale clips
//   node scripts/generate-audio.js --list     # only list what would be made
//   node scripts/generate-audio.js --prune    # also delete the clips the book no longer asks for
//   node scripts/generate-audio.js --adopt    # once: trust the clips that have no manifest line, and write it
//   node scripts/generate-audio.js --voice male   # the same for the male voice (public/audio/male/); female is the default

import { mkdirSync, rmSync } from "fs";
import { join } from "path";
import { spawn } from "child_process";
import { RATE, VOICES, audioStatus, clipHash, collectClips, readManifest, writeManifest } from "./audio-clips.js";

const voiceAt = process.argv.indexOf("--voice");
const voiceName = voiceAt < 0 ? "female" : process.argv[voiceAt + 1];
if (!VOICES[voiceName]) {
  console.error(`--voice takes one of: ${Object.keys(VOICES).join(", ")}`);
  process.exit(1);
}
const { voice: VOICE, dir: OUT, manifest: MANIFEST } = VOICES[voiceName];
const where = OUT.slice(OUT.lastIndexOf("public")).split("\\").join("/");

const { clips, conflicts } = await collectClips();
const manifest = readManifest(MANIFEST);

if (process.argv.includes("--adopt")) {
  const { unrecorded } = audioStatus(clips, manifest, OUT, VOICE);
  for (const slug of unrecorded) manifest[slug] = clipHash(clips.get(slug).text, VOICE);
  writeManifest(manifest, MANIFEST);
  console.log(`adopted ${unrecorded.length} clips into ${where}/manifest.json (they are taken to say what the book says now)`);
  process.exit(0);
}

const { missing, stale, unrecorded, orphans } = audioStatus(clips, manifest, OUT, VOICE);
const todo = [...missing, ...stale].map((slug) => [slug, clips.get(slug)]);
console.log(`${voiceName} voice (${VOICE}): ${clips.size} clips in the book, ${missing.length} missing, ${stale.length} stale${conflicts.length ? `, ${conflicts.length} clashing names` : ""}`);
if (unrecorded.length) console.log(`${unrecorded.length} clips have no manifest line (--adopt records them as they are)`);
for (const c of conflicts) console.log(`  clash: ${c}`);
if (process.argv.includes("--list")) {
  for (const [s, c] of todo) console.log(`${stale.includes(s) ? "stale" : "new"}\t${s}\t${c.text}`);
  if (orphans.length) console.log(`${orphans.length} clips are no longer in the book (--prune deletes them)`);
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
let n = 0;
const run = (slug, text) => new Promise((done) => {
  const p = spawn("python", ["-m", "edge_tts", "--voice", VOICE, `--rate=${RATE}`, "--text", text, "--write-media", join(OUT, `${slug}.mp3`)]);
  let err = "";
  p.stderr.on("data", (d) => (err += d));
  p.on("close", (code) => {
    if (code !== 0) {
      rmSync(join(OUT, `${slug}.mp3`), { force: true }); // edge-tts leaves an empty file behind
      delete manifest[slug];
      console.error(`failed: ${slug} (${text}): ${err.trim().split(/\r?\n/).pop()}`);
    } else {
      manifest[slug] = clipHash(text, VOICE);
      if (++n % 100 === 0) console.log(`  ${n}/${todo.length}`);
    }
    done();
  });
});
const queue = [...todo];
await Promise.all(Array.from({ length: 8 }, async () => { for (let t; (t = queue.shift()); ) await run(t[0], t[1].text); }));

if (process.argv.includes("--prune")) {
  for (const slug of orphans) { rmSync(join(OUT, `${slug}.mp3`), { force: true }); delete manifest[slug]; }
  console.log(`deleted ${orphans.length} clips the book no longer asks for`);
}
writeManifest(manifest, MANIFEST);
console.log(`made ${n} clips in ${where}/`);
