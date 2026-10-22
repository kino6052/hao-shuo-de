// Sign-in with Firebase Authentication (console.firebase.google.com > Project settings > Your apps > Web app).
// Leave apiKey empty and sign-in stays switched off: nothing is loaded and no sign-in box is shown.
//
// Also needed in the Firebase console: Authentication > Sign-in method > switch on each provider listed
// in SIGN_IN_PROVIDERS, and Authentication > Settings > Authorized domains > add the site's domain.
//
// Paid members: set the custom claim { member: true } on their account (Firebase Admin SDK,
// setCustomUserClaims(uid, { member: true })), for example from the payment provider's webhook.
// A signed-in member sees no ads. The claim is read when they sign in or the page reloads.
export const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: "",
};

// false: only the translator page (/translator/, TRANSLATOR_PLAN.md Q9) signs people in, and the book shows no sign-in
// box and treats everyone as signed out. true: the sidebar's sign-in box and the members' no-ads come on too.
export const SIGN_IN_EVERYWHERE = false;

// Any of: "google", "apple", "microsoft", "github", "facebook".
export const SIGN_IN_PROVIDERS = ["google", "apple", "github"];
