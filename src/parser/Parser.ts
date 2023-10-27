import { MacroToken, SeparatorToken, Tokens } from "../lexer/Tokenizer";
import { Ast, MacroStatementRaw } from "./Ast";

export class Parser {
    private tokens: Tokens;
    private index = 0;
    private ast: Ast = [];
    constructor(tokens: Tokens) {
        this.tokens = tokens;
    }
    private currentName() {
        return this.tokens[this.index].name;
    }
    private processMacro() {
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
        const separator = this.tokens[this.index] as SeparatorToken;
        const macroStatement: MacroStatementRaw = {
            containerType: "statement",
            id: "MacroStatement",
            macro,
            separator,
        };
        this.ast.push(macroStatement);
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
