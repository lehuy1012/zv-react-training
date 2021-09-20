import axios from 'axios';

const URL = 'http://localhost:9000/api';

const token = localStorage.getItem('token');

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
   key: "value"
};


export const getAllUserApi = async () => {
    console.log('get all user in api ');
    const response = await axios.get(`${URL}/users`, bodyParameters, config);
    return response.data;
}


export const getMyInfoApi = async () => {
    const response = await axios.get(`${URL}/users/my`);
    return response.data;
}

