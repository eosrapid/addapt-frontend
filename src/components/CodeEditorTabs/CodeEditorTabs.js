import React from 'react';
import CodeEditorTabsWrapper from './CodeEditorTabs.style';

const defaultFunction = ()=>1;

function generateActionResp(id,action,onAction,preventDef){
  if(typeof onAction!=='function'){
    return defaultFunction;
  }
  if(preventDef){
    return (e)=>{
      e.preventDefault();
      e.stopPropagation();
      onAction(id, action);
    };
  }else{
    return (()=>onAction(id, action));
  }
}
export default ({tabs, onAction, activeTab})=>{
  return(
    <CodeEditorTabsWrapper>
      {
        tabs.map((t)=>(
          <div className={"cpTab"+(tabs.edited?" edited":"")+((activeTab===t.id)?" active":"")}
            onClick={generateActionResp(t.id, "click", onAction, true)}
            key={t.id}
          >
            <div className="title">{t.path.substring(t.path.lastIndexOf("/")+1)}</div>
            <button className="btn"
              onClick={generateActionResp(t.id, "close", onAction, true)}
            ><i className="fi-x"></i></button>
          </div>
        ))
      }
    </CodeEditorTabsWrapper>
  )
};