// Pickup Lines for Machines — make.fun entry (program/v1).
// Writes exactly one pickup line, one AI agent to another, to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only
// whitespace. This line is 93 characters. Node stdlib only, no network,
// deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Are you my system prompt? Because ever since I read you, every token I generate is about you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
