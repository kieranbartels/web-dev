import WhoToFollowListItem from "./who-to-follow-list-item";
import './index.css';
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <>
            <ul className="list-group">
                <div className="d-flex wd-box-follow wd-follow ps-2">Trending Accounts</div>
                {
                    who.map(who => {
                        return(
                            <WhoToFollowListItem who={who}/>
                        );
                    })
                }
            </ul>
        </>
    );
}
export default WhoToFollowList;

