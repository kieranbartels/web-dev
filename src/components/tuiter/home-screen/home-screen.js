import TuitList
    from "../tuit-list";
import WhatsHappening
    from "./whats-happening";
import {useProfile} from "../../../contexts/profile-context";

const HomeScreen = () => {
    const {profile} = useProfile();

    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;