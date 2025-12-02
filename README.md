# opal-tool-demo

English to Norwegian Translation Tool - A TypeScript-based command-line tool for translating English text to Norwegian.

## Features

- Translates common English words and phrases to Norwegian
- Command-line interface for easy usage
- Extensible translation dictionary
- Written in TypeScript with full type safety

## Installation

```bash
npm install
npm run build
```

## Usage

### Command Line

```bash
# Translate a single word
node dist/cli.js hello
# Output: 
# English: hello
# Norwegian: hallo

# Translate a phrase
node dist/cli.js "good morning"
# Output:
# English: good morning
# Norwegian: god morgen

# Translate multiple words
node dist/cli.js "cat and dog"
# Output:
# English: cat and dog
# Norwegian: katt and hund
```

### Programmatic Usage

```typescript
import { translateToNorwegian, addTranslation } from './dist/index';

// Translate text
const translation = translateToNorwegian("hello");
console.log(translation); // "hallo"

// Add custom translations
addTranslation("computer", "datamaskin");
```

## Available Translations

The tool includes translations for:
- Common greetings (hello, goodbye, good morning, etc.)
- Basic words (cat, dog, house, water, food, etc.)
- Numbers (one through ten)
- Colors (red, blue, green, etc.)
- Common phrases (how are you, thank you, etc.)

## Development

### Build

```bash
npm run build
```

### Project Structure

```
opal-tool-demo/
├── src/
│   ├── translator.ts    # Core translation logic
│   ├── cli.ts          # Command-line interface
│   └── index.ts        # Main exports
├── dist/               # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## License

ISC
