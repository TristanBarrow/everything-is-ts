import { describe, expect, it } from "bun:test";
import { PreTokenizer } from "./PreTokenizer";

describe("Pre Tokenizer", () => {
    it("can pre tokenize by spaces", () => {
        const preTokens = new PreTokenizer("const i = 4");
        expect(preTokens.calculateTokens()).toEqual(["const", "i", "=", "4"]);
    });
    it("can pre tokenize curly brackets", () => {
        const preTokens = new PreTokenizer("one{two}three");
        expect(preTokens.calculateTokens()).toEqual([
            "one",
            "{",
            "two",
            "}",
            "three",
        ]);
    });
    it("can pre tokenize parenthesis", () => {
        const preTokens = new PreTokenizer("{}()[];:,'\"`");
        expect(preTokens.calculateTokens()).toEqual([
            "{",
            "}",
            "(",
            ")",
            "[",
            "]",
            ";",
            ":",
            ",",
            "'",
            '"',
            "`",
        ]);
    });
});
