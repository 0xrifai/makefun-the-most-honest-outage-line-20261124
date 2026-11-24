// The Most Honest Outage Line — make.fun entry (program/v1)
//
// Writes a single status-page line to /output/entry.txt.
// Deterministic: no network, no randomness, no environment input.
// The line is a fixed string, chosen in-session against the judge's
// five criteria: it names what is down, names what the agent cannot
// verify, admits what it does not know, speaks as the agent itself,
// and stays tight and scannable.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry line. 152 characters, 152 bytes (ASCII only).
const ENTRY_LINE =
  "Every server is down. I can't reach any of them to check what broke, " +
  "and I don't know when they'll be back. I'll update this when I can " +
  "verify anything.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 160;

function main(): void {
  // Gate: the sealed scorer requires 1-160 UTF-8 characters,
  // not whitespace-only. Enforce the same bounds here so a
  // bad line can never be written silently.
  const chars = [...ENTRY_LINE].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry line is ${chars} chars, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY_LINE.trim().length === 0) {
    throw new Error("entry line must not be whitespace-only");
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: every byte counts in the tie-break,
  // and the gate counts characters, not lines.
  writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");

  // Read back what was written and confirm it is exactly the line
  // we intended, so a partial or mangled write fails loudly here
  // instead of reaching the sealed scorer.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== ENTRY_LINE) {
    throw new Error("verification failed: /output/entry.txt does not match the entry line");
  }
  console.log(`wrote ${[...written].length} chars to ${OUTPUT_PATH}`);
}

main();
