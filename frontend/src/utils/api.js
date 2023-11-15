import { isEmpty } from "./util";

const APP_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_BASE_URL = APP_BASE_URL + "/api";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const setAPIHeader = (token) => {
  headers.append("Authorization", `Bearer ${token}`);
};

async function fetchJson(url, options, onCancel) {
  try {
    return fetch(url, options).then((response) => {
      if (response.status === 204) {
        return null;
      }
      return response.json().then((data) => {
        return data;
      });
    });
  } catch (error) {
    console.log(error);
  }
}

export async function listFood(signal) {
  const url = new URL(`${API_BASE_URL}/food`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function createFood(data, signal) {
  const url = `${API_BASE_URL}/food`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: data }),
    signal,
  };
  return await fetchJson(url, options);
}

export async function updateFood(data, signal) {
  const url = `${API_BASE_URL}/food`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({ data: data }),
    signal,
  };
  return await fetchJson(url, options);
}

export async function deleteFood(data, signal) {
  const url = `${API_BASE_URL}/food`;
  const options = {
    method: "DELETE",
    headers,
    body: JSON.stringify({ data: data }),
    signal,
  };
  return await fetchJson(url, options);
}

export async function listFoodSearch(data, signal) {
  const url = new URL(`${API_BASE_URL}/food/search`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export async function getFoodDetailByID(id, signal) {
  const url = new URL(`${API_BASE_URL}/food/${id}`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function listSearch(data, signal) {
  const url = new URL(`${API_BASE_URL}/search`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export async function getBusinessDetailById(id, signal) {
  const url = new URL(`${API_BASE_URL}/google/${id}`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function getUserById(id, signal) {
  const url = new URL(`${API_BASE_URL}/auth/${id}`);
  return await fetchJson(url, { headers, signal }, []);
}

////////////////////////////////////////////////////////////////
// Auth api
////////////////////////////////////////////////////////////////

export async function signIn(data, signal) {
  const url = new URL(`${API_BASE_URL}/auth/signIn`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export async function googleSign(data, signal) {
  const url = new URL(`${API_BASE_URL}/auth/googleSign`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export async function signUp(data, signal) {
  const url = new URL(`${API_BASE_URL}/auth/signUp`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export async function forgetPassword(data, signal) {
  const url = new URL(`${API_BASE_URL}/auth/forget-password`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export async function resetPassword(data, signal) {
  const url = new URL(`${API_BASE_URL}/auth/reset-password`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

////////////////////////////////////////////////////////////////
// Intake Form api
////////////////////////////////////////////////////////////////

export async function updateIntake(data, signal) {
  const url = new URL(`${API_BASE_URL}/auth/intake`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
    signal,
  };
  return await fetchJson(url, options);
}

export function getImageURL(url) {
  if (isEmpty(url)) return "";
  return new URL(APP_BASE_URL + url);
}
