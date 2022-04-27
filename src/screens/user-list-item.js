import './index.css';

const UserListItem = (user) => {
    return(
        <div className="wd-box row">
            <div className="col-1">
                <img src={user.avatarImage} className="profile-picture"/>
            </div>
            <div className="col-8 col-sm-9 col-xl-10">
                {user.firstName} {user.lastName}
            </div>
        </div>
    );
}
export default UserListItem;