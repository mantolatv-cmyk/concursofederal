import fs from 'fs';

const filename = process.argv[2];
const data = JSON.parse(fs.readFileSync(filename, 'utf8'));

let fullText = "";

data.Pages.forEach((page, pageIndex) => {
    // Sort texts by Y, then by X. But we need to separate columns first.
    // Let's assume standard A4 page width ~ 35. Middle is around 17.5.
    const leftCol = [];
    const rightCol = [];
    
    page.Texts.forEach(t => {
        if (t.x < 17) {
            leftCol.push(t);
        } else {
            rightCol.push(t);
        }
    });
    
    // Sort columns by Y
    leftCol.sort((a, b) => a.y - b.y || a.x - b.x);
    rightCol.sort((a, b) => a.y - b.y || a.x - b.x);
    
    const decode = (texts) => {
        let text = "";
        let lastY = -1;
        texts.forEach(t => {
            if (lastY !== -1 && Math.abs(t.y - lastY) > 0.5) {
                text += "\n";
            }
            // decode URI component
            const str = t.R.map(r => decodeURIComponent(r.T)).join("");
            text += str + " ";
            lastY = t.y;
        });
        return text;
    };
    
    fullText += `--- PAGE ${pageIndex + 1} ---\n`;
    fullText += decode(leftCol) + "\n";
    fullText += decode(rightCol) + "\n";
});

fs.writeFileSync(filename.replace('.json', '_cols.txt'), fullText);
console.log("Done");
