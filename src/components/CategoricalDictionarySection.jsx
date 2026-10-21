import { useState } from "preact/hooks";
import dictionary from "../data/dictionary.ts";
import composites from "../data/composites.ts";
import { AudioButton } from "./AudioButton.jsx";
import { getUsageLabels } from "../lib/word-usage.js";
import { t } from "../lib/i18n.js";
import styles from "./CategoricalDictionarySection.module.css";

function WordEntry({ id, lang }) {
  const word = dictionary.words[id];
  if (!word) return null;
  const usage = getUsageLabels(id);
  return (
    <div class={styles.entry}>
      <span class={styles.term}>
        {word.term}
        <AudioButton
          pinyin={word.term}
          audioFile={word.audioFile}
          ttsText={word.ttsText}
        />
      </span>
      {word.pos?.[lang] && <span class={styles.pos}>[{word.pos[lang]}]</span>}
      <span class={styles.def}> — {word.definition[lang]}</span>
      {word.maps && (
        <span class={styles.maps}>
          {" "}
          (Maps to: <i>{word.maps}</i>)
        </span>
      )}
      {usage.length > 0 ? (
        <div class={styles.usage}>
          {t(lang, "usedIn")} {usage.join(", ")}
        </div>
      ) : (
        <div class={styles.usageEmpty}>{t(lang, "notUsedYet")}</div>
      )}
    </div>
  );
}

// The composites on each page (TAGS_PLAN.md D1): a page lists its core words first, then the composites tagged with it. A composite
// that is just a core word (八 is both) is shown once, as the core word.
const CORE_HANZI = new Set(Object.values(dictionary.words).map((w) => w.hanzi));
const ON_PAGE = new Map();
for (const e of composites.entries) {
  if (CORE_HANZI.has(e.zh)) continue;
  for (const topic of e.topics ?? []) ON_PAGE.set(topic, [...(ON_PAGE.get(topic) ?? []), e]);
}
const pageComposites = (node) => ON_PAGE.get(node.key) ?? [];
const memberCount = (node) =>
  node.children
    ? node.children.reduce((sum, child) => sum + memberCount(child), 0)
    : node.wordIds.length + pageComposites(node).length;

function allPaths(nodes, base = "") {
  return nodes.flatMap((n) => {
    const path = base ? generatePath(base, n.key) : n.key;
    return [path, ...(n.children ? allPaths(n.children, path) : [])];
  });
}

function CompositeEntry({ entry, lang }) {
  const gloss = lang === "rus" ? entry.ru : entry.en;
  return (
    <div class={`${styles.entry} ${styles.compound}`}>
      <span class={styles.term}>{entry.py}</span>
      <span class={styles.hanzi}> {entry.zh}</span>
      <span class={styles.def}> — {gloss}</span>
    </div>
  );
}

function generatePath(path, key) {
  return `${path}>${key}`;
}

function CategoryNode({ node, lang, depth, path, collapsed, onToggle }) {
  const title = node.title?.[lang];
  const isOpen = !collapsed.has(path);

  return (
    <div class={depth === 0 ? styles.node : `${styles.node} ${styles.nested}`}>
      {title && (
        <button
          type="button"
          class={styles.nodeHeader}
          data-depth={depth}
          style={{ paddingLeft: `${8 + depth * 12}px` }}
          onClick={() => onToggle(path)}
          aria-expanded={isOpen}
        >
          <span class={styles.chevron} data-open={isOpen}>
            ▸
          </span>
          <span class={styles.nodeTitle}>{title}</span>
          <span class={styles.nodeCount}>{memberCount(node)}</span>
        </button>
      )}
      {(isOpen || !title) && (
        <div class={styles.nodeBody}>
          {node.children
            ? node.children.map((child) => (
                <CategoryNode
                  key={child.key}
                  node={child}
                  lang={lang}
                  depth={depth + 1}
                  path={generatePath(path, child.key)}
                  collapsed={collapsed}
                  onToggle={onToggle}
                />
              ))
            : [
                ...node.wordIds.map((id) => <WordEntry key={id} id={id} lang={lang} />),
                ...pageComposites(node).map((e) => <CompositeEntry key={e.zh} entry={e} lang={lang} />),
              ]}
        </div>
      )}
    </div>
  );
}

export function CategoricalDictionarySection({ lang }) {
  const [collapsed, setCollapsed] = useState(
    new Set(allPaths(dictionary.categories)),
  );

  function onToggle(path) {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }

  return (
    <div class={styles.tree}>
      {dictionary.categories.map((category) => (
        <CategoryNode
          key={category.key}
          node={category}
          lang={lang}
          depth={0}
          path={category.key}
          collapsed={collapsed}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
