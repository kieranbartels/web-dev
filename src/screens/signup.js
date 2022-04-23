import React, {useRef} from 'react';
import axios from "axios";
import './index.css';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";

const api = axios.create({withCredentials: true})

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signup} = useProfile()
    const handleSignupBtn = async () => {
        try {
            await signup(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate('../tuiter/profile')
        } catch(e) {
            alert('oops')
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

                                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                                    <p className="text-50 mb-5">Please enter the information below.</p>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" className="form-control"/>
                                                <label className="form-label">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input type="text" className="form-control"/>
                                                <label className="form-label">Last name</label>
                                            </div>
                                        </div>
                                    </div>

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

                                    <button onClick={handleSignupBtn}
                                            className="btn btn-outline-light btn-lg px-5"> Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;