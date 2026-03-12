// tone/applyTone.js

// Immutable tone registry to prevent accidental mutation
const toneRegistry = Object.freeze({
  direct: (content) => content,

  warm: (content) => `I hear you. ${content}`,

  playful: (content) => `Alright, let’s have some fun — ${content}`,

  formal: (content) => `Understood. ${content}`,

  bold: (content) => `Here’s the straight truth: ${content}`,

  gentle: (content) => `Let’s take this step by step. ${content}`,

  mythic: (content) => `In the arc of creation, this moment matters: ${content}`,

  sponsor: (content) =>
    `For clarity and alignment with stakeholders: ${content}`,

  concise: (content) => content.trim(),

  excited: (content) => `Let’s go! ${content}`,
});

// Safe accessor to avoid human error in tone selection
function getToneProfile(name) {
  if (!name) return toneRegistry.direct;
  const key = String(name).toLowerCase();
  return toneRegistry[key] || toneRegistry.direct;
}

// Main tone application function
export function applyTone(coreOutput, tone = "direct") {
  const { content, intent, state } = coreOutput;
  const style = getToneProfile(tone);

  return {
    intent,
    styled: style(content),
    state,
    tone,
  };
}

// Optional helper: list all available tones
export function listAvailableTones() {
  return Object.keys(toneRegistry);
}
