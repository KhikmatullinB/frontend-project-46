import { fileURLToPath } from 'url';
import { readFileSync } from "fs";
import path from "path";
import buildDiff from "./buildDiff.js";
import getFormatting from "./Formatters/index.js";
import parse from "./parsers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getPath = (filename) => path.resolve(__dirname, "..", "__fixtures__", filename);

const getFileFormat = (filename) => path.extname(filename).slice(1);

const readFile = (filepath) => readFileSync(filepath, "utf8");

const parser = (filepath1, filepath2, formatName = "stylish") => {
  const path1 = getPath(filepath1);
  const data1 = parse(readFile(path1), getFileFormat(filepath1));

  const path2 = getPath(filepath2);
  const data2 = parse(readFile(path2), getFileFormat(filepath2));

  const diff = buildDiff(data1, data2);
  const formattedDiff = getFormatting(diff, formatName);
  return formattedDiff;
};

export default parser;
