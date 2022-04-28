import '../index.css';
import {useDispatch} from "react-redux";

const UserListItem = ({user}) => {
    const dispatch = useDispatch();
    return(
        <div className="wd-box row">
            <div className="col-2">
                <img src={user.avatarImage} className="wd-avatar-image"/>
            </div>
            <div className="col-8 col-sm-9 col-xl-10 mt-2">
                {user.firstName} {user.lastName}
            </div>
        </div>
    );
}
export default UserListItem;