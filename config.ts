interface Config {
  baseUrl: string;
}
const checkConfig = (server: string): Config | {} => {
  let config: Config | {} = {};
  switch (server) {
    case "production":
      config = {
        baseUrl: "https://serverecomerce.vercel.app/api/v1",
      };
      break;
    case "local":
      config = {
        baseUrl: "http://localhost:5000/api/v1",
      };
      break;
    default:
      break;
  }
  return config;
};

export const selectServer = "production";
export const config = checkConfig(selectServer) as Config;
