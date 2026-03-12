// live/uiAdapter.js

import { adapter } from "../bb-interface/adapter.js";

// This is the function your UI or runtime will call
export function uiAdapter(rawInput, tone = "direct") {
  return adapter(rawInput, tone);
}
