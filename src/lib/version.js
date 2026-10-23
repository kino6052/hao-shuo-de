// The app's version, as a comment records it (COMMENTS_PLAN.md CM4): package.json's version and the commit the site
// was built from ("0.0.1+a4ea1880"), set by vite.config.js; "dev" where Vite did not build the code (the tests).
/* global __APP_VERSION__ */
export const APP_VERSION = typeof __APP_VERSION__ === 'string' ? __APP_VERSION__ : 'dev';
