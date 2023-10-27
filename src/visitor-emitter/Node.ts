import { Visitor } from "./Visitor";

export interface Node {
    id: string;
    visit: (visitor: Visitor) => void;
}
