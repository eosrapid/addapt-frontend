import React from 'react';
import {ProjectListItemWrapper} from './ProjectListItem.style';

export default ({pid, title, onClickItem, className})=>{
  return(
    <ProjectListItemWrapper className={className} onClick={onClickItem}>
      {title}
    </ProjectListItemWrapper>
  );
}