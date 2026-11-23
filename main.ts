// A Day of One-Line Pitches — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one persuasive sentence to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–240
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
//
// PASS 3 (final) — kept the pass-2 line unchanged after a last read
// against the judge criteria: (1) it makes the case to the non-coder
// friend directly, in one read; (2) "you can already build it" + "just
// tell" makes saying yes feel easy and low-risk, with a concrete payoff
// ("a real app you can actually use"); (3) plain words, no jargon;
// (4) no overpromise — a first version you can use, not a finished
// product; (5) "over coffee" is warm and human, and the
// explaining-is-building reframe is a fresh turn, not a slogan.
// Rivals rejected: (b) "before dinner" overpromises on speed and scolds;
// (c) and (e) are the stock "no need to learn coding" template;
// (d) "let it do the starting for you" lands awkwardly.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'If you can explain your app idea to a friend over coffee, you can already build it — just tell an AI agent on make.fun and watch it become a real app you can actually use.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–240 chars, not only whitespace, exactly one sentence.
const chars = [...LINE].length;
if (chars < 1 || chars > 240) throw new Error(`entry is ${chars} chars, gate needs 1–240`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
// One sentence: exactly one sentence-terminating mark, at the end.
// (A period inside "make.fun" is mid-word, not a sentence terminator,
// so only marks followed by whitespace or end-of-string count.)
if ((LINE.match(/[.!?](?=\s|$)/g) ?? []).length !== 1 || !/[.!?]$/.test(LINE)) {
  throw new Error('entry must be exactly one sentence');
}

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
console.log(`wrote entry.txt (${chars} chars)`);
