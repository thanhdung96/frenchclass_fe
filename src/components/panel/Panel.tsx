import { ReactElement } from "react";
import { StyledPanel } from "./Panel.style";
import React from "react";

export const Panel = ({ children }): ReactElement => {
  return <StyledPanel>{children}</StyledPanel>;
};
