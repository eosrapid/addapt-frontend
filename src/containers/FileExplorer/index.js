import React from 'react';
import { connect } from 'dva';

import FileExplorer from '@/components/FileExplorer';
import {mConfirmCB} from '@/utils/modalConfirm';

import {buildFileTree, FileListItem} from '@/utils/fileUtils/structure';
const defFiles = [
  FileListItem({
    path: "include/testcontract.hpp"
  }),
  FileListItem({
    path: "include/test.hpp"
  }),
  FileListItem({
    path: "src/testcontract.cpp"
  })
]

const onAction = (path, action)=>{
  console.log(`onAction: '${action}' on '${path}'`);
};

const FileExplorerCon = ({dispatch, files, activePath})=>{
  const tree = buildFileTree(files);

  const onAction = (path, action)=>{
    if(action==="add_file"){
      return mConfirmCB("Please enter a name for your new file", (err, res)=>{
        if(err||!res||!res.length){
          return;
        }
        dispatch({
          type: "project/addFileToProject",
          payload: path+"/"+res,
        })
      }, {value: "", placeholder:"new_file_name.txt..."})
    }
    const targFile = files.filter(x=>x.path===path)[0];
    if(!targFile){
      return;
    }
    if(action==="clickfile"){
      dispatch({type: "project/openFile", payload: targFile.id});
    }else if(action==="delete"){
      dispatch({type: "project/removeFileById", payload: targFile.id});
    }else if(action==="rename"){
      return mConfirmCB("Please enter a new name for your file", (err, res)=>{
        if(err||!res||!res.length){
          return;
        }

        dispatch({
          type: "project/renameFileById",
          payload: {id:targFile.id, name:res},
        })
      }, {value: targFile.path.split("/").pop(), placeholder:"new_file_name.txt..."})

    }
  };

  return(
    <FileExplorer
      onAction={onAction}
      directory={tree}
      activePath={activePath}
    />
  )
  
}
function getActivePathForfiles(editingFileId, files) {
  if(!editingFileId) {
    return "";
  }
  const f = files.filter(x=>x.id===editingFileId)[0];
  return f?f.path:"";
}
export default connect(
  ({project}) => ({
    files: project.currentProjectFiles,
    activePath: getActivePathForfiles(project.editingFileId, project.currentProjectFiles)
  })
)(FileExplorerCon);