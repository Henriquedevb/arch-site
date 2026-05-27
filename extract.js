const fs = require('fs');
import('pdf-parse').then(pdfLib => {
  const data = new Uint8Array(fs.readFileSync('feedbacks.pdf'));
  const parser = new pdfLib.PDFParse(data);
  parser.load()
    .then(() => parser.getText())
    .then(text => {
      console.log(text);
    })
    .catch(err => {
      console.error('parse error', err);
    });
}).catch(err => {
  console.error('import error', err);
});
