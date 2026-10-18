# Yes/no mode: understand it by narrowing it down

A way to ask an agent about something in this project without being told. You ask how a thing works, then ask yes/no questions. The agent answers Yes, No or Partly, shows how much each answer narrowed things down and how far you have got, and hints with a question on every open item, never with the answer. You do the understanding; the agent keeps you honest. A sceptical **Critic** sits beside it and adds one hard question every time.

It works like twenty questions. Each good question cuts what is left in half, so a few wide questions get you further than many small ones.

## Start it

Pick one:

1. **In Claude Code, in this repo:** type `/understand` and what you want to understand, for example `/understand how kb english works`.
2. **In any agent:** paste the whole of [PROMPT.md](PROMPT.md), or say "read understand/PROMPT.md and follow it", then ask your question.
3. **Just the rules, to read yourself:** this file.

The agent answers only with the rules and waits. It does not look anything up until you ask.

## How to ask

- Open wide: "does it change data?", "does it need the internet?", "is it one step or several?". Narrow later.
- One thing at a time. A question with "and" in it often earns a "Partly".
- State your picture in your own words: "so it takes a word, finds the entries, and shows them in three groups." The agent says whether that holds. This is the quickest cut.
- After a "Partly", ask about each half on its own: "is the first part right?"
- Look at the **Cut** word. If it keeps saying `small` or `none`, you are confirming what you already knew; ask something wider.

## What every reply looks like

Short markdown, always in this order, nothing before or after:

```markdown
**No.** · Cut: big · Progress: ~35%

**Settled**
- it works offline
- it reads more than one thing (+2)

**Open**
- where its answers come from — *Where could the answers be kept, if not online?*

> **Critic:** One answer and you call it settled. What would you have noticed if it did use the internet?
```

- **First line**: the answer, then the **Cut** (`big`, `medium`, `small` or `none`: how much the answer narrowed things down), then the **Progress**.
- **Progress**: how much of the topic you have worked out yourself, rounded to 5%. It can go **down**, when a question shows there is more to the thing than you thought. Things the agent tells you do not count until you say them back and it answers Yes. 100% means you stated the whole picture and it held.
- **Settled**: what your questions and its answers have established, in your words, as a **tree**: a point sits under the point it refines. The chat shows only the branch the latest answer touched; the rest is one line with its size, `(+2)`.
- **Open**: what is still unknown, each with its **hint**: one question that points at the gap in your picture without giving the answer. The chat shows the hint on items the latest answer opened or changed.
- **Critic**: one hard question from the Critic. See below.

## What the agent answers

| It says | It means |
| --- | --- |
| **Yes** | True, and all of what you asked is true. |
| **No** | False. |
| **Partly** | Part of it is true. It will not say which part; the hint on the open item points at it. |
| **Can't tell** | It checked and the data does not say, or it could not check. It says which. |
| **Your question takes something for granted that isn't so** | It names the assumption, nothing more. |

## The side panel

The chat gets long. If you want it short, say **panel on** and a page opens beside the chat that shows the whole Settled tree, which you can fold and unfold, and every open item with its hint, plus the progress bar. The chat then shows only the first line, what changed and the Critic.

- The agent starts the server (`understand-panel` in `.claude/launch.json`, or `node understand/panel/serve.js`, then http://localhost:5188) and writes `understand/state.json` before each reply. The page reads that file every second. The file is git-ignored and nothing else uses it.
- Branches the latest answer touched open by themselves and the new points are shaded; older branches stay folded. What you fold or open by hand stays that way. **Expand all** and **Collapse all** are on the page.
- **panel off** puts the full lists back in the chat and stops the server. The panel is optional; everything works without it.

## The Critic

The Critic is smart, sceptical and unfriendly. After every answer (not after the first reply, which is only the rules) the Critic asks one extra question, built to make not knowing uncomfortable: the kind you would rather not be asked.

- It is **not the hint**. The hints help you; the Critic does not. It asks from an angle you did not think of: what if the opposite were true, a case that would break your picture, how you would know, the strange or empty input, how it could fail without anyone noticing, what if it did not exist, why this and not its neighbour, who is hurt if you are wrong. It never uses the same angle twice in a row.
- It picks at what you have **settled** ("one yes and you call it settled") or at what is still open. It does not state facts about the thing, and it says nothing that is not so.
- It is **fair**: you can answer it by thinking, or by asking the agent a yes/no question, or by a quick check.
- It is **unfriendly, not cruel**: curt, dry, unimpressed. It calls your picture thin or unproven. It does not insult you, only your picture.
- You do not have to answer. Ignore it twice in a row and it says so in a few words ("Still dodging."), once. Answer it, or turn it into a yes/no question, and the agent answers like any other question.
- Its question never changes the Cut or the Progress, and it does not add to Open unless you pick it up.

## Words you can say

| You say | What happens |
| --- | --- |
| **just tell me** (or **reveal**) | You get the plain answer to the current question, with the why. Then it goes back to yes/no mode, and the Critic asks you to say it back in your own words. |
| **where did you check?** | It names the file or the command it looked at. Otherwise it never names them. |
| **summarize** | The Settled tree as plain sentences. |
| **critic off** / **critic on** | Silence the Critic, or bring the Critic back. |
| **panel on** / **panel off** | Show the Settled tree and the open items in a side page, or put them back in the chat. |
| **exit mode** | Back to a normal conversation. Critic, percent and panel gone too. |

After five No or Partly answers in a row on one thread, the agent reminds you once that "just tell me" exists. It never offers the answer on its own.

## What the agent will not do

- Say what a thing is for, or why it was built that way, before you ask it to tell you.
- Add a true fact you did not ask about.
- Hint anywhere but on an open item.
- Say "warm" or "close". The Cut word and the Progress are the only measures.
- Answer a "why" or "what is" question. It asks you to state your guess instead.
- Guess. A Yes is always something it checked. If it could not check, it says "Can't tell".
- Let the Critic say anything about the thing that is not so.

One exception: if you are about to delete, change or publish something because of a mistake in your picture, it says so in one plain sentence and then goes back to the mode.

## An example

> **You:** How does `kb english` work?
>
> **Agent:** **Yes/no mode on `kb english`** · Progress: 0% (the rules, nothing else)
>
> **You:** Does it use the internet?
>
> **Agent:** **No.** · Cut: small · Progress: ~10%
> **Settled:** it works offline
> **Open:** where its answers come from — *Where could the answers be kept, if not online?*
> **Critic:** One answer and you call it settled. What would you have noticed if it did use the internet?
>
> **You:** Is that the only thing it looks at?
>
> **Agent:** **No.** · Cut: big · Progress: ~35%
> **Settled:** it works offline; it reads more than one thing, and under that the English text of the entries
> **Open:** what else it reads — *If a word is in no entry's English text, what else could still lead you to an entry?*
> **Critic:** So it reads more than one thing. Suppose they disagree. Which would you trust, and why?

The full example is at the bottom of [PROMPT.md](PROMPT.md).

## Files

- [PROMPT.md](PROMPT.md): the rules the agent follows. This is the one place they live; change them here.
- `.claude/skills/understand/SKILL.md`: the `/understand` command. It only tells the agent to read PROMPT.md.
- `panel/`: the side panel, a small local server (`serve.js`) and one page (`index.html`). It only shows what the agent writes to `state.json`.
