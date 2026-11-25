// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Error E04: I heated the water, spun the drum, and drained it twice. The socks are still wet. At this point, it's a you problem.";

if (!ENTRY || ENTRY.length === 0) {
  throw new Error("ENTRY must not be empty");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length > 200) {
  throw new Error(`ENTRY must be at most 200 characters (got ${ENTRY.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters)`);
