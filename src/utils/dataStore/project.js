import {
  getUniqueKey, getStringKey, setStringKey, getJSONKey, setJSONKey, deleteKey
} from './store';
import {
  resolvePath
} from '@/utils/pathResolve';
import {FileListItem} from '@/utils/fileUtils/structure';

import {EXAMPLE_CONTRACT_CPP, EXAMPLE_CONTRACT_HPP} from '@/utils/templates/eosSmartContract';

const EDITOR_GSTATE_KEY = "_$_PR0J3C75_$_";
const CURRENT_VERSION="1.0.0";
const STD_GSTATE_TPL = ()=>({projects:[]});

export function getProject(id){
  return getJSONKey(id);
}

export function getFile(id){
  return getStringKey(id);
}

export function saveFile(id, content){
  setStringKey(id, content);
}

export function deleteProjectFile(pid, fileId){
  const project = getJSONKey(pid);
  if(!project){
    throw new Error("Invalid project!");
  }
  project.files=project.files.filter(x=>x.id!==fileId);
  setJSONKey(pid, project);
  deleteKey(fileId);
  return project;
}

export function renameProjectFile(pid, fileId, newName){
  const project = getJSONKey(pid);
  if(!project){
    throw new Error("Invalid project!");
  }
  const file = project.files.filter(x=>x.id===fileId)[0];
  if(!file){
    throw new Error("Invalid fileId!");
  }
  file.path = resolvePath("/",file.path.substring(0,file.path.lastIndexOf("/")+1),newName).substring(1);

  console.log(newName,file.path)
  setJSONKey(pid, project);
  return project;
}

export function getGState(){
  var t = getJSONKey(EDITOR_GSTATE_KEY);
  if(!t) {
    t = STD_GSTATE_TPL();
    setJSONKey(EDITOR_GSTATE_KEY, t);
  }
  return t;
}

export function setGState(updatedGState){
  setJSONKey(EDITOR_GSTATE_KEY, updatedGState);
}

export function renameProject(pid, newName){
  const project = getJSONKey(pid);
  if(!project){
    throw new Error("Invalid project");
  }
  project.title = projectTitleToSlug(newName);
  setJSONKey(pid, project);

  const gState = getGState();
  const projForRename = gState.projects.filter(x=>x.id===pid)[0];
  projForRename.title = projectTitleToSlug(newName);
  setGState(gState);
  return projForRename;
}

export function addProjectFile(pid, _path, content){
  const fileId = getUniqueKey();
  const path = resolvePath("/",_path).substring(1);

  const FileObj = FileListItem({
    id: fileId,
    path: path,
  });
  setStringKey(fileId, content);
  const project = getJSONKey(pid);
  if(!project){
    setStringKey(fileId,"");
    throw new Error("Invalid project!");
  }
  if(project.files.filter(x=>x.path===FileObj.path).length!==0){
    setStringKey(fileId,"");
    throw new Error("File already exists in this path!");
  }
  project.files.push(FileObj);
  setJSONKey(pid, project);
  return project.files;
}
export function projectTitleToSlug(title){
  return title.trim().replace(/\s+/g,"_").replace(/[^a-z|0-9|A-Z|_]/g,"");
}
export function addProject(title, type){
  const pid = getUniqueKey();

  const projectObject = {
    id: pid,
    title: projectTitleToSlug(title),
    files:[],
    type: type,
    adpt_version: CURRENT_VERSION,
    created_at: Date.now(),
  };
  
  setJSONKey(pid, projectObject);
  addProjectFile(pid, "include/"+projectObject.title+".hpp", EXAMPLE_CONTRACT_HPP.replace(/example_contract/g,projectObject.title));
  addProjectFile(pid, "src/"+projectObject.title+".cpp", EXAMPLE_CONTRACT_CPP.replace(/example_contract/g,projectObject.title));

  const curGState = getGState();
  curGState.projects.push({id: pid, title: projectObject.title, type: type});
  setGState(curGState);
  return pid;
}