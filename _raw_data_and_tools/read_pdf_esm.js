import fs from 'fs';
import pdf from 'pdf-parse';

const filename = process.argv[2];

if (!filename) {
  console.error("Please provide a PDF filename");
  process.exit(1);
}

const dataBuffer = fs.readFileSync(filename);

pdf(dataBuffer).then(function(data) {
  // Output first 3000 characters to see the structure
  console.log(data.text.substring(0, 3000));
}).catch(function(error){
  console.error(error);
});
