import React from 'react';
import ExplorerPanel from './ExplorerPanel.style'
export default ({title, children})=>{
  return(
    <ExplorerPanel>
      <div className="explorerTitle">{title}</div>
      <div className="explorerBody">
        {children}
      </div>
    </ExplorerPanel>
  );
}