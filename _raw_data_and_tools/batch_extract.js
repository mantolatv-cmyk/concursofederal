import fs from 'fs';
import PDFParser from 'pdf2json';

const years = ['2016', '2017', '2018', '2019', '2020', '2022', '2023', '2025'];

async function processPdf(year) {
    return new Promise((resolve, reject) => {
        const filename = `${year}.pdf`;
        if (!fs.existsSync(filename)) {
            console.log(`Skipping ${filename}, not found.`);
            return resolve();
        }

        const pdfParser = new PDFParser();
        
        pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
        
        pdfParser.on("pdfParser_dataReady", pdfData => {
            let fullText = "";
            pdfData.Pages.forEach((page, pageIndex) => {
                const leftCol = [];
                const rightCol = [];
                
                page.Texts.forEach(t => {
                    if (t.x < 18) {
                        leftCol.push(t);
                    } else {
                        rightCol.push(t);
                    }
                });
                
                leftCol.sort((a, b) => Math.abs(a.y - b.y) > 0.5 ? a.y - b.y : a.x - b.x);
                rightCol.sort((a, b) => Math.abs(a.y - b.y) > 0.5 ? a.y - b.y : a.x - b.x);
                
                const decode = (texts) => {
                    let text = "";
                    let lastY = -1;
                    texts.forEach(t => {
                        if (lastY !== -1 && Math.abs(t.y - lastY) > 0.5) {
                            text += "\n";
                        }
                        const str = t.R.map(r => {
                            try {
                                return decodeURIComponent(r.T);
                            } catch (e) {
                                return r.T;
                            }
                        }).join("");
                        text += str + " ";
                        lastY = t.y;
                    });
                    return text;
                };
                
                fullText += `--- PAGE ${pageIndex + 1} ---\n`;
                fullText += decode(leftCol) + "\n";
                fullText += decode(rightCol) + "\n";
            });
            
            fs.writeFileSync(`${year}_text.txt`, fullText);
            console.log(`Processed ${filename}`);
            resolve();
        });

        pdfParser.loadPDF(filename);
    });
}

async function main() {
    for (const year of years) {
        await processPdf(year);
    }
    console.log("Batch extraction complete.");
}

main();
