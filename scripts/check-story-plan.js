#!/usr/bin/env node
// Picture-plan gate (MASCOT_PLAN.md): the plan for the book's pictures lives in
// the lessons and intros themselves. Every lesson and intro has a `story` (its
// place in the year: season and color, what happens, who is in it). A module or
// section may keep a `scene` (a picture idea and the sentence it acts out), but
// the book gets one picture per chapter, so a scene is optional. The plan is the
// brief for the image; the reader never sees it.
// A scene also keeps the picture rules (no text in the picture, one accent
// color), so a word like "caption" or "label" in a scene is a mistake.
//
//   npm run check-story-plan

import { LESSON_IDS, importLessonFile } from './lessons.js';
import { INTRO_IDS, importIntroFile } from './intros.js';

const MIN_STORY = 60;
const MIN_SCENE = 40;
const SEASONS = ['autumn', 'winter', 'spring', 'summer'];

const problems = [];
let stories = 0;
let scenes = 0;
const seenScenes = new Map();

const chapters = [
  ...LESSON_IDS.map((id) => ({ id, lesson: true })),
  ...INTRO_IDS.map((id) => ({ id, lesson: false })),
];
for (const { id, lesson } of chapters) {
  const entries = lesson ? await importLessonFile(id, 'index.ts') : await importIntroFile(id);
  const title = entries.find((e) => e.type === 'title');
  const story = title?.story;
  if (typeof story !== 'string' || story.trim().length < MIN_STORY) {
    problems.push(`${id}: no story (at least ${MIN_STORY} characters: season and color, what happens, who is in it)`);
  } else {
    stories += 1;
    if (lesson && !SEASONS.some((s) => story.toLowerCase().includes(s))) problems.push(`${id}: the story names no season (${SEASONS.join(', ')})`);
  }
  for (const e of entries.filter((x) => x.type === 'prose')) {
    const where = `${id}/${e.module}`;
    const scene = e.scene;
    if (scene === undefined) continue; // a scene is optional: the book gets one picture per chapter
    if (typeof scene !== 'string' || scene.trim().length < MIN_SCENE) {
      problems.push(`${where}: scene is too short (at least ${MIN_SCENE} characters: what the picture shows and which sentence it acts out)`);
      continue;
    }
    scenes += 1;
    if (/\b(caption|label|speech bubble with (words|text)|written|letters|hanzi|digit)/i.test(scene) && !/\bno (text|letters|words|hanzi|digits)/i.test(scene)) {
      problems.push(`${where}: the scene asks for text in the picture; pictures carry no writing (rule P1)`);
    }
    const key = scene.trim().toLowerCase();
    if (seenScenes.has(key)) problems.push(`${where}: same scene as ${seenScenes.get(key)}`);
    else seenScenes.set(key, where);
  }
}

if (problems.length) {
  console.error(problems.map((p) => `  ✗ ${p}`).join('\n'));
  console.error(`\ncheck-story-plan: ${problems.length} problem(s).`);
  process.exit(1);
}
console.log(`check-story-plan: OK, ${stories} chapter stories and ${scenes} module scenes.`);
