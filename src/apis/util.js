import { callApi } from ".";

export const updateProfileImage = async (url, body, method, headers) => {
    let response = await callApi({url, body, method, headers});
    return response;
}