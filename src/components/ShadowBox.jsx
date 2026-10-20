import { useEffect, useState } from 'preact/hooks';
import { sentenceKey, staleness, subscribe } from '../lib/shadow.js';

// The box around a sentence that has shadowing buttons. It stays plain until the sentence is
// practised, then turns green and slowly red: a full week without practice and it is fully red.
export function ShadowBox({ pinyin, audioFile, style, children, ...rest }) {
  const [, setTick] = useState(0);
  useEffect(() => subscribe(() => setTick((t) => t + 1)), []);

  const old = pinyin ? staleness(sentenceKey(pinyin, audioFile)) : null;
  let tint;
  if (old !== null) {
    const hue = Math.round(120 * (1 - old));
    tint = {
      background: `hsla(${hue}, 70%, 50%, 0.18)`,
      borderColor: `hsl(${hue}, 60%, 45%)`,
      boxShadow: `inset 5px 0 0 hsl(${hue}, 60%, 45%)`,
    };
  }
  return <div {...rest} style={{ ...style, ...tint }}>{children}</div>;
}
