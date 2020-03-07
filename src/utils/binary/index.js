export function hexToUint8Array(hexStr) {
  const strLen = hexStr.length;
  const arrLen = Math.floor(strLen/2);
  const uint8Arr = new Uint8Array(arrLen);
  for(let i=0;i<arrLen;i++) {
    uint8Arr[i] = parseInt(hexStr.substring(i*2,i*2+2), 16);
  }
  return uint8Arr;
}