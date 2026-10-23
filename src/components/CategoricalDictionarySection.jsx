import { Fragment } from "preact";
import { useState, useEffect, useMemo } from "preact/hooks";
import dictionary from "../data/dictionary.ts";
import composites from "../data/composites.ts";
import { AudioButton } from "./AudioButton.jsx";
import { Hsd, Zh } from "./Hsd.jsx";
import { getUsageLabels } from "../lib/word-usage.js";
import { categoricalPages } from "../lib/categorical-entries.js";
import { matcher, filterTree, firstOfTree } from "../lib/dictionary-search.js";
import { SearchBox } from "./SearchBox.jsx";
import { LoadMore } from "./LoadMore.jsx";
import { t } from "../lib/i18n.js";
import styles from "./CategoricalDictionarySection.module.css";

function WordEntry({ id, lang }) {
  const word = dictionary.words[id];
  if (!word) return null;
  const usage = getUsageLabels(id);
  return (
    <div class={styles.entry}>
      <span class={styles.term}>
        <Hsd pinyin={word.term} refs={`{{word:${id}}}`} />
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

// The composites on each page (TAGS_PLAN.md D1): a page lists its core words first, then the composites tagged with it, each as
// its Hao-shuo-de description (src/lib/categorical-entries.js lists only entries made of core words; check-data gates it). A
// composite that is just a core word (八 is both) is shown once, as the core word.
const CORE_HANZI = new Set(Object.values(dictionary.words).map((w) => w.hanzi));
const { pages: ON_PAGE } = categoricalPages(composites.entries, CORE_HANZI, (id) => dictionary.words[id]?.term);
const pageComposites = (node) => node.entries ?? ON_PAGE.get(node.key) ?? [];
const memberCount = (node) =>
  node.children
    ? node.children.reduce((sum, child) => sum + memberCount(child), 0)
    : node.wordIds.length + pageComposites(node).length;

// The search (src/lib/dictionary-search.js): a core word by its pinyin, hanzi, either meaning or the other spellings it has; a
// composite by its description, its hanzi or its meaning; a page or group by its name in any language.
const wordMatches = (match) => (id) => {
  const w = dictionary.words[id];
  return Boolean(w) && match(w.term, w.hanzi, w.definition?.eng, w.definition?.rus, w.maps, ...Object.values(w.senses ?? {}).map((x) => x.hanzi));
};
const entryMatches = (match) => (e) => match(...e.forms, e.zh, e.en, e.ru);
const titleMatches = (match) => (node) => match(...Object.values(node.title ?? {}));

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
      <span class={styles.term}>
        {entry.forms.map((form, i) => (
          <Fragment key={i}>
            {i > 0 && " / "}
            <Hsd pinyin={form} refs={entry.refs[i]} />
          </Fragment>
        ))}
      </span>
      <Zh class={styles.hanzi} text={entry.zh} before=" " />
      <span class={styles.def}> — {gloss}</span>
    </div>
  );
}

function generatePath(path, key) {
  return `${path}>${key}`;
}

function CategoryNode({ node, lang, depth, path, collapsed, onToggle, searching }) {
  const title = node.title?.[lang];
  const isOpen = searching || !collapsed.has(path);

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
          <span class={styles.nodeCount}>{node.count ?? memberCount(node)}</span>
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
                  searching={searching}
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

// A search draws its first FIRST matches, then a batch more as the reader nears the end; it runs once typing pauses (PAUSE ms).
const FIRST = 80;
const BATCH = 160;
const PAUSE = 150;

export function CategoricalDictionarySection({ lang }) {
  const [collapsed, setCollapsed] = useState(
    () => new Set(allPaths(dictionary.categories)),
  );

  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const id = setTimeout(() => setSearch(query), PAUSE);
    return () => clearTimeout(id);
  }, [query]);
  const match = useMemo(() => matcher(search), [search]);
  const found = useMemo(
    () =>
      match &&
      filterTree(dictionary.categories, {
        titleMatches: titleMatches(match),
        wordMatches: wordMatches(match),
        pageEntries: pageComposites,
        entryMatches: entryMatches(match),
      }),
    [match],
  );
  const total = useMemo(() => found && found.reduce((sum, node) => sum + memberCount(node), 0), [found]);
  const [drawn, setDrawn] = useState({ search, n: FIRST });
  const n = drawn.search === search ? drawn.n : FIRST;
  const tree = found ? firstOfTree(found, n, { pageEntries: pageComposites, count: memberCount }).nodes : dictionary.categories;

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
      <SearchBox
        lang={lang}
        query={query}
        onQuery={setQuery}
        found={match ? total : null}
      />
      {tree.map((category) => (
        <CategoryNode
          key={category.key}
          node={category}
          lang={lang}
          depth={0}
          path={category.key}
          collapsed={collapsed}
          onToggle={onToggle}
          searching={Boolean(match)}
        />
      ))}
      {match && <LoadMore shown={Math.min(n, total)} total={total} label={t(lang, "showMore")} onMore={() => setDrawn({ search, n: n + BATCH })} />}
    </div>
  );
}
