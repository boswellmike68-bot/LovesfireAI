/* Public API: index.js */

import { wrapBBnCC } from "./bb-interface/wrapBBnCC.js";

/**
 * Public-facing API for LovesfireAI.
 * This is the only function external systems should call.
 */
export function respond(rawInput, tone = "direct") {
  if (!rawInput || typeof rawInput !== "string") {
    return {
      error: "Invalid input: expected a text string.",
      bbcc: null,
    };
  }

  // Full pipeline: governance → adapter → core → tone
  const output = wrapBBnCC(rawInput, tone);

  return {
    ...output,
    api: {
      version: "1.0.0",
      timestamp: Date.now(),
    },
  };
}
