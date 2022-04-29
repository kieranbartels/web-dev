import './index.css';

const WhoToFollowListItem = ({user}) => {
    return(
        <li className="wd-box-follow list-group-item d-flex flex-row justify-content-between">
            <div className="d-flex">
                <img src={user.avatarImage} className="wd-profile-picture me-2"/>
                <div>
                    <a href={`/tuiter/profile/${user._id}`}>
                            <span className="wd-topic mr-2">
                                {user.firstName} {user.lastName} <i className="fa fa-check-circle"></i>
                            </span><br/>
                    </a>
                    @{user.handle}
                </div>
            </div>

            <div className="align-self-center">
                <button className="btn btn-primary override-bs">
                    Follow
                </button>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;