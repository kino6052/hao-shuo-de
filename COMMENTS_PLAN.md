# Comments plan

Readers leave a comment on a part of a page: a word card, a paragraph or box, an example, a practice question, a story line, a picture, a question in the FAQ, or the whole page. A comment can be sent without a name or from a signed-in account. Only the admin (the author) can read, list or delete comments, so they can be collected and used to improve the book. Asked for on 2026-10-23 by the session that built the statistics and the sign-in; this file is its living checklist.

It reuses the book's Firebase project, its sign-in (`src/lib/auth.js`) and the translator's rules and emulator workflow ([TRANSLATOR_PLAN.md](TRANSLATOR_PLAN.md) §3a, S1, S2).

**Now:** Parts A to C built and committed (2026-10-23); the 💬 button is on the site. Sending works once the author switches on Anonymous sign-in (E2) and the rules are deployed (E4): until then a reader who is not signed in sees "Comments are not switched on yet." and a signed-in one "The comment could not be sent". Open: the browser check of a signed-in comment and of the admin page (D3), and the wording (E1). The decisions in §2 are Claude's picks, open to change.

**Live view:** `npm run dev`, then http://127.0.0.1:5173/__plan/?file=COMMENTS_PLAN.md

**Marks:** `[ ]` to do · `[~]` doing now · `[x]` done · `[?]` waits for the author · `[-]` dropped. A line under an item without a mark is a note.

## 1. How it fits together

- **The reader's side**
  - A small 💬 button sits at the bottom corner of every book page
  - Tapping it starts "comment mode": each part of the page gets a thin outline, and a bar at the bottom (beside the sidebar on a wide screen) says "Tap the part you want to comment on", with a button for the whole page
  - Tapping a part opens a small box instead of the part's own action (a sound button, a link): the part's own words in one line (its buttons' labels left out), a text box, the counter, Send and Cancel. The box sits near the top of the screen, so a phone's keyboard does not cover it
  - Sending as a reader who is not signed in makes a quiet anonymous Firebase account first (Q3), only then, never on page load
- **The data in Firestore**
  - `comments/{id}` with `text, page, part, quote, lang, version, uid, signedIn, createdAt` and, set by the admin only, `done`
  - `commentLimits/{uid}` with `last, since, count, total`: the reader's own counter, which the rules use to hold back a flood (CM6)
- **The rules**
  - Anyone (anonymous or signed in) may add a comment as themselves, with only those fields, the sizes of CM5 and the server's time, together with their own counter in the same write
  - No reader may read, list, change or delete a comment, their own included
  - The admin (CM8) may read, list and delete every comment, and change only `done`
- **The admin's side** (Q2)
  - A page `/comments/` (its own entry, like `/translator/`): newest first, a filter by page, done or not, a delete button, and a JSON download
  - A command `npm run comments -- export` that writes every comment to `review/comments/<date>.json` (not in git) through the Admin SDK, so a Claude session can read them and propose fixes

## Q. Questions for the author (one at a time; answers become CM decisions)

- [x] **Q1. What a comment attaches to.**
  - (a) Each part of a lesson or page: a word card, a paragraph or box, an example, a practice question, a story line, a picture, an FAQ question, the summary, the test, plus the whole page
  - (b) Each point of a lesson (a module) and the whole page
  - (c) Only the whole page; the reader says where
  - **Claude's pick:** (a). A lesson part keeps the id the lesson already gives it (`also-do.example2`), so a comment says exactly where; the part's text is stored with it (CM3), so it still makes sense after the lesson changes
  - **Answered (2026-10-23, the author): (a).**
- [x] **Q2. How the admin reads and collects comments.**
  - (a) A page in the site, `/comments/`, for the admin only: the list, a filter, mark done, delete, download JSON
  - (b) A command on this PC, `npm run comments -- export`, writing JSON through the Admin SDK (it needs the service-account key, TRANSLATOR_PLAN.md S0)
  - (c) Both
  - **Claude's pick:** (c). The page works from a phone; the command gives a Claude session the file to work from
  - **Answered (2026-10-23, the author): (c), both.**
- [x] **Q3. What "anonymous" means.**
  - (a) A quiet anonymous Firebase account, made only when someone sends a comment. Each browser gets a random id, so the rules can hold back a flood (one comment per 15 seconds, 30 a day). It needs one switch in the Firebase console: Authentication > Sign-in method > Anonymous
  - (b) No account at all: works with no console change, but the rules can only check the size of a comment, not how many one person sends
  - **Claude's pick:** (a)
  - **Answered (2026-10-23, the author): (a).** Switching it on in the console is E2.

## 2. Decisions (Claude's picks; open to change)

- [x] **CM1. The parts and their ids.** A lesson part's id is the `key` that `lesson()` gives it (`<module>.word1`, `.prose`, `.info`, `.example2`, `.exercise3`, `.faq1`, `.image`), and `title`, `summary`, `image` for the head. A flat chapter (an intro, an appendix) numbers its parts by kind (`prose3`, `example2`). Every page has `page`; a lesson also `test`. Pages without a flow (the dictionaries, the tools, the final exam) have only `page` for now (G1)
- [x] **CM2. The page id** is the chapter id from the URL (`also-and-all`, `intro-1`), and `lang` is the book's language (`eng`, `rus`, `zh`)
- [x] **CM3. The quote.** The part's text as the reader saw it, in one line, cut to 300 characters, is stored with the comment, so a comment still says what it was about after the lesson changes and its ids shift
- [x] **CM4. The app version** is `package.json`'s version and the commit the site was built from (`0.0.1+a4ea1880`), set by the build (`__APP_VERSION__` in vite.config.js)
- [x] **CM5. Sizes.** The text 1 to 1,000 characters; page and part up to 80; the quote up to 300; the version up to 40; `lang` one of the three. The rules check each, and the box counts down from 1,000
- [x] **CM6. The guard against a flood** (with Q3 (a)): a reader's counter in `commentLimits/{uid}`, written in the same batch as the comment. At least 15 seconds between two comments, at most 30 in a day from one browser or account. The comment's id is `<uid>-<total>`, the counter's running total, so one batch cannot slip in two comments on one count. Firebase's own limit on new anonymous accounts per address does the rest
- [x] **CM7. Who the reader is.** `uid` is the account's id: a signed-in reader's own account, or the anonymous one, which is a random id for that browser and says nothing about the person. `signedIn` says which; the rules check it against the sign-in. No email or name is stored. The box tells the reader which it is: "It is sent from your account." or "It is sent without your name."
- [x] **CM8. The admin** is the translator's owner: a verified email whose `allowed/<email>` entry has `owner: true` (TRANSLATOR_PLAN.md Q12, `npm run translator -- allow <email> --owner`). One list, one command, nothing new to keep
- [x] **CM9. Done.** The admin can mark a comment done (the only field an update may change), so handled comments stay as a record instead of being deleted
- [x] **CM10. The 💬 button can be hidden** in the ⚙ pop-up ("Show the comment button", on by default), for a reader who does not want it
- [x] **CM11. An anonymous account stays out of sight.** The sidebar, the statistics and the members' no-ads treat it as signed out (`src/lib/auth.js`); signing in with Google later simply replaces it
- [x] **CM12. Nothing loads until it is needed.** The 💬 button is part of the page; the box, the Firestore SDK and the anonymous sign-in come in their own chunk when the reader taps it
- [x] **CM13. No kind of comment** (mistake, unclear, idea) to choose: one text box is lighter, and the text says it. Later if the list gets long (G2)

## 3. The reader-facing words (for the author's review)

- [?] **W1. The wording,** in English below; Russian and Chinese in `src/lib/i18n.js` next to them
  - The 💬 button's label: "Leave a comment"
  - The bar in comment mode: "Tap the part you want to comment on." with the buttons "The whole page" and "Cancel"
  - The box's title: "Your comment"; above the text box: "On:" and the part's text
  - The text box's hint: "What is wrong, unclear or missing? Ideas are welcome too."
  - Under it: "Only the author reads comments." and "It is sent from your account." or "It is sent without your name."
  - The counter: "{n} characters left"
  - The buttons: "Send", "Cancel"; while sending: "Sending…"
  - After: "Thank you! Your comment was sent."
  - When held back: "Please wait a few seconds before the next comment." and "That's all the comments for today. Thank you!"
  - On a failure: "The comment could not be sent. Please try again." and, before the console switch (Q3): "Comments are not switched on yet."
  - In ⚙: "Show the comment button"

## A. Data and rules

- [x] **A1. The rules** in `firestore.rules`: `comments/{id}` and `commentLimits/{uid}` as in §1, CM5 to CM9
- [x] **A2. Rules tests** against the emulator, beside the translator's (`src/lib/comments/rules.test.js`, on request like `translator/rules`): anonymous, signed in, wrong uid, `signedIn` that lies, extra fields, sizes, the client's own time, a second comment within 15 seconds, the 31st in a day, two comments in one batch, a reader reading or deleting, the admin reading, listing, marking done and deleting, a not-verified owner
  - 12 tests, steady over 6 runs; 12 deliberate breaks of the rules, each caught by a test
- [x] **A3. The client** (`src/lib/comments/client.js`): `sendComment` (the batch: the counter and the comment; a second plan for the counter when the browser's clock and the server's disagree near the day's end), `watchComments`, `markDone`, `deleteComment`; the rules' numbers, the quote, the counter's plans and the JSON shape in `src/lib/comments/comment.js`
- [x] **A4. Tests** for the pure parts (`src/lib/comments/comment.test.js`, 11 tests) in the fast tier
- [x] **A5. The version** (`__APP_VERSION__`, CM4; `src/lib/version.js`)

## B. The reader's side

- [x] **B1. The parts:** each flow item carries its part id (`src/lib/chapter-content.js`), and the components put it on the element as `data-part`; chapter-content tests updated
- [x] **B2. The 💬 button and comment mode** (`src/components/CommentButton.jsx`): the outline, the bar, the tap that picks a part and stops the part's own action (an audio button, a link)
- [x] **B3. The box** (`src/components/CommentBox.jsx`, its own chunk): the quote, the text box with its counter, Send, the messages
- [x] **B4. The anonymous account** in `src/lib/auth.js` (CM11): made on Send, kept out of sight
- [x] **B5. The setting** in `src/lib/settings.js` and the ⚙ pop-up (CM10)
- [x] **B6. The strings** in `src/lib/i18n.js` (§3), English, Russian and Chinese; check-jargon and check-hanzi pass
- [x] **B7. Phone width, keyboard and dark mode:** the box fits a 375 px screen near the top, Esc closes, Tab reaches Send, the light and dark themes keep their colours

## C. The admin's side

- [x] **C1. The page** `/comments/` (`comments/index.html`, `src/comments/`): sign in, "not the admin" for anyone else, the list newest first with page, part, quote, language, version, time and signed in or not, a link to the page, filters by page and done, mark done, delete with a confirm, download JSON
- [x] **C2. The command** `npm run comments -- export [--out file] [--emulator]` and `list [--page id]`, through the Admin SDK and the key in `%USERPROFILE%\.haoshuode-translator\`; `review/comments/` in .gitignore. Tried on the emulator: export and list
- [x] **C3. The build** takes the new page as a third entry (vite.config.js) and `generate-pages.js` leaves it alone

## D. Checks

- [x] **D1.** `npm test` and `npm run check` pass
- [x] **D2.** The rules tests pass on the emulator (`npx firebase-tools@13 emulators:exec --only firestore --project demo-translator "bun test src/lib/comments/rules.test.js"`)
- [~] **D3.** In the browser on the emulators (`npm run dev -- --mode emulator`, launch config `dev-emulator`, or `dev-emulator-5176` when 5175 is taken): a comment sent anonymously, one signed in, one held back, at phone width and in dark mode; the admin page lists them, marks one done, deletes one, downloads the JSON; a reader who is not the admin sees nothing
  - Done 2026-10-23: two comments sent anonymously, one held back by the 15 seconds and sent after them, a too-long one refused, the box at 375 px in the light and dark themes, the admin page's sign-in step, the anonymous account shown as signed out
  - Still to do: a signed-in comment and the admin page's list, done, delete and download. Signing in on the emulator by redirect came back still on the anonymous comment account, and the emulator made no Google account; to look into (the real site signs in by pop-up)
- [x] **D4.** `npm run test:push` before any push

## E. From the author

- [?] **E1.** Read the wording (W1). Q1 to Q3 answered 2026-10-23
- [?] **E2.** Switch on Anonymous sign-in in the Firebase console (Q3 (a))
- [?] **E3.** Be on the list as the owner in the real project (`npm run translator -- allow <email> --owner`), if not yet
- [?] **E4.** Commit when asked; deploying the rules (`firebase deploy --only firestore:rules`) and pushing the site publish them, so each is asked in chat first
  - 2026-10-23: the author asked to commit and push the site. The rules are not deployed yet
- [?] **E5.** The emulator's redirect sign-in (D3)

## G. Later

- [ ] **G1. Comments on a dictionary entry**, a builder or the final exam, part by part
- [ ] **G2. A kind of comment** (mistake, unclear, idea), if the list grows (CM13)
- [ ] **G3. A reply** to a signed-in reader, if the author wants to answer
- [ ] **G4. The box's "from your account" line** follows the book's own sign-in. With `SIGN_IN_EVERYWHERE` off, a reader signed in on the translator page would read "without your name" though the comment carries their account

## Log

- 2026-10-23 Plan written: how it fits together, Q1 to Q3, decisions CM1 to CM13, the wording, parts A to G.
- 2026-10-23 Q1 to Q3 answered by the author, each Claude's pick: each part, both the page and the command, an anonymous account.
- 2026-10-23 Parts A to C built: the rules and their 12 emulator tests, the client, the parts on every lesson element, the 💬 button, the box, the setting, the strings in three languages, the admin page and the export command. The tests and every gate pass; the anonymous path checked in the browser on the emulators. Committed and pushed at the author's request; the rules wait for their deploy (E4).
