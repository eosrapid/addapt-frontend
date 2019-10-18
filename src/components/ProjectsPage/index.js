import React from 'react';
import {ProjectsPageWrapper} from './ProjectsPage.style';
import ProjectListItem from './ProjectListItem';

export default ({projectList, onClickItem, onCreateProject})=>{
  return(
    <ProjectsPageWrapper> 
      <div className="projectsPageTop">
        <div className="projectsPageTitle">
          My Projects
        </div>
      </div>
      <div className="projectsPageBody">
        <div className="projectList">
          {
            projectList.map((pli)=>(
              <ProjectListItem
                key={pli.id}
                pid={pli.id}
                title={pli.title}
                onClickItem={()=>onClickItem(pli.id)}
              />
            ))
          }
          <ProjectListItem
            className="create"
            title="Create New Project..."
            onClickItem={onCreateProject}
          />
          
        </div>
      </div>
    </ProjectsPageWrapper>
  );
}