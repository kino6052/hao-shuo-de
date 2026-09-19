// English text for lesson-13, positionally matching shape.ts.
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Spatial Nouns"],
  /** summary */
  [
    "Spatial words like `{{word:li3mian4}}`, `{{word:hou4mian4}}`, and `{{word:shang4mian4}}` are ordinary nouns naming a location, static position uses the coverb `{{word:zai4}}`, movement toward a destination uses `dào`, and `{{word:zai4}}-{{word:qu4}}-dào` marks movement currently in progress.",
  ],

  /** vocab: lǐmiàn */
  ["inside, between, internal organ"],
  /** vocab: hòumiàn */
  ["area behind, back"],
  /** vocab: xiàmiàn */
  ["area below, under, lower part, leg"],
  /** vocab: pángbiān */
  ["side, area beside, vicinity"],
  /** vocab: shàngmiàn */
  ["area above, highest part, sky"],
  /** vocab: qiánmiàn */
  ["area in front, face, chest"],
  /** vocab: dào */
  ["to go to, arrive at, move towards"],
  /** vocab: qù */
  ["to walk, move, travel"],

  /** prose: zai4 marks static location, dào marks movement toward a destination */
  {
    text: [
      "Hao-shuo-de treats spatial concepts as ordinary noun destinations rather than abstract markers -- `{{word:shang4mian4}}` (\"above, sky\"), `{{word:xia4mian4}}` (\"below\"), and the rest are all just nouns that happen to name a location.",
      "To place something at a fixed location, use the coverb `{{word:zai4}}` (from Lesson 9) in front of it.",
      "To describe movement toward a destination instead, use `dào` in that same slot.",
    ],
    tldr: ["`{{word:zai4}}` marks a static location; `dào` marks movement toward a destination -- both sit in the same coverb slot."],
    necessity: ["Extends Lesson 9's coverb pattern to space specifically, and distinguishes \"being somewhere\" from \"heading somewhere\"."],
  },
  /** info: Spatial Location */
  {
    title: ["Spatial Location"],
    items: [
      { text: ["Subject + `{{word:zai4}}` / `dào` + Target Object + Spatial Noun -- the same coverb slot from Lesson 9, filled with either the static or the directional root."] },
      { text: ["To mark movement currently in progress toward a destination, combine the progressive marker `{{word:zai4}}-` with the kinetic verb `{{word:qu4}}` and the destination marker `dào` into the compound `{{word:zai4}}-{{word:qu4}}-dào`."] },
      { text: ["A spatial noun standing alone, with no target object modifying it, functions as an ordinary baseline noun."] },
    ],
  },

  /** example 1 */
  ["I am at your side."],
  /** example 2 */
  ["The foundation / lower part of the place is strong."],
  /** example 3 */
  ["A large machine is moving in progress toward the sky."],
  /** example 4 */
  ["The document / word-thing is under the animal."],
  /** example 5 */
  ["I see a dark lady in front of the place."],
  /** example 6 */
  ["Color-things are next to the darkness."],

  /** exercise 1 */
  ["Water is coming from the sky."],
  /** exercise 2 */
  ["Protect your back."],
  /** exercise 3 */
  ["What did you put the red clock next to?"],

  /** answer 1 */
  ["{{Word:shui3}} {{word:cong2}} {{word:shang4mian4}}-{{word:de}} {{word:di4fang1}} {{word:lai2}}."],
  /** answer 2 */
  ["{{Word:ba3}} {{word:ni3}}-{{word:de}} {{word:hou4mian4}} {{word:bian4}} {{word:hao3}}."],
  /** answer 3 */
  ["{{Word:ni3}} {{word:ba3}} {{word:hong2se4}}-{{word:de}} {{word:shi2jian1}} {{word:gong1ju4}} dào {{word:shen2me}} {{word:dong1xi}}-{{word:de}} {{word:pang2bian1}}?"],
];

export default en;
