const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
  const buf = fs.readFileSync('User Interviews Open Banking complete.pdf');
  const parser = new PDFParse();
  const result = await parser.parse(buf);
  console.log('TOTAL_PAGES:' + result.numpages);
  // Write full text to file for review
  fs.writeFileSync('_pdf_extracted.txt', result.text, 'utf8');
  console.log('Written to _pdf_extracted.txt');
  // Print first 5000 chars
  console.log(result.text.substring(0, 5000));
}

run().catch(e => { console.error(e); process.exit(1); });
