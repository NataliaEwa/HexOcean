import Axios from "axios/index";

const api = Axios.create({
  baseURL: "https://frosty-wood-6558.getsandbox.com:443",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default api;
