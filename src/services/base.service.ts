import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
      return Promise.reject({ code: 'UNAUTHORIZED', message: 'Credenciais inválidas' });
    }
    return Promise.reject(error.response ? error.response.data : error);
  }
);

export default axios;
