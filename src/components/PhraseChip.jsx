import { renderModifier, term, resolveInlineRefs } from "../lib/sentence-builder.js";
import { t } from "../lib/i18n.js";
import styles from "./SentenceBuilder.module.css";

// Renders one NounPhrase as a chip that grows left-to-right in reading
// order: [modifier chips...] [head word] [+]. A modifier chip that wraps
// another NounPhrase (a possessive) recurses into PhraseChip again, which is
// what makes the nesting "fractal" -- there's no fixed depth limit, every
// noun slot at every level offers the same add-modifier affordance.
export function PhraseChip({ dict, lang, phrase, path, dispatch }) {
  const modifiersPath = [...path, "modifiers"];
  const word = dict.words[phrase.wordId];
  return (
    <span class={styles.phrase}>
      {phrase.modifiers.map((mod, i) => (
        <ModifierChip
          key={i}
          dict={dict}
          lang={lang}
          mod={mod}
          modifiersPath={modifiersPath}
          index={i}
          dispatch={dispatch}
        />
      ))}
      <span class={styles.headGroup}>
        <button
          type="button"
          class={styles.headWord}
          onClick={() => dispatch.pickHead(path)}
          title={resolveInlineRefs(dict, word?.definition?.[lang])}
        >
          {word?.term}
        </button>
        <button
          type="button"
          class={styles.addModBtn}
          onClick={() => dispatch.addModifier(path)}
          aria-label={t(lang, "sbAddModifier")}
          title={t(lang, "sbAddModifier")}
        >
          +
        </button>
      </span>
    </span>
  );
}

function ModifierChip({ dict, lang, mod, modifiersPath, index, dispatch }) {
  const remove = () => dispatch.removeModifier(modifiersPath, index);

  if (mod.type === "adjective") {
    return (
      <span class={styles.modChip}>
        <span class={styles.modText}>{renderModifier(dict, mod)}</span>
        <button
          type="button"
          class={styles.modRemove}
          onClick={remove}
          aria-label={t(lang, "sbRemoveAria")}
        >
          ×
        </button>
      </span>
    );
  }

  const nestedPath = [...modifiersPath, index, "phrase"];
  return (
    <span class={styles.modChip}>
      <PhraseChip
        dict={dict}
        lang={lang}
        phrase={mod.phrase}
        path={nestedPath}
        dispatch={dispatch}
      />
      <span class={styles.deSuffix}>-{term(dict, "de")}</span>
      <button
        type="button"
        class={styles.modRemove}
        onClick={remove}
        aria-label={t(lang, "sbRemoveAria")}
      >
        ×
      </button>
    </span>
  );
}
