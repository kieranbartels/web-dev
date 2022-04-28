import * as service from '../services/user-service';

export const FIND_USER_BY_ID = 'FIND_USER_BY_ID';
export const FIND_ALL_USERS = 'FIND_ALL_USERS';
export const DELETE_USER = 'DELETE_USER';

export const findUserById = async (dispatch) => {
    const user = await service.findUserById();
    dispatch({
        type: FIND_USER_BY_ID,
        user
    });
}

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers();
    dispatch({
        type: FIND_ALL_USERS,
        users
    });
}


export const deleteUser = async (dispatch, user) => {
    await service.deleteUser(user);
    dispatch({
        type: DELETE_USER,
        user
    });
}