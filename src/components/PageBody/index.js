import React from 'react';
import EditorBody from './EditorBody.style'
import LPageControls from '@/components/PageBody/LPageControls';
import ExplorerPanel from '@/components/PageBody/ExplorerPanel';
import FileExplorerContainer from '@/containers/FileExplorer';
import EditorPageControlsContainer from '@/containers/EditorPageControls';

import CodeEditorPanel from '@/containers/CodeEditorPanel';

import {PAGES} from '@/pages/ctrlMenuDefs';

const LPageControlsItems = PAGES.map(o=>({id: o.id, icon: o.icon}));

export default ()=>{
  return(
    <EditorBody> 
      <EditorPageControlsContainer
        items={LPageControlsItems}
      />
      <ExplorerPanel
        title="Files"
      >
        <FileExplorerContainer />
      </ExplorerPanel>
      <CodeEditorPanel />

    </EditorBody>
  );
}