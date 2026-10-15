import { describe, expect, test } from 'bun:test';
import { assetUrl } from './asset-url.js';

describe('assetUrl', () => {
  test('a site at the domain root', () => {
    expect(assetUrl('story/a.webp', '/en/pointing/')).toBe('/story/a.webp');
    expect(assetUrl('story/a.webp', '/')).toBe('/story/a.webp');
  });

  test('a GitHub Pages project path, from any page depth', () => {
    expect(assetUrl('story/a.webp', '/hao-shuo-de/')).toBe('/hao-shuo-de/story/a.webp');
    expect(assetUrl('story/a.webp', '/hao-shuo-de/en/')).toBe('/hao-shuo-de/story/a.webp');
    expect(assetUrl('audio/b.mp3', '/hao-shuo-de/ru/pointing')).toBe('/hao-shuo-de/audio/b.mp3');
    expect(assetUrl('/audio/b.mp3', '/hao-shuo-de/zh/pointing/')).toBe('/hao-shuo-de/audio/b.mp3');
  });
});
