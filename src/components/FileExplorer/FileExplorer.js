import React from 'react';
import FileExplorerWrapper from './FileExplorer.style';
import {FEItemFile, FEItemFolder} from './FEItem';

export default ({onAction, activePath, directory})=>{
  const realDepth = 0;
  return(
    <FileExplorerWrapper>
      {
        (directory?Object.keys(directory)
        .map(k=>{
          if(typeof directory[k].type==='number'){
            return (
              <FEItemFile
                key={directory[k].type+"|"+k}
                depth={realDepth+1}
                path={directory[k].path}
                fileName={k}
                isActive={activePath===directory[k].path}
                onAction={onAction}
              />
            )
          }else{
            return (
              <FEItemFolder
                key={"feif|"+k}
                depth={realDepth+1}
                path={k}
                fileName={k}
                activePath={activePath}
                onAction={onAction}
                directory={directory[k]}
              />
            )
          }
        }):undefined)
      }
    </FileExplorerWrapper>
  )
}