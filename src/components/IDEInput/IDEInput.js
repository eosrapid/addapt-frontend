import React from "react";
import classnames from "classnames";
import { ideInput } from "./IDEInput.module.scss";

const IDEInput = ({ className, value, onChange, ...props }) => {
  return (
      <input className={classnames(ideInput, className)} value={value} onChange={onChange} {...props} />

  );
};

export default IDEInput;
