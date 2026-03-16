#!/usr/bin/env node

// CLI runner for LovesfireAI
import readline from "node:readline";
import { respond } from "./index.js";

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
console.log("Type 'exit' to quit.\n");

rl.prompt();

// Handle each line of user input
rl.on("line", (line) => {
  const input = line.trim();

  if (input.toLowerCase() === "exit") {
    console.log("Goodbye.");
    rl.close();
    return;
  }

  // Call the public API
  const output = respond(input);

  // Display the styled output
  console.log("\n🗣️  Response:");
  console.log(output.styled);

  // Display BBnCC metadata (optional)
  console.log("\n📊  BBnCC State:");
  console.log(output.bbcc);

  console.log("\n");
  rl.prompt();
});

// Handle exit
rl.on("close", () => {
  process.exit(0);
});
