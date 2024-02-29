import React, { ReactElement } from "react";
import { StyledText } from "./Text.style";
import { BaseProps } from "@/components/base";

export interface TextProps extends BaseProps {
  textContent?: string;
  hasError?: boolean;
}

export function Text({
  textContent,
  hasError,
  className,
}: TextProps): ReactElement {
  return <StyledText className={className}>{textContent}</StyledText>;
}
