function autoFillGoogleDocFromForm(e) {
  var timestamp = e.values[0]; // 
  var firstName = e.values[1];
  var lastName = e.values[2];
  var title = e.values[3];
 
  var templateFile = DriveApp.getFileById(""); // here goes the ID of the
  var templateResponseFolder = DriveApp.getFolderById("");
 
  var copy= templateFile.makeCopy(lastName + ','+ firstName, templateResponseFolder);
  var doc = DocumentApp.openById(copy.getId());
  var body= doc.getBody();
 
  body.replaceText("{{FirstName}}", firstName);
  body.replaceText("{{LastName}}", lastName);
  body.replaceText("{{Title}}", title);
 
  doc.saveAndClose();
 
  const BLOBPDF = copy.getAs(MimeType.PDF);
  const pdfFile =  templateResponseFolder.createFile(BLOBPDF).setName(lastName + ', '+ firstName);
  return pdfFile;
 
}
