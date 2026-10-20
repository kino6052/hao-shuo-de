import { assetUrl } from './asset-url.js';

const DIACRITICS =/[̀-ͯ]/g;

export function slugify(pinyin) {
  return pinyin
    .normalize('NFD')
    .replace(DIACRITICS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}

// ---- Playback speed of the original clip (one setting for the whole app) ----

export const SPEEDS = [1, 0.75, 0.5];
const SPEED_KEY = 'hsd-audio-speed';
const speedListeners = new Set();

let speed = (() => {
  try {
    const saved = Number(localStorage.getItem(SPEED_KEY));
    return SPEEDS.includes(saved) ? saved : 1;
  } catch {
    return 1;
  }
})();

export function getSpeed() {
  return speed;
}

export function cycleSpeed() {
  speed = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
  try { localStorage.setItem(SPEED_KEY, String(speed)); } catch { /* private window */ }
  speedListeners.forEach((fn) => fn());
  return speed;
}

export function subscribeSpeed(fn) {
  speedListeners.add(fn);
  return () => speedListeners.delete(fn);
}

// ---- One thing plays at a time ----

let stopCurrent = null;

export function stopPlayback() {
  if (stopCurrent) stopCurrent();
}

// `start(finish)` begins playing and returns a function that cancels it.
// The promise says whether the clip played to its end (true) or was cut off (false).
function run(start) {
  stopPlayback();
  return new Promise((resolve) => {
    let done = false;
    let cancel = () => {};
    const finish = (completed) => {
      if (done) return;
      done = true;
      if (stopCurrent === stop) stopCurrent = null;
      resolve(completed);
    };
    const stop = () => { finish(false); cancel(); };
    stopCurrent = stop;
    cancel = start(finish) || cancel;
  });
}

// The original clip, at the chosen speed; falls back to the browser's voice.
export function playAudio(pinyin, audioFile, ttsText) {
  const fallback = ttsText || pinyin;
  const slug = audioFile || slugify(pinyin);
  const src = assetUrl(`audio/${slug}.mp3`);

  return run((finish) => {
    const audio = new Audio(src);
    audio.playbackRate = speed;
    audio.preservesPitch = true;
    const useVoice = () => speakTTS(fallback, () => finish(true));
    audio.addEventListener('ended', () => finish(true));
    audio.addEventListener('error', useVoice);
    audio.play().catch(useVoice);
    return () => {
      audio.pause();
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  });
}

// A recording the learner made (a blob URL), at normal speed.
export function playRecording(url) {
  return run((finish) => {
    const audio = new Audio(url);
    audio.addEventListener('ended', () => finish(true));
    audio.addEventListener('error', () => finish(false));
    audio.play().catch(() => finish(false));
    return () => audio.pause();
  });
}

function speakTTS(text, onEnd) {
  if (!window.speechSynthesis) { onEnd(); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'zh-CN';
  u.rate = 0.85 * speed;
  u.onend = onEnd;
  u.onerror = onEnd;
  const voices = window.speechSynthesis.getVoices();
  const zh = voices.find(v => v.lang.startsWith('zh'));
  if (zh) u.voice = zh;
  window.speechSynthesis.speak(u);
}
