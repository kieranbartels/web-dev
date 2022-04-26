import {useProfile} from "../contexts/profile-context";
import {useNavigate} from "react-router-dom";
import React from "react";

const Profile = () => {
    const navigate = useNavigate()
    const {profile} = useProfile()
    const editUser = async () => {
        navigate('../edit-profile')
    }

    return (
        <div className="container mb-4 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary"><img src="https://i.imgur.com/wvxPV9S.png" height="100"
                                                               width="100"/></button>
                    <span className="name mt-3"> {profile.firstName} {profile.lastName}</span>
                    <span className="name">@{profile.handle}</span>
                    <span className="idd">{profile.email}</span>
                    <div className=" d-flex mt-2">
                        <button onClick={editUser} className="btn1 btn-dark">Edit Profile</button>
                    </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"></div>
                    <div className=" px-2 rounded mt-4"><span className="join">Joined {profile.date}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;