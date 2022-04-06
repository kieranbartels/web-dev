import {useDispatch} from "react-redux";
import React from "react";
import {updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <>
            <span>
                <i className="fa fa-comment"></i>
                {tuit.comments}
            </span>
            <span>
                <i className="fa fa-retweet"></i>
                {tuit.retuits}
            </span>

            <span onClick={() => updateTuit(dispatch, {
                ...tuit,
                liked: !tuit.liked,
                likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1
            })}>
                {
                    tuit.liked &&
                    <i className="fas fa-thumbs-up me-1"/>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-thumbs-up me-1"/>
                }
                {tuit.likes}
            </span>

            <span onClick={() => updateTuit(dispatch, {
                ...tuit,
                disliked: !tuit.disliked,
                dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1
            })}>
                {
                    tuit.disliked &&
                    <i className="fas fa-thumbs-down me-1"/>
                }
                {
                    !tuit.disliked &&
                    <i className="far fa-thumbs-down me-1"/>
                }
                {tuit.dislikes}
            </span>

            <i className="fas fa-share-square"></i>
        </>
    )
};

export default TuitStats;
