import React, {useState} from "react";
import {useDispatch} from "react-redux";
import './index.css';
import {createTuit} from "../../../actions/tuits-actions";
import {useProfile} from "../../../contexts/profile-context";

const WhatsHappening = () => {
    const {profile} = useProfile();

    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit',
            _user: profile._id,
            liked: false,
            disliked: false,
            verified: false,
            likes: 0,
            dislikes: 0,
            comments: 0,
            retuits: 0});

    return (
        <>
            <div className="d-flex flex-row justify-content-around">
                <img src={profile.avatarImage} className="wd-avatar-image"/>
                <textarea
                    className="wd-text-box col-11"
                    placeholder={"What's happening?"}
                    value={whatsHappening}
                    id={"tuit-box"}
                    onChange={(e) => {
                        setWhatsHappening(e.target.value)
                        setNewTuit({...newTuit,
                            tuit: e.target.value})}}>
                </textarea>
            </div><br/>

            <div className="d-flex justify-content-between">
                <span className='wd-icons'>
                    <i className="fas fa-image pe-2"></i>
                    <i className="fas fa-chart-line pe-2"></i>
                    <i className="fas fa-smile pe-2"></i>
                    <i className="fas fa-calendar"></i>
                </span>

                <button className="btn btn-block btn-primary rounded-pill"
                        onClick={() => createTuit(dispatch, newTuit)}>
                    Tuit
                </button>
            </div><br/>
        </>
    );
}
export default WhatsHappening;