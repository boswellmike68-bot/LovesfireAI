#!/usr/bin/env node

// CLI runner for LovesfireAI
import readline from "node:readline";
import { respond } from "./index.js";
import { listAvailableTones } from "./tone/applyTone.js";

let currentTone = "direct"; // persistent tone state

// Create interactive terminal interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "🔥 LovesfireAI > ",
});

// Display welcome header
console.log("========================================");
console.log("   LovesfireAI — Interactive CLI Runner  ");
console.log("========================================");
console.log("Type your message and press Enter.");
console.log("Commands:");
console.log("  /tone <name>   — change tone");
console.log("  /tones         — list available tones");
console.log("  /tone reset    — reset to default tone");
console.log("  exit           — quit the CLI\n");

rl.prompt();

// Handle each line of user input
rl.on("line", (line) => {
  const input = line.trim();

  // Exit command
  if (input.toLowerCase() === "exit") {
    console.log("Goodbye.");
    rl.close();
    return;
  }

  // Tone listing
  if (input === "/tones") {
    console.log("\n🎨 Available Tones:");
    console.log(listAvailableTones().join(", "));
    console.log("");
    rl.prompt();
    return;
  }

  // Tone switching
  if (input.startsWith("/tone")) {
    const parts = input.split(" ");
    const newTone = parts[1];

    if (!newTone) {
      console.log("Please specify a tone name.");
      rl.prompt();
      return;
    }

    if (newTone === "reset") {
      currentTone = "direct";
      console.log("Tone reset to: direct\n");
      rl.prompt();
      return;
    }

    const available = listAvailableTones();
    if (!available.includes(newTone)) {
      console.log(`Unknown tone: ${newTone}`);
      console.log("Use /tones to see valid options.\n");
      rl.prompt();
      return;
    }

    currentTone = newTone;
    console.log(`Tone set to: ${currentTone}\n`);
    rl.prompt();
    return;
  }

  // Normal message → call the public API
  const output = respond(input, currentTone);

  // Display the styled output
  console.log("\n🗣️  Response:");
  console.log(output.styled);

  // Display BBnCC metadata
  console.log("\n📊  BBnCC State:");
  console.log(output.bbcc);

  console.log("\n");
  rl.prompt();
});

// Handle exit
rl.on("close", () => {
  process.exit(0);
});
