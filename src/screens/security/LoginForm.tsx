import React, { ReactElement, useState } from "react";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";
import { Formik } from "formik";
import { LoginDto } from "@/utils/dto/security.dto";
import { doLogin } from "@/services/security/security.service";

export const LoginForm = (): ReactElement => {
  const [loginData, setLoginData] = useState<LoginDto>();

  const onLogin = async (data: LoginDto): Promise<void> => {
    const response = await doLogin(data);
    console.log(response);
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
