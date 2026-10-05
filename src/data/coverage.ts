// The coverage knowledge base, assembled from coverage/ (one file per group,
// listed by coverage/index.ts) in the shape the old coverage.json had:
// { about, groups: [{ key, title, about, items }] }.

import ABOUT from "./coverage/about.ts";
import { GROUPS } from "./coverage/index.ts";
import type { CoverageGroup } from "../lib/coverage-kb.ts";

const groups = [...(GROUPS as CoverageGroup[])].sort((a, b) => a.order - b.order).map(({ order: _order, ...g }) => g);

const coverage = { about: ABOUT, groups };
export default coverage;
