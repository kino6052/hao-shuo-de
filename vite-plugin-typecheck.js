// Type-checks the project while `npm run dev` runs. Vite strips types without
// checking them, so a wrong field in a chapter file (say, a module without
// its info block, see src/lib/lesson.ts) would otherwise go unnoticed. Runs `tsc --noEmit`
// at startup and after every .ts/.tsx change, prints the errors in the
// terminal, and shows them in the browser's error overlay. Once they're fixed
// the page reloads, which clears the overlay.
import { spawn } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const TSC = fileURLToPath(new URL('./node_modules/typescript/bin/tsc', import.meta.url));
// `--pretty false` lines: "src/a.ts(34,3): error TS2353: Message", or
// "error TS5023: Message" for errors with no file. Indented lines continue
// the message above.
const ERROR_RE = /^(?:(.+)\((\d+),(\d+)\): )?error (TS\d+): (.*)$/;

function parseErrors(output) {
  const errors = [];
  for (const line of output.split(/\r?\n/)) {
    const m = ERROR_RE.exec(line);
    if (m) {
      const [, file, row, col, code, text] = m;
      errors.push({ file, line: Number(row), column: Number(col), code, text });
    } else if (/^\s/.test(line) && errors.length) {
      errors[errors.length - 1].text += `\n${line}`;
    }
  }
  return errors;
}

function describe(e) {
  return e.file ? `${e.file}:${e.line}:${e.column}  ${e.code}: ${e.text}` : `${e.code}: ${e.text}`;
}

export default function typecheckPlugin() {
  return {
    name: 'typecheck',
    apply: 'serve',
    configureServer(server) {
      const root = server.config.root;
      const logger = server.config.logger;
      let errors = [];
      let running = false;
      let again = false;
      let timer;

      function showOverlay() {
        const first = errors[0];
        server.ws.send({
          type: 'error',
          err: {
            plugin: 'typecheck',
            message: errors.map(describe).join('\n\n'),
            stack: '',
            loc: first.file ? { file: resolve(root, first.file), line: first.line, column: first.column } : undefined,
          },
        });
      }

      function check() {
        if (running) { again = true; return; }
        running = true;
        let output = '';
        const tsc = spawn(process.execPath, [TSC, '--noEmit', '--pretty', 'false'], { cwd: root });
        tsc.stdout.on('data', chunk => { output += chunk; });
        tsc.stderr.on('data', chunk => { output += chunk; });
        tsc.on('close', () => {
          running = false;
          const hadErrors = errors.length > 0;
          errors = parseErrors(output);
          if (errors.length) {
            const count = `${errors.length} type error${errors.length === 1 ? '' : 's'}`;
            logger.error(`\n[typecheck] ${count}:\n${errors.map(describe).join('\n')}\n`, { timestamp: true });
            showOverlay();
          } else if (hadErrors) {
            logger.info('[typecheck] no type errors.', { timestamp: true });
            server.ws.send({ type: 'full-reload' });
          }
          if (again) { again = false; check(); }
        });
      }

      function schedule(path) {
        if (!/\.tsx?$|tsconfig\.json$/.test(path)) return;
        clearTimeout(timer);
        timer = setTimeout(check, 100);
      }

      server.watcher.on('add', schedule);
      server.watcher.on('change', schedule);
      server.watcher.on('unlink', schedule);
      // A reloaded page starts without the overlay; show it again.
      server.ws.on('connection', () => { if (errors.length) showOverlay(); });
      check();
    },
  };
}
