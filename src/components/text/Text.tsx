import { ReactElement } from "react";
import { StyledText } from "./text.style";
import { BaseProps } from "@/components/base";
import React from "react";

export interface TextProps extends BaseProps {
  textContent?: string;
  hasError?: boolean;
}

export const Text = ({
  textContent,
  hasError,
  className,
}: TextProps): ReactElement => {
  return <StyledText className={className}>{textContent}</StyledText>;
};
