// core/index.js

// 1. Internal state container
const state = {
  history: [],
  mode: "default",
};

// 2. Parse raw input into a clean internal form
function parseInput(raw) {
  return {
    text: raw,
    length: raw.length,
  };
}

// 3. Resolve intent (neutral, no tone)
function resolveIntent(parsed) {
  if (parsed.text.toLowerCase().includes("grow")) {
    return "growth";
  }
  return "respond";
}

// 4. Produce a neutral output object
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
