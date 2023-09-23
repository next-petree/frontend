import axios from 'axios';

const Client = {
    path: {
        api: process.env.REACT_APP_API_PATH,
    },
    credentialsInstance: axios.create({ withCredentials: true }),
    publicInstance: axios.create(),
};

export default Client;
