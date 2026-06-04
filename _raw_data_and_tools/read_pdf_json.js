import fs from 'fs';
import PDFParser from 'pdf2json';

const filename = process.argv[2];
if (!filename) {
  console.error("Please provide a PDF filename");
  process.exit(1);
}

const pdfParser = new PDFParser(this, 1); // 1 = raw text content

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync(filename.replace('.pdf', '.txt'), pdfParser.getRawTextContent());
    console.log(`Parsed ${filename}`);
});

pdfParser.loadPDF(filename);
