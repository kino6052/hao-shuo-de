// The setup script's pure parts (TRANSLATOR_PLAN.md S0a): read the web app's config snippet the Firebase console shows,
// write it into src/lib/auth-config.js, and check a service-account key before it is copied out of harm's way.
//
//   parseFirebaseConfig(text) -> { apiKey, authDomain, projectId, appId }     the snippet as pasted, JS or JSON; throws when a key is missing
//   withFirebaseConfig(source, config) -> source                              auth-config.js with FIREBASE_CONFIG filled in
//   serviceAccountProblems(key, projectId) -> [string]                        what is wrong with a parsed service-account file

export const CONFIG_KEYS = ['apiKey', 'authDomain', 'projectId', 'appId'];

export function parseFirebaseConfig(text) {
  const config = {};
  for (const key of CONFIG_KEYS) {
    const m = String(text ?? '').match(new RegExp(`["']?${key}["']?\\s*:\\s*["']([^"']*)["']`));
    if (!m || !m[1].trim()) throw new Error(`the config has no ${key}; copy the whole firebaseConfig = { ... } block from Project settings > Your apps > Web app`);
    config[key] = m[1].trim();
  }
  return config;
}

export function withFirebaseConfig(source, config) {
  const block = String(source).match(/export const FIREBASE_CONFIG = \{[^}]*\};/);
  if (!block) throw new Error('auth-config.js has no FIREBASE_CONFIG block to fill in');
  const body = CONFIG_KEYS.map((k) => `  ${k}: ${JSON.stringify(config[k] ?? '')},`).join('\n');
  return source.replace(block[0], `export const FIREBASE_CONFIG = {\n${body}\n};`);
}

export function serviceAccountProblems(key, projectId) {
  if (!key || typeof key !== 'object') return ['the file is not JSON'];
  const out = [];
  if (key.type !== 'service_account') out.push('it is not a service-account key (download it from Project settings > Service accounts > Generate new private key)');
  for (const field of ['project_id', 'client_email', 'private_key']) if (!key[field]) out.push(`it has no ${field}`);
  if (projectId && key.project_id && key.project_id !== projectId) out.push(`it is for the project "${key.project_id}", but the web config is for "${projectId}"`);
  return out;
}
