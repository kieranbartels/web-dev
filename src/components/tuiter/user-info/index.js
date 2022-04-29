import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useProfile} from "../../../contexts/profile-context";
import FollowingListItem from "./following-list-item";

const UserInfo = () => {
    let params = useParams()
    const {findUserById} = useProfile()
    const [user, setUser] = useState()
    const getUser = async () => {
        try {
            const user = await findUserById(params.id)
            setUser(user)
        } catch (e) {
        }
    }
    useEffect(() => {
        getUser();
        }, [])

    return (
        <>
            {user &&
                <div className="container mb-4 d-flex justify-content-center">
                    <div className="card p-5 w-75">
                        <div className=" image d-flex flex-column justify-content-center align-items-center">
                            <img className="profile-picture" src={user.avatarImage} height="100" width="100"/>
                            <span className="name mt-3"> {user.firstName} {user.lastName}</span>
                            <span className="idd">@{user.handle}</span>
                            <div className="gap-3 mt-2 icons d-flex flex-row justify-content-center align-items-center"></div>
                            <div className=" px-2 rounded mt-2"><span className="join">Joined {user.date}</span></div>
                        </div><br/><br/>
                        {user.following &&
                            <div>
                                <div className="name">Following</div>
                                <ul className="list-group">
                                    {user.following.map(user =>
                                        <FollowingListItem key={user._id}
                                                           id={user}/>)}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default UserInfo;