// bb-interface/wrapBBnCC.js

import { uiAdapter } from "../live/uiAdapter.js";

// BBnCC session state container
const session = {
  phase: "init",
  momentum: 0,
  checkpoints: [],
  flags: {},
};

// Governance rules for BBnCC
function applyGovernance(rawInput) {
  const lower = rawInput.toLowerCase();

  // Example rule: track momentum
  if (lower.includes("continue") || lower.includes("go on")) {
    session.momentum += 1;
  }

  // Example rule: checkpoint creation
  if (lower.includes("checkpoint")) {
    const stamp = { time: Date.now(), input: rawInput };
    session.checkpoints.push(stamp);
  }

  // Example rule: phase transitions
  if (lower.includes("start")) session.phase = "active";
  if (lower.includes("stop")) session.phase = "paused";

  return rawInput;
}

// Wrap the full pipeline with BBnCC governance
export function wrapBBnCC(rawInput, tone = "direct") {
  // 1. Apply governance rules before anything else
  const governedInput = applyGovernance(rawInput);

  // 2. Pass through the UI adapter (which calls adapter → core → tone)
  const output = uiAdapter(governedInput, tone);

  // 3. Attach BBnCC session metadata to the final output
  return {
    ...output,
    bbcc: {
      phase: session.phase,
      momentum: session.momentum,
      checkpoints: session.checkpoints,
      flags: session.flags,
    },
  };
}

// Optional helper: inspect BBnCC session state
export function getBBnCCState() {
  return { ...session };
}
