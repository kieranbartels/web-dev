import WhoToFollowListItem from "./who-to-follow-list-item";
import './index.css';
import {useProfile} from "../../../contexts/profile-context";
import {useEffect, useState} from "react";

const WhoToFollowList = () => {
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
        <>
            {users &&
                <ul className="list-group">
                    <div className="d-flex wd-box-follow wd-follow ps-2">Trending Accounts</div>
                    {
                        users.map(user => {
                            return (
                                <WhoToFollowListItem user={user}/>
                            );
                        })
                    }
                </ul>
            }
        </>
    );
}
export default WhoToFollowList;

