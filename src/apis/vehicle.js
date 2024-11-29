import { callApi } from ".";

export const getVehicleDataApi = async (url, body, method, headers) => {
  let response = await callApi({ url, body, method, headers });
  return response;
};

export const mostlySearchedVehiclesList = async (url, body, method, headers) => {
  let response = await callApi({ url, body, method, headers });
  return response;
}