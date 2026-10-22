// The quick translator kept running (quick-server.js) over a real local pipe, with the fixture KB and fake sessions: a
// request answered with its steps, a session waiting for the next one, a stale client turned away, stop, and no server.
// It opens a pipe, so it waits for a push (scripts/test.js SLOW).

import { describe, expect, test } from 'bun:test';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createKb } from '../kb/kb.js';
import { source } from '../kb/fixture.js';
import { askServer, codeStamp, pipePath, serve, stopServer } from './quick-server.js';

const entry = (type, module, key, extra = {}) => ({ type, module, key, ...extra });
const lessons = [{ id: 'basics', number: 1, entries: [entry('vocab', 'eat', 'eat.vocab0', { term: '{{word:wo3}}' }), entry('vocab', 'eat', 'eat.vocab1', { term: '{{word:chi1}}' }), entry('vocab', 'eat', 'eat.vocab2', { term: '{{word:fan4}}' })] }];
const patterns = [{ id: 'svo', taught: 'basics/eat', meaning: { eng: 'who does what' }, rules: [{ lhs: 'Utt', hsd: 'S' }, { lhs: 'S', hsd: 'NP VP' }, { lhs: 'NP', hsd: '@pronoun' }, { lhs: 'NP', hsd: '@noun' }, { lhs: 'VP', hsd: '@verb NP' }, { lhs: 'VP', hsd: '@verb' }] }];
const kb = createKb({ ...source, lessons, patterns });

// a server over a root of its own (the pipe is named after the root), with sessions that always answer `reply`
function start(reply = '["Wǒ chī fàn."]') {
  const root = join(tmpdir(), `quick-server-test-${process.pid}-${Math.random().toString(36).slice(2)}`);
  const sessions = [];
  const startSession = ({ model, effort }) => {
    const s = { model, effort, alive: true, closed: false, ask: async () => ({ text: reply, cost: 0.01 }), close: () => (s.closed = true) };
    sessions.push(s);
    return s;
  };
  const opened = [];
  const openKb = async (opts = {}) => (opened.push(Boolean(opts.memo)), kb);
  const running = serve({ root, code: 7, openKb, startSession, model: 'sonnet', effort: 'low' });
  return { root, sessions, opened, running };
}

// the pipe is open once a client gets an answer from it
async function until(fn) {
  for (let i = 0; i < 100; i++) {
    const r = await fn();
    if (r) return r;
    await new Promise((ok) => setTimeout(ok, 20));
  }
  throw new Error('the server never answered');
}

describe('quick-server', () => {
  test('the pipe is named after the checkout; the code stamp is a number', () => {
    expect(pipePath('C:/a')).toBe(pipePath('c:/A'));
    expect(pipePath('C:/a')).not.toBe(pipePath('C:/b'));
    expect(typeof codeStamp(process.cwd())).toBe('number');
  });

  test('no server: null at once', async () => {
    expect(await askServer({ code: 7, text: 'I eat rice.' }, { root: join(tmpdir(), 'no-such-server-here') })).toBeNull();
  });

  test('a request gets its steps and the result from the waiting session; a new session waits behind it; stop ends it', async () => {
    const { root, sessions, opened, running } = start();
    const steps = [];
    const r = await until(() => askServer({ code: 7, text: 'I eat rice.', verbose: true }, { root, onStep: (s) => steps.push(s) }));
    expect(r.sentences[0]).toMatchObject({ pinyin: 'Wǒ chī fàn.', check: { parses: true } });
    expect(r.mode).toBe('quick');
    expect(steps).toContain('Writing');
    expect(opened).toContain(false); // --verbose checks with the KB that keeps its parse trees
    expect(sessions[0]).toMatchObject({ model: 'sonnet', effort: 'low', closed: true });
    expect(sessions.at(-1).closed).toBe(false);
    expect(await stopServer({ root })).toBe(true);
    await running;
    expect(sessions).toHaveLength(2);
    expect(sessions.every((s) => s.closed)).toBe(true);
  });

  test('a client on other code is turned away (null) and the server stops', async () => {
    const { root, running } = start();
    await until(() => askServer({ code: 7, text: 'I eat rice.' }, { root }));
    expect(await askServer({ code: 8, text: 'I eat rice.' }, { root })).toBeNull();
    await running;
    expect(await askServer({ code: 7, text: 'I eat rice.' }, { root })).toBeNull();
  });

  test("the person's mistake comes back as an error with its message", async () => {
    const { root, running } = start();
    await until(() => askServer({ code: 7, text: 'I eat rice.' }, { root }));
    const e = await askServer({ code: 7, text: 'I eat rice.', lesson: '9' }, { root }).catch((x) => x);
    expect(e.userMessage).toContain('There is no lesson "9"');
    await stopServer({ root });
    await running;
  });
});
