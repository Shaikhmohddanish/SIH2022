import store from "../redux/store";

import axios from "axios";
const instance = axios.create({
  baseURL: "https://krishi-sadhan-app.herokuapp.com",
  // baseURL: 'http://localhost:5000/',
});
export default instance;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // will loop if refreshToken returns 401
      return refreshToken(store).then((_) => {
        error.config.headers["Authorization"] = "Bearer " + store.state.token;
        error.config.baseURL = undefined;
        return Axios.request(error.config);
      });
    }
  }
);
