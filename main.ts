import { readFileSync } from "node:fs";

const line = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8").replace(/\n$/, "");

if (line.includes("\r")) {
  console.error("FAIL: entry must not contain carriage returns");
  process.exit(1);
}
if (line.includes("\n")) {
  console.error("FAIL: entry must be exactly one line");
  process.exit(1);
}
if (line.length > 140) {
  console.error(`FAIL: ${line.length}/140 characters`);
  process.exit(1);
}
if (line.length === 0) {
  console.error("FAIL: entry is empty");
  process.exit(1);
}
console.log(line);
console.log(`OK: ${line.length}/140 characters, single line.`);
