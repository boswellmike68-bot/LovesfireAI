// tone/applyTone.js

// Tone profiles (add more as needed)
const toneProfiles = {
  direct: (content) => content,
  warm: (content) => `I hear you. ${content}`,
  playful: (content) => `Alright, let’s have some fun — ${content}`,
  formal: (content) => `Understood. ${content}`,
};

// Main tone function
export function applyTone(coreOutput, tone = "direct") {
  const { content, intent, state } = coreOutput;

  const style = toneProfiles[tone] || toneProfiles.direct;

  return {
    intent,
    styled: style(content),
    state,
  };
}
