import { PreTokenizer, PreTokens } from "./lexer/PreTokenizer";
import { Tokens } from "./lexer/Tokenizer";
import { ActiveAst } from "./parser/ActiveAst";
import { Ast } from "./parser/Parser";
import { HackAsmVisitor } from "./visitor-emitter/HackAsmVisitor";
import { Visitor } from "./visitor-emitter/Visitor";

const preTokenize = (): PreTokens => {
    const preTokenizer = new PreTokenizer("");
    return preTokenizer.calculateTokens();
};

const tokenize = (preTokens: PreTokens): Tokens => {
    return [];
};

const parse = (tokens: Tokens): Ast => {
    return {};
};

const validateAst = (ast: Ast): Ast => {
    return ast;
};

const hydrateAst = (ast: Ast): ActiveAst => {
    return new ActiveAst();
};

const runVisitorEmitter = (activeAst: ActiveAst, visitor: Visitor) => {};

export const pipeline = () => {
    runVisitorEmitter(
        hydrateAst(validateAst(parse(tokenize(preTokenize())))),
        new HackAsmVisitor()
    );
};
