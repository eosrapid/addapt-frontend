import {hexToUint8Array} from '@/utils/binary';

export function downloadText(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
export function downloadHex(filename, hexStr) {
  var element = document.createElement('a');
  const blob = new Blob([hexToUint8Array(hexStr).buffer], {type:'application/octet-stream'});
  const blobURL = window.URL.createObjectURL(blob);
  element.setAttribute('href', blobURL);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  if (typeof element.download === 'undefined') {
    element.setAttribute('target', '_blank');
  }
  
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  setTimeout(() => {
    window.URL.revokeObjectURL(blobURL);
  }, 200);
}