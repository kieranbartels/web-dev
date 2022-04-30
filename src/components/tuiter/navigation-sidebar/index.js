import React from "react";
import {useProfile} from "../../../contexts/profile-context";
import * as service from "../../../services/auth-service"
import {useNavigate, useLocation} from "react-router-dom";

const NavigationSidebar = (
    {
        active = ''
    }) => {
    const {profile} = useProfile()
    const navigate = useNavigate()
    const {pathname} = useLocation();

    const logout = async () => {
        await service.logout()
        navigate('/login')
    }
    const login = async () => {
        navigate('/login')
    }

    return(
        <>
            <div className="list-group">
                <a className={`list-group-item
                   ${pathname === '/tuiter/tuits' ? 'active' : ''}`} href="/tuiter/tuits">
                    <span className="fab fa-twitter"></span>
                    <span className="d-none d-xl-inline"> Tuiter </span>
                </a>

                <a className={`list-group-item
                    ${pathname === '/tuiter/' ? 'active' : ''}`} href="/tuiter">
                    <span className="fa fa-home"></span>
                    <span className="d-none d-xl-inline"> Home </span>
                </a>

                <a className={`list-group-item
                    ${pathname === '/tuiter/explore' ? 'active' : ''}`} href="/tuiter/explore">
                    <span className="fa fa-hashtag"></span>
                    <span className="d-none d-xl-inline"> Explore</span>
                </a>

                <a className={`list-group-item
                    ${pathname === '/tuiter/search' ? 'active' : ''}`} href="/tuiter/search">
                    <span className="fa fa-cloud"></span>
                    <span className="d-none d-xl-inline"> Weather</span></a>

                <a className={`list-group-item
                    ${pathname === '/tuiter/profile' ? 'active' : ''}`} href="/tuiter/profile">
                    <span className="fa fa-user"></span>
                    <span className="d-none d-xl-inline"> Profile</span></a>

                { profile.role=="ADMIN" &&
                    <a className={`list-group-item
                            ${pathname === '/tuiter/admin' ? 'active' : ''}`} href="/tuiter/admin">
                        <span className="fa fa-list"></span>
                        <span className="d-none d-xl-inline"> Admin</span></a>
                }

                <a className={`list-group-item
                    ${pathname === '/tuiter/more' ? 'active' : ''}`} href="more.html">
                    <span className="fa fa-ellipsis-h"></span>
                    <span className="d-none d-xl-inline"> More</span></a>


                {profile.email &&
                    <div className="d-grid mt-2">
                        <button className="btn btn-primary btn-block rounded-pill"
                                onClick={logout}>
                            Logout
                        </button>
                    </div>
                }
                {!profile.email &&
                    <div className="d-grid mt-2">
                        <button className="btn btn-primary btn-block rounded-pill"
                                onClick={login}>
                            Login
                        </button>
                    </div>
                }

            </div>
        </>
    );
}
export default NavigationSidebar;
