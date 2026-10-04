// Every dictionary word's hanzi, for the browser (see src/lib/hanzi-map.js).
import { hanziFromLessons } from "./hanzi-map.js";

const lessons = import.meta.glob("../content/lessons/*/index.ts", { eager: true });

export const WORD_HANZI = hanziFromLessons(Object.values(lessons).map((m) => m.default));
