// live/uiAdapter.js

import { adapter } from "../bb-interface/adapter.js";

// Public entry point for UI or runtime
export function uiAdapter(rawInput, tone = "direct") {
  return adapter(rawInput, tone);
}
