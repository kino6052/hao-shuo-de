// The pronunciation clips of the book (public/audio/<slug>.mp3), in one place for the script that makes them
// (scripts/generate-audio.js) and the gate that checks them (scripts/check-audio.js).
//
// Every play button in the book's chapters asks for one clip: its file name (the slug) comes from the pinyin of the
// sentence (src/lib/audio.js), and the text that is read aloud is its ttsText, or the pinyin. A clip is made once and
// kept, so a sentence or a word that changes later would keep its old sound if nothing noticed. public/audio/manifest.json
// remembers, for each clip, a hash of what it was made from (voice, speed and text); a clip whose hash differs from
// what the book says now is stale, and the gate fails until it is made again.

import { createHash } from 'crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import dictionaryData from '../src/data/dictionary.ts';
import { countDictionaryWords, buildWordIndex } from '../src/lib/dictionary-stats.js';
import { buildTsChapterView } from '../src/lib/chapter-content.js';
import { slugify } from '../src/lib/audio.js';
import { lessonNumber } from '../src/content/book.js';
import { LESSON_IDS } from './lessons.js';
import { listContentFiles } from './list-content-files.js';

export const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
export const OUT = join(ROOT, 'public/audio');
export const MANIFEST = join(OUT, 'manifest.json');
export const VOICE = 'zh-CN-XiaoxiaoNeural';
export const RATE = '-15%';

// The voices the book can be read in. The female one came first and keeps public/audio/<slug>.mp3 and its manifest;
// each other voice has a folder of its own (public/audio/male/<slug>.mp3, with its own manifest.json), so making
// or changing the clips of one voice never makes the other's stale or orphaned. src/lib/audio.js asks for the same paths.
export const VOICES = {
  female: { voice: VOICE, dir: OUT, manifest: MANIFEST },
  male: { voice: 'zh-CN-YunxiNeural', dir: join(OUT, 'male'), manifest: join(OUT, 'male', 'manifest.json') },
};

// -> a short hash of what a clip is made from; a change of voice, speed or text changes it
export const clipHash = (text, voice = VOICE) => createHash('sha1').update(`${voice}|${RATE}|${text}`).digest('hex').slice(0, 10);

// -> the sound of a pinyin sentence: its letters, tone marks kept, no spaces, hyphens or punctuation
const soundOf = (pinyin) => pinyin.normalize('NFC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');

// -> { clips: Map(slug -> { text, from }), conflicts: ['slug: "a" (lesson) vs "b" (lesson)'] } for every play button of the book
export async function collectClips() {
  const refs = { wordIndex: buildWordIndex(dictionaryData), wordCount: countDictionaryWords(dictionaryData),
    chapterTitles: { eng: { get: (id) => id } } }; // titles don't matter here, only the sentences

  const chapters = []; // { meta, entries }
  for (const id of LESSON_IDS) {
    const mod = await import(`../src/content/lessons/${id}/index.ts`);
    chapters.push({ meta: { ...mod.meta, lessonNumber: lessonNumber(id), order: lessonNumber(id) }, entries: mod.default });
  }
  for (const f of listContentFiles(join(ROOT, 'src/content'))) {
    if (!f.endsWith('.ts') || f.startsWith('lessons/')) continue;
    if (f.includes('/') && !(f.startsWith('intros/') && f.endsWith('/index.ts'))) continue;
    const mod = await import(`../src/content/${f}`);
    if (mod.meta && Array.isArray(mod.default)) chapters.push({ meta: mod.meta, entries: mod.default });
  }

  const clips = new Map();
  const conflicts = [];
  const take = (item, from) => {
    const pinyin = item && (item.pinyin ?? item.text);
    if (!pinyin) return;
    const text = item.ttsText || pinyin;
    const slug = item.audioFile || slugify(pinyin);
    if (!slug) return;
    const sound = soundOf(pinyin);
    const seen = clips.get(slug);
    // two texts on one file are only a clash when they sound different (他/她, or a full stop, share a clip fine);
    // the file name leaves the tones out, so shì 是 and shí 时 would otherwise share one clip
    if (seen && seen.sound !== sound) conflicts.push(`${slug}: "${seen.text}" ${seen.pinyin} (${seen.from}) vs "${text}" ${pinyin} (${from})`);
    else if (!seen) clips.set(slug, { text, from, sound, pinyin });
  };
  for (const { meta, entries } of chapters) {
    const view = buildTsChapterView(meta, entries, 'eng', refs);
    for (const g of view.flow) {
      if (g.kind === 'exercise') g.answers.forEach((a) => take(a, meta.id));
      else if (Array.isArray(g.items)) g.items.forEach((i) => typeof i === 'object' && take(i, meta.id));
    }
  }
  return { clips, conflicts };
}

// -> { slug: hash } of the clips as they were made; {} before the first one
export function readManifest(file = MANIFEST) {
  try {
    return JSON.parse(readFileSync(file, 'utf-8'));
  } catch {
    return {};
  }
}

export function writeManifest(manifest, file = MANIFEST) {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
  writeFileSync(file, `${JSON.stringify(sorted, null, 1)}\n`);
}

// What is wrong with the clips, given what the book needs.
// -> { missing: [slug], stale: [slug], unrecorded: [slug], orphans: [slug] }
//    missing: the book needs it, there is no file
//    stale: the file was made from other text (or voice or speed) than the book has now
//    unrecorded: the file exists but the manifest has no line for it, so nobody knows what it says
//    orphans: files the book no longer asks for
//    voice: the edge-tts voice the clips should be in (VOICES.male.voice for the male folder)
export function audioStatus(clips, manifest = readManifest(), dir = OUT, voice = VOICE) {
  const files = new Set(existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.mp3')).map((f) => f.slice(0, -4)) : []);
  const missing = [];
  const stale = [];
  const unrecorded = [];
  for (const [slug, { text }] of clips) {
    if (!files.has(slug)) missing.push(slug);
    else if (!(slug in manifest)) unrecorded.push(slug);
    else if (manifest[slug] !== clipHash(text, voice)) stale.push(slug);
  }
  const orphans = [...files].filter((slug) => !clips.has(slug));
  return { missing, stale, unrecorded, orphans };
}
