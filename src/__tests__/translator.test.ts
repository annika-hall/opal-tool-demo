import { translateToNorwegian, addTranslation, getDictionary } from "../translator";

describe("translateToNorwegian", () => {
  it("should translate a single word", () => {
    expect(translateToNorwegian("hello")).toBe("hallo");
    expect(translateToNorwegian("cat")).toBe("katt");
    expect(translateToNorwegian("dog")).toBe("hund");
  });

  it("should translate a phrase", () => {
    expect(translateToNorwegian("good morning")).toBe("god morgen");
    expect(translateToNorwegian("good night")).toBe("god natt");
  });

  it("should handle case insensitivity", () => {
    expect(translateToNorwegian("HELLO")).toBe("hallo");
    expect(translateToNorwegian("HeLLo")).toBe("hallo");
    expect(translateToNorwegian("Good Morning")).toBe("god morgen");
  });

  it("should translate word by word when no phrase match", () => {
    expect(translateToNorwegian("cat and dog")).toBe("katt and hund");
  });

  it("should preserve punctuation", () => {
    expect(translateToNorwegian("hello.")).toBe("hallo.");
    expect(translateToNorwegian("hello!")).toBe("hallo!");
  });

  it("should return original word if no translation found", () => {
    expect(translateToNorwegian("unknownword")).toBe("unknownword");
  });

  it("should handle empty string", () => {
    expect(translateToNorwegian("")).toBe("");
  });

  it("should handle whitespace", () => {
    expect(translateToNorwegian("  hello  ")).toBe("hallo");
  });
});

describe("addTranslation", () => {
  it("should add a new translation to the dictionary", () => {
    addTranslation("test", "teste");
    expect(translateToNorwegian("test")).toBe("teste");
  });

  it("should normalize to lowercase", () => {
    addTranslation("TEST2", "TESTE2");
    expect(translateToNorwegian("test2")).toBe("teste2");
  });

  it("should handle empty strings gracefully", () => {
    const dictBefore = Object.keys(getDictionary()).length;
    addTranslation("", "");
    const dictAfter = Object.keys(getDictionary()).length;
    expect(dictAfter).toBe(dictBefore);
  });
});

describe("getDictionary", () => {
  it("should return a copy of the dictionary", () => {
    const dict = getDictionary();
    expect(dict).toBeDefined();
    expect(typeof dict).toBe("object");
    expect(dict["hello"]).toBe("hallo");
  });

  it("should return a readonly copy", () => {
    const dict1 = getDictionary();
    const dict2 = getDictionary();
    expect(dict1).not.toBe(dict2); // Should be different objects
  });
});
