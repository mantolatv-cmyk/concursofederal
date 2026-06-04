const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match Tailwind classes using [var(--something)]
  // Example: text-[var(--text-primary)] -> text-text-primary
  // bg-[var(--surface-1)] -> bg-surface-1
  // border-[var(--border-subtle)] -> border-border-subtle
  // from-[var(--primary-500)] -> from-primary-500
  // ring-[var(--primary-500)]/10 -> ring-primary-500/10
  
  // Pattern: ([a-z0-9-]+)-\[var\(--([a-z0-9-]+)\)\]
  // Replacement: $1-$2
  
  const regex = /([a-z0-9-]+)-\[var\(--([a-z0-9-]+)\)\]/g;
  let matches = 0;
  
  const newContent = content.replace(regex, (match, prefix, varName) => {
    matches++;
    return `${prefix}-${varName}`;
  });

  if (matches > 0) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${matches} instances in ${path.basename(filePath)}`);
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
console.log("Done refactoring classes.");
