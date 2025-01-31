import { callApi } from ".";

export const registerAPi = async (url, body, method, headers) => {
  let response = await callApi({ url, body, method, headers });
  return response;
};

export const loginAPi = async (url, body, method, headers) => {
  let response = await callApi({ url, body, method, headers });
  return response;
};
