import "../../../screens/index.css";
import {useProfile} from "../../../contexts/profile-context";
import {useEffect, useState} from "react";

const FollowingListItem = ({id}) => {
    const {findUserById} = useProfile()
    const [user, setUser] = useState()
    const getUser = async () => {
        try {
            const user = await findUserById(id)
            setUser(user)
        } catch (e) {
        }
    }
    useEffect(() => {
        getUser();
    }, [])

    return(
        <>
            {user &&
                <div className="wd-box row">
                    <div className="col-2">
                        <img src={user.avatarImage} className="wd-avatar-image"/>
                    </div>
                    <div className="col-8 col-sm-9 col-xl-10 mt-2">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            }
        </>

    );
}
export default FollowingListItem;