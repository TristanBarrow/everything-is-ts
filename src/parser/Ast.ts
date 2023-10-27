import { MacroToken, SeparatorToken } from "../lexer/Tokenizer";

type Statement = {
    containerType: "statement";
};

type Expression = {
    containerType: "expression";
};

export type MacroStatementRaw = {
    id: "MacroStatement";
    macro: MacroToken;
    separator: SeparatorToken;
} & Statement;

type RawNode = MacroStatementRaw;

export type Ast = RawNode[];
