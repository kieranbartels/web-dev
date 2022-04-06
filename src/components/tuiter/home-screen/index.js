import TuitList
    from "../tuit-list";
import WhatsHappening
    from "./whats-happening";
import WhoToFollowList from "../who-to-follow-list";

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;