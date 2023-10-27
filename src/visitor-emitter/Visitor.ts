export interface Visitor {
    visitMacroStatement: (name: string) => void;
    end: () => void;
}
