import { useEffect, useMemo, useState } from 'preact/hooks';
import { needsScript, useSettings } from '../lib/settings.js';

// Hao-shuo-de text on the page, in the reader's script (src/lib/settings.js). The only place a component may show
// hanzi (scripts/check-hanzi.js): with the default pinyin, it shows the pinyin and fetches nothing.
//   <Hsd pinyin="Wǒ hěn hǎo." refs="{{Word:wo3}} {{word:hen3}} {{word:hao3}}." hanzi="我很好。" />
// `pinyin` is what the page shows today; `refs`, when the page has them, say exactly which words these are (else
// they are read back from the pinyin); `hanzi`, the characters the author wrote, win where they spell the same words.

let core = null;
let loading = null;
const loadCore = () =>
  (loading ??= import('../lib/script.js').then((m) => {
    core = m;
    return m;
  }));

// -> src/lib/script.js once a setting needs it, else null
export function useScript() {
  const settings = useSettings();
  const wanted = needsScript(settings);
  const [, setLoaded] = useState(Boolean(core));
  useEffect(() => {
    if (wanted && !core) loadCore().then(() => setLoaded(true));
  }, [wanted]);
  return { settings, script: wanted ? core : null };
}

export function Hsd({ pinyin, refs, hanzi, class: cls }) {
  const { settings, script } = useScript();
  const segs = useMemo(() => script && script.textSegments({ refs, pinyin, hanzi }), [script, refs, pinyin, hanzi]);
  if (!segs) return cls ? <span class={cls}>{pinyin}</span> : pinyin;
  const mode = settings.script;
  return (
    <span class={cls} lang={mode === 'pinyin' ? undefined : 'zh-Hans'}>
      {segs.map((s, i) => {
        if (!s.word) return mode === 'pinyin' ? s.text : script.hanziText(s.text);
        const codes = script.wordCodes(s.word);
        if (mode === 'pinyin') return <span key={i} data-hw={codes}>{s.word.py}</span>;
        if (mode === 'hanzi') return <span key={i} data-hw={codes}>{script.wordHanzi(s.word)}</span>;
        return (
          <ruby key={i} data-hw={codes}>
            {script.rubyPairs(s.word).map(([zh, py]) => (
              <>
                {zh}
                <rt>{py}</rt>
              </>
            ))}
          </ruby>
        );
      })}
    </span>
  );
}

// Characters that are not a Hao-shuo-de text (a composite's Mandarin word, the character of a word's other meaning):
// shown only while the reader writes in hanzi, else nothing.
export function Zh({ text, class: cls, before = '', after = '' }) {
  const settings = useSettings();
  if (!text || settings.script === 'pinyin') return null;
  return (
    <span class={cls} lang="zh-Hans">
      {before}
      {text}
      {after}
    </span>
  );
}

// -> a label for a word or a Mandarin word in a list: its pinyin, with the characters in front while the reader writes in
// hanzi ("学校 xué-xiào")
export const zhLabel = (settings, zh, py) => (settings.script === 'pinyin' || !zh ? py : `${zh} ${py}`);

const MARKUP = /(<hsd-w w=[^\s>]*>[^<]*<\/hsd-w>|<hsd-h>[^<]*<\/hsd-h>)/;
const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// A plain-text string from a chapter that may carry word markup (src/lib/chapter-content.js `show`): the words
// become <hsd-w> elements, which src/lib/script.js writes in the reader's script; the rest stays text.
export function Rich({ text }) {
  useScript(); // fetches the writing once a setting needs it, so the elements get written
  if (text == null) return null;
  if (!MARKUP.test(text)) return text;
  const html = text
    .split(MARKUP)
    .map((part, i) => (i % 2 ? part : escape(part)))
    .join('');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
