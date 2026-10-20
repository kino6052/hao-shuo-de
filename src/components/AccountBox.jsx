import { authConfigured, signIn, signOut, useAuth } from '../lib/auth.js';
import { SIGN_IN_PROVIDERS } from '../lib/auth-config.js';
import { setConsent } from '../lib/consent.js';
import { trackingConfigured } from '../lib/tracking.js';
import { t } from '../lib/i18n.js';
import styles from './AccountBox.module.css';

const PROVIDER_NAMES = { google: 'Google', apple: 'Apple', microsoft: 'Microsoft', github: 'GitHub', facebook: 'Facebook' };

// Sign in / sign out (when Firebase is set up in auth-config.js) and the link that re-opens the cookie question.
export function AccountBox({ lang }) {
  const { status, user, member, error } = useAuth();
  if (!authConfigured && !trackingConfigured) return null;

  return (
    <div class={styles.box}>
      {authConfigured && status === 'in' && (
        <div class={styles.who}>
          {user.photo && <img class={styles.photo} src={user.photo} alt="" referrerpolicy="no-referrer" />}
          <span class={styles.name}>{user.name}</span>
          {member && <span class={styles.badge}>{t(lang, 'memberBadge')}</span>}
          <button class={styles.link} onClick={signOut}>{t(lang, 'signOut')}</button>
        </div>
      )}
      {authConfigured && status === 'out' && SIGN_IN_PROVIDERS.map((p) => (
        <button key={p} class={styles.provider} onClick={() => signIn(p)}>
          {t(lang, 'signInWith').replace('{provider}', PROVIDER_NAMES[p] || p)}
        </button>
      ))}
      {authConfigured && error && <div class={styles.error}>{t(lang, 'signInError')}</div>}
      {trackingConfigured && (
        <button class={styles.link} onClick={() => setConsent(null)}>{t(lang, 'privacyChoices')}</button>
      )}
    </div>
  );
}
