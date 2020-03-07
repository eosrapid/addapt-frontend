const lastBuildResult = {};
function setLastBuildResult(wasmHex, abiStr){
  lastBuildResult.wasmHex = wasmHex;
  lastBuildResult.abiStr = abiStr;
}
function getLastBuildResult(){
  return lastBuildResult;
}

export {
  setLastBuildResult,
  getLastBuildResult,
}