import { Node } from "../../visitor-emitter/Node";
import { Visitor } from "../../visitor-emitter/Visitor";
import { MacroStatementRaw } from "../Ast";

export class MacroStatement implements Node {
    id: string;
    value: string;
    constructor(macroStatement: MacroStatementRaw) {
        this.id = macroStatement.id;
        this.value = macroStatement.macro.value;
    }
    visit(visitor: Visitor) {
        visitor.visitMacroStatement(this.value);
    }
}
