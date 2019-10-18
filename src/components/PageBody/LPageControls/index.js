import React from 'react';
import LPageControlsWrapper from './LPageControls.style';


export default ({onClickItem, items, currentItem})=>{
  return(
    <LPageControlsWrapper>
      {
        items.map(item=>(
          <div 
            className={"flsItem"+((currentItem===item.id)?" active":"")}
            onClick={()=>onClickItem(item.id)}
            key={"itm_"+item.id}
          ><i className={item.icon}></i></div>
        ))
      }
    </LPageControlsWrapper>
  );
}