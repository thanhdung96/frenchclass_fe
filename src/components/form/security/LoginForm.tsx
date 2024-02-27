import React, { ReactElement, useState } from "react";
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";
import { Formik } from "formik";
import { LoginAccessTokenDto, LoginDto } from "@/utils/dto/security.dto";
import { doLogin } from "@/services/security/security.service";

interface LoginFormParams {
  onLoginSuccess: (tokenDto: LoginAccessTokenDto) => void;
}

export const LoginForm = ({
  onLoginSuccess,
}: LoginFormParams): ReactElement => {
  const [loginData, setLoginData] = useState<LoginDto>();

  const onLogin = async (data: LoginDto): Promise<void> => {
    const response: LoginAccessTokenDto = await doLogin(data);
    onLoginSuccess(response);
  };

  return (
    <Formik initialValues={loginData} onSubmit={onLogin}>
      {({ handleSubmit, handleChange, values, isSubmitting }) => {
        const formValue: LoginDto = values as LoginDto;
        return (
          <>
            <Input
              label="Username"
              onChangeText={handleChange("username")}
              value={formValue.username}
              editable={!isSubmitting}
            />
            <Input
              label="Password"
              onChangeText={handleChange("password")}
              value={formValue.password}
              secureTextEntry={true}
              editable={!isSubmitting}
            />
            <Button
              onPress={handleSubmit}
              title="Submit"
              disabled={isSubmitting}
            />
          </>
        );
      }}
    </Formik>
  );
};
