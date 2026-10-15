// The NSM primes in their families, and the primes with an alternate way to say them (KB_PLAN.md K19, phase 5).
// The families are the standard grouping of the 65 primes in Goddard and Wierzbicka's tables; Claude wrote them down on
// 2026-10-16 and every entry is `proposed` until the author confirms it. The primes are the keys of coverage/atoms.ts.
import { primes } from "../../lib/data-maps.ts";

export default primes({
  families: [
    {
      name: "Substantives",
      why: "The things a sentence is about: me, you, someone, something, people, the body.",
      primes: ["I", "YOU", "SOMEONE", "SOMETHING", "PEOPLE", "BODY"],
      proposed: true,
    },
    {
      name: "Relational substantives",
      why: "What a thing is a kind of, and what it is a part of.",
      primes: ["KIND", "PART"],
      proposed: true,
    },
    {
      name: "Determiners",
      why: "Which thing is meant: this one, the same one, the other one.",
      primes: ["THIS", "THE SAME", "OTHER"],
      proposed: true,
    },
    {
      name: "Quantifiers",
      why: "How many or how much, from one to all.",
      primes: ["ONE", "TWO", "SOME", "ALL", "MUCH", "LITTLE"],
      proposed: true,
    },
    { name: "Evaluators", why: "Good and bad: how anything is judged.", primes: ["GOOD", "BAD"], proposed: true },
    { name: "Descriptors", why: "Big and small: the size of anything.", primes: ["BIG", "SMALL"], proposed: true },
    {
      name: "Mental predicates",
      why: "What goes on in a mind: thinking, knowing, wanting, feeling, seeing, hearing.",
      primes: ["THINK", "KNOW", "WANT", "DON'T WANT", "FEEL", "SEE", "HEAR"],
      proposed: true,
    },
    {
      name: "Speech",
      why: "Saying, the words said, and whether they are true.",
      primes: ["SAY", "WORDS", "TRUE"],
      proposed: true,
    },
    {
      name: "Actions, events, movement",
      why: "Doing, happening and moving.",
      primes: ["DO", "HAPPEN", "MOVE"],
      proposed: true,
    },
    {
      name: "Location, existence, specification, possession",
      why: "Where something is, that it is, what it is, whose it is.",
      primes: ["BE SOMEWHERE", "THERE IS", "BE SOMEONE", "MINE"],
      proposed: true,
    },
    { name: "Life and death", why: "Being alive and being dead.", primes: ["LIVE", "DIE"], proposed: true },
    {
      name: "Time",
      why: "When, now, before, after, and how long.",
      primes: ["WHEN", "NOW", "BEFORE", "AFTER", "A LONG TIME", "A SHORT TIME", "FOR SOME TIME", "MOMENT"],
      proposed: true,
    },
    {
      name: "Space",
      why: "Where, here, above, below, far, near, the side, inside, and touching.",
      primes: ["WHERE", "HERE", "ABOVE", "BELOW", "FAR", "NEAR", "SIDE", "INSIDE", "TOUCH"],
      proposed: true,
    },
    {
      name: "Logical concepts",
      why: "Not, maybe, can, because and if: the words that reason is built from.",
      primes: ["NOT", "MAYBE", "CAN", "BECAUSE", "IF"],
      proposed: true,
    },
    {
      name: "Augmentor, intensifier",
      why: "More, and very: how much further a thing goes.",
      primes: ["VERY", "MORE"],
      proposed: true,
    },
    { name: "Similarity", why: "Like: one thing is as another is.", primes: ["LIKE"], proposed: true },
  ],

  // The carriers the coverage file lists for a prime, told apart: the main way to say it and its alternates. A prime said
  // with one word has none; the second ways to say a prime that are whole forms stay in coverage/atoms.ts (K24).
  alternates: [
    {
      prime: "TWO",
      main: ["liang3"],
      alternates: ["er4"],
      why: "Liǎng counts two things (liǎng-ge rén); èr is the number two, in counting and in numbers.",
      proposed: true,
    },
    {
      prime: "SIDE",
      main: ["pang2bian1"],
      alternates: ["bian1"],
      why: "Pángbiān says beside; biān alone is the side or edge of a thing.",
      proposed: true,
    },
    {
      prime: "WHERE",
      main: ["di4", "fang1"],
      alternates: ["na3", "li3"],
      why: "Dì-fang is the place; nǎ-lǐ asks where it is. NSM counts them as one prime, WHERE / PLACE.",
      proposed: true,
    },
  ],
});
