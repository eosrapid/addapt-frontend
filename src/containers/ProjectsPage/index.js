import React from 'react';
import { connect } from 'dva';

import ProjectsPage from '@/components/ProjectsPage';

const ProjectContainer = ({dispatch, projects})=>(
  <ProjectsPage
    onClickItem={(pid)=>dispatch({
      type:"project/openProjectGoToFiles",
      payload: pid
    })}
    projectList={projects||[]}
    onCreateProject={()=>dispatch({
      type:"project/uiCreateNewProject"
    })}
  />
)
export default connect(
  ({project}) => ({
    projects: project.projects
  })
)(ProjectContainer);