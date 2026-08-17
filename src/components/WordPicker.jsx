import { useState, useRef, useEffect } from "preact/hooks";
import { searchPool, resolveInlineRefs } from "../lib/sentence-builder.js";
import { t } from "../lib/i18n.js";
import styles from "./WordPicker.module.css";

export function WordPicker({ dict, pool, lang, title, onPick, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = searchPool(dict, pool, query, lang);

  return (
    <div class={styles.overlay} onClick={onClose}>
      <div class={styles.card} onClick={(e) => e.stopPropagation()}>
        <div class={styles.header}>
          <span class={styles.title}>{title}</span>
          <button
            type="button"
            class={styles.close}
            onClick={onClose}
            aria-label={t(lang, "sbClose")}
          >
            ✕
          </button>
        </div>
        <input
          ref={inputRef}
          class={styles.search}
          type="text"
          value={query}
          onInput={(e) => setQuery(e.currentTarget.value)}
          placeholder={t(lang, "sbSearchPlaceholder")}
        />
        <div class={styles.list}>
          {results.length === 0 && (
            <div class={styles.empty}>{t(lang, "sbNoResults")}</div>
          )}
          {results.map((id) => {
            const w = dict.words[id];
            return (
              <button
                type="button"
                key={id}
                class={styles.item}
                onClick={() => onPick(id)}
              >
                <span class={styles.term}>{w.term}</span>
                {w.pos?.[lang] && <span class={styles.pos}>{w.pos[lang]}</span>}
                <span class={styles.def}>{resolveInlineRefs(dict, w.definition[lang])}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
