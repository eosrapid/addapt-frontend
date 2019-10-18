import React from 'react';
import {rootLayout} from './RootLayout.module.scss';
export default ({children})=>{
  return(
    <div className={rootLayout}>
      {children}
    </div>
  );
}