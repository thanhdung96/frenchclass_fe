import { post } from "@/utils/network";
import { LoginAccessTokenDto, LoginDto } from "@/utils/dto/security.dto";

export async function doLogin(data: LoginDto): Promise<LoginAccessTokenDto> {
  return await post<LoginDto, LoginAccessTokenDto>(
    "http://192.168.137.1:8080/security/login",
    data,
  );
}
