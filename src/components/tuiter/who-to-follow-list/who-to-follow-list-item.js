import './index.css';

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '/images/virgingalactic.svg',
            handle: 'virgingalactic',
        }
    }) => {
    return(
        <li className="wd-box-follow list-group-item d-flex flex-row justify-content-between">
            <div className="d-flex">
                <img src={who.avatarIcon} className="wd-profile-picture me-2"/>
                <div>
                    <span> {who.userName} <i className="fa fa-check-circle"></i></span><br/>
                    @{who.handle}
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