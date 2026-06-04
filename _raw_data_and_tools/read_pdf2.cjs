const fs = require('fs');
const pdfLib = require('pdf-parse');

const filename = process.argv[2];

if (!filename) {
  console.error("Please provide a PDF filename");
  process.exit(1);
}

const dataBuffer = fs.readFileSync(filename);

const parse = typeof pdfLib === 'function' ? pdfLib : (pdfLib.default || pdfLib.pdf || Object.values(pdfLib).find(x => typeof x === 'function'));

parse(dataBuffer).then(function(data) {
  console.log(data.text);
}).catch(function(error){
  console.error(error);
});
