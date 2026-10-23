import { describe, expect, test } from 'bun:test';
import { mkdirSync, mkdtempSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { VOICES, audioStatus, clipHash } from './audio-clips.js';

// A folder with these clips, as files.
const folder = (...slugs) => {
  const dir = mkdtempSync(join(tmpdir(), 'audio-'));
  for (const s of slugs) writeFileSync(join(dir, `${s}.mp3`), 'x');
  return dir;
};
const book = (obj) => new Map(Object.entries(obj).map(([slug, text]) => [slug, { text, from: 'lesson' }]));

describe('audioStatus', () => {
  test('a clip made from the current text is fine', () => {
    const clips = book({ ni_hao: '你好。' });
    const status = audioStatus(clips, { ni_hao: clipHash('你好。') }, folder('ni_hao'));
    expect(status).toEqual({ missing: [], stale: [], unrecorded: [], orphans: [] });
  });

  test('a sentence with no file is missing', () => {
    const status = audioStatus(book({ ni_hao: '你好。' }), {}, folder());
    expect(status.missing).toEqual(['ni_hao']);
  });

  test('a sentence or word that changed after its clip was made is stale', () => {
    const manifest = { shi: clipHash('是') };
    const status = audioStatus(book({ shi: '时' }), manifest, folder('shi'));
    expect(status.stale).toEqual(['shi']);
  });

  test('a clip nobody recorded is unrecorded, not trusted', () => {
    const status = audioStatus(book({ ni_hao: '你好。' }), {}, folder('ni_hao'));
    expect(status.unrecorded).toEqual(['ni_hao']);
    expect(status.stale).toEqual([]);
  });

  test('a file the book no longer asks for is an orphan', () => {
    const status = audioStatus(book({}), {}, folder('old_one'));
    expect(status.orphans).toEqual(['old_one']);
  });

  test('another voice or speed would change the hash too', () => {
    expect(clipHash('你好。')).toBe(clipHash('你好。'));
    expect(clipHash('你好。')).not.toBe(clipHash('你好'));
  });

  test('the male voice keeps its own clips: a female hash is stale for it, and the other way round', () => {
    const male = VOICES.male.voice;
    expect(clipHash('你好。', male)).not.toBe(clipHash('你好。'));
    const clips = book({ ni_hao: '你好。' });
    expect(audioStatus(clips, { ni_hao: clipHash('你好。', male) }, folder('ni_hao'), male).stale).toEqual([]);
    expect(audioStatus(clips, { ni_hao: clipHash('你好。') }, folder('ni_hao'), male).stale).toEqual(['ni_hao']);
  });

  test('the male folder sits inside the female one, but its files are not orphans of the female voice', () => {
    const dir = folder('ni_hao');
    const male = join(dir, 'male');
    mkdirSync(male);
    writeFileSync(join(male, 'ni_hao.mp3'), 'x');
    const clips = book({ ni_hao: '你好。' });
    expect(audioStatus(clips, { ni_hao: clipHash('你好。') }, dir).orphans).toEqual([]);
    expect(audioStatus(clips, { ni_hao: clipHash('你好。', VOICES.male.voice) }, male, VOICES.male.voice))
      .toEqual({ missing: [], stale: [], unrecorded: [], orphans: [] });
  });
});
