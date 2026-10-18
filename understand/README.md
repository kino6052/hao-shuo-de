# Yes/no mode: understand it by narrowing it down

A way to ask an agent about something in this project without being told. You ask how a thing works, then ask yes/no questions. The agent answers Yes, No or Partly, shows how much each answer narrowed things down, and hints with a question, never with the answer. You do the understanding; the agent keeps you honest.

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

## What the agent answers

| It says | It means |
| --- | --- |
| **Yes** | True, and all of what you asked is true. |
| **No** | False. |
| **Partly** | Part of it is true. It will not say which part. |
| **Can't tell** | It checked and the data does not say, or it could not check. It says which. |
| **Your question takes something for granted that isn't so** | It names the assumption, nothing more. |

After the answer word you see four lines:

- **Cut**: `big`, `medium`, `small` or `none`. How much the answer narrowed things down.
- **Settled**: what your questions and its answers have established so far, in your words.
- **Open**: what is still unknown, as bare names.
- **Back**: one question that points at the gap in your picture. It is the hint.

## Words you can say

| You say | What happens |
| --- | --- |
| **just tell me** (or **reveal**) | You get the plain answer to the current question, with the why. Then it goes back to yes/no mode. |
| **where did you check?** | It names the file or the command it looked at. Otherwise it never names them. |
| **summarize** | The Settled list as plain sentences. |
| **exit mode** | Back to a normal conversation. |

After five No or Partly answers in a row on one thread, the agent reminds you once that "just tell me" exists. It never offers the answer on its own.

## What the agent will not do

- Say what a thing is for, or why it was built that way, before you ask it to tell you.
- Add a true fact you did not ask about.
- Say "warm" or "close". The Cut word is the only measure.
- Answer a "why" or "what is" question. It asks you to state your guess instead.
- Guess. A Yes is always something it checked. If it could not check, it says "Can't tell".

One exception: if you are about to delete, change or publish something because of a mistake in your picture, it says so in one plain sentence and then goes back to the mode.

## An example

> **You:** How does `kb english` work?
> **Agent:** Yes/no mode on `kb english`. Ask me yes/no questions, wide ones first. (…the rules…)
> **You:** Does it use the internet?
> **Agent:** **No.** Cut: small. Settled: it works offline. Open: where its answers come from. Back: Where could the answers be kept, if not online?
> **You:** Is that the only thing it looks at?
> **Agent:** **No.** Cut: big. … Back: If a word is in no entry's English text, what else could still lead you to an entry?

The full example is at the bottom of [PROMPT.md](PROMPT.md).

## Files

- [PROMPT.md](PROMPT.md): the rules the agent follows. This is the one place they live; change them here.
- `.claude/skills/understand/SKILL.md`: the `/understand` command. It only tells the agent to read PROMPT.md.
