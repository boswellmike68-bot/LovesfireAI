// bb-interface/adapter.js

import { core } from "../core/index.js";
import { applyTone } from "../tone/applyTone.js";

// Main adapter function
export function adapter(rawInput, tone = "direct") {
  // 1. Pass raw input to the core
  const coreOutput = core(rawInput);

  // 2. Apply tone to the core's neutral output
  const styledOutput = applyTone(coreOutput, tone);

  // 3. Return final output to the UI or runtime
  return styledOutput;
}
