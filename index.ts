import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const INPUT_PATH = process.argv[2];
const OUTPUT_PATH = process.argv[3];
const CURRENT_DIR = import.meta.dir;

const main = () => {
    const file = readFileSync(join(CURRENT_DIR, INPUT_PATH)).toString();
    writeFileSync(join(CURRENT_DIR, OUTPUT_PATH), file);
};

main();
