import { ReactElement } from "react";
import { StyledInput } from "./input.style";
import { InputModeOptions } from "react-native";
import { Text } from "@/components/text/text";
import { BaseProps } from "@/components/base";
import React from "react";

export interface InputProps extends BaseProps {
  label?: string;
  placeholder?: string;
  editable?: boolean;
  inputMode?: InputModeOptions;
  onChangeText?: (value: string) => void;
  value?: string;
  maxLength?: number;
  helpText?: string;
  hasError?: boolean;
  secureTextEntry?: boolean;
}

export const Input = ({
  label,
  className,
  inputMode = "text",
  placeholder,
  editable = true,
  onChangeText,
  value,
  maxLength = 64,
  helpText,
  hasError = false,
  secureTextEntry = false,
}: InputProps): ReactElement => {
  return (
    <>
      {label ? <Text textContent={label} /> : <></>}
      <StyledInput
        placeholder={placeholder}
        className={className}
        editable={editable}
        inputMode={inputMode}
        keyboardType="default"
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
      {helpText ? <Text textContent={helpText} hasError={hasError} /> : <></>}
    </>
  );
};
