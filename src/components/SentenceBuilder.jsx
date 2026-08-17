import { useState, useEffect } from "preact/hooks";
import dictionary from "../data/dictionary.json";
import { t } from "../lib/i18n.js";
import { AudioButton } from "./AudioButton.jsx";
import { WordPicker } from "./WordPicker.jsx";
import { PhraseChip } from "./PhraseChip.jsx";
import {
  nounPool,
  adjectivePool,
  predicatePool,
  newPredicate,
  addModifier,
  renderSentence,
  glossSentence,
  getAtPath,
  setAtPath,
  encodeState,
  decodeState,
  term,
  resolveInlineRefs,
} from "../lib/sentence-builder.js";
import styles from "./SentenceBuilder.module.css";

const EMPTY_STATE = { subject: null, predicate: null, object: null };

function initialState() {
  const params = new URLSearchParams(window.location.search);
  return decodeState(params.get("s"));
}

export function SentenceBuilder({ lang }) {
  const [state, setState] = useState(initialState);
  const [picker, setPicker] = useState(null);
  const [copied, setCopied] = useState(false);

  // Keep the current sentence in the URL's query string so the page is
  // shareable/refresh-safe. Uses replaceState (not the app router's
  // pushState-based navigate) so it never fights the sidebar's own history
  // entries and doesn't spam browser history on every click.
  useEffect(() => {
    const encoded = encodeState(state);
    const url = new URL(window.location.href);
    if (encoded) url.searchParams.set("s", encoded);
    else url.searchParams.delete("s");
    window.history.replaceState(null, "", url);
  }, [state]);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(id);
  }, [copied]);

  function openPicker(pool, titleKey, onPick) {
    setPicker({
      pool,
      title: t(lang, titleKey),
      onPick: (id) => {
        onPick(id);
        setPicker(null);
      },
    });
  }

  const dispatch = {
    pickHead(path) {
      openPicker(nounPool(dictionary), "sbChoose", (id) => {
        setState((s) => {
          const existing = getAtPath(s, path);
          return setAtPath(s, path, {
            wordId: id,
            modifiers: existing?.modifiers || [],
          });
        });
      });
    },
    addModifier(path) {
      openPicker(
        [...adjectivePool(dictionary), ...nounPool(dictionary)],
        "sbAddModifier",
        (id) => {
          setState((s) => {
            const phrase = getAtPath(s, path);
            return setAtPath(s, path, addModifier(dictionary, phrase, id));
          });
        },
      );
    },
    removeModifier(modifiersPath, index) {
      setState((s) => {
        const mods = getAtPath(s, modifiersPath) || [];
        return setAtPath(
          s,
          modifiersPath,
          mods.filter((_, i) => i !== index),
        );
      });
    },
    clearSlot(key) {
      setState((s) => ({ ...s, [key]: null }));
    },
    pickPredicate() {
      openPicker(predicatePool(dictionary), "sbPredicate", (id) => {
        setState((s) => {
          const predicate = newPredicate(dictionary, id);
          const object = predicate?.shape === "verb" ? s.object : null;
          return { ...s, predicate, object };
        });
      });
    },
    clearPredicate() {
      setState((s) => ({ ...s, predicate: null, object: null }));
    },
    toggleNegation() {
      setState((s) => ({
        ...s,
        predicate: { ...s.predicate, negated: !s.predicate.negated },
      }));
    },
    pickAdverb() {
      openPicker(adjectivePool(dictionary), "sbAddModifier", (id) => {
        setState((s) => ({ ...s, predicate: { ...s.predicate, adverbId: id } }));
      });
    },
    clearAdverb() {
      setState((s) => ({ ...s, predicate: { ...s.predicate, adverbId: null } }));
    },
  };

  const sentence = renderSentence(dictionary, state);
  const gloss = glossSentence(dictionary, state);
  const showObject = !state.predicate || state.predicate.shape === "verb";

  function copyLink() {
    navigator.clipboard?.writeText(window.location.href).then(() => setCopied(true));
  }

  return (
    <div class={styles.wrap}>
      <div class={styles.output}>
        {sentence ? (
          <>
            <div class={styles.sentenceRow}>
              <span class={styles.sentenceText}>{sentence}</span>
              <AudioButton pinyin={sentence} ttsText={sentence} />
            </div>
            {gloss && <div class={styles.gloss}>≈ {gloss}</div>}
          </>
        ) : (
          <div class={styles.placeholder}>{t(lang, "sbEmptySentence")}</div>
        )}
        <div class={styles.toolbar}>
          <button
            type="button"
            class={styles.toolBtn}
            onClick={copyLink}
            disabled={!sentence}
          >
            {copied ? t(lang, "sbCopied") : t(lang, "sbCopyLink")}
          </button>
          <button
            type="button"
            class={styles.toolBtn}
            onClick={() => setState(EMPTY_STATE)}
            disabled={!sentence}
          >
            {t(lang, "sbReset")}
          </button>
        </div>
      </div>

      <div class={styles.slots}>
        <SlotSection
          label={t(lang, "sbSubject")}
          phrase={state.subject}
          path={["subject"]}
          dict={dictionary}
          lang={lang}
          dispatch={dispatch}
          onClear={() => dispatch.clearSlot("subject")}
        />

        <div class={styles.slot}>
          <span class={styles.slotLabel}>{t(lang, "sbPredicate")}</span>
          {state.predicate ? (
            <div class={styles.slotFilled}>
              <PredicateChip
                dict={dictionary}
                lang={lang}
                predicate={state.predicate}
                dispatch={dispatch}
              />
              <button
                type="button"
                class={styles.slotClear}
                onClick={dispatch.clearPredicate}
                aria-label={t(lang, "sbRemoveAria")}
              >
                ×
              </button>
            </div>
          ) : (
            <button
              type="button"
              class={styles.slotEmpty}
              onClick={dispatch.pickPredicate}
            >
              + {t(lang, "sbPredicate")}
            </button>
          )}
        </div>

        {showObject && (
          <SlotSection
            label={t(lang, "sbObject")}
            phrase={state.object}
            path={["object"]}
            dict={dictionary}
            lang={lang}
            dispatch={dispatch}
            onClear={() => dispatch.clearSlot("object")}
          />
        )}
      </div>

      {picker && (
        <WordPicker
          dict={dictionary}
          lang={lang}
          pool={picker.pool}
          title={picker.title}
          onPick={picker.onPick}
          onClose={() => setPicker(null)}
        />
      )}
    </div>
  );
}

function SlotSection({ label, phrase, path, dict, lang, dispatch, onClear }) {
  return (
    <div class={styles.slot}>
      <span class={styles.slotLabel}>{label}</span>
      {phrase ? (
        <div class={styles.slotFilled}>
          <PhraseChip
            dict={dict}
            lang={lang}
            phrase={phrase}
            path={path}
            dispatch={dispatch}
          />
          <button
            type="button"
            class={styles.slotClear}
            onClick={onClear}
            aria-label={t(lang, "sbRemoveAria")}
          >
            ×
          </button>
        </div>
      ) : (
        <button
          type="button"
          class={styles.slotEmpty}
          onClick={() => dispatch.pickHead(path)}
        >
          + {label}
        </button>
      )}
    </div>
  );
}

function PredicateChip({ dict, lang, predicate, dispatch }) {
  const negButton = (
    <button
      type="button"
      class={`${styles.negToggle} ${predicate.negated ? styles.negActive : ""}`}
      onClick={dispatch.toggleNegation}
    >
      {t(lang, "sbNot")}
    </button>
  );

  if (predicate.shape === "noun") {
    return (
      <span class={styles.phrase}>
        {negButton}
        <span class={styles.glueWord}>{term(dict, "shi4")}</span>
        <PhraseChip
          dict={dict}
          lang={lang}
          phrase={predicate.phrase}
          path={["predicate", "phrase"]}
          dispatch={dispatch}
        />
      </span>
    );
  }

  if (predicate.shape === "adjective") {
    return (
      <span class={styles.phrase}>
        {negButton}
        <span class={styles.glueWord}>{term(dict, "hen3")}</span>
        <button
          type="button"
          class={styles.headWord}
          onClick={dispatch.pickPredicate}
          title={resolveInlineRefs(dict, dict.words[predicate.wordId]?.definition?.[lang])}
        >
          {term(dict, predicate.wordId)}
        </button>
      </span>
    );
  }

  return (
    <span class={styles.phrase}>
      {predicate.adverbId ? (
        <span class={styles.modChip}>
          <span class={styles.modText}>
            {term(dict, "hen3")} {term(dict, predicate.adverbId)}
          </span>
          <button
            type="button"
            class={styles.modRemove}
            onClick={dispatch.clearAdverb}
            aria-label={t(lang, "sbRemoveAria")}
          >
            ×
          </button>
        </span>
      ) : (
        <button
          type="button"
          class={styles.addModBtn}
          onClick={dispatch.pickAdverb}
          aria-label={t(lang, "sbAddModifier")}
          title={t(lang, "sbAddModifier")}
        >
          +
        </button>
      )}
      {negButton}
      <button
        type="button"
        class={styles.headWord}
        onClick={dispatch.pickPredicate}
        title={dict.words[predicate.wordId]?.definition?.[lang]}
      >
        {term(dict, predicate.wordId)}
      </button>
    </span>
  );
}
