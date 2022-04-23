import React, {useRef} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const api = axios.create({
    withCredentials: true
});

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signin} = useProfile()
    const handleSigninBtn = async () => {
        try {
            await signin(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate('../tuiter/profile')
        } catch (e) {
            alert('oopsy')
        }
    }
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg text-black">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
                                    <p className="text-50 mb-5">Please enter your email and password.</p>

                                    <div className="form-outline mb-4">
                                        <input ref={emailRef} type="email"
                                               className="form-control form-control-lg"/>
                                        <label className="form-label">Email</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input ref={passwordRef} type="password"
                                               className="form-control form-control-lg"/>
                                        <label className="form-label">Password</label>
                                    </div>

                                    <button onClick={handleSigninBtn}
                                            className="btn btn-outline-light btn-lg px-5"> Sign In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signin;