import React from 'react';
import { connect } from 'dva';

import NavBar from '@/components/NavBar';

const NavBarContainer = ({dispatch, title})=>(
  <NavBar 
    title={title}
    onClickBuild={()=>dispatch({type:"project/compileProject"})}
  />
)
export default connect(
  ({project}) => ({
    title: project.currentProjectTitle
  })
)(NavBarContainer);