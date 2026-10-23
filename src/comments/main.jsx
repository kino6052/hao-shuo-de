// The admin's comments page's entry (comments/index.html, COMMENTS_PLAN.md C1): the book's colours and fonts and its
// own sign-in. No statistics and no cookie question: only the admin comes here.
import { render } from 'preact';
import { CommentsPage } from './CommentsPage.jsx';
import { startAuth } from '../lib/auth.js';
import '../app.css';
import '../translator/translator.css';

startAuth({ page: true });

render(<CommentsPage />, document.getElementById('app'));
