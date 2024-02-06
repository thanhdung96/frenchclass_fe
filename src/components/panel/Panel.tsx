import { ReactElement } from "react";
import { StyledPanel } from "./Panel.style";
import React from "react";

interface PanelProps {
  children?: ReactElement;
}

export const Panel = ({ children }: PanelProps): ReactElement => {
  return <StyledPanel>{children}</StyledPanel>;
};
