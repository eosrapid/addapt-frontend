import React from 'react';
import { connect } from 'dva';
import EditorBody from './EditorBody.style'
import LPageControls from '@/components/PageBody/LPageControls';
import ExplorerPanel from '@/components/PageBody/ExplorerPanel';
import FileExplorerContainer from '@/containers/FileExplorer';
import ProjectsPage from '@/containers/ProjectsPage';

import CodeEditorPanel from '@/containers/CodeEditorPanel';

import {PAGES} from '@/pages/ctrlMenuDefs';

const LPageControlsItems = PAGES.map(o=>({id: o.id, icon: o.icon}));

const EditorPageProject = ({dispatch, editorPageSlug})=>{
  return(
    <EditorBody> 
      <LPageControls
        items={LPageControlsItems}
        currentItem={editorPageSlug}
        onClickItem={(sel)=>dispatch({type:"page/setEditorPage", payload: sel})}
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
const HomePageProject = ({dispatch, editorPageSlug})=>{
  return(
    <EditorBody> 
      <LPageControls
        items={LPageControlsItems}
        currentItem={editorPageSlug}
        onClickItem={(sel)=>dispatch({type:"page/setEditorPage", payload: sel})}
      />
      <ProjectsPage 

      />
    </EditorBody>
  );
}

const PageBodyContainer = (props)=>{
  if(props.editorPageSlug==="project"){
    return (<EditorPageProject {...props} />)
  }else if(props.editorPageSlug==="home"){
    return <HomePageProject {...props} />
  }

  return (<HomePageProject {...props} />);
};
export default connect(
  ({page}) => ({
    editorPageSlug: page.editorPageSlug
  })
)(PageBodyContainer);
