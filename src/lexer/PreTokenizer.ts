type char = string;

export type PreTokens = string[];

export class PreTokenizer {
    private currentToken: char[] = [];
    private index = 0;
    private code: string;
    private tokens: string[] = [];
    private pushNext = false;
    constructor(code: string) {
        this.code = code;
    }
    private getChar(): string | null {
        if (this.code.length === this.index) return null;
        return this.code[this.index];
    }
    private pushTokenOntoArray() {
        this.tokens.push(this.currentToken.join(""));
        this.currentToken = [];
    }
    private shouldPushBecauseSingleToken(c: char): boolean {
        if (c === "{") return true;
        if (c === "}") return true;
        if (c === "(") return true;
        if (c === ")") return true;
        if (c === "[") return true;
        if (c === "]") return true;
        if (c === ";") return true;
        if (c === ":") return true;
        if (c === ",") return true;
        if (c === "'") return true;
        if (c === '"') return true;
        if (c === "`") return true;
        return false;
    }
    private handleCharAndShouldContinue(c: char | null): boolean {
        if (c === null) {
            this.pushTokenOntoArray();
            return false;
        }

        if (c === " ") {
            if (this.currentToken.length !== 0) this.pushTokenOntoArray();
            return true;
        }

        if (this.pushNext) {
            this.pushTokenOntoArray();
            this.pushNext = false;
        }

        if (this.shouldPushBecauseSingleToken(c)) {
            this.pushTokenOntoArray();
            this.pushNext = true;
        }

        this.currentToken.push(c);
        return true;
    }

    calculateTokens(): string[] {
        let c = this.getChar();

        while (this.handleCharAndShouldContinue(c)) {
            this.index++;
            c = this.getChar();
        }

        return this.tokens;
    }
}
