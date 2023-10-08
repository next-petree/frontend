import axios from "axios";

const Client = {
  path: {
    auth: process.env.REACT_APP_API_URL,
    api: process.env.REACT_APP_API_PATH,
  },
  credentialsInstance: axios.create({ withCredentials: true }),
  publicInstance: axios.create(),
};

export default Client;
