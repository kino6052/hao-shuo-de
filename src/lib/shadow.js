// Shadowing practice: record yourself saying a sentence, hear it back at once, then hear the original.
// Recordings are kept in memory (per sentence) until the page is closed.
import { playAudio, playRecording, slugify, stopPlayback } from './audio.js';

const recordings = new Map(); // key -> blob URL
const listeners = new Set();

// phase: 'idle' | 'recording' | 'mine' (your voice playing) | 'original'
let state = { key: null, phase: 'idle', error: null };
let recorder = null;
let token = 0; // bumped whenever a new thing starts, so an old chain stops quietly

export const sentenceKey = (pinyin, audioFile) => audioFile || slugify(pinyin);
export const getState = () => state;
export const hasRecording = (key) => recordings.has(key);

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

function set(next) {
  state = { ...state, ...next };
  listeners.forEach((fn) => fn());
}

// Your recording, and straight after it the original.
export async function playMineThenOriginal(key, pinyin, audioFile, ttsText) {
  const url = recordings.get(key);
  if (!url) return;
  const mine = ++token;
  set({ key, phase: 'mine', error: null });
  const finished = await playRecording(url);
  if (mine !== token || !finished) return endIfCurrent(mine);
  set({ phase: 'original' });
  await playAudio(pinyin, audioFile, ttsText);
  endIfCurrent(mine);
}

function endIfCurrent(mine) {
  if (mine === token) set({ key: null, phase: 'idle' });
}

export function stopShadowing() {
  token++;
  stopPlayback();
  if (recorder) { recorder.discard = true; recorder.stop(); }
  set({ key: null, phase: 'idle' });
}

// First press starts recording; the next press stops it and plays it back.
export async function toggleRecording(key, pinyin, audioFile, ttsText) {
  if (recorder && state.key === key) {
    recorder.stop();
    return;
  }
  stopShadowing();

  let stream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  } catch {
    set({ key, phase: 'idle', error: 'Microphone not available' });
    return;
  }

  const chunks = [];
  const rec = new MediaRecorder(stream);
  recorder = rec;
  rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
  rec.onstop = () => {
    stream.getTracks().forEach((t) => t.stop());
    if (recorder === rec) recorder = null;
    if (rec.discard || !chunks.length) return;
    const old = recordings.get(key);
    if (old) URL.revokeObjectURL(old);
    recordings.set(key, URL.createObjectURL(new Blob(chunks, { type: rec.mimeType })));
    playMineThenOriginal(key, pinyin, audioFile, ttsText);
  };
  rec.start();
  set({ key, phase: 'recording', error: null });
}
