import axios from 'axios';
const USERS_API = `http://localhost:4000/api/users`;

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    const users = response.data;
    return users;
}

export const findUserById = async userId => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    const user = response.data;
    return user;
}

export const deleteUser = async (user) => {
    const response = await axios.delete(`${USERS_API}/${user._id}`);
    return response.data;
}
