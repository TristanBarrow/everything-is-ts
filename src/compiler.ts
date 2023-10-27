import { PreTokenizer, PreTokens } from "./lexer/PreTokenizer";
import { Tokenizer, Tokens } from "./lexer/Tokenizer";
import { ActiveAst } from "./parser/ActiveAst";
import { Ast } from "./parser/Ast";
import { Parser } from "./parser/Parser";
import { AsmVisitor } from "./visitor-emitter/asm-visitor/AsmVisitor";
import { Visitor } from "./visitor-emitter/Visitor";

const preTokenize = (code: string): PreTokens => {
    const preTokenizer = new PreTokenizer(code);
    return preTokenizer.calculateTokens();
};

const tokenize = (preTokens: PreTokens): Tokens => {
    const tokenizer = new Tokenizer(preTokens);
    return tokenizer.tokenize();
};

const parse = (tokens: Tokens): Ast => {
    const parser = new Parser(tokens);
    return parser.parse();
};

const validateAst = (ast: Ast): Ast => {
    return ast;
};

const hydrateAst = (ast: Ast): ActiveAst => {
    return new ActiveAst(ast);
};

const runVisitorEmitter = (activeAst: ActiveAst, visitor: Visitor) => {
    activeAst.visit(visitor);
};

export const pipeline = (code: string, outputFile: string) => {
    const preTokens = preTokenize(code);
    const tokens = tokenize(preTokens);
    const ast = parse(tokens);
    const validatedAst = validateAst(ast);
    const hydratedAst = hydrateAst(validatedAst);
    runVisitorEmitter(hydratedAst, new AsmVisitor(outputFile));
};
