import React from "react";
import './index.css';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '/images/virgingalactic.svg',
            userName: 'Virgin Galactic',
            handle: 'virgingalactic',
        }
    }) => {
    return(
        <div className="wd-box-follow row me-1">
            <div className="col-2">
                <img src={who.avatarIcon} className="wd-profile-picture"/>
            </div>
            <div className="col-6 col-xl-7">
                <span> {who.userName} <i className="fa fa-check-circle"></i></span><br/>
                @{who.handle}
            </div>
            <div className="col-2 align-self-center">
                <button className="btn btn-primary override-bs">
                    Follow
                </button>
            </div>
        </div>
    );
}

export default WhoToFollowListItem;