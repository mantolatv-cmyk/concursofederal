import fs from 'fs';

const text = fs.readFileSync('2022_text.txt', 'utf8');

function extractBetween(str, start, end) {
    const s = str.indexOf(start);
    if (s === -1) return null;
    const e = str.indexOf(end, s + start.length);
    if (e === -1) return str.substring(s + start.length);
    return str.substring(s + start.length, e).trim();
}

const passage1Raw = extractBetween(text, "Three   Habits My Family Started in the Pandemic that we want to Keep (adapted)", "26.   In the excerpts below");
const passage2Raw = extractBetween(text, "The  Inescapable   Exhaustion of Being the “First” Black Woman (adapted)", "31.   According to the text");

function cleanPassage(raw) {
    if(!raw) return "";
    return raw.split('\n')
        .map(line => line.trim())
        .filter(line => !line.match(/S erviço  P úblico  F ederal/))
        .filter(line => !line.match(/I nstituto  F ederal de  E ducação/))
        .filter(line => !line.match(/C  oncurso  P úblico/))
        .filter(line => !line.match(/01\/05\/2022/))
        .filter(line => !line.match(/M agistério do  E nsino/))
        .filter(line => !line.match(/www\.pciconcursos\.com\.br/))
        .filter(line => !line.match(/--- PAGE/))
        .filter(line => !line.match(/pcimarkpci/))
        .filter(line => !line.match(/EDITAL N/))
        .filter(line => !line.match(/^\d+\s+\|$/))
        .join(' ')
        .replace(/\s{2,}/g, ' ')
        .replace(/(?<=\d\.)\s/g, '<br/><br/><strong>$&</strong>');
}

const passage1 = cleanPassage(passage1Raw);
const passage2 = cleanPassage(passage2Raw);

console.log("PASSAGE 1:\n", passage1.substring(0, 300));
console.log("PASSAGE 2:\n", passage2.substring(0, 300));

fs.writeFileSync('extracted_2022.json', JSON.stringify([{
    id: "2022-p1",
    passageTitle: "Three Habits My Family Started in the Pandemic that we want to Keep",
    passageText: passage1,
    source: "Tish Harrison Warren, NY Times, 2022",
    category: "Theories",
    questions: []
}, {
    id: "2022-p2",
    passageTitle: "The Inescapable Exhaustion of Being the 'First' Black Woman",
    passageText: passage2,
    source: "A'shanti Gholar, Cosmopolitan, 2022",
    category: "Theories",
    questions: []
}], null, 2));

console.log("Saved to extracted_2022.json");
