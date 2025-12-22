const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 3199; i++) {
  if([].includes(i)) continue; // Skip specific numbers if needed
  const num = String(i).padStart(4, '0');
  const dir = path.join(__dirname, num);
  const filePath = path.join(dir, `${num}.njk`);

  // Create folder
  fs.mkdirSync(dir, { recursive: true });

  // File content
  const content = `---
layout: layout_contentPage.njk
title: ${num}
---
{% backButton "/tout-ce-que-je-ne-t-ai-jamais-ecrit/" %}
{% titlePage "${num}" %}

empty_
`;

  // Write file
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log("Done");
