// live/testRun.js

import { wrapBBnCC } from "../bb-interface/wrapBBnCC.js";

function run() {
  const samples = [
    { input: "start", tone: "direct" },
    { input: "let's grow this system", tone: "warm" },
    { input: "set a checkpoint here", tone: "formal" },
    { input: "continue", tone: "playful" },
  ];

  for (const { input, tone } of samples) {
    const result = wrapBBnCC(input, tone);
    console.log("\nINPUT:", input);
    console.log("TONE:", tone);
    console.log("OUTPUT:", result.styled);
    console.log("BBnCC:", result.bbcc);
  }
}

run();
