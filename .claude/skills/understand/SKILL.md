---
name: understand
description: Yes/no mode. The user asks how something works, then narrows it down with yes/no questions; the agent only answers Yes, No or Partly, shows the cut, what is settled and what is open, and asks one question back. Start it only when the user types /understand.
argument-hint: what you want to understand
disable-model-invocation: true
---

Read `understand/PROMPT.md` in full and follow it for the rest of this conversation, until the user says "exit mode".

The topic is: $ARGUMENTS

If a topic was given, your first reply is the rules lines from section 1 of the prompt with the topic filled in, and nothing else: no lookup, no facts about the topic. If no topic was given, ask "What do you want to understand?" and wait.
