import * as service from '../services/auth-service';

export const FIND_ALL_USERS = 'FIND_ALL_USERS';

export const findAllUsers = async (dispatch) => {
    const users = await service.findAllUsers();
    dispatch({
        type: FIND_ALL_USERS,
        users
    });
}




