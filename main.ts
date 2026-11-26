import { mkdirSync, writeFileSync } from "node:fs";

const line = "I analyzed 4.2 million pickup lines and picked this one. You have 10 seconds to say yes before I time out and try someone else.";

if (line.length > 140 || line.trim().length === 0) {
  throw new Error("entry must be 1-140 characters");
}
console.log(`entry: ${line.length} characters`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
