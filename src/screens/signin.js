import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useProfile} from "../contexts/profile-context";
import WhoToFollowList from "../components/tuiter/who-to-follow-list";
import {combineReducers, createStore} from "redux";
import tuitsReducer from "../components/tuiter/reducers/tuits-reducer";
import whoReducer from "../components/tuiter/reducers/who-reducer";
import {Provider} from "react-redux";

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const {signin} = useProfile()
    const reducer = combineReducers({
        tuits: tuitsReducer, who: whoReducer
    });
    const store = createStore(reducer);

    const handleSigninBtn = async () => {
        try {
            await signin(
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate('../tuiter/profile')
        } catch (e) {
            alert('Incorrect email or password.')
        }
    }
    return (
        <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-10 col-lg-7 col-xl-6">
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
                                    <a href="/signup">
                                        <div className="mt-4 text-50 text-black"> Dont have an account? Signup here. </div>
                                    </a>
                                </div>
                            </div>
                        </div>
            </div>

            <Provider store={store}>
                <div className="mw-6 d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                    <div className="d-grid mt-2">
                        <a href="/tuiter/explore"
                           className="btn btn-primary btn-block rounded-pill">
                            Explore</a>
                    </div>
                </div>
            </Provider>
        </div>
    );
};

export default Signin;