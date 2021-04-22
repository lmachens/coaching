const PDFDocument = require("pdfkit");

const A4SIZE = [595.28, 841.89];
function generatePDF({ name }, res) {
  res.setHeader("Content-Type", "application/pdf");

  const doc = new PDFDocument({ size: "A4" });
  doc.pipe(res);

  doc
    .image("certificate/assets/page1.jpg", 0, 0, { fit: A4SIZE })
    .font("certificate/assets/OpenSans/OpenSans-Regular.ttf")
    .fontSize(28)
    .fillColor("#1A3251")
    .text(name, 0, 228, { width: A4SIZE[0], align: "center" });

  doc.addPage();
  doc.image("certificate/assets/page2.jpg", 0, 0, { fit: A4SIZE });

  doc.end();
}

exports.generatePDF = generatePDF;
