import { callApi } from "."

export const getProfileData = async (url, body, method, headers) => {
    let response = await callApi({url, body, method, headers});
    return response;
}

export const updateProfileData = async (url, body, method, headers) => {
    let response = await callApi({url, body, method, headers});
    return response;
}