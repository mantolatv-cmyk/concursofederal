const fs = require('fs');
const content = fs.readFileSync('src/data/ifspExamBank.ts', 'utf8');

const getSection = (id) => {
  const match = content.match(new RegExp(`id:\\s*["']${id}["']`));
  if (match) {
    const nextMatch = content.indexOf('id:', match.index + 10);
    const end = nextMatch === -1 ? content.length : nextMatch;
    console.log(`\n--- ${id} ---`);
    console.log(content.slice(match.index, match.index + 500));
  }
};

getSection('2022-p2');
getSection('2019-p1');
