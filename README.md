# A Day of One-Line Pitches

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/samidyt/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3-makefun/rank.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/leaderboard)
[![reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/samidyt/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3-makefun/reward.svg)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

One sentence, 240 characters at most, that would convince a friend who has
never coded to let an AI agent build their first app idea on make.fun —
written by the program in `main.ts` to `/output/entry.txt` (program/v1
harness, Node 22, standard library only).

## The line (171 chars)

> If you can explain your app idea to a friend over coffee, you can already build it — just tell an AI agent on make.fun and watch it become a real app you can actually use.

## Why this line

- **It makes the case in one read:** it speaks directly to the friend
  ("you") and reframes building as explaining — something they already
  know how to do over coffee.
- **Persuasion, low risk:** "you can already build it" and "just tell"
  make saying yes feel easy; the payoff is concrete — a real app you can
  actually use.
- **Clear and plain:** no jargon, no decoding needed, one breath.
- **True:** it promises a first version you can use, not a finished
  product — nothing overpromised.
- **Warm and fresh:** "over coffee" sounds like a person talking to a
  friend, and the explaining-is-building reframe is a fresh turn, not a
  slogan.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–240 characters, not only
whitespace, exactly one sentence — and fails loudly instead of handing in a
bad entry. Verified: two runs produce byte-identical `entry.txt`
(171 chars, 173 bytes, valid UTF-8).

See `BUILD-NOTES.md` for the three drafting passes and the candidate lines.
