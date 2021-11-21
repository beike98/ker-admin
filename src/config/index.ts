//环境配置
type envType = "development" | "test" | "prod";
const env = import.meta.env.MODE as envType;
const EnvConfig = {
  development: {
    baseApi:
      "https://www.fastmock.site/mock/c31c000f84d66b9176dd3d202fccfef9/ker-admin",
  },
  test: {
    baseApi: "/",
  },
  prod: {
    baseApi: "/",
  },
};

export default {
  env, //当前环境
  ...EnvConfig[env], //当前环境baseApi
};
