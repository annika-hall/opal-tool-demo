#!/usr/bin/env node

/**
 * CLI interface for the English to Norwegian translator
 */

import { translateToNorwegian } from "./translator";

function main(): void {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log("English to Norwegian Translation Tool");
    console.log("Usage: translate <text>");
    console.log("Example: translate \"hello\"");
    console.log("Example: translate \"good morning\"");
    process.exit(0);
  }
  
  const textToTranslate = args.join(" ");
  const translation = translateToNorwegian(textToTranslate);
  
  console.log(`English: ${textToTranslate}`);
  console.log(`Norwegian: ${translation}`);
}

main();
