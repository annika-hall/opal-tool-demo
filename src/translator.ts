/**
 * English to Norwegian Translation Tool
 */

export interface TranslationDictionary {
  [key: string]: string;
}

/**
 * Dictionary of English to Norwegian translations
 */
const englishToNorwegian: TranslationDictionary = {
  // Common greetings
  "hello": "hallo",
  "goodbye": "farvel",
  "good morning": "god morgen",
  "good evening": "god kveld",
  "good night": "god natt",
  "yes": "ja",
  "no": "nei",
  "please": "vær så snill",
  "thank you": "takk",
  "thanks": "takk",
  "you're welcome": "vær så god",
  
  // Common words
  "cat": "katt",
  "dog": "hund",
  "house": "hus",
  "water": "vann",
  "food": "mat",
  "friend": "venn",
  "family": "familie",
  "love": "kjærlighet",
  "time": "tid",
  "day": "dag",
  "night": "natt",
  "week": "uke",
  "month": "måned",
  "year": "år",
  
  // Numbers
  "one": "en",
  "two": "to",
  "three": "tre",
  "four": "fire",
  "five": "fem",
  "six": "seks",
  "seven": "syv",
  "eight": "åtte",
  "nine": "ni",
  "ten": "ti",
  
  // Colors
  "red": "rød",
  "blue": "blå",
  "green": "grønn",
  "yellow": "gul",
  "black": "svart",
  "white": "hvit",
  
  // Common phrases
  "how are you": "hvordan har du det",
  "what is your name": "hva heter du",
  "my name is": "jeg heter",
  "nice to meet you": "hyggelig å møte deg",
  "see you later": "vi ses senere",
  "excuse me": "unnskyld meg",
  "i'm sorry": "beklager",
  "i don't understand": "jeg forstår ikke",
  "do you speak english": "snakker du engelsk",
};

/**
 * Translates English text to Norwegian
 * @param text - The English text to translate
 * @returns The Norwegian translation
 */
export function translateToNorwegian(text: string): string {
  if (!text) {
    return "";
  }

  const lowerText = text.toLowerCase().trim();
  
  // Check for exact match in dictionary
  if (englishToNorwegian[lowerText]) {
    return englishToNorwegian[lowerText] ?? "";
  }
  
  // Try to translate word by word if no phrase match
  const words = lowerText.split(/\s+/);
  const translatedWords = words.map(word => {
    // Remove punctuation for lookup
    const cleanWord = word.replace(/[.,!?;:]/g, "");
    const translation = englishToNorwegian[cleanWord];
    
    if (translation) {
      // Preserve punctuation
      const punctuation = word.match(/[.,!?;:]+$/);
      return punctuation ? translation + punctuation[0] : translation;
    }
    return word; // Return original if no translation found
  });
  
  return translatedWords.join(" ");
}

/**
 * Adds a new translation to the dictionary
 * @param english - The English word or phrase
 * @param norwegian - The Norwegian translation
 */
export function addTranslation(english: string, norwegian: string): void {
  if (english && norwegian) {
    englishToNorwegian[english.toLowerCase().trim()] = norwegian.toLowerCase().trim();
  }
}

/**
 * Gets all available translations
 * @returns The translation dictionary
 */
export function getDictionary(): Readonly<TranslationDictionary> {
  return { ...englishToNorwegian };
}
