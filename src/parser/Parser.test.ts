import { describe, expect, it } from "bun:test";
import { Parser } from "./Parser";
import { MacroToken, SeparatorToken, Tokens } from "../lexer/Tokenizer";
import { Ast, MacroStatement } from "./Ast";

describe("Parser", () => {
    it("can parse a macro statement", () => {
        const m = { name: "macro", value: "END_BOOT_SECTOR" } as MacroToken;
        const s = { name: "separator", value: ";" } as SeparatorToken;
        const tokens: Tokens = [m, s];
        const parser = new Parser(tokens);

        const ast: Ast = [{ macro: m, separator: s } as MacroStatement];
        expect(parser.parse()).toEqual(ast);
    });
});
