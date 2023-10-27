import { MacroToken, Tokens } from "../lexer/Tokenizer";
import { Ast } from "./Ast";

export class Parser {
    private tokens: Tokens;
    private index = 0;
    private ast: Ast = [];
    constructor(tokens: Tokens) {
        this.tokens = tokens;
    }
    currentName() {
        return this.tokens[this.index].name;
    }
    processMacro() {
        if (this.tokens[this.index] === undefined)
            throw Error(
                "Critical Failure Error, Macro is not the current token."
            );
        const macro = this.tokens[this.index] as MacroToken;
        this.index++;
        if (
            this.tokens[this.index].name !== "separator" ||
            this.tokens[this.index].value !== ";"
        )
            throw Error("Macros must end with a semi-colon.");
        const separator = this.tokens[this.index];
        this.ast = [{ macro, separator }];
        return;
    }
    parse(): Ast {
        while (this.index < this.tokens.length) {
            if (this.currentName() === "macro") this.processMacro();

            this.index++;
        }
        return this.ast;
    }
}
