import axios, { mockAdapter } from "src/utils/axios";

mockAdapter.onGet("/foo").reply(200, { quote: "1234" });

export const checkAuthenticateService = async (params) => {
  const response = await axios.get("/foo");
  return response;
};