import { Node } from "../visitor-emitter/Node";
import { Visitor } from "../visitor-emitter/Visitor";
import { Ast } from "./Ast";
import { MacroStatement } from "./ast-nodes/MacroStatement";
import { NullNode } from "./ast-nodes/NullNode";

export class ActiveAst implements Node {
    id = "AstRoot";
    private hydrated: Node[];
    constructor(ast: Ast) {
        this.hydrated = ast.map((rawNode): Node => {
            if (rawNode.id === "MacroStatement")
                return new MacroStatement(rawNode);
            return new NullNode();
        });
    }
    visit(visitor: Visitor) {
        this.hydrated.forEach((node) => {
            node.visit(visitor);
        });
        visitor.end();
    }
}
