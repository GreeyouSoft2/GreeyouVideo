const FOLDER_ID = '1tW00S1nw2NaWt5py5WvlbwFQQuWcgnk0';

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function uploadFile(formObj) {
  if (formObj.blob.length === 0) throw 'ファイルが選択されていません。';
  const file = DriveApp.getFolderById(FOLDER_ID).createFile(formObj.blob);
  return file.getId();
}

function fetchThumbnailDataUrl(fileId) {
  const blob = DriveApp.getFileById(fileId).getThumbnail();
  return `data:${blob.getContentType()};base64,${Utilities.base64Encode(blob.getBytes())}`;
}
