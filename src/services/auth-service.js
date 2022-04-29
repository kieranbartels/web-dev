import axios from "axios";
const API_URL = "http://localhost:4000/api/users"
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
    const response = await axios.get(`http://localhost:4000/api/users`);
    const users = response.data;
    return users;
}

export const findUserByHandle = async (handle) => {
    const response = await api.get(`http://localhost:4000/api/users/${handle}`)
    const user = response.data;
    return user;
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`http://localhost:4000/api/logout`)
    return response.data
}