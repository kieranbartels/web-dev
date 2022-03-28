import TuitListItem
    from "./tuit-list-item";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
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