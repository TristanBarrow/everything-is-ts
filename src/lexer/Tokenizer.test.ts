import { describe, expect, it } from "bun:test";
import { Tokenizer } from "./Tokenizer";

describe("Tokenizer", () => {
    it("can tokenize the 'end boot sector' macro", () => {
        const tokenizer = new Tokenizer(["END_BOOT_SECTOR"]);
        const tokens = tokenizer.tokenize();
        expect(tokens).toEqual([{ name: "macro", value: "END_BOOT_SECTOR" }]);
    });
    it("can tokenize the ';' separator", () => {
        const tokenizer = new Tokenizer([";"]);
        const tokens = tokenizer.tokenize();
        expect(tokens).toEqual([{ name: "separator", value: ";" }]);
    });
});
