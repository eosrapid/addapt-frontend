import React from 'react';
import CodeEditorTabs from '@/components/CodeEditorTabs';
import CodeEditor from '@/components/CodeEditor';
import CodeEditorPanelWrapper from './CodeEditorPanel.style';

export default ({tabs, onAction, activeTab})=>{
  return(
    <CodeEditorPanelWrapper>
      <div className="codePanelTop">
        <CodeEditorTabs
          tabs={tabs}
          activeTab={activeTab}
          onAction={onAction}
        />
      </div>

      <div className="codePanelBody">
        {(activeTab&&activeTab.length)?(<CodeEditor
          fileId={activeTab}
        />):null}
      </div>
    </CodeEditorPanelWrapper>
  )
};