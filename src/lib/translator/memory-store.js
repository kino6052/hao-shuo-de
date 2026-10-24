// An in-memory copy of the store the translator daemon talks to (TRANSLATOR_PLAN.md S4), for tests. The requests
// and the presence live in maps. Listeners hear about a change a moment after it, never inside the write, as with
// Firestore. It refuses what the security rules would: a page may only add the page's own fields, and the daemon
// may only change its own, so a test fails if the daemon ever touches a field it does not own.
//
// The interface is described at the top of daemon.js. For tests only:
//   store.addRequest(id, doc)     the page adds a request (one arrives)
//   store.addRequests([[id, doc]]) several arrive in one update
//   store.seed(id, doc)           put a request in as it is, with any status, without telling listeners
//   store.get(id)                 a copy of a request, or undefined
//   store.writes                  every updateRequest so far, oldest first: { id, fields }
//   store.presenceWrites          every setPresence so far: { name, doc }
//   store.failIf = (method, args) => true   make a call fail (it throws), for as long as this says so

export const PAGE_FIELDS = ['uid', 'email', 'text', 'lesson', 'mode', 'createdAt'];
export const DAEMON_FIELDS = ['status', 'step', 'startedAt', 'endedAt', 'result', 'error'];

const finished = (doc) => doc.status === 'done' || doc.status === 'failed';

export function createMemoryStore() {
  const requests = new Map(); // id -> doc
  const presence = new Map(); // name -> doc
  const listeners = new Set();
  const store = { writes: [], presenceWrites: [], failIf: undefined };

  const maybeFail = (method, args) => {
    const why = store.failIf?.(method, args);
    if (why) throw new Error(typeof why === 'string' ? why : 'the store is down');
  };

  // Copies are taken now, so what a listener hears is what the write left, whatever happens after.
  const tell = (ids) => {
    const docs = ids.map((id) => ({ id, doc: structuredClone(requests.get(id)) }));
    for (const listener of listeners) queueMicrotask(() => listeners.has(listener) && listener.onDocs(docs));
  };

  store.addRequests = (list) => {
    for (const [id, doc] of list) {
      const extra = Object.keys(doc).filter((k) => !PAGE_FIELDS.includes(k));
      if (extra.length) throw new Error(`a page may not write ${extra.join(', ')}`);
      if (requests.has(id)) throw new Error(`request ${id} exists already`);
      requests.set(id, structuredClone(doc));
    }
    tell(list.map(([id]) => id));
  };
  store.addRequest = (id, doc) => store.addRequests([[id, doc]]);
  store.seed = (id, doc) => void requests.set(id, structuredClone(doc));
  store.get = (id) => (requests.has(id) ? structuredClone(requests.get(id)) : undefined);
  store.getPresence = (name) => (presence.has(name) ? structuredClone(presence.get(name)) : undefined);

  store.watchRequests = (onDocs, onError) => {
    const listener = { onDocs, onError };
    listeners.add(listener);
    const open = [...requests].filter(([, doc]) => !finished(doc)).map(([id, doc]) => ({ id, doc: structuredClone(doc) }));
    queueMicrotask(() => listeners.has(listener) && onDocs(open));
    return () => listeners.delete(listener);
  };

  store.updateRequest = async (id, fields) => {
    maybeFail('updateRequest', { id, fields });
    const extra = Object.keys(fields).filter((k) => !DAEMON_FIELDS.includes(k));
    if (extra.length) throw new Error(`the daemon may not write ${extra.join(', ')}`);
    if (!requests.has(id)) throw new Error(`no request ${id}`);
    store.writes.push({ id, fields: structuredClone(fields) });
    requests.set(id, { ...requests.get(id), ...structuredClone(fields) });
    tell([id]);
  };

  store.setPresence = async (name, doc) => {
    maybeFail('setPresence', { name, doc });
    store.presenceWrites.push({ name, doc: structuredClone(doc) });
    presence.set(name, structuredClone(doc));
  };

  store.countRequests = async ({ uid, from, to }) => {
    maybeFail('countRequests', { uid, from, to });
    return [...requests.values()].filter((d) => d.uid === uid && d.createdAt >= from && d.createdAt < to).length;
  };

  return store;
}
