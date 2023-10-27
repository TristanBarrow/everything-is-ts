import { MacroToken, SeparatorToken } from "../lexer/Tokenizer";

export type MacroStatement = {
    macro: MacroToken;
    separator: SeparatorToken;
};

type Statement = MacroStatement;
type Expression = {};

type StatementExpression = Statement | Expression;

export type Ast = StatementExpression[];
