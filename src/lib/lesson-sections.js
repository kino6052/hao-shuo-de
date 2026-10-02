// Groups lesson ids into the narrative sections described in intro-3.ts's
// table of contents, so the sidebar TOC can group lessons the same way.
// Keep this in sync with intro-3.ts if the curriculum changes --
// scripts/check-book.js fails the build when the two drift apart.
//
// The book is the 22 lessons intro-3 lists, in three consecutive-numbered
// sections (see BOOK_STRUCTURE.md and BOOK_PLAN.md): lesson-01..06,
// lesson-07..15, lesson-16..22. The previous 16-lesson layout is archived in
// src/content/legacy/v2-16-lessons/, and the curriculum before that in
// src/content/legacy/.
export const LESSON_SECTIONS = [
  {
    key: "sectionFoundations",
    lessonIds: [
      "lesson-01",
      "lesson-02",
      "lesson-03",
      "lesson-04",
      "lesson-05",
      "lesson-06",
    ],
  },
  {
    key: "sectionModifying",
    lessonIds: [
      "lesson-07",
      "lesson-08",
      "lesson-09",
      "lesson-10",
      "lesson-11",
      "lesson-12",
      "lesson-13",
      "lesson-14",
      "lesson-15",
    ],
  },
  {
    key: "sectionSpecial",
    lessonIds: [
      "lesson-16",
      "lesson-17",
      "lesson-18",
      "lesson-19",
      "lesson-20",
      "lesson-21",
      "lesson-22",
    ],
  },
];

// -> the i18n key for the section this lesson id belongs to, or null if
// it hasn't been placed in the intro-3 plan yet.
export function sectionKeyForLesson(id) {
  return LESSON_SECTIONS.find((s) => s.lessonIds.includes(id))?.key ?? null;
}
