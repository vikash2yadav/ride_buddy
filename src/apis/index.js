import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:2000/";

export async function callApi({ url, body, method, headers }) {
  let authHeader = localStorage.getItem("authorization") && {
    user_token: localStorage.getItem("authorization"),
  };
  try {
    const result = await axios({
      url: API_URL + url,
      method: method,
      headers: { ...authHeader, ...headers },
      data: body,
      timeout: 120000,
    });
    return result;
  } catch (error) {
    if (error?.response?.status === 401) {
      // localStorage.removeItem("authorization");
      // localStorage.setItem("IsLoging", false);
      // window.location.href = "/login";
    } else if (error.response) {
      return error.response;
    } else {
      console.log("error >", error);
    }
  }
}
