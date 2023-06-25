import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/v1",
});

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// // Add a response interceptor
// instance.interceptors.response.use(
//   response => {
//     // Do something with response data
//     console.log(response.data);
//     return response;
//   },
//   error => {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default instance;
