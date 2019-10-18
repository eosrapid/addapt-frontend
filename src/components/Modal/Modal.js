import React from 'react';
import {modalWin} from './Modal.module.scss';

export default ({title, children, onConfirm, onCancel})=>{
  return (
    <div className={modalWin}>
      <div className="mdTitle">{title}</div>
      <div className="mdContent">{children}</div>
      <div className="mdControls">
        <button className="mdButton" onClick={onConfirm}>Confirm</button>
        <button className="mdButton" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}