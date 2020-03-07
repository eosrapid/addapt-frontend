import React from "react";
import { ideButton } from "./IDEButton.module.scss";
import classnames from "classnames";

export default ({ className, children, ...props }) => {
  return (
    <button className={classnames(ideButton, className)} {...props}>
      {children}
    </button>
  );
};
 