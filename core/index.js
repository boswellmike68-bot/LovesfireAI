// core/index.js

// Internal state container
const state = {
  history: [],
  mode: "default",
};

// Parse raw input into a clean internal form
function parseInput(raw) {
  return {
    text: raw,
    length: raw.length,
  };
}

// Resolve intent (neutral, no tone)
function resolveIntent(parsed) {
  const lower = parsed.text.toLowerCase();

  if (lower.includes("grow")) return "growth";
  if (lower.includes("help")) return "assist";

  return "respond";
}

// Produce a neutral output object
function generateOutput(intent, parsed) {
  return {
    intent,
    content: parsed.text,
    state,
    flags: { tone: true },
  };
}

// Main core function
export function core(rawInput) {
  const parsed = parseInput(rawInput);
  const intent = resolveIntent(parsed);
  const output = generateOutput(intent, parsed);

  state.history.push({ rawInput, intent });

  return output;
}
