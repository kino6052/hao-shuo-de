import { t } from "../lib/i18n.js";
import styles from "./SearchBox.module.css";

// The search box of the dictionary pages. `found` is the number of matches (null when the query is empty), shown under the box;
// zero says so. The matching itself is src/lib/dictionary-search.js.
export function SearchBox({ lang, query, onQuery, found }) {
  return (
    <div class={styles.box}>
      <input
        class={styles.input}
        type="search"
        value={query}
        placeholder={t(lang, "dictionarySearch")}
        aria-label={t(lang, "dictionarySearch")}
        onInput={(ev) => onQuery(ev.currentTarget.value)}
      />
      {found !== null && (
        <div class={styles.note} role="status">
          {found === 0 ? t(lang, "dictionaryNoMatch") : `${t(lang, "dictionaryFound")} ${found}`}
        </div>
      )}
    </div>
  );
}
