const MACROS = ["END_BOOT_SECTOR"];
const SEPARATORS = [";"];

type TokenNames = "macro" | "separator" | "null";

interface Token {
    name: TokenNames;
    value: any;
}

interface MacroToken extends Token {
    name: "macro";
    value: string;
}

type Separator = ";";

interface SeparatorToken extends Token {
    name: "separator";
    value: Separator;
}

export type Tokens = Token[];

export class Tokenizer {
    private preTokens: string[];
    constructor(preTokens: string[]) {
        this.preTokens = preTokens;
    }
    private macro(value: string): MacroToken {
        return {
            name: "macro",
            value,
        };
    }
    private separator(value: Separator): SeparatorToken {
        return {
            name: "separator",
            value,
        };
    }
    tokenize(): Tokens {
        return this.preTokens.map((preToken): Token => {
            if (MACROS.includes(preToken)) return this.macro(preToken);
            if (SEPARATORS.includes(preToken))
                return this.separator(preToken as Separator);
            return { name: "null", value: null };
        });
    }
}
