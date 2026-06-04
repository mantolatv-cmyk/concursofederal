const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  let newContent = content
    .replace(/shadow-shadow-/g, 'shadow-')
    .replace(/rounded-radius-/g, 'rounded-')
    .replace(/duration-duration-/g, 'duration-')
    .replace(/ease-ease-/g, 'ease-');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed broken utility classes in ${path.basename(filePath)}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(componentsDir);
console.log("Done fixing classes.");
