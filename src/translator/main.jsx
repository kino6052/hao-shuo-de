// The translator page's entry (translator/index.html, TRANSLATOR_PLAN.md S8): the book's colours and fonts, its own sign-in.
import { render } from 'preact';
import { TranslatorPage } from './TranslatorPage.jsx';
import { startAuth } from '../lib/auth.js';
import '../app.css';
import './translator.css';

startAuth({ page: true });

render(<TranslatorPage />, document.getElementById('app'));
