import { Node } from "../../visitor-emitter/Node";
import { Visitor } from "../../visitor-emitter/Visitor";

export class NullNode implements Node {
    id = "NullNode";
    visit(visitor: Visitor) {}
}
