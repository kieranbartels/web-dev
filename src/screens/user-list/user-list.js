import {useEffect, useState} from "react";
import {useProfile}
    from "../../contexts/profile-context";
import UserListItem from "./user-list-item";

const UserList = () => {
    const {findAllUsers} = useProfile()
    const [users, setUsers] = useState()

    const getUsers = async () => {
        try {
            const users = await findAllUsers()
            setUsers(users)
        } catch (e) {
        }
    }
    useEffect(() => { getUsers() }, [])

    return (
        <div>
            { users &&
                <ul className="list-group">
                    {
                        users.map && users.map(user =>
                            <UserListItem key={user._id}
                                          user={user}/>)
                    }
                </ul>
            }
        </div>


    );
}

export default UserList;