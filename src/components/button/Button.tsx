import React, { ReactElement } from "react";
import { StyledButton } from "./Button.style";
import { BaseProps } from "@/components/base";

export interface ButtonProps extends BaseProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

export function Button({
  title,
  onPress,
  disabled,
  className,
}: ButtonProps): ReactElement {
  return (
    <StyledButton
      className={className}
      title={title}
      onPress={onPress}
      disabled={disabled}
    />
  );
}
