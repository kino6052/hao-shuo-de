import { useEffect, useRef } from "preact/hooks";
import styles from "./LoadMore.module.css";

// The end of a long list that draws in batches: a line "showing X of Y" and a
// button for the next batch, which also comes on its own when the button gets
// near the screen (the page scrolls inside .main-content, so that is the root).
export function LoadMore({ shown, total, label, onMore }) {
  const ref = useRef(null);
  const more = useRef(onMore);
  more.current = onMore;
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // A new observer after every batch: it reports at once whether the button
    // is still near, so a short batch is followed by the next one.
    const io = new IntersectionObserver((seen) => seen.some((s) => s.isIntersecting) && more.current(), {
      root: el.closest(".main-content"),
      rootMargin: "800px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, [shown, total]);
  if (shown >= total) return null;
  return (
    <div class={styles.more}>
      <span class={styles.count}>
        {shown} / {total}
      </span>
      <button ref={ref} type="button" class={styles.button} onClick={onMore}>
        {label}
      </button>
    </div>
  );
}
