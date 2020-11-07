import axios from 'axios';

const base_URL = "http://localhost:5000";

export const axiosAuth = () => {
    const token = localStorage.getItem('token');

    if (!token || token === "") {
        console.log("Using axiosWithAuth without a token in local storage. Please login first");
        return null;
    }

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL = base_URL
    });
};