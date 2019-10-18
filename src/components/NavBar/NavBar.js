import React from 'react';
import {NavBarWrapper} from './NavBar.style.js';

export default ({title, onClickBuild})=>{
  return(
    <NavBarWrapper>
      <div className="projectTitle">{title}</div>
      <div className="buildBtnCon">
        <button className="buildBtnNav" onClick={onClickBuild}><i className="fi-crown"></i></button>
      </div>
    </NavBarWrapper>
  );
}