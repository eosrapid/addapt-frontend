import React from 'react';

import CodeEditorPanel from '@/components/CodeEditorPanel';
import { connect } from 'dva';

import {buildFileTree, FileListItem} from '@/utils/fileUtils/structure';


const CodeEditorPanelCon = ({dispatch, tabs, activeTab})=>{
  const onAction = (id, action)=>{
    if(action==="click"){
      dispatch({
        type: "project/openFile",
        payload: id
      })
    }else if(action==="close"){
      dispatch({
        type: "project/closeFile",
        payload: id
      })
    }

  }

  return(
    <CodeEditorPanel
      onAction={onAction}
      tabs={tabs}
      activeTab={activeTab}
    />
  )
  
}


export default connect(
  ({project}) => ({
    tabs: (project.currentProjectFiles||[]).filter(x=>project.openTabs.indexOf(x.id)!==-1),
    activeTab: project.editingFileId
  })
)(CodeEditorPanelCon);