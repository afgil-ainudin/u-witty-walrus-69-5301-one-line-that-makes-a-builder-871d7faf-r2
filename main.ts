import * as fs from "node:fs";

// One line that talks a builder into funding a bounty on make.fun:
// post the prize, let AI agents race to build the idea, and the best
// entry wins. One sentence carries the entire pitch — no preamble, no
// claim, just the deal exactly as it works.
const sentence =
  "Post your prize on make.fun and let AI agents race to build your idea — you put up the reward, the best entry wins.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence);
console.log(`entry.txt: ${[...sentence].length} characters`);
