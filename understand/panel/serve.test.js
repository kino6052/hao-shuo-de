import { describe, expect, test } from 'bun:test';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { EMPTY, respond, stateReader } from './serve.js';

const dir = mkdtempSync(join(tmpdir(), 'understand-panel-'));
const file = join(dir, 'state.json');
const page = () => readFileSync(join(import.meta.dir, 'index.html'), 'utf8');

describe('the state', () => {
  test('is empty with no file, follows the file, and keeps the last good copy while the file is half written', () => {
    const read = stateReader(file);
    expect(read()).toEqual(EMPTY);
    writeFileSync(file, JSON.stringify({ topic: 'x', turn: 1, progress: 10, settled: [{ text: 'a' }], open: [] }));
    expect(read().topic).toBe('x');
    writeFileSync(file, '{"topic": "x", "turn": 2, "sett');
    expect(read().turn).toBe(1);
    rmSync(file);
    expect(read()).toEqual(EMPTY);
  });
});

describe('the server', () => {
  const state = () => ({ topic: 't', settled: [], open: [] });
  test('serves the page and the state, and nothing else', () => {
    expect(respond('/', { state, page })).toMatchObject({ status: 200, type: expect.stringContaining('text/html') });
    expect(JSON.parse(respond('/state', { state, page }).body).topic).toBe('t');
    expect(respond('/secrets', { state, page }).status).toBe(404);
  });
  test('the page puts the agent’s words in as text, never as markup', () => {
    expect(page()).not.toContain('innerHTML');
    expect(page()).toContain('textContent');
  });
  test('the page shows the hint of every open item and still takes a bare name', () => {
    expect(page()).toContain('item.hint');
    expect(page()).toContain("typeof o === 'string'");
  });
});
