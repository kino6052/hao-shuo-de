#!/usr/bin/env node
// Audio gate: every sentence with a play button has a pronunciation clip, and the clip still says what the
// sentence says. A clip is made once (scripts/generate-audio.js) and kept, so when a sentence or a word changes,
// its old clip would go on saying the old thing. public/audio/manifest.json remembers what each clip was made
// from (voice, speed, text); the gate fails when:
//   - a clip is missing (a new sentence);
//   - a clip is stale (its sentence or word changed since it was made);
//   - a clip has no manifest line (nobody knows what it says; `node scripts/generate-audio.js --adopt`).
// Reported, not errors: clips the book no longer asks for (`node scripts/generate-audio.js --prune`), and file
// names shared by sentences that sound different (the names leave the tones out).
// The fix is `node scripts/generate-audio.js`, which makes the missing and the stale ones (it needs the network).
// Each voice (female in public/audio/, male in public/audio/male/) is checked on its own; the male voice's fix
// is the same command with `--voice male`.
//
//   npm run check-audio              # errors, plus a count of the clips nobody asks for
//   npm run check-audio -- --report  # also list those clips

import { VOICES, audioStatus, collectClips, readManifest } from './audio-clips.js';

const report = process.argv.includes('--report');
const { clips, conflicts } = await collectClips();

const errors = [];
const orphans = []; // 'male/slug' for the male voice's
for (const [name, { voice, dir, manifest }] of Object.entries(VOICES)) {
  const status = audioStatus(clips, readManifest(manifest), dir, voice);
  const folder = name === 'female' ? 'public/audio' : `public/audio/${name}`;
  const opt = name === 'female' ? '' : ` --voice ${name}`;
  const list = (slugs, what, how) => {
    if (!slugs.length) return;
    errors.push(`${slugs.length} ${name} clip(s) ${what} -- ${how}`);
    for (const slug of slugs.slice(0, 8)) errors.push(`    ${slug}: "${clips.get(slug).text}" (${clips.get(slug).from})`);
    if (slugs.length > 8) errors.push(`    … and ${slugs.length - 8} more`);
  };
  list(status.missing, 'missing', `run \`node scripts/generate-audio.js${opt}\``);
  list(status.stale, 'stale: the sentence or word changed after the clip was made', `run \`node scripts/generate-audio.js${opt}\``);
  list(status.unrecorded, `have no line in ${folder}/manifest.json`, `run \`node scripts/generate-audio.js${opt} --adopt\` if they are right as they are`);
  orphans.push(...status.orphans.map((slug) => (name === 'female' ? slug : `${name}/${slug}`)));
}

// File names leave the tones out, so words that differ only by tone (shì 是, shí 时) share one clip: the second
// button plays the first one's sound. It was already so when this gate came, so it is reported, not an error.
if (conflicts.length) {
  if (report) {
    console.log('Reported (not errors): one file name, two sounds -- give one an audioFile:');
    for (const c of conflicts) console.log(`  ${c}`);
  } else console.log(`check-audio: ${conflicts.length} file name(s) are shared by sounds that differ (--report lists them).`);
}
if (orphans.length) {
  if (report) {
    console.log('Reported (not errors): clips the book no longer asks for:');
    for (const slug of orphans) console.log(`  ${slug}`);
  } else console.log(`check-audio: ${orphans.length} clip(s) are no longer in the book (--report lists them; generate-audio --prune deletes them).`);
}
if (errors.length) {
  console.error('\ncheck-audio: the clips and the book disagree:');
  for (const e of errors) console.error(`  ${e.startsWith('    ') ? e : `- ${e}`}`);
  process.exit(1);
}
console.log(`check-audio: OK -- ${clips.size} clips in each of ${Object.keys(VOICES).length} voices, each made from the text the book has now.`);
