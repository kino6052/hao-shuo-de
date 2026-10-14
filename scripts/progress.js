// A progress bar for long runs (npm run check, npm test), shared by their scripts.
//
//   const bar = progress({ total: 17, label: 'gates' });
//   bar.start('check-book');          // an item began
//   bar.print('a report');            // text for the log, printed above the bar
//   bar.finish('check-book');         // an item ended
//   bar.close();                      // clear the bar
//
// On a terminal the bar is one line that is redrawn in place:
//   [██████████░░░░░░░░░░]  8/17 gates  41s  running: check-forms, check-grammar
// Anywhere else (a pipe, a tool's output) a line is printed whenever an item ends, so a log still shows how far it got.

const WIDTH = 24;

export function progress({ total, label = 'items', stream = process.stderr }) {
  const live = Boolean(stream.isTTY);
  const t0 = Date.now();
  const running = new Set();
  let done = 0;
  let drawn = false;

  const secs = () => {
    const s = Math.round((Date.now() - t0) / 1000);
    return s >= 60 ? `${Math.floor(s / 60)}m${String(s % 60).padStart(2, '0')}s` : `${s}s`;
  };
  const line = () => {
    const full = Math.round((done / Math.max(1, total)) * WIDTH);
    const names = [...running].join(', ');
    const text = `[${'█'.repeat(full)}${'░'.repeat(WIDTH - full)}] ${String(done).padStart(String(total).length)}/${total} ${label}  ${secs()}${running.size ? `  running: ${names}` : ''}`;
    return live ? text.slice(0, Math.max(20, (stream.columns || 100) - 1)) : text;
  };
  const clear = () => {
    if (live && drawn) stream.write('\r\x1b[2K');
    drawn = false;
  };
  const draw = () => {
    if (!live) return;
    stream.write(`\r\x1b[2K${line()}`);
    drawn = true;
  };
  // a terminal bar also moves on its own, so a slow item still shows time passing
  const tick = live ? setInterval(draw, 1000) : null;
  tick?.unref();

  return {
    start(name) {
      running.add(name);
      draw();
    },
    print(text) {
      clear();
      console.log(text);
      draw();
    },
    finish(name) {
      running.delete(name);
      done++;
      if (live) draw();
      else stream.write(`${line()}\n`);
    },
    close() {
      if (tick) clearInterval(tick);
      clear();
    },
  };
}
