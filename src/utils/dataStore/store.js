const DATA_STORE_PREFIX = "_$ADPT$_";
const UNIQUE_COUNTER_LKEY = "_$ADPTUNIQ$_";
const UNIQUE_BROWSER_LKEY = "_$ADPTBROW$_";
const BROWSER_ID = getUniqueBrowserID();
const COUNTER_ID = getUniqueCounterStart();
const RANDOM_ID = ("00"+Math.floor(Math.random()*36*36*36).toString(36)).substr(-3);
var uniqueKeyCounter = 0;

function randBase36(){
  return Math.floor(Math.random()*0xffffffff).toString(36)
}
function getUniqueBrowserID(){
  if(!window.localStorage){
    return;
  }
  if(!window.localStorage.getItem(UNIQUE_BROWSER_LKEY)){
    window.localStorage.setItem(UNIQUE_BROWSER_LKEY, randBase36());
  }
  return window.localStorage.getItem(UNIQUE_BROWSER_LKEY)||"broken";
}
function getUniqueCounterStart(){
  if(!window.localStorage){
    return;
  }
  if(!window.localStorage.getItem(UNIQUE_COUNTER_LKEY)){
    window.localStorage.setItem(UNIQUE_COUNTER_LKEY, "0");
  }
  const curValue = parseInt(window.localStorage.getItem(UNIQUE_COUNTER_LKEY), 36)+1;
  const curValueStr = isNaN(curValue)?"0":(curValue.toString(36));
  window.localStorage.setItem(UNIQUE_COUNTER_LKEY, curValueStr);
  return curValueStr;
}

export function getUniqueKey(){
  return RANDOM_ID+BROWSER_ID+"_"+COUNTER_ID+"_"+(uniqueKeyCounter++);
}
export function deleteKey(key){
  localStorage.removeItem(key);
}

export function getStringKey(key) {
  const value = localStorage.getItem(DATA_STORE_PREFIX+key);
  return typeof value==='string'?value:null;
}

export function setStringKey(key, value) {
  localStorage.setItem(DATA_STORE_PREFIX+key, value);
}

export function getJSONKey(key) {
  const value = localStorage.getItem(DATA_STORE_PREFIX+key);
  var t = null;
  if(!value){
    return null;
  }else{
    try {
      t = JSON.parse(value);
    }catch(e){
      return null;
    }
  }
  return t;
}

export function setJSONKey(key, obj) {
  localStorage.setItem(DATA_STORE_PREFIX+key, JSON.stringify(obj));
}