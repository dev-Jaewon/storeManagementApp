import fs from 'fs';
import path from 'path';
import { pascalCase } from 'change-case-all';

const svgDir = path.join(__dirname, '../assets/icons');
const outputFile = path.join(__dirname, '../src/ui/common/Icons.tsx');

const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));

// Generate the component code
let componentCode = `import React from 'react';
import { SvgProps } from 'react-native-svg';
`;

// Import each SVG component
svgFiles.forEach(file => {
  const componentName = pascalCase(file.replace('.svg', '').replace(/(\d+)\s+/, '').trim() + (file.match(/\d+/)?.[0] || ''));
  componentCode += `import ${componentName} from '@/assets/icons/${file}';\n`;
});

componentCode += `\nexport const Icons = {\n`;

// Add SVG components to Icons object with original filenames as keys
svgFiles.forEach(file => {
  const componentName = pascalCase(file.replace('.svg', '').replace(/(\d+)\s+/, '').trim() + (file.match(/\d+/)?.[0] || ''));
  
  componentCode += `  ${componentName}: (props: SvgProps) => (
    <${componentName} color={'black'} {...props} />
  ),\n`;
});

componentCode += `};\n\n`;

// Write the generated code to the output file
fs.writeFileSync(outputFile, componentCode);

console.log('Icon components generated successfully!');
