import axios from "axios";

const URL = "https://61357f2160d2900017c3bfb6.mockapi.io/templates/tasks";



export const createTask = async (task) => {
    const response = await axios.post(`${URL}`, task);
    return response.data;
}

export const getAllTask = async () => {
    const response = await axios.get(`${URL}`);
    return response.data;
}


export const updateStatus = async ({id, status}) => {
    const newStatus = { "status" : status}
    const response = await axios.put(`${URL}/${id}`, newStatus);
    return response.data;
}