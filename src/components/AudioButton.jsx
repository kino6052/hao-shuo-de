import { useEffect, useState } from 'preact/hooks';
import { cycleSpeed, cycleVoice, getSpeed, getVoice, playAudio, subscribeSpeed, subscribeVoice } from '../lib/audio.js';
import { getState, hasRecording, playMineThenOriginal, sentenceKey, subscribe, toggleRecording } from '../lib/shadow.js';
import styles from './AudioButton.module.css';

const svg = { viewBox: '0 0 24 24', width: 16, height: 16, fill: 'none', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };

function useRerender(subscribeTo) {
  const [, setTick] = useState(0);
  useEffect(() => subscribeTo(() => setTick((t) => t + 1)), []);
}

// `shadow` adds the shadowing-practice buttons: record yourself, hear yourself then the original, slow the original
// down, and switch the original between the female and the male voice.
export function AudioButton({ pinyin, audioFile, ttsText, shadow = false }) {
  const play = (e) => { e.stopPropagation(); playAudio(pinyin, audioFile, ttsText); };
  const speaker = (
    <button class={styles.btn} onClick={play} aria-label={`Play ${pinyin}`} title={`Play ${pinyin}`}>
      <svg {...svg}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    </button>
  );
  return shadow ? <Shadowing {...{ pinyin, audioFile, ttsText, speaker }} /> : speaker;
}

function Shadowing({ pinyin, audioFile, ttsText, speaker }) {
  useRerender(subscribe);
  useRerender(subscribeSpeed);
  useRerender(subscribeVoice);
  const key = sentenceKey(pinyin, audioFile);
  const { key: activeKey, phase, error } = getState();
  const mine = activeKey === key;
  const recording = mine && phase === 'recording';
  const hearingYou = mine && phase === 'mine';
  const stop = (e) => e.stopPropagation();

  return (
    <span class={styles.group} onClick={stop}>
      {speaker}
      <button
        class={`${styles.btn} ${recording ? styles.recording : ''}`}
        onClick={(e) => { stop(e); toggleRecording(key, pinyin, audioFile, ttsText); }}
        aria-label={recording ? 'Stop recording' : `Record yourself saying ${pinyin}`}
        title={recording ? 'Stop recording' : 'Record yourself'}
      >
        <svg {...svg}>
          {recording
            ? <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" stroke="none" />
            : <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></>}
        </svg>
      </button>
      {hasRecording(key) && (
        <button
          class={`${styles.btn} ${hearingYou ? styles.recording : ''}`}
          onClick={(e) => { stop(e); playMineThenOriginal(key, pinyin, audioFile, ttsText); }}
          aria-label="Hear your recording, then the original"
          title="Hear your recording, then the original"
        >
          <svg {...svg}>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21a8 8 0 0 1 16 0" />
          </svg>
        </button>
      )}
      <button
        class={`${styles.btn} ${styles.speed}`}
        onClick={(e) => { stop(e); cycleSpeed(); }}
        aria-label={`Original speed ${getSpeed()}x; press to change`}
        title="Speed of the original"
      >
        {getSpeed()}×
      </button>
      <button
        class={`${styles.btn} ${styles.speed}`}
        onClick={(e) => { stop(e); cycleVoice(); }}
        aria-label={`Original voice ${getVoice()}; press to change`}
        title="Voice of the original: female or male"
      >
        {getVoice() === 'female' ? '♀' : '♂'}
      </button>
      {error && mine && <span class={styles.error}>{error}</span>}
    </span>
  );
}
