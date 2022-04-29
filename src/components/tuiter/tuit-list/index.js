import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {findAllTuits, findAllUserTuits}
    from "../../../actions/tuits-actions";
import TuitListItem
    from "./tuit-list-item";
import {useProfile} from "../../../contexts/profile-context";
import {useLocation} from "react-router-dom";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    const {profile} = useProfile();
    const {pathname} = useLocation();
    useEffect(() => {
            if (pathname === '/tuiter/' || pathname === '/tuiter/home') {
                findAllUserTuits(dispatch, profile._id)
            } else if(pathname === '/tuiter/tuits') {
                findAllTuits(dispatch)
            }
        },
        []);

    return (
        <ul className="list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>

    );
}

export default TuitList;