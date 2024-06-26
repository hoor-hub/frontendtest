import { BASE_URL } from "./baseUrl";
import axios from 'axios';

async function Post(path, data, token) {
  let url = BASE_URL + path;
  var config = {
    method: "post",
    url: url,
    headers: token
      ? {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        }
      : {
          "Content-Type": "application/json",
        },
    data: data,
  };

  let response = await axios(config);

  return response.data;
}

async function Get(path, token) {
  let url = BASE_URL + path;
  var config = {
    method: "get",
    url: url,
    headers: token
      ? {
          "Content-Type": "application/json",
          Authorization: `${token}`,
          " X-GitHub-Api-Version": "2022-11-28",
        }
      : {
          Accept: "application/json",
        },
  };
  let response = await axios(config);
  return response.data;
}

async function Put(path, data, token) {
  let url = BASE_URL + path;
  let response = await axios.put(url, data, {
    headers: token
      ? {
          Accept: "multipart/form-data",
          Authorization: `${token}`,
        }
      : {
          Accept: "application/json",
        },
  });

  return response.data;
}

async function Delete(path, data, token) {
  let url = BASE_URL + path;

  let response = await axios.delete(url, {
    headers: token
      ? {
          Accept: "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      : {
          Accept: "application/json",
        },
  });

  return response.data;
}

async function Patch(path, data, token) {
  let url = BASE_URL + path;
  let response = await axios.patch(url, data, {
    headers: token
      ? {
          Accept: "multipart/form-data",
          Authorization: `${token}`,
        }
      : {
          Accept: "application/json",
        },
  });

  return response.data;
}
export { Post, Get, Put, Delete, Patch };
