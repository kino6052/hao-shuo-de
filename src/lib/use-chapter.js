import { useState, useEffect } from 'preact/hooks';
import { loadChapter, loadedChapter } from './content-registry.js';

// -> { view, failed } for the chapter an outline entry names: view is null while its text is fetched (at once
// when it was loaded before), failed is true when the fetch failed. When it is in, the next chapter is fetched
// in the background, so "next" opens without a wait.
//
// loadChapter is part of the key: after a chapter's file changes in the dev server, a new content-registry
// comes with a new loadChapter, and the chapter is fetched again.
export function useChapter(lang, meta, nextMeta) {
  const key = meta ? `${lang}/${meta.id}` : null;
  const [state, setState] = useState({ key: null, from: null, view: null, failed: false });

  useEffect(() => {
    if (!meta) return;
    let live = true;
    loadChapter(lang, meta).then(
      (view) => {
        if (live) setState({ key, from: loadChapter, view, failed: false });
        if (nextMeta) loadChapter(lang, nextMeta).catch(() => {});
      },
      () => live && setState({ key, from: loadChapter, view: null, failed: true }),
    );
    return () => { live = false; };
  }, [key, loadChapter]);

  if (state.key === key && state.from === loadChapter) return state;
  return { view: (meta && loadedChapter(lang, meta)) ?? null, failed: false };
}
