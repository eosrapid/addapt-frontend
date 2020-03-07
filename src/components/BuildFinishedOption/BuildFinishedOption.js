import React from "react";
import classnames from "classnames";
import { buildFinishedOption } from "./BuildFinishedOption.module.scss";

const BuildFinishedOption = ({ className, icon, label, onClick }) => {
  return (
    <div className={classnames(buildFinishedOption, className)} onClick={onClick}>
      <div className="iconCon">
        {icon?<img src={icon} alt="icon" className="bfoOptionIcon" />:null}
      </div>
      <div className="labelCon">{label}</div>
    </div>
  );
};

export default BuildFinishedOption;
