// The translator page's entry (translator/index.html, TRANSLATOR_PLAN.md S8): the book's colours and fonts, its own sign-in,
// and the book's statistics behind the same cookie question (one answer, kept in the browser, serves both).
import { render } from 'preact';
import { TranslatorPage } from './TranslatorPage.jsx';
import { ConsentBanner } from '../components/ConsentBanner.jsx';
import { startAuth } from '../lib/auth.js';
import { startTracking } from '../lib/tracking.js';
import '../app.css';
import './translator.css';

startTracking();
startAuth({ page: true });

render(
  <>
    <TranslatorPage />
    <ConsentBanner lang="eng" />
  </>,
  document.getElementById('app'),
);
