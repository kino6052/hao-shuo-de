// Every sentence the admin's comments page shows (COMMENTS_PLAN.md C1), in one place. The page is the author's, so it is
// in English only, like the translator page's (src/translator/text.js).

export const TEXT = {
  title: 'Readers\' comments',
  bookLink: 'Back to the book',
  notSwitchedOn: 'Firebase is not switched on in this build.',
  loading: 'Loading…',
  signInWhy: 'Sign in with the admin\'s Google account to read the comments.',
  signIn: 'Sign in with Google',
  signInError: 'Signing in did not work. Please try again.',
  signOut: 'Sign out',
  signedInAs: 'Signed in as {email}',
  checking: 'Checking the account…',
  notAdmin: '{email} is not the admin. Only the owner on the translator\'s list reads comments (npm run translator -- allow <email> --owner).',
  notVerified: 'This account\'s email address is not confirmed, so it cannot be the admin.',
  listError: 'The comments could not be read. Please reload the page.',
  count: '{shown} of {all} comments',
  none: 'No comments yet.',
  allPages: 'All pages',
  hideDone: 'Hide the ones marked done',
  download: 'Download JSON',
  done: 'Done',
  delete: 'Delete',
  deleteConfirm: 'Delete this comment for good?',
  actionError: 'That did not work: {code}',
  signedIn: 'signed in',
  anonymous: 'anonymous',
  wholePage: 'the whole page',
};

// TEXT[key] with {name} filled in
export const say = (key, values = {}) => TEXT[key].replace(/\{(\w+)\}/g, (m, k) => (k in values ? String(values[k]) : m));
