import axios from "axios";
const API_URL = "http://localhost:4000/api"
const api = axios.create({withCredentials: true})

export const signup = async (email, password) => {
    const response = await api.post(`${API_URL}/signup`, {email, password})
    return response.data
}

export const signin = async (email, password) => {
    const response = await api.post(`${API_URL}/signin`,
        {email, password})
    return response.data
}

export const updateUser = async (id, firstName, lastName, handle, email, password, date, avatarImage, role) => {
    const response = await api.put(`${API_URL}/updateUser/${id}`,
        {id, firstName, lastName, handle, email, password, date, avatarImage, role})
    response.data._id = id;
    return response.data
}

export const findAllUsers = async () => {
    const response = await api.get(`http://localhost:4000/api/users`);
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`)
    return response.data
}