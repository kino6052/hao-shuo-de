import { setConsent, useConsent } from '../lib/consent.js';
import { trackingConfigured, trackingStarted } from '../lib/tracking.js';
import { t } from '../lib/i18n.js';
import styles from './ConsentBanner.module.css';

// Asks once whether statistics and ads may be loaded. Shown only when an ID is set in tracking-config.js.
export function ConsentBanner({ lang }) {
  const consent = useConsent();
  if (!trackingConfigured || consent !== null) return null;

  function choose(answer) {
    const wasLoaded = trackingStarted();
    setConsent(answer);
    if (answer === 'denied' && wasLoaded) location.reload();
  }

  return (
    <div class={styles.banner} role="dialog" aria-label={t(lang, 'consentTitle')}>
      <p class={styles.text}>{t(lang, 'consentText')}</p>
      <div class={styles.buttons}>
        <button class={styles.decline} onClick={() => choose('denied')}>{t(lang, 'consentDecline')}</button>
        <button class={styles.accept} onClick={() => choose('granted')}>{t(lang, 'consentAccept')}</button>
      </div>
    </div>
  );
}
