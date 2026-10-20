import { useEffect } from 'preact/hooks';
import { useAuth } from '../lib/auth.js';
import { useConsent } from '../lib/consent.js';
import { ADSENSE_CLIENT } from '../lib/tracking-config.js';
import styles from './AdSlot.module.css';

// One AdSense ad unit. Nothing is drawn unless the client ID and this slot's ID are set, the visitor said yes,
// and they are not a signed-in member.
export function AdSlot({ slot }) {
  const consent = useConsent();
  const { status, member } = useAuth();
  const on = Boolean(ADSENSE_CLIENT && slot) && consent === 'granted' && status !== 'loading' && !member;

  useEffect(() => {
    if (!on) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* blocked by an ad blocker */ }
  }, [on]);

  if (!on) return null;
  return (
    <div class={styles.slot}>
      <span class={styles.label}>Ad</span>
      <ins
        class="adsbygoogle"
        style="display:block"
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
