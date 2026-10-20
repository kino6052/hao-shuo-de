import { render } from 'preact';
import { App } from './app.jsx';
import './app.css';
import './lib/audio-example-element.js';
import { startAuth } from './lib/auth.js';
import { startTracking } from './lib/tracking.js';

startTracking();
startAuth();

render(<App />, document.getElementById('app'));
