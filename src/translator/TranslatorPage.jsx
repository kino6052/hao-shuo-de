import { useEffect, useState } from 'preact/hooks';
import { firebaseConfigured, signIn, signOut, useAuth } from '../lib/auth.js';
import { track } from '../lib/tracking.js';
import { MAX_LESSON, MAX_TEXT, sendRequest, watchAllowed, watchPresence, watchRequests } from './client.js';
import { TEXT, say } from './text.js';
import styles from './TranslatorPage.module.css';

// The translator page (TRANSLATOR_PLAN.md S8): sign in with Google; someone not on the list is told so; someone on it
// sends a text with an optional lesson and sees their own texts come back (the owner sees everyone's). The daemon on the
// author's PC does the work (scripts/translator-daemon.js); presence/daemon says whether it is on.

const PER_DAY = 20; // the daemon's maxPerDay (src/lib/translator/daemon.js)
const ONLINE_MS = 2 * 60_000; // the daemon writes its presence every 30 s

export function TranslatorPage() {
  const { status, user, error } = useAuth();
  return (
    <main class={styles.page}>
      <header class={styles.header}>
        <h1 class={styles.title}>{TEXT.title}</h1>
        <a class={styles.link} href="../en/">{TEXT.bookLink}</a>
      </header>
      <p class={styles.intro}>{TEXT.intro}</p>
      {!firebaseConfigured ? (
        <p class={styles.notice}>{TEXT.notSwitchedOn}</p>
      ) : status === 'loading' ? (
        <p class={styles.muted}>{TEXT.loading}</p>
      ) : status === 'out' ? (
        <div class={styles.card}>
          <p>{TEXT.signInWhy}</p>
          <button class={styles.primary} onClick={() => signIn('google')}>{TEXT.signIn}</button>
          {error && <SignInError code={error} />}
        </div>
      ) : (
        <SignedIn user={user} />
      )}
    </main>
  );
}

// The dev server prints 127.0.0.1, which a new Firebase project does not list (it lists localhost): the pop-up opens and
// closes at once, so say where it works instead of "try again".
function SignInError({ code }) {
  if (code !== 'auth/unauthorized-domain') return <p class={styles.error}>{TEXT.signInError}</p>;
  const { hostname, host, href } = window.location;
  return (
    <p class={styles.error}>
      {say('signInAddress', { host })}{' '}
      {hostname === '127.0.0.1' && <a class={styles.link} href={href.replace('//127.0.0.1', '//localhost')}>{TEXT.signInLocalhost}</a>}
    </p>
  );
}

function SignedIn({ user }) {
  // undefined while asking, null when not on the list, { owner } when on it
  const [entry, setEntry] = useState(undefined);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!user.emailVerified) return;
    setEntry(undefined);
    setFailed(false);
    // the rules refuse an unverified email; anything else is a real failure
    return watchAllowed(user, setEntry, (e) => (e?.code === 'permission-denied' ? setEntry(null) : setFailed(true)));
  }, [user.uid, user.email, user.emailVerified]);

  const who = (
    <p class={styles.who}>
      {say('signedInAs', { email: user.email })}{' '}
      <button class={styles.linkButton} onClick={signOut}>{TEXT.signOut}</button>
    </p>
  );
  if (!user.emailVerified) return <>{who}<p class={styles.notice}>{TEXT.notVerified}</p></>;
  if (failed) return <>{who}<p class={styles.error}>{TEXT.listError}</p></>;
  if (entry === undefined) return <>{who}<p class={styles.muted}>{TEXT.checkingList}</p></>;
  if (entry === null) return <>{who}<p class={styles.notice}>{say('notOnList', { email: user.email })}</p></>;
  return (
    <>
      {who}
      <Presence />
      <SendForm user={user} />
      <Requests user={user} owner={entry.owner} />
    </>
  );
}

function Presence() {
  const [presence, setPresence] = useState(null);
  const [now, setNow] = useState(Date.now());
  useEffect(() => watchPresence(setPresence), []);
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);
  const on = presence && now - Number(presence.lastSeen) < ONLINE_MS;
  return (
    <p class={`${styles.pill} ${on ? styles.on : styles.off}`} role="status">
      <span class={styles.dot} aria-hidden="true" />
      {on ? (presence.state === 'working' ? TEXT.busy : TEXT.online) : TEXT.offline}
    </p>
  );
}

function SendForm({ user }) {
  const [text, setText] = useState('');
  const [lesson, setLesson] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const length = [...text].length;
  const tooLong = length > MAX_TEXT;

  const send = async (e) => {
    e.preventDefault();
    if (!text.trim() || tooLong || sending) return;
    setSending(true);
    setError('');
    try {
      await sendRequest(user, { text: text.trim(), lesson: lesson.trim().slice(0, MAX_LESSON) });
      track('translation_sent', { characters: [...text.trim()].length });
      setText('');
    } catch {
      setError(TEXT.sendError);
    } finally {
      setSending(false);
    }
  };

  return (
    <form class={styles.card} onSubmit={send}>
      <label class={styles.label} for="translator-text">{TEXT.textLabel}</label>
      <textarea id="translator-text" class={styles.textarea} rows={5} value={text} placeholder={TEXT.textPlaceholder} onInput={(e) => setText(e.currentTarget.value)} />
      <p class={tooLong ? styles.error : styles.muted}>{tooLong ? say('tooLong', { max: MAX_TEXT.toLocaleString('en-US') }) : say('counter', { n: length, max: MAX_TEXT.toLocaleString('en-US') })}</p>
      <label class={styles.label} for="translator-lesson">{TEXT.lessonLabel}</label>
      <input id="translator-lesson" class={styles.input} inputMode="numeric" maxLength={MAX_LESSON} value={lesson} onInput={(e) => setLesson(e.currentTarget.value)} />
      <p class={styles.muted}>{TEXT.lessonHint}</p>
      <div class={styles.row}>
        <button class={styles.primary} type="submit" disabled={!text.trim() || tooLong || sending}>{sending ? TEXT.sending : TEXT.send}</button>
        <span class={styles.muted}>{say('limits', { perDay: PER_DAY, max: MAX_TEXT.toLocaleString('en-US') })}</span>
      </div>
      {error && <p class={styles.error}>{error}</p>}
    </form>
  );
}

function Requests({ user, owner }) {
  const [requests, setRequests] = useState(null);
  useEffect(() => watchRequests(user, { owner }, setRequests, () => setRequests([])), [user.uid, owner]);
  return (
    <section>
      <h2 class={styles.heading}>{owner ? TEXT.allTexts : TEXT.yourTexts}</h2>
      {requests === null ? <p class={styles.muted}>{TEXT.loading}</p> : requests.length === 0 ? <p class={styles.muted}>{TEXT.noTexts}</p> : requests.map((r) => <Request key={r.id} request={r} showWho={owner && r.uid !== user.uid} />)}
    </section>
  );
}

const STATUS = { queued: 'queued', working: 'working', done: 'done', failed: 'failed' };

function Request({ request: r, showWho }) {
  const status = STATUS[r.status] ?? 'queued';
  return (
    <article class={styles.card}>
      <div class={styles.row}>
        <span class={`${styles.chip} ${styles[status]}`}>{TEXT[status]}</span>
        <span class={styles.muted}>
          {r.createdAt ? say('sentAt', { when: new Date(r.createdAt).toLocaleString() }) : ''}
          {showWho ? ` ${say('by', { email: r.email })}` : ''}
        </span>
      </div>
      <p class={styles.english}>{r.text}</p>
      {r.lesson && status !== 'done' && <p class={styles.muted}>{say('level', { level: say('lessonN', { n: r.lesson }) })}</p>}
      {status === 'working' && r.step && <p class={styles.step}>{r.step}…</p>}
      {status === 'queued' && r.step && <p class={styles.step}>{r.step}</p>}
      {status === 'failed' && <p class={styles.error}>{r.error}</p>}
      {status === 'done' && r.result && <Result result={r.result} />}
    </article>
  );
}

function checkLine(c) {
  if (!c) return '';
  if ((c.unknown ?? []).length) return say('checkUnknown', { words: c.unknown.join('; ') });
  if (!c.parses) return TEXT.checkNoParse;
  if (c.means === 'no') return TEXT.checkNotMeant;
  return TEXT.checkOk;
}

function Result({ result }) {
  const [copied, setCopied] = useState(false);
  const sentences = result.sentences ?? [];
  const pinyin = sentences.map((s) => s.pinyin).join(' ');
  const needed = (result.sketch ?? []).filter((s) => s.needed);
  const judged = (result.sketch ?? []).some((s) => s.verdict);
  const lost = (result.sketch ?? []).filter((s) => s.verdict === 'lost' || s.verdict === 'weaker');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pinyin);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* no clipboard: the text can still be selected */
    }
  };
  const lesson = result.lesson;

  // the translation and a copy button; the rest (hanzi, each sentence, the checks) only when asked for
  return (
    <div class={styles.result}>
      <p class={styles.pinyin} lang="zh-Latn-pinyin">{pinyin}</p>
      <div class={styles.row}>
        <button class={styles.secondary} onClick={copy}>{copied ? TEXT.copied : TEXT.copy}</button>
      </div>
      <details class={styles.details}>
        <summary>{TEXT.details}</summary>
        <p class={styles.hanzi} lang="zh-Hans">{sentences.map((s) => s.hanzi ?? '').join('')}</p>
        <p class={styles.muted}>
          {say('level', { level: lesson ? say('lessonN', { n: lesson.number }) : TEXT.wholeDictionary })}
          {lesson && (
            <>
              {' '}
              <a class={styles.link} href={`../en/${lesson.id}`}>→</a>
            </>
          )}
        </p>
        {judged && (
          <p class={styles.meaning}>
            <strong>{TEXT.meaning}:</strong> {say('kept', { kept: needed.filter((s) => s.verdict === 'kept').length, needed: needed.length })}
          </p>
        )}
        <ol class={styles.sentences}>
          {sentences.map((s, i) => (
            <li key={i} class={styles.sentence}>
              <p class={styles.pinyin} lang="zh-Latn-pinyin">{s.pinyin}</p>
              <p class={styles.hanzi} lang="zh-Hans">{s.hanzi}</p>
              <p>{s.english}</p>
              {s.literally && <p class={styles.muted}>{TEXT.literally}: {s.literally}</p>}
              {s.blind && <p class={styles.muted}>{TEXT.readBack}: {s.blind}</p>}
              <p class={styles.muted}>{TEXT.check}: {checkLine(s.check)}</p>
            </li>
          ))}
        </ol>
        {lost.length > 0 && <List title={TEXT.lost} items={lost.map((s) => `${s.idea}${s.why ? ` (${s.why})` : ''}`)} />}
        {(result.added ?? []).length > 0 && <List title={TEXT.added} items={result.added} />}
        {(result.gaps ?? []).length > 0 && <List title={TEXT.gaps} items={result.gaps.map((g) => `${g.idea}${g.description ? `: ${g.description}` : ''}`)} />}
        {(result.problems ?? []).length > 0 && <List title={TEXT.problems} items={result.problems} />}
        {result.notes && (
          <>
            <h3 class={styles.subheading}>{TEXT.notes}</h3>
            <p>{result.notes}</p>
          </>
        )}
      </details>
    </div>
  );
}

const List = ({ title, items }) => (
  <>
    <h3 class={styles.subheading}>{title}</h3>
    <ul class={styles.list}>
      {items.map((x, i) => <li key={i}>{x}</li>)}
    </ul>
  </>
);
