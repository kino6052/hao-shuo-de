// The dictionary's categories, now a VIEW of the topic net (TAGS_PLAN.md, K31 step A4): src/data/maps/topics.ts holds the tags
// and each word lists its topics, so nothing is written here. The tree has the shape the old readers expect (WordMap, graph.js,
// coverage-kb, the categorical dictionary page): a branch lists its subtopics, a leaf lists its word ids. A topic with
// subtopics and words of its own gets those words in an untitled leaf of its own. Retired when the readers move to the tags (D2).
import { categories, type Category, type Tag } from "../../lib/data-maps.ts";
import { tagNet } from "../../lib/tag-net.js";
import { WORDS } from "../words/index.ts";
import TOPICS from "./topics.ts";

const net = tagNet(TOPICS);
const members = new Map<string, string[]>();
for (const [id, w] of Object.entries(WORDS) as [string, { topics?: string[] }][]) {
  for (const t of w.topics ?? []) members.set(t, [...(members.get(t) ?? []), id]);
}

// the topic's own words: the ones its `order` names first, in that order, then the rest as the words are listed
function own(tag: Tag): string[] {
  const here = members.get(tag.id) ?? [];
  const first = (tag.order ?? []).filter((id) => here.includes(id));
  return [...first, ...here.filter((id) => !first.includes(id))];
}

function node(id: string): Category {
  const tag = net.byId.get(id) as Tag;
  const sub = net.children(id);
  const words = own(tag);
  const title = tag.bare ? null : tag.title;
  if (!sub.length) return { key: id, title, wordIds: words };
  const children = sub.map(node);
  if (words.length) children.push({ key: `${id}-general`, title: null, wordIds: words });
  return { key: id, title, children };
}

export default categories(net.tops.map(node));
