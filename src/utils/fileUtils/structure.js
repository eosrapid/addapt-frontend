import * as FILE_TYPES from './types';
import {getUniqueKey} from '@/utils/dataStore/store';

export function FileListItem({id, type, path, opened}){
  return {
    id: typeof id!=='string'?getUniqueKey():id,
    type: type||FILE_TYPES.FILE,
    path: path,
    opened: !!opened,
    name: path.substring(path.lastIndexOf("/")+1)
  };
}

function insertAtPathIfNotExists(obj, path, value){
  if(!obj||typeof obj!=='object'||!Array.isArray(path)||!path.length){
    return false;
  }
  var tObj = obj;
  const lenm1 = path.length-1;
  for(let i=0;i<lenm1;i++){
    if(!tObj[path[i]]){
      tObj[path[i]]={};
    }
    tObj=tObj[path[i]];
  }
  if(!tObj[path[lenm1]]){
    tObj[path[lenm1]]=value;
    return true;
  }
  return false;
}
export function buildFileTree(fileList,) {
  if(!Array.isArray(fileList)){
    return {};
  }

  const fileRoot = {};

  fileList
  .concat([])
  .sort((a, b) => (a.path > b.path) - (a.path < b.path))
  .forEach(f=>
    insertAtPathIfNotExists(
      fileRoot,
      f.path.split("/").filter(s=>s.length),
      f.type === FILE_TYPES.FILE?f:{}
    )
  );

  return fileRoot;
}