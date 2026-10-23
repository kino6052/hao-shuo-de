import { useEffect, useMemo, useState } from 'preact/hooks';
import { firebaseConfigured, signIn, signOut, useAuth } from '../lib/auth.js';
import { langToUrl } from '../lib/router.js';
import { exportOf } from '../lib/comments/comment.js';
import { deleteComment, markDone, watchComments } from '../lib/comments/client.js';
import { watchAllowed } from '../translator/client.js';
import { TEXT, say } from './text.js';
import styles from './CommentsPage.module.css';

// The admin's comments page (COMMENTS_PLAN.md C1): sign in with Google; only the translator's owner (CM8) gets past the
// account check, and the rules (firestore.rules) hold everyone else back anyway. Every comment, newest first, with a
// filter by page, mark done, delete and a JSON download of what the filters show.
export function CommentsPage() {
  const { status, user, error } = useAuth();
  return (
    <main class={styles.page}>
      <header class={styles.header}>
        <h1 class={styles.title}>{TEXT.title}</h1>
        <a class={styles.link} href="../en/">{TEXT.bookLink}</a>
      </header>
      {!firebaseConfigured ? (
        <p class={styles.notice}>{TEXT.notSwitchedOn}</p>
      ) : status === 'loading' ? (
        <p class={styles.muted}>{TEXT.loading}</p>
      ) : status === 'out' ? (
        <div class={styles.card}>
          <p>{TEXT.signInWhy}</p>
          <button class={styles.primary} onClick={() => signIn('google')}>{TEXT.signIn}</button>
          {error && <p class={styles.error}>{TEXT.signInError}</p>}
        </div>
      ) : (
        <SignedIn user={user} />
      )}
    </main>
  );
}

function SignedIn({ user }) {
  // undefined while asking, false for anyone but the owner
  const [owner, setOwner] = useState(undefined);
  useEffect(() => {
    if (!user.emailVerified) return;
    setOwner(undefined);
    return watchAllowed(user, (entry) => setOwner(entry?.owner === true), () => setOwner(false));
  }, [user.uid, user.email, user.emailVerified]);

  const who = (
    <p class={styles.who}>
      {say('signedInAs', { email: user.email })}{' '}
      <button class={styles.linkButton} onClick={signOut}>{TEXT.signOut}</button>
    </p>
  );
  if (!user.emailVerified) return <>{who}<p class={styles.notice}>{TEXT.notVerified}</p></>;
  if (owner === undefined) return <>{who}<p class={styles.muted}>{TEXT.checking}</p></>;
  if (!owner) return <>{who}<p class={styles.notice}>{say('notAdmin', { email: user.email })}</p></>;
  return <>{who}<Comments /></>;
}

function Comments() {
  const [all, setAll] = useState(undefined);
  const [failed, setFailed] = useState(false);
  const [page, setPage] = useState('');
  const [hideDone, setHideDone] = useState(false);
  const [problem, setProblem] = useState('');
  useEffect(() => watchComments(setAll, () => setFailed(true)), []);

  const pages = useMemo(() => [...new Set((all ?? []).map((c) => c.page))].sort(), [all]);
  const shown = (all ?? []).filter((c) => (!page || c.page === page) && (!hideDone || !c.done));

  if (failed) return <p class={styles.error}>{TEXT.listError}</p>;
  if (all === undefined) return <p class={styles.muted}>{TEXT.loading}</p>;

  const act = (fn) => fn().catch((e) => setProblem(say('actionError', { code: e?.code || e?.message || 'error' })));

  function download() {
    const blob = new Blob([JSON.stringify(exportOf(shown), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `comments-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <>
      <div class={styles.tools}>
        <select class={styles.select} value={page} onChange={(e) => setPage(e.currentTarget.value)}>
          <option value="">{TEXT.allPages}</option>
          {pages.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
        <label class={styles.check}>
          <input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.currentTarget.checked)} />
          {TEXT.hideDone}
        </label>
        <button class={styles.secondary} onClick={download} disabled={!shown.length}>{TEXT.download}</button>
      </div>
      <p class={styles.muted}>{all.length ? say('count', { shown: shown.length, all: all.length }) : TEXT.none}</p>
      {problem && <p class={styles.error} role="alert">{problem}</p>}
      <ul class={styles.list}>
        {shown.map((c) => (
          <li key={c.id} class={`${styles.item} ${c.done ? styles.isDone : ''}`}>
            <div class={styles.meta}>
              <a class={styles.link} href={`../${langToUrl(c.lang)}/${c.page}`}>{c.page}</a>
              <span>{c.part === 'page' ? TEXT.wholePage : c.part}</span>
              <span>{c.lang}</span>
              <span>{c.signedIn ? TEXT.signedIn : TEXT.anonymous}</span>
              <span>{c.createdAt ? new Date(c.createdAt).toLocaleString() : ''}</span>
              <span class={styles.version}>{c.version}</span>
            </div>
            {c.quote && <p class={styles.quote}>{c.quote}</p>}
            <p class={styles.text}>{c.text}</p>
            <div class={styles.actions}>
              <label class={styles.check}>
                <input type="checkbox" checked={c.done === true} onChange={(e) => act(() => markDone(c.id, e.currentTarget.checked))} />
                {TEXT.done}
              </label>
              <button class={styles.danger} onClick={() => window.confirm(TEXT.deleteConfirm) && act(() => deleteComment(c.id))}>{TEXT.delete}</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
