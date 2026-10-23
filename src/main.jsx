import { render } from 'preact';
import { App } from './app.jsx';
import './app.css';
import './lib/audio-example-element.js';
import { startAuth } from './lib/auth.js';
import { startTracking } from './lib/tracking.js';
import { getSettings, needsScript, subscribeSettings } from './lib/settings.js';

startTracking();
startAuth();

// the writing (src/lib/script.js) once a setting needs it: the chapters' words in hanzi, the hover box
const loadScript = (s) => needsScript(s) && import('./lib/script.js');
loadScript(getSettings());
subscribeSettings(loadScript);

render(<App />, document.getElementById('app'));
