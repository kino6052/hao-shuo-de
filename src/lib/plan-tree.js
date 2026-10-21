// A plan file (AKINATOR_PLAN.md and the other *_PLAN.md checklists) as a tree, for the live plan page
// (vite-plugin-plan.js, /__plan/). Pure: text in, tree out.
//
//   planTree(markdown) -> { title, intro, now, sections, log, counts }
//
//   intro     the paragraphs before the first ## heading (the **Now:** line left out)
//   now       the text after **Now:**, or null: what Claude is doing at the moment
//   sections  [{ key, title, level, notes, items, counts }]   ## and ### headings, in file order; a section titled
//             "Log" is not one of them
//   log       the Log section's lines, newest first
//   item      { key, mark, text, notes, children, counts, line }
//             mark: ' ' to do, 'x' done, '~' doing now, '?' waits for the author, '-' dropped, null a plain bullet
//             notes: the indented lines under it that are not items
//   counts    { total, done, doing, waiting, todo, dropped }   over the leaves: an item with marked children counts
//             through them, not itself; a dropped leaf is not in total
//
// A key is the item's place in the tree by text (the bold name when it has one), so the page can tell what
// changed between two reads even when lines move.

const ITEM = /^(\s*)[-*+]\s+(?:\[([ xX~?-])\]\s+)?(.*)$/;
const HEADING = /^(#{1,6})\s+(.*?)\s*#*\s*$/;
const NOW = /^\*\*Now:\*\*\s*(.*)$/;

const indentOf = (s) => s.replace(/\t/g, '  ').length;
const emptyCounts = () => ({ total: 0, done: 0, doing: 0, waiting: 0, todo: 0, dropped: 0 });

// the bold name if the text starts with one, else the first 60 characters
function nameOf(text) {
  const bold = /^\*\*(.+?)\*\*/.exec(text);
  return (bold ? bold[1] : text.slice(0, 60)).replace(/[:.]\s*$/, '').trim();
}

function addCounts(into, from) {
  for (const k of Object.keys(into)) into[k] += from[k];
}

function leafCounts(mark) {
  const c = emptyCounts();
  if (mark === null) return c;
  if (mark === '-') c.dropped = 1;
  else {
    c.total = 1;
    if (mark === 'x') c.done = 1;
    else if (mark === '~') c.doing = 1;
    else if (mark === '?') c.waiting = 1;
    else c.todo = 1;
  }
  return c;
}

function countItem(item) {
  const c = emptyCounts();
  for (const ch of item.children) addCounts(c, countItem(ch));
  // an item counts through its marked children; a leaf (or one whose children are plain bullets) counts itself
  item.counts = c.total + c.dropped > 0 ? c : leafCounts(item.mark);
  if (item.mark === '-' && item.counts.total > 0) {
    // a dropped branch drops everything under it
    item.counts = { ...emptyCounts(), dropped: item.counts.total + item.counts.dropped };
  }
  return item.counts;
}

export function planTree(markdown) {
  const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
  const tree = { title: '', intro: [], now: null, sections: [], log: [], counts: emptyCounts() };
  let section = null;
  let inLog = false;
  let stack = []; // [{ indent, item }]
  let para = [];

  const flushPara = () => {
    if (!para.length) return;
    const text = para.join(' ');
    if (section) section.notes.push(text);
    else tree.intro.push(text);
    para = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.replace(/\s+$/, '');
    const h = HEADING.exec(line);
    if (h) {
      flushPara();
      stack = [];
      const level = h[1].length;
      if (level === 1) {
        tree.title = h[2];
        section = null;
        inLog = false;
        return;
      }
      inLog = level === 2 && /^log$/i.test(h[2]);
      section = inLog ? null : { key: h[2], title: h[2], level, notes: [], items: [], counts: emptyCounts() };
      if (section) tree.sections.push(section);
      return;
    }

    const m = ITEM.exec(line);
    if (m && inLog) {
      if (m[3]) tree.log.unshift(m[3]);
      return;
    }
    if (inLog) return;

    if (m && section) {
      flushPara();
      const indent = indentOf(m[1]);
      while (stack.length && stack[stack.length - 1].indent >= indent) stack.pop();
      const parent = stack.length ? stack[stack.length - 1].item : null;
      const mark = m[2] === undefined ? null : m[2].toLowerCase();
      const text = m[3];
      const item = { key: `${parent ? parent.key : section.key} / ${nameOf(text)}`, mark, text, notes: [], children: [], counts: null, line: i + 1 };
      (parent ? parent.children : section.items).push(item);
      stack.push({ indent, item });
      return;
    }

    if (!line.trim()) {
      flushPara();
      return;
    }

    // an indented line under an item is that item's note
    if (stack.length && /^\s/.test(line)) {
      const indent = indentOf(/^\s*/.exec(line)[0]);
      const owner = [...stack].reverse().find((s) => s.indent < indent);
      if (owner) {
        owner.item.notes.push(line.trim());
        return;
      }
    }
    stack = [];

    const now = NOW.exec(line.trim());
    if (now && !section) {
      flushPara();
      tree.now = now[1];
      return;
    }
    para.push(line.trim());
  });
  flushPara();

  for (const s of tree.sections) {
    for (const item of s.items) addCounts(s.counts, countItem(item));
    addCounts(tree.counts, s.counts);
  }
  return tree;
}
