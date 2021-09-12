import axios from 'axios';

const URL = 'https://61357f2160d2900017c3bfb6.mockapi.io/templates/todos-mock-api';


export const getAllTodoApi = async () => {
    const todos = await axios.get(`${URL}`);
    return todos.data;
}

export const createTodoApi = async (todo) => {
    const responseTodo = await axios.post(`${URL}`, todo);
    return responseTodo.data;
}

export const getTodoByIdApi = async (id) => {
    const responseTodo = await axios.get(`${URL}/${id}`);
    return responseTodo.data;
}

export const updateTodoByIdApi = async (id, dataUpdate) => {
    const responseTodo = await axios.put(`${URL}/${id}`, dataUpdate);
    return responseTodo.data;
}

export const deleteTodoByIdApi = async (id) => {
    const responseTodo = await axios.delete(`${URL}/${id}`);
    return responseTodo.data;
}

