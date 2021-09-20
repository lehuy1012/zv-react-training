import axios from 'axios';

const URL = 'http://localhost:9000';

export const loginRequest = async (user) => {
    const response = await axios.post(`${URL}/login`, user)
    return response.data;
}

export const getUserById = async (id) => {
    const responseUser = await axios.get(`${URL}/${id}`)
    return responseUser.data;
};

