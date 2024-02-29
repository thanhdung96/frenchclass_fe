import React, { ReactElement } from "react";
import { StyledPanel } from "./Panel.style";

export function Panel({ children }): ReactElement {
  return <StyledPanel>{children}</StyledPanel>;
}
