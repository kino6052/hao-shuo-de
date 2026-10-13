// The repo at a git ref, written to a temporary folder (K20): the real files and index are not touched.

import { describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, readdirSync, rmSync } from 'fs';
import { spawnSync } from 'child_process';
import { tmpdir } from 'os';
import { join } from 'path';
import { exportRef, snapshotAtRef } from './parse-diff.js';
import { ROOT } from './refactor-lib.js';

const status = () => spawnSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf-8' }).stdout;

describe('exportRef', () => {
  test('writes the files of a commit, and leaves the repo as it was', () => {
    const before = status();
    const dir = mkdtempSync(join(tmpdir(), 'hsd-export-'));
    try {
      exportRef('HEAD', dir);
      expect(existsSync(join(dir, 'package.json'))).toBe(true);
      expect(existsSync(join(dir, 'src/lib/kb/kb.js'))).toBe(true);
      expect(existsSync(join(dir, '.git-index'))).toBe(false);
      // a file with a hanzi name comes through
      expect(existsSync(join(dir, 'src/data/composites/qichuang-起床.ts'))).toBe(true);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
    expect(status()).toBe(before);
  }, 60_000);

  test('a ref that is not there is an error, not an empty folder', () => {
    const dir = mkdtempSync(join(tmpdir(), 'hsd-export-'));
    try {
      expect(() => exportRef('no-such-ref', dir)).toThrow('git');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe('snapshotAtRef', () => {
  test('parses every lesson sentence of the commit, and cleans up', async () => {
    const copies = () => readdirSync(tmpdir()).filter((n) => n.startsWith('hsd-ref-')).length;
    const before = copies();
    const s = await snapshotAtRef('HEAD');
    expect(copies()).toBe(before);
    const rows = Object.values(s);
    expect(rows.length).toBeGreaterThan(1000);
    expect(rows.every((r) => ['ok', 'late', 'fails'].includes(r.status))).toBe(true);
    expect(rows.filter((r) => r.status === 'ok').length).toBeGreaterThan(rows.length * 0.9);
  }, 120_000);
});
