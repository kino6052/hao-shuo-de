import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8209,
  phase: 4,
  zh: "港口",
  py: "gǎngkǒu",
  en: "port; harbor",
  ru: "порт; гавань",
  pos: "noun",
  hsd: [
    "{{word:shui3}}-{{word:shang4}}-{{word:de}} {{word:che1}} {{word:lai2}}-{{word:qu4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:zai4}}-{{word:shui3}}-{{word:shang4}}-{{word:zou3}}-{{word:de}} {{word:che1}} {{word:zai4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["水上的车来去的地方", "在水上走的车在的地方"],
  literal: "the place where vehicles of the water come and go / the place where the vehicles that go on water are",
  fit: "plain",
  topics: ["places-in-town"],
  isA: ["outdoor-place"],
  proposed: true,
});
