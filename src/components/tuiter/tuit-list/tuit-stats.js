import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <>
            <span>
                <i className="fa fa-comment"></i>
                {tuit.stats.comments}
            </span>
            <span>
                <i className="fa fa-retweet"></i>
                {tuit.stats.retuits}
            </span>

            <span onClick={likeTuit}>
                        {
                            tuit.liked &&
                            <i className="fas fa-heart me-1"
                               style={{color: 'red'}}>
                            </i>
                        }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
            </span>
            <i className="fas fa-share-square"></i>
        </>
    )
};

export default TuitStats;
