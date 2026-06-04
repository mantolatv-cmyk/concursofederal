import fs from 'fs';
import PDFParser from 'pdf2json';

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide a PDF filename");
  process.exit(1);
}

const pdfParser = new PDFParser(); 

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync(filename.replace('.pdf', '.json'), JSON.stringify(pdfData, null, 2));
    console.log(`Parsed JSON for ${filename}`);
});

pdfParser.loadPDF(filename);
