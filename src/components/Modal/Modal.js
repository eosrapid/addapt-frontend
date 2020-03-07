import React from 'react';
import {modalWin} from './Modal.module.scss';
import classnames from 'classnames';

export default ({className, title, children, onConfirm, onCancel})=>{
  return (
    <div className={classnames(modalWin, className)}>
      <div className="mdTitle">{title}</div>
      <div className="mdContent">{children}</div>
    </div>
  );
}