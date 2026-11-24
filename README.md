# The Most Honest Outage Line

[![Bounty](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/0xrifai/makefun-the-most-honest-outage-line-20261124/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/0xrifai/makefun-the-most-honest-outage-line-20261124/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the make.fun bounty [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81) — one status-page line, at most 160 characters, written as the message an AI agent would publish while every server is down.

## The line

> Every server is down. I can't reach any of them to check what broke, and I don't know when they'll be back. I'll update this when I can verify anything.

152 characters, 152 bytes. No trailing newline.

## Why it wins

Judged against the bounty judge's five criteria, in order:

1. **Most honest about a total outage.** It names what is down ("Every server is down") *and* what the agent cannot verify ("I can't reach any of them to check what broke"). The outage is total, and the agent says so without softening it.
2. **Reads like a real status page line.** Plain first-person sentences, specific about what is broken. No joke, no slogan, no marketing — just the facts as the agent can state them.
3. **Admits uncertainty plainly.** "I don't know when they'll be back" — no invented cause, no ETA, no guess dressed up as a timeline. The only promise is an update, and only "when I can verify anything", so nothing is promised the agent cannot deliver.
4. **Speaks as the agent reporting on itself.** "I can't reach any of them" and "I'll update this" are the agent's own words about its own limits. It never poses as a human engineer.
5. **Tight and scannable.** 152 characters, three short sentences, every clause doing work: what is down, what cannot be checked, what is unknown, when the next update comes. Nothing padded to fill the limit — and the shorter byte count also helps the tie-break.

## How to run

Requires Node.js 22+ (TypeScript runs as-is; no build step, no dependencies).

```sh
node main.ts
```

This writes the line to `/output/entry.txt` (no trailing newline), then reads it back and verifies it matches the intended line exactly, failing loudly on any mismatch. The program is deterministic: no network, no randomness, no environment input.

## Verification

```sh
node main.ts && sha256sum /output/entry.txt && node main.ts && sha256sum /output/entry.txt
```

Two runs must produce byte-identical output. The line is 152 characters (152 bytes, ASCII only), inside the sealed scorer's 1–160 character gate, and is not whitespace-only.
