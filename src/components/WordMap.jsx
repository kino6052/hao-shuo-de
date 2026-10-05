import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import dictionary from "../data/dictionary.ts";
import composites from "../data/composites.ts";
import coverage from "../data/coverage.ts";
import { analyzeWords, compositeWords, wordCategories } from "../lib/graph.js";
import { resolveWordRefs } from "../lib/word-refs.js";
import { buildWordIndex } from "../lib/dictionary-stats.js";
import styles from "./WordMap.module.css";

// The Word Map: the 200 words as a network, linked when composites use them
// together, so families of words that build things together show up as
// clusters (src/lib/graph.js; `npm run graph-report` prints the same
// analysis as text). Colour is the family, backed by the legend, the labels
// and the list view, so it's never the only cue.

// Categorical slots, fixed order (largest family first); families past the
// eighth are "other" (grey). Validated for both surfaces with the dataviz
// palette checks.
const PALETTE = {
  light: ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4", "#008300", "#4a3aa7", "#e34948"],
  dark: ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#008300", "#9085e9", "#e66767"],
};
const OTHER = { light: "#a39a8c", dark: "#6f675d" };

const TEXT = {
  eng: {
    loading: "Drawing the map…",
    families: "Families",
    list: "The families as a list",
    alone: "In no composite",
    hint: "Hover a word to see its partners; click it for details. Click a family to show only it.",
    showAll: "Show all",
    family: "Family",
    partners: "Builds most with",
    composites: "Composites",
    covers: "Carries",
    category: "Category",
    none: "none",
    words: "words",
    stats: (w, f, a) => `${w} words, ${f} families, ${a} in no composite.`,
    other: "Other",
  },
  rus: {
    loading: "Рисуем карту…",
    families: "Семьи",
    list: "Семьи списком",
    alone: "Ни в одном составном слове",
    hint: "Наведите на слово, чтобы увидеть его партнёров; нажмите для подробностей. Нажмите на семью, чтобы показать только её.",
    showAll: "Показать все",
    family: "Семья",
    partners: "Чаще всего строит с",
    composites: "Составные слова",
    covers: "Несёт",
    category: "Категория",
    none: "нет",
    words: "слов",
    stats: (w, f, a) => `${w} слов, ${f} семей, ${a} — ни в одном составном слове.`,
    other: "Другое",
  },
};

const wordIndex = buildWordIndex(dictionary);
const refs = (text) => resolveWordRefs(text ?? "", wordIndex);
const term = (id) => dictionary.words[id]?.term ?? id;
const gloss = (id, lang) => refs((dictionary.words[id]?.definition?.[lang] || dictionary.words[id]?.definition?.eng || "").split(/[;(]/)[0]);

const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";

export function WordMap({ lang }) {
  const tx = TEXT[lang] ?? TEXT.eng;
  const container = useRef(null);
  const sigmaRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [dark, setDark] = useState(typeof document !== "undefined" && isDark());
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [focus, setFocus] = useState(null); // a family index

  const data = useMemo(() => {
    const a = analyzeWords({ dictionary, composites });
    const cats = wordCategories(dictionary);
    const uses = new Map();
    for (const e of composites.entries) for (const id of compositeWords(e)) uses.set(id, [...(uses.get(id) ?? []), e]);
    const covers = new Map();
    for (const g of coverage.groups) for (const item of g.items) for (const id of item.words) covers.set(id, [...(covers.get(id) ?? []), item.key]);
    return { ...a, cats, uses, covers };
  }, []);

  const colors = dark ? PALETTE.dark : PALETTE.light;
  const familyColor = (f) => (f >= 0 && f < colors.length ? colors[f] : dark ? OTHER.dark : OTHER.light);
  const familyName = (c) => c.ids.slice(0, 3).map(term).join(" / ");

  // follow the app's theme toggle
  useEffect(() => {
    const obs = new MutationObserver(() => setDark(isDark()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  // build the graph and the renderer once
  useEffect(() => {
    let sigma;
    let cancelled = false;
    (async () => {
      const [{ default: Sigma }, { default: forceAtlas2 }, { default: Graph }] = await Promise.all([
        import("sigma"),
        import("graphology-layout-forceatlas2"),
        import("graphology"),
      ]);
      if (cancelled || !container.current) return;
      const g = new Graph({ type: "undirected" });
      const n = data.clusters.length + 1;
      // start each family in its own sector, so the layout settles the same way each time
      let k = 0;
      data.graph.forEachNode((id) => {
        const f = data.parts.get(id);
        const angle = (((f < 0 ? n - 1 : f) + ((k++ * 0.618) % 1)) / n) * 2 * Math.PI;
        const r = 10 + (k % 7);
        g.addNode(id, { x: Math.cos(angle) * r, y: Math.sin(angle) * r, size: 3 + Math.sqrt(data.reach.get(id) ?? 0) * 1.1, label: term(id), family: f });
      });
      // the strongest links only: each word's top three, and anything strong
      const keep = new Set();
      data.graph.forEachNode((id) => {
        const es = [];
        data.graph.forEachEdge(id, (e, a) => es.push([e, a.weight]));
        es.sort((a, b) => b[1] - a[1]).slice(0, 3).forEach(([e]) => keep.add(e));
      });
      data.graph.forEachEdge((e, a, s, t) => {
        if (keep.has(e) || a.weight > 0.35) g.mergeEdge(s, t, { weight: a.weight, size: 0.5 + a.weight * 2 });
      });
      forceAtlas2.assign(g, { iterations: 500, getEdgeWeight: "weight", settings: { ...forceAtlas2.inferSettings(g), gravity: 1.5, scalingRatio: 8 } });
      sigma = new Sigma(g, container.current, {
        labelFont: "Nunito, sans-serif",
        labelWeight: "700",
        labelSize: 12,
        labelRenderedSizeThreshold: 7,
        zIndex: true,
      });
      sigma.on("enterNode", ({ node }) => setHovered(node));
      sigma.on("leaveNode", () => setHovered(null));
      sigma.on("clickNode", ({ node }) => setSelected((s) => (s === node ? null : node)));
      sigma.on("clickStage", () => setSelected(null));
      sigmaRef.current = sigma;
      setReady(true);
    })();
    return () => {
      cancelled = true;
      sigma?.kill();
      sigmaRef.current = null;
    };
  }, [data]);

  // colours, highlighting and theme
  useEffect(() => {
    const sigma = sigmaRef.current;
    if (!sigma) return;
    const g = sigma.getGraph();
    const css = getComputedStyle(container.current);
    const textColor = css.getPropertyValue("--text-primary").trim() || (dark ? "#f3ece0" : "#2b241d");
    const muted = dark ? "#3a342e" : "#e9e1d2";
    const active = hovered ?? selected;
    const near = active ? new Set([active, ...g.neighbors(active)]) : null;
    sigma.setSetting("labelColor", { color: textColor });
    // the hovered word's label on the page's own card colour (Sigma's default is a white box)
    const card = css.getPropertyValue("--bg-card").trim() || (dark ? "#262220" : "#fffdf7");
    const border = css.getPropertyValue("--border-card").trim() || (dark ? "#3e3630" : "#eadfc5");
    sigma.setSetting("defaultDrawNodeHover", (ctx, d, settings) => {
      const size = settings.labelSize;
      ctx.font = `${settings.labelWeight} ${size}px ${settings.labelFont}`;
      const w = d.label ? ctx.measureText(d.label).width : 0;
      const x = d.x + d.size + 4;
      ctx.fillStyle = card;
      ctx.strokeStyle = border;
      ctx.lineWidth = 1;
      if (w) {
        ctx.beginPath();
        ctx.roundRect(x - 4, d.y - size / 2 - 4, w + 8, size + 8, 6);
        ctx.fill();
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.size + 2, 0, Math.PI * 2);
      ctx.strokeStyle = textColor;
      ctx.lineWidth = 2;
      ctx.stroke();
      if (w) {
        ctx.fillStyle = textColor;
        ctx.fillText(d.label, x, d.y + size / 3);
      }
    });
    sigma.setSetting("defaultEdgeColor", dark ? "#4a423a" : "#d9cfbd");
    sigma.setSetting("nodeReducer", (node, attrs) => {
      const out = { ...attrs, color: familyColor(attrs.family) };
      const dim = (near && !near.has(node)) || (focus !== null && attrs.family !== focus);
      if (dim) return { ...out, color: muted, label: "", zIndex: 0 };
      if (near?.has(node) || focus !== null) return { ...out, forceLabel: true, zIndex: 1, highlighted: node === active };
      return out;
    });
    sigma.setSetting("edgeReducer", (edge, attrs) => {
      const [s, t] = g.extremities(edge);
      if (active) return s === active || t === active ? { ...attrs, color: familyColor(g.getNodeAttribute(active, "family")), size: attrs.size + 0.5 } : { ...attrs, hidden: true };
      if (focus !== null && (g.getNodeAttribute(s, "family") !== focus || g.getNodeAttribute(t, "family") !== focus)) return { ...attrs, hidden: true };
      return attrs;
    });
    sigma.refresh();
  }, [ready, dark, hovered, selected, focus]);

  const info = selected && dictionary.words[selected];
  const partners = useMemo(() => {
    if (!selected || !data.graph.hasNode(selected)) return [];
    const list = [];
    data.graph.forEachEdge(selected, (e, a, s, t) => list.push([s === selected ? t : s, a.count]));
    return list.sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [selected]);

  return (
    <div class={styles.map}>
      <p class={styles.stats}>{tx.stats(Object.keys(dictionary.words).length, data.clusters.length, data.alone.length)} {tx.hint}</p>

      <div class={styles.legend} role="group" aria-label={tx.families}>
        {data.clusters.map((c) => (
          <button
            key={c.index}
            class={`${styles.chip} ${focus === c.index ? styles.chipOn : ""}`}
            onClick={() => setFocus(focus === c.index ? null : c.index)}
            aria-pressed={focus === c.index}
          >
            <span class={styles.swatch} style={{ background: familyColor(c.index) }} />
            {c.index < colors.length ? familyName(c) : `${tx.other}: ${familyName(c)}`} <span class={styles.count}>{c.ids.length}</span>
          </button>
        ))}
        {focus !== null && (
          <button class={styles.chip} onClick={() => setFocus(null)}>
            {tx.showAll}
          </button>
        )}
      </div>

      <div class={styles.canvasWrap}>
        <div ref={container} class={styles.canvas} />
        {!ready && <div class={styles.loading}>{tx.loading}</div>}
      </div>

      {info && (
        <div class={styles.panel}>
          <div class={styles.panelHead}>
            <span class={styles.swatch} style={{ background: familyColor(data.parts.get(selected) ?? -1) }} />
            <strong class={styles.term}>{info.term}</strong> <span class={styles.hanzi}>{info.hanzi}</span>
            <span class={styles.gloss}>{gloss(selected, lang)}</span>
          </div>
          <dl class={styles.facts}>
            <dt>{tx.family}</dt>
            <dd>{data.parts.get(selected) >= 0 ? familyName(data.clusters[data.parts.get(selected)]) : tx.alone}</dd>
            <dt>{tx.partners}</dt>
            <dd>
              {partners.length
                ? partners.map(([id, n], i) => (
                    <>
                      {i > 0 && ", "}
                      <button class={styles.link} onClick={() => setSelected(id)}>
                        {term(id)}
                      </button>{" "}
                      <span class={styles.count}>{n}</span>
                    </>
                  ))
                : tx.none}
            </dd>
            <dt>
              {tx.composites} ({(data.uses.get(selected) ?? []).length})
            </dt>
            <dd>
              {(data.uses.get(selected) ?? []).slice(0, 24).map((e) => `${e.zh} ${lang === "rus" ? e.ru : e.en}`).join(" · ") || tx.none}
            </dd>
            <dt>{tx.covers}</dt>
            <dd>{(data.covers.get(selected) ?? []).join(", ") || tx.none}</dd>
            <dt>{tx.category}</dt>
            <dd>{data.cats.get(selected)?.path.join(" › ") ?? tx.none}</dd>
          </dl>
        </div>
      )}

      <details class={styles.list}>
        <summary>{tx.list}</summary>
        <table>
          <tbody>
            {data.clusters.map((c) => (
              <tr key={c.index}>
                <th scope="row">
                  <span class={styles.swatch} style={{ background: familyColor(c.index) }} /> {familyName(c)}
                </th>
                <td>
                  {c.ids.map((id, i) => (
                    <>
                      {i > 0 && ", "}
                      <button class={styles.link} onClick={() => setSelected(id)}>
                        {term(id)}
                      </button>
                    </>
                  ))}
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">{tx.alone}</th>
              <td>{data.alone.map(term).join(", ") || tx.none}</td>
            </tr>
          </tbody>
        </table>
      </details>
    </div>
  );
}
