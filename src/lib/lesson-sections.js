// Groups lesson ids into the narrative sections described in intro-3.ts's
// table of contents, so the sidebar TOC can group lessons the same way.
// Keep this in sync with intro-3.ts if the curriculum changes.
//
// The book is now exactly the 16 lessons intro-3 names, in three
// consecutive-numbered sections (see BOOK_STRUCTURE.md): lesson-01..06,
// lesson-07..10, lesson-11..16. Everything from the pre-intro-3 curriculum
// that isn't one of these 16 topics (Proper Names & Geography, Modification
// Stacking, the three story lessons, ...) was archived to
// src/content/legacy/ instead of being renumbered into the book.
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
    lessonIds: ["lesson-07", "lesson-08", "lesson-09", "lesson-10"],
  },
  {
    key: "sectionSpecial",
    lessonIds: [
      "lesson-11",
      "lesson-12",
      "lesson-13",
      "lesson-14",
      "lesson-15",
      "lesson-16",
    ],
  },
];

// -> the i18n key for the section this lesson id belongs to, or null if
// it hasn't been placed in the intro-3 plan yet.
export function sectionKeyForLesson(id) {
  return LESSON_SECTIONS.find((s) => s.lessonIds.includes(id))?.key ?? null;
}
