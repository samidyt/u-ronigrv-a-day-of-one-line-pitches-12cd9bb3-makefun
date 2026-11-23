# Build notes — A Day of One-Line Pitches

Bounty: https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
Prize: $5 total, 3 paid places ($2 / $2 / $1). Free entry. Opens 23 Nov 2026
17:19:43 UTC, deadline 17:20 UTC (Wed 25 Nov 2026 00:20 WIB). House judge
(z-ai/glm-5.3-flash), pairwise, blind rounds, 3 Swiss rounds + playoff
among top 5; final heat takes the top 500 on the dev board.

## Kit status

The kit WAS fetched: `GET /c/<slug>/kit` returned a gzip tarball (saved as
`../u-ronigrv-a-day-of-one-line-pitches-12cd9bb3-kit/kit.tgz`, bundle sha256
`f4e74eddfe919e57be05877e6d5abd0bd2bc983f2d1aa15041e60712fa4df0ec`).
RULES.txt was read in full. Key facts confirmed against the brief:

- Gate: `/output/entry.txt` UTF-8, **1–240 chars**, not only whitespace.
  (The brief's 240-char cap is confirmed — do NOT assume the previous
  bounty's 200-char gate.)
- Judge criteria, in order: (1) the sentence makes the case to a friend
  who has never coded, in one read; (2) persuasion — a concrete reason to
  say yes now, handing over the idea feels easy and low risk;
  (3) clarity — one read is enough, plain words, no jargon;
  (4) truth — what it says an AI agent can do holds up, no overpromising;
  (5) warmth and craft — sounds like a person talking to a friend, a fresh
  turn of phrase rather than a template or slogan.
- Harness: program/v1, `main.ts` at repo root, Node 22, stdlib only.
- No local grader exists in the kit ("the server grades every entry").
- Repo must be public, OSI license, created after the competition opened,
  README with the three live make.fun badges, GitHub About with a make.fun
  website + `makefun` topic. `.makefun/owner.json` included (wallet
  `2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788`, same as prior entries).

## The line — 3 genuine write/edit passes on main.ts

Candidates drafted before choosing (all original, all aimed at a friend
who has never coded):

1. "If you can explain your app idea to a friend over coffee, you can
   already build it — just tell an AI agent on make.fun and watch it
   become something you can actually use." — 170 chars.
2. "Stop keeping your app idea in your head where nobody can use it —
   describe it to an AI agent on make.fun and hold the working version in
   your hands before dinner." — 162 chars.
3. "Your app idea doesn't need you to learn to code, it just needs you to
   describe it once and let an AI agent on make.fun build the first
   version while you watch." — 159 chars.
4. "The hardest part of your first app was never the code, it was
   starting — so describe your idea to an AI agent on make.fun and let it
   do the starting for you." — 157 chars.
5. "You don't need to learn coding to see your idea as a real app — tell
   an AI agent on make.fun what you want, and it'll build a first version
   you can actually tap and try." — 169 chars.

Honest judging of the rivals: (2) "before dinner" overpromises on speed
(criterion 4) and "Stop keeping…" scolds rather than warms (criterion 5);
(3) and (5) are the stock "no need to learn coding" template — clear and
true, but not fresh (criterion 5); (4) has a nice reframe but "let it do
the starting for you" lands awkwardly and its payoff phrase is weaker
than (1)'s.

### Pass 1 (draft — candidate 1, as drafted)

> If you can explain your app idea to a friend over coffee, you can already build it — just tell an AI agent on make.fun and watch it become something you can actually use.

170 chars. Verified working. What it does well: the reframe (explaining =
building) removes the friend's core fear in the first clause; "over
coffee" is warm and human; "just tell" makes the ask feel easy.
Problem found on review: "something you can actually use" is vague —
the friend wants an *app*, and criterion 2 rewards a concrete payoff.

### Pass 2 (revised — concrete payoff)

> If you can explain your app idea to a friend over coffee, you can already build it — just tell an AI agent on make.fun and watch it become a real app you can actually use.

171 chars. Verified working. What changed and why: "something" →
"a real app" — it names the thing the friend actually wants, their first
app, and makes the payoff concrete (criterion 2). "Tell" kept over
"describe": plainer, shorter, one read is enough.

### Pass 3 (final — kept pass 2, read once more against the criteria)

No wording change. Final check: (1) makes the case to the friend
directly, in one read; (2) "you can already build it" + "just tell" =
easy and low-risk, with a concrete payoff; (3) plain words, no jargon;
(4) promises a first version you can use, not a finished product —
nothing overpromised; (5) "over coffee" is warm, the reframe is fresh.

Note: the one-sentence self-check counts only sentence-terminating marks
followed by whitespace or end-of-string, because the period inside
"make.fun" is mid-word, not a sentence terminator. A naive `[.!?]` count
would wrongly reject this entry — the first run caught exactly that.

## Verification (no kit grader — kit has none; server grades)

- `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts` run twice:
  byte-identical `out/entry.txt` (sha256
  `3be275da18116e63bdfad8de93822ec404f11208a105c232e333bb45f34086a2`),
  171 chars / 173 bytes, valid UTF-8, exactly one sentence (one terminal
  period), non-whitespace. Gate: PASS (1–240 chars).
- Program self-checks the gate before writing and throws on violation.
- No fee paid, no wallet/key touched, nothing faked, no real funds involved.
- Not bundled, not submitted — the main agent handles submission.
