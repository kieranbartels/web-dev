import './index.css';
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats.js";
import {deleteTuit}
    from "../../../actions/tuits-actions";

const TuitListItem = (
    {
        tuit = {
            _id: "123",
            topic: "Web Development",
            liked: true,
            verified: false,
            handle: "ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            tuit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            attachments: {
                video: "unKvMC3Y1kI"
            },
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            comments: 123,
            retuits: 234,
            likes: 345
        }
    }) => {
    const dispatch = useDispatch();
    return(
        <div className="wd-box row">
            <div className="col-1">
                <img src={tuit['avatar-image']} className="wd-avatar-image"/>
            </div>
            <div className="col-8 col-sm-9 col-xl-10">
                <span>
                    <span className="wd-topic mr-2">
                        {tuit.firstName} {tuit.lastName}
                    </span>
                    <span className="wd-username">
                        {tuit.verified ?
                            <i className="fa fa-check-circle"></i> : ''
                        }&nbsp;
                        @{tuit.handle}
                    </span>
                </span>
                <div className="wd-tuit">
                    {tuit.tuit}
                </div>
                {tuit.attachments ?
                    (tuit.attachments.video ?
                            <iframe width="500" height="295" src={"https://www.youtube.com/embed/" + tuit.attachments.video}
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
    );
}
export default TuitListItem;