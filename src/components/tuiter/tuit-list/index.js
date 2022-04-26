import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {findAllUserTuits}
    from "../../../actions/tuits-actions";
import {findAllTuits}
    from "../../../actions/tuits-actions";
import TuitListItem
    from "./tuit-list-item";
import {useProfile} from "../../../contexts/profile-context";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    const {profile} = useProfile()
    const {checkLoogedIn} = useProfile();
    useEffect(() =>
            findAllTuits(dispatch),
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