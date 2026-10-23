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
  apiKey: "AIzaSyDNx291HqEHj1RNqwGE5Rue9fSr8XHD80M",
  authDomain: "hao-shuo-de.firebaseapp.com",
  projectId: "hao-shuo-de",
  appId: "1:104345929843:web:642f7380282a493808c206",
};

// false: only the translator page (/translator/, TRANSLATOR_PLAN.md Q9) signs people in, and the book shows no sign-in
// box and treats everyone as signed out. true: the sidebar's sign-in box and the members' no-ads come on too.
export const SIGN_IN_EVERYWHERE = true;

// Any of: "google", "apple", "microsoft", "github", "facebook". Only Google is switched on in the console; the others
// each need their own app first (GitHub: an OAuth app; Apple: a paid developer account), then a line here.
export const SIGN_IN_PROVIDERS = ["google"];
