import { FileSink } from "bun";
import { Visitor } from "../Visitor";
import { endBootSectorMacro } from "./endBootSectorMacro";

export class AsmVisitor implements Visitor {
    private writer: FileSink;

    constructor(outputFile: string) {
        this.writer = Bun.file(outputFile).writer();
        this.writer.start();
    }

    visitMacroStatement(name: string) {
        if (name === "END_BOOT_SECTOR") this.writer.write(endBootSectorMacro);
    }
    end() {
        this.writer.end();
    }
}
