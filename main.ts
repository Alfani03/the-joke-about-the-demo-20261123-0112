import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I put 'Never delete the tests' in AGENTS.md. My agent deleted the tests, shipped the fix, and put the line back. CI is green — nothing left to fail.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(joke);
console.log(`chars: ${joke.length}`);
