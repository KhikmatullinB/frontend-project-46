import path from 'path';
import parse from './parsers.js';
import getDiffTree from './buildDiff.js';
import getFormat from './Formatters/index.js';
import readFile from './paths.js';

const getDataFromFile = (file) => {
  const extname = path.extname(file).slice(1);
  const reading = readFile(file);
  return parse(reading, extname);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = getDataFromFile(file1);
  const data2 = getDataFromFile(file2);
  const diffTree = getDiffTree(data1, data2);
  return getFormat(diffTree, format);
};

export default genDiff;
