import './index.css';
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats.js";
import {deleteTuit}
    from "../../../actions/tuits-actions";
import {useProfile} from "../../../contexts/profile-context";
import {useEffect, useState} from "react";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const {findUserById} = useProfile()
    const [user, setUser] = useState()

    const getUser = async () => {
        try {
            const user = await findUserById(tuit._user)
            setUser(user)
        } catch (e) {
        }
    }
    useEffect(() => { getUser() }, [])

    return(
        <div>
            {user &&
        <div className="wd-box row">
                <div className="col-1">
                    <img src={user.avatarImage} className="wd-avatar-image"/>
                </div>
                <div className="col-8 col-sm-9 col-xl-10">
                    <span>
                        <a href={`/tuiter/profile/${user._id}`}>
                            <span className="wd-topic mr-2">
                                {user.firstName} {user.lastName}
                            </span>
                        </a>
                        <span className="wd-username">
                            {tuit.verified ?
                                <i className="fa fa-check-circle"></i> : ''
                            }&nbsp;
                            @{user.handle}
                        </span>
                    </span>
                    <div className="wd-tuit">
                        {tuit.tuit}
                    </div>
                    {tuit.attachments ?
                        (tuit.attachments.video ?
                                <iframe width="500" height="295"
                                        src={"https://www.youtube.com/embed/" + tuit.attachments.video}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="wd-video">
                                </iframe>
                                :
                                <img src={tuit.attachments.image} className="wd-picture">
                                </img>
                        )
                        : ''}
                    <span className="d-flex flex-row justify-content-between align-items-end">
                        <TuitStats tuit={tuit}/>
                    </span>
                </div>
                <div className="col-1">
                    <i className="fa fa-xmark fa-2x float-end"
                       onClick={() => deleteTuit(
                           dispatch, tuit)}>

                    </i>
                </div>
            </div>
            }
        </div>
    );
}
export default TuitListItem;