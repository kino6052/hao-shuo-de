// The writing settings at work in the browser (src/lib/settings.js), fetched only once the reader turns hanzi or hover
// translations on, so the default pinyin page carries none of this or the word data:
//   <hsd-w w=CODES>pinyin</hsd-w>  a word in a chapter's HTML (src/lib/word-refs.js), written in the chosen script
//   textSegments({ refs, pinyin, hanzi }) -> the segments src/components/Hsd.jsx writes a sentence from
//   the hover box: the word under the pointer (or a tap), any element with data-hw=CODES, with its first meaning and
//   its parts', like a pop-up dictionary but shorter; never inside [data-no-hover] (the tests)

import { WORDS } from '../data/words/index.ts';
import { getSettings, subscribeSettings } from './settings.js';
import { replaceWordRefs, refTerm } from './word-refs.js';
import { pinyinProblems } from './pinyin-refs.js';
import { segments, fromCodes, withAuthored, rubyPairs, wordHanzi, short } from './script-words.js';

export { hanziText, rubyPairs, wordHanzi } from './script-words.js';

// -> the segments of a Hao-shuo-de text: from its refs when the page has them, else read back from its pinyin. Plain
// pinyin among the refs ({{word:zhe4}}-ge) is read back too; what isn't a word stays as it is.
export function textSegments({ refs, pinyin, hanzi }) {
  return withAuthored(segments(pinyinProblems(refs ?? pinyin ?? '', WORDS).refs, WORDS), hanzi);
}

// -> the CODES for a word's data-hw (src/lib/word-refs.js chainCodes; light tones don't matter here)
export const wordCodes = (word) => word.parts.map((p) => (p.id ? `${p.id}${p.sense ? `#${p.sense}` : ''}` : 'r')).join('.');

// -> a word written for the script, as DOM nodes
function wordNodes(word, script, pinyin) {
  if (script === 'pinyin') return [document.createTextNode(pinyin)];
  if (script === 'hanzi') return [document.createTextNode(wordHanzi(word))];
  const ruby = document.createElement('ruby');
  for (const [zh, py] of rubyPairs(word)) {
    ruby.append(zh);
    const rt = document.createElement('rt');
    rt.textContent = py;
    ruby.append(rt);
  }
  return [ruby];
}

class HsdWord extends HTMLElement {
  connectedCallback() {
    if (!this._word) {
      this._pinyin = this.textContent;
      this._word = fromCodes(this.getAttribute('w') ?? '', WORDS);
      this.dataset.hw = wordCodes(this._word);
    }
    this._off = subscribeSettings(() => this.paint());
    this.paint();
  }
  disconnectedCallback() {
    this._off?.();
  }
  paint() {
    const { script } = getSettings();
    if (script === this._painted) return;
    this._painted = script;
    if (script === 'pinyin') this.removeAttribute('lang');
    else this.setAttribute('lang', 'zh-Hans');
    this.replaceChildren(...wordNodes(this._word, script, this._pinyin));
  }
}
if (!customElements.get('hsd-w')) customElements.define('hsd-w', HsdWord);

// --- the hover box ---

const LANGS = { en: 'eng', ru: 'rus', zh: 'zh' };
const readerLang = () => LANGS[document.documentElement.lang] ?? 'eng';
const plain = (text) => replaceWordRefs(String(text ?? ''), (id, kind) => refTerm(WORDS[id]?.term ?? id, kind)).replace(/\{\{[^}]*\}\}/g, '');

function wordMeaning(id, sense, lang) {
  const w = WORDS[id];
  if (!w) return '';
  if (sense) {
    const s = w.senses?.[sense];
    return lang === 'zh' ? s?.hanzi ?? '' : plain(s?.[lang] ?? s?.eng);
  }
  return plain(w.definition?.[lang] ?? w.definition?.eng);
}

// the composites' meanings by the ids of a one-chain form ("xue2 xiao4" -> school), fetched once hover is on
let glosses = null;
let glossesLoading = null;
function loadGlosses() {
  glossesLoading ??= import('../data/composites.ts').then(({ default: composites }) => {
    const map = new Map();
    for (const e of composites.entries) {
      for (const form of (e.hsd ?? '').split(' / ')) {
        const chain = segments(form, WORDS);
        if (chain.length !== 1 || !chain[0].word) continue;
        const key = chain[0].word.parts.filter((p) => p.id).map((p) => p.id).join(' ');
        if (!map.has(key)) map.set(key, { eng: e.en, rus: e.ru, zh: e.zh });
      }
    }
    glosses = map;
  });
  return glossesLoading;
}

let tip = null;
let shownFor = null;

function tipElement() {
  if (tip) return tip;
  tip = document.createElement('div');
  tip.className = 'hsd-tip';
  tip.setAttribute('role', 'tooltip');
  document.body.append(tip);
  return tip;
}

function element(tag, cls, text) {
  const el = document.createElement(tag);
  el.className = cls;
  el.textContent = text;
  return el;
}
const line = (cls, text) => element('div', cls, text);

// The box, short and to the point: the word (its characters and reading only while the reader writes in hanzi; in
// pinyin it is the word under the pointer), its first meaning, and for a word of several parts what each part means:
//   学校 xué-xiào / school / 学 study + 校 school
function fill(el) {
  const word = fromCodes(el.dataset.hw, WORDS);
  const { script } = getSettings();
  const lang = readerLang();
  const parts = word.parts.filter((p) => p.id);
  const whole = glosses?.get(parts.map((p) => p.id).join(' '))?.[lang] ?? (parts.length === 1 ? wordMeaning(parts[0].id, parts[0].sense, lang) : '');
  const box = tipElement();
  box.replaceChildren();
  if (script !== 'pinyin') {
    const head = line('hsd-tip-head', '');
    const zh = element('span', 'hsd-tip-zh', wordHanzi(word));
    zh.lang = 'zh-Hans';
    head.append(zh, ' ', element('span', 'hsd-tip-py', word.py.toLowerCase()));
    box.append(head);
  }
  if (whole) box.append(line('hsd-tip-main', short(whole)));
  if (parts.length > 1 || !whole) {
    const each = parts.map((p) => `${script === 'pinyin' ? p.py.toLowerCase() : p.zh} ${short(wordMeaning(p.id, p.sense, lang))}`);
    box.append(line('hsd-tip-parts', each.join(' + ')));
  }
}

function place(el) {
  const box = tipElement();
  const r = el.getBoundingClientRect();
  box.style.visibility = 'hidden';
  box.style.display = 'block';
  const w = box.offsetWidth;
  const h = box.offsetHeight;
  const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 8));
  const top = r.bottom + 6 + h > window.innerHeight ? r.top - h - 6 : r.bottom + 6;
  box.style.left = `${left}px`;
  box.style.top = `${Math.max(8, top)}px`;
  box.style.visibility = '';
}

function show(el) {
  shownFor = el;
  fill(el);
  place(el);
  if (!glosses) {
    loadGlosses().then(() => {
      if (shownFor === el) {
        fill(el);
        place(el);
      }
    });
  }
}

function hide() {
  shownFor = null;
  if (tip) tip.style.display = 'none';
}

// -> the word element under the event that may show a box, or null
function target(e) {
  if (!getSettings().hover) return null;
  const el = e.target instanceof Element ? e.target.closest('[data-hw]') : null;
  return el && !el.closest('[data-no-hover]') ? el : null;
}

document.addEventListener('mouseover', (e) => {
  const el = target(e);
  if (el && el !== shownFor) show(el);
  else if (!el && shownFor) hide();
});
// a tap shows the box on a touch screen; a tap anywhere else hides it
document.addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'touch') return;
  const el = target(e);
  if (el) show(el);
  else hide();
});
window.addEventListener('scroll', hide, true);
if (getSettings().hover) loadGlosses();
subscribeSettings((s) => {
  if (s.hover) loadGlosses();
  else hide();
});
