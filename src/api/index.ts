import $http from "../utils/request";
enum url {
  LOGIN = "/login",
}
interface loginParam {
  username: string;
  password: any;
}
export const loginApi = (param: loginParam): Promise<any> =>
  $http.post(url.LOGIN, param);
