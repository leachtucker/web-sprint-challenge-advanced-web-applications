import axios from 'axios';

export const postLogin = (credentials) => {
    return axios.post('http://localhost:5000/api/login', {...credentials});
};