import getFormatJson from './json.js';
import formatPlain from './plain.js';
import getFormatStylish from './stylish.js';

const getFormat = (abstractSyntaxTree, format) => {
  switch (format) {
    case 'json':
      return getFormatJson(abstractSyntaxTree);
    case 'plain':
      return formatPlain(abstractSyntaxTree);
    case 'stylish':
      return getFormatStylish(abstractSyntaxTree);
    default:
      throw new Error(`Error: "${format}" - this format is not supported`);
  }
};

export default getFormat;
