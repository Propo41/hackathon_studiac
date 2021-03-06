import axios from "axios";

var apiBaseURL = process.env.REACT_APP_REST_API_ENDPOINT;

if (process.env.REACT_APP_ENV !== "development") {
  apiBaseURL = process.env.REACT_APP_REST_API_ENDPOINT_PRODUCTION;
}
console.log(apiBaseURL);

/* public queries */
export const GET = async (url) => {
  return await axios.get(`${apiBaseURL}/${url}`);
};

export const POST = async (url, payload) => {
  return await axios.post(`${apiBaseURL}/${url}`, payload);
};

/* private queries */
const config = {
  headers: {
    Authorization: "Bearer " + localStorage.getItem("x-studiac-access-token"),
  },
};

export const GET_AUTH = async (url, payload) => {
  return await axios.get(`${apiBaseURL}/${url}`, config);
};

export const POST_AUTH = async (url, payload) => {
  return await axios.post(`${apiBaseURL}/${url}`, payload, config);
};

// DELETE payload has to be sent in the headers
export const DELETE_AUTH = async (url, payload) => {
  return await axios.delete(`${apiBaseURL}/${url}`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("x-studiac-access-token"),
    },
    data: payload,
  });
};
