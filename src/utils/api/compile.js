import axios from 'axios';
import {getFile} from '@/utils/dataStore/project';
const API_URL="http://"+window.location.hostname+":3000/api/v1";
/*

const p = {
  name: "mycontract",
  files: [
    {
      name: "test.hpp",
      type: "include",
      content: ""
    },
    {
      name: "mycontract.hpp",
      type: "include",
      content: ""
    },
    {
      name: "mycontract.cpp",
      type: "src",
      content: ""
    },
  ],
  schema_version: 1
}

*/

export async function compileProject(passCode, project){

  const pObj = {
    name: project.title,
    files:[],
    schema_version: 1
  }
  pObj.files = project.files.map(f=>{
    const pt=f.path.split("/");
    if(pt.length!==2||(pt[0]!=='src'&&pt[0]!=='include'&&pt[0]!=='ricardian')){
      return null;
    }
    return {
      name: pt[1].trim(),
      type: pt[0].trim(),
      content:getFile(f.id)
    };
  }).filter(x=>x&&x.name.length&&x.type.length);
  if(!pObj.files.length) {
    throw new Error("No files to compile!");
  }
  const result = await axios.post(API_URL+"/compile/start_compile", {
    project: pObj
  }, {
    headers: {"x-wf-server-passcode": passCode},
  })
  return result.data;
}