import { describe, expect, test } from 'bun:test';
import { TAGS, CATEGORY_TAGS, patternTags, tagProblems } from './grammar-tags.ts';

const good = { id: 'bi-than', tags: ['compare', 'cat:relation'], taught: 'comparing/than', covers: ['grammar:compare'] };

describe('grammar tags', () => {
  test('a well-tagged pattern has no problems', () => {
    expect(tagProblems(good)).toEqual([]);
  });

  test('a missing, unknown or doubled tag is caught', () => {
    expect(tagProblems({ ...good, tags: [] })).toEqual(['bi-than: no tags']);
    expect(tagProblems({ ...good, tags: ['compare', 'cat:relation', 'compair'] })).toEqual(['bi-than: unknown tag "compair"']);
    expect(tagProblems({ ...good, tags: ['compare', 'compare', 'cat:relation'] })).toEqual(['bi-than: a tag is listed twice']);
  });

  test('a pattern needs a theme tag, a category tag and a lesson', () => {
    expect(tagProblems({ ...good, tags: ['cat:relation'] })).toEqual(['bi-than: no theme tag']);
    expect(tagProblems({ ...good, tags: ['compare'] })).toEqual(['bi-than: no category tag (cat:...)']);
    expect(tagProblems({ ...good, taught: undefined })).toEqual(['bi-than: not taught in a lesson module, so it has no lesson tag']);
  });

  test('the derived tags come from taught and covers', () => {
    expect(patternTags(good)).toEqual(['compare', 'cat:relation', 'lesson:comparing', 'module:comparing/than', 'grammar:compare']);
  });

  test('the tag lists have the ten categories and plain descriptions', () => {
    expect(CATEGORY_TAGS).toHaveLength(10);
    for (const [tag, about] of Object.entries(TAGS)) {
      expect(about.length, tag).toBeGreaterThan(3);
      expect(tag.includes(':'), tag).toBe(false);
    }
  });
});
