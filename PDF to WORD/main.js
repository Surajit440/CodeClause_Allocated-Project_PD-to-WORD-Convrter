// JavaScript code for the PDF to DOCX converter webpage

const pdfFileInput = document.getElementById("pdf-file");
const convertButton = document.getElementById("convert-button");
const downloadLink = document.getElementById("download-link");

convertButton.addEventListener("click", async () => {
	const pdfData = await pdfFileInput.files[0].arrayBuffer();
	const pdfDoc = await PDFLib.PDFDocument.load(pdfData);
	const docxBytes = await pdfDoc.saveAsBase64({ dataUri: true, outputType: "docx" });
	const docxData = atob(docxBytes.split(",")[1]);
	const docxBlob = new Blob([docxData], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
	downloadLink.href = URL.createObjectURL(docxBlob);
	downloadLink.click();
});