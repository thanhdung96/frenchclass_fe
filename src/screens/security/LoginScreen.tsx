import React, { ReactElement } from "react";
import { LoginForm } from "@/components/form/security/LoginForm";
import { LoginAccessTokenDto } from "@/utils/dto/security.dto";
import { setItemAsync } from "expo-secure-store";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";

export const LoginScreen = ({ navigation }): ReactElement => {
  const onLoginSuccess = async (
    tokenDto: LoginAccessTokenDto,
  ): Promise<void> => {
    await setItemAsync(ACCESS_TOKEN_KEY, tokenDto.accessToken);
    navigation.navigate("home_screen");
  };

  return <LoginForm onLoginSuccess={onLoginSuccess} />;
};
