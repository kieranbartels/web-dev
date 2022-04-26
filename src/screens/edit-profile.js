import {useProfile} from "../contexts/profile-context";
import {useNavigate} from "react-router-dom";
import React, {useRef} from "react";

const EditProfile = () => {
    const navigate = useNavigate()
    const {profile} = useProfile()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const handleRef = useRef()
    const emailRef = useRef()
    const {updateUser} = useProfile()

    const saveUser = async () => {
            await updateUser(
                profile._id,
                firstNameRef.current.value,
                lastNameRef.current.value,
                handleRef.current.value,
                emailRef.current.value,
                profile.password,
                profile.date
            )
            navigate('../profile')

    }

    return (
        <div className="container mb-4 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary"><img src="https://i.imgur.com/wvxPV9S.png" height="100"
                                                               width="100"/></button>
                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input ref={firstNameRef} defaultValue={profile.firstName} type="text" className="form-control"/>
                                <label className="form-label">First name</label>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input ref={lastNameRef} defaultValue={profile.lastName} type="text" className="form-control"/>
                                <label className="form-label">Last name</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <input ref={handleRef} type="text" defaultValue={profile.handle}
                               className="form-control form-control-lg"/>
                        <label className="form-label">@Handle</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input ref={emailRef} type="email" defaultValue={profile.email}
                               className="form-control form-control-lg"/>
                        <label className="form-label">Email</label>
                    </div>

                    <div className=" d-flex mt-2">
                        <button onClick={saveUser} className="btn1 btn-dark">Save</button>
                    </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"></div>
                    <div className=" px-2 rounded mt-4"><span className="join">Joined {profile.date}</span></div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;