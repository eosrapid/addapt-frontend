import React from 'react';
import FEItemWrapper from './FEItem.style';
const feItem = 'feItem'
const padLeftMultiplier = 7;
const defaultFunction = ()=>1;

function generateActionResp(path,action,onAction,preventDef){
  if(typeof onAction!=='function'){
    return defaultFunction;
  }
  if(preventDef){
    return (e)=>{
      e.preventDefault();
      e.stopPropagation();
      onAction(path, action);
    };
  }else{
    return (()=>onAction(path, action));
  }
}
export const FEItemFile = ({depth, path, fileName, isActive, onAction})=>(
  <FEItemWrapper className={(isActive?"feItem active":"feItem")}>
    <div 
      className="feItemTop"
      style={{paddingLeft:((depth||0)*7+5)+"px"}}
      onClick={onAction?(()=>onAction(path, "clickfile")):defaultFunction}
    >
      <button className="fld"></button>
      <i>{fileName}</i>
      <div className="hoverControls">
          <button
            className="hcBtn"
            onClick={generateActionResp(path, "rename", onAction, 1)}
          ><i className="fi-pencil"></i></button>
          <button className="hcBtn"
            onClick={generateActionResp(path, "delete", onAction, 1)}
          ><i className="fi-trash"></i></button>
      </div>
    </div>
  </FEItemWrapper>
);

export const FEItemFolder = ({depth, path, fileName, activePath, onAction, directory})=>{
  const classNames = "feItem folder expand";
  const realDepth = depth||0;
  const realPath = typeof path==='string'?path:"";

  return(
    <FEItemWrapper className={classNames}>
      <div 
        className="feItemTop"
        style={{paddingLeft:(realDepth*7+5)+"px"}}
        onClick={onAction?(()=>onAction(path, "clickdir")):defaultFunction}
      >
        <button className="fld"></button>
        <i>{fileName}</i>
        <div className="hoverControls">
            <button
              className="hcBtn"
              onClick={generateActionResp(path, "add_file", onAction, 1)}
            ><i className="fi-page-add"></i></button>
        </div>
      </div>
      <div className="children">
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
                  path={realPath===""?k:(realPath+"/"+k)}
                  fileName={k}
                  activePath={activePath}
                  onAction={onAction}
                  directory={directory[k]}
                />
              )
            }
          }):undefined)
        }
      </div>
    </FEItemWrapper>
  );
}
