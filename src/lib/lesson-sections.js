// Groups lesson ids into the narrative sections described in intro-3.ts's
// table of contents, so the sidebar TOC can group lessons the same way.
// Keep this in sync with intro-3.ts if the curriculum changes.
//
// The book was resequenced so each section is a consecutive lesson-number
// range (see BOOK_STRUCTURE.md) -- lesson-01..07, lesson-08..10, lesson-11..15.
// lesson-16 through lesson-20 still hold their pre-intro-3 topics (Proper
// Names & Geography, Modification Stacking, the three story lessons) and
// aren't yet accounted for by any of the three sections, so they're left
// out rather than force-fit somewhere misleading; the sidebar falls them
// through to a generic "More Lessons" bucket instead.
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
    ],
  },
];

// -> the i18n key for the section this lesson id belongs to, or null if
// it hasn't been placed in the intro-3 plan yet.
export function sectionKeyForLesson(id) {
  return LESSON_SECTIONS.find((s) => s.lessonIds.includes(id))?.key ?? null;
}
