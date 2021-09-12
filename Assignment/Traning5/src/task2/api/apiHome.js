import axios from 'axios';

const URL = 'https://61357f2160d2900017c3bfb6.mockapi.io/templates/users';

export const getAllUsers = async () => {
    const responseAllUsers = await axios.get(`${URL}`)
    .catch(err => console.err(err));
    return responseAllUsers.data;
};


export const getUserById = async (id) => {
    const responseUser = await axios.get(`${URL}/${id}`)
    .catch(err => console.err(err));
    console.log('response ', responseUser)
    return responseUser.data;
};