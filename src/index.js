import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) =>
  path.resolve(__dirname, "..", "__fixtures__", filename);
const readFile = (filename) => fs.readFileSync(getPath(filename), "utf-8");

const genDiff = (filepath1, filepath2) => {
  const read1 = readFile(filepath1);
  const read2 = readFile(filepath2);
  const fileObj1 = JSON.parse(read1);
  const fileObj2 = JSON.parse(read2);
  return [fileObj1, fileObj2];
};

export default genDiff;
