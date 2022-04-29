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
            <div className="card p-5 w-75">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <img className="profile-picture" src={profile.avatarImage} height="100" width="100"/>
                    <span className="name mt-3"> {profile.firstName} {profile.lastName}</span>
                    <span className="idd">@{profile.handle}</span>
                    <span className="idd">{profile.email}</span>
                    <div className=" d-flex mt-3">
                        <button onClick={editUser} className="btn1 btn-dark">Edit Profile</button>
                    </div>
                    <div className="gap-3 mt-2 icons d-flex flex-row justify-content-center align-items-center"></div>
                    <div className=" px-2 rounded mt-2"><span className="join">Joined {profile.date}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;